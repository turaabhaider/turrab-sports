import React, { useState, useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import Navbar from '../components/Navbar';

const client = AgoraRTC.createClient({ mode: 'live', codec: 'vp8' });
const APP_ID = 'f7eba401610743d8bd1a8c1b13ad66ba'; 

const LiveStream = () => {
  const [showArena, setShowArena] = useState(false);
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [localTracks, setLocalTracks] = useState({ video: null, audio: null });
  const [status, setStatus] = useState("Awaiting Signal...");

  // 1. WATCHER LOGIC
  const startWatching = async () => {
    setShowArena(true); 
    try {
      const res = await fetch('http://localhost:5000/api/get-token?channel=turrab-main');
      const { token } = await res.json();

      await client.setClientRole('audience');
      await client.join(APP_ID, 'turrab-main', token, null);

      client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === 'video') {
          user.videoTrack.play('video-canvas');
          setStatus("Match is LIVE!");
        }
        if (mediaType === 'audio') user.audioTrack.play();
      });
    } catch (err) {
      console.error("Join failed:", err);
    }
  };

  // 2. BROADCASTER LOGIC
  const handleGoLive = async () => {
    try {
      const devices = await AgoraRTC.getDevices();
      const hasCam = devices.some(d => d.kind === 'videoinput');
      
      if (!hasCam) {
        alert("🚨 No Camera Found! Use a Phone/Laptop to broadcast.");
        return;
      }

      await client.setClientRole('host');
      const [audioTrack, videoTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
      
      setLocalTracks({ video: videoTrack, audio: audioTrack });
      videoTrack.play('video-canvas');
      
      await client.publish([audioTrack, videoTrack]);
      setIsBroadcasting(true);
      setStatus("You are Broadcasting Live!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  // 3. AWS RECORDING LOGIC (Triggers Backend Recording)
  const toggleRecording = async () => {
    if (!isBroadcasting) {
      alert("You must be LIVE to start recording!");
      return;
    }

    try {
      const action = isRecording ? 'stop' : 'start';
      const response = await fetch(`http://localhost:5000/api/recording/${action}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ channel: 'turrab-main' })
      });

      if (response.ok) {
        setIsRecording(!isRecording);
        alert(isRecording ? "Recording saved to AWS S3!" : "Recording started!");
      }
    } catch (err) {
      console.error("Recording error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <Navbar />
      <main className="p-8 lg:p-12 max-w-7xl mx-auto">
        {!showArena ? (
          <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-50" alt="Banner" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent text-white">
              <h2 className="text-6xl font-black italic uppercase mb-6 tracking-tighter">UCSB <span className="text-blue-400">vs</span> USC</h2>
              <button onClick={startWatching} className="bg-[#0056b3] text-white px-10 py-4 rounded-full font-black uppercase self-start flex items-center gap-3 hover:bg-blue-700 transition-all shadow-xl">
                <span className="text-lg">▶</span> WATCH STREAM
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-5xl font-black italic uppercase tracking-tighter text-gray-900">Live <span className="text-[#0056b3]">Arena</span></h2>
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-2">{status}</p>
              </div>
              <div className="flex gap-4">
                {/* RECORDING BUTTON */}
                {isBroadcasting && (
                   <button 
                    onClick={toggleRecording} 
                    className={`px-8 py-4 rounded-2xl uppercase text-[10px] font-black tracking-widest transition-all shadow-lg ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-white text-gray-900 border-2 border-gray-200'}`}
                  >
                    {isRecording ? "● RECORDING" : "💾 RECORD MATCH"}
                  </button>
                )}
                
                <button 
                  onClick={handleGoLive} 
                  className={`px-8 py-4 rounded-2xl uppercase text-[10px] font-black tracking-widest transition-all shadow-lg ${isBroadcasting ? 'bg-gray-900 text-white' : 'bg-[#0056b3] text-white hover:bg-blue-700'}`}
                >
                  {isBroadcasting ? "STOP STREAM" : "START BROADCAST"}
                </button>
              </div>
            </div>

            <div id="video-canvas" className="w-full aspect-video bg-gray-950 rounded-[4rem] border-[15px] border-white shadow-2xl overflow-hidden relative shadow-blue-900/10">
              {!isBroadcasting && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-600 font-black uppercase text-xs tracking-[0.5em] animate-pulse">Awaiting Signal</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LiveStream;