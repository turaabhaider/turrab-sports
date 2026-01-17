import React, { useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import Navbar from '../components/Navbar';

const client = AgoraRTC.createClient({ mode: 'live', codec: 'vp8' });
const APP_ID = 'f7eba401610743d8bd1a8c1b13ad66ba'; 

const LiveStream = () => {
  const [showArena, setShowArena] = useState(false);
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [localTracks, setLocalTracks] = useState({ video: null, audio: null });
  const [muted, setMuted] = useState({ video: false, audio: false });

  const startWatching = async () => {
    setShowArena(true); 
    try {
      const res = await fetch('http://localhost:5000/api/get-token?channel=turrab-main');
      const { token } = await res.json();
      await client.setClientRole('audience');
      await client.join(APP_ID, 'turrab-main', token, null);
      client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === 'video') user.videoTrack.play('video-canvas');
        if (mediaType === 'audio') user.audioTrack.play();
      });
    } catch (err) { console.error("Join failed", err); }
  };

  const handleGoLive = async () => {
    try {
      const devices = await AgoraRTC.getDevices();
      if (!devices.some(d => d.kind === 'videoinput')) {
        alert("🚨 No Camera Found! Please use a device with a camera to Go Live.");
        return;
      }
      await client.setClientRole('host');
      const [audio, video] = await AgoraRTC.createMicrophoneAndCameraTracks();
      setLocalTracks({ video, audio });
      video.play('video-canvas');
      await client.publish([audio, video]);
      setIsBroadcasting(true);
    } catch (err) { alert("Stream Error: " + err.message); }
  };

  const toggleMedia = async (type) => {
    if (type === 'video') {
      await localTracks.video.setMuted(!muted.video);
      setMuted(prev => ({ ...prev, video: !prev.video }));
    } else {
      await localTracks.audio.setMuted(!muted.audio);
      setMuted(prev => ({ ...prev, audio: !prev.audio }));
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <Navbar />
      <main className="p-6 lg:p-10 max-w-7xl mx-auto">
        {!showArena ? (
          <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group">
            <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" alt="Banner" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
              <h2 className="text-7xl font-black italic uppercase mb-6 tracking-tighter leading-none">UCSB <span className="text-blue-500">vs</span> USC</h2>
              <button onClick={startWatching} className="bg-[#0056b3] text-white px-12 py-5 rounded-full font-black uppercase self-start hover:bg-blue-700 transition-all shadow-xl hover:scale-105">▶ WATCH LIVE STREAM</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-5xl font-black italic uppercase tracking-tighter text-gray-900">Live <span className="text-[#0056b3]">Arena</span></h2>
                <div className="flex items-center gap-4 mt-3">
                   <span className="flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">● Live Now</span>
                   <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">124 Viewers</span>
                </div>
              </div>
              <div className="flex gap-4">
                {isBroadcasting && (
                  <button onClick={() => alert("AWS Recording Setup in Progress...")} className={`px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-white border-2 border-gray-200'}`}>💾 Record Match</button>
                )}
                <button onClick={handleGoLive} className={`px-10 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all shadow-lg ${isBroadcasting ? 'bg-gray-900 text-white' : 'bg-[#0056b3] text-white hover:bg-blue-600'}`}>{isBroadcasting ? "Stop Stream" : "Start Broadcast"}</button>
              </div>
            </div>

            <div id="video-canvas" className="w-full aspect-video bg-gray-950 rounded-[4rem] border-[12px] border-white shadow-2xl relative overflow-hidden">
              {isBroadcasting && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 z-20 bg-black/40 backdrop-blur-xl p-4 rounded-3xl border border-white/20">
                  <button onClick={() => toggleMedia('audio')} className={`p-4 rounded-2xl text-xl ${muted.audio ? 'bg-red-500' : 'bg-white/10 hover:bg-white/20'} transition-all`}>{muted.audio ? '🔇' : '🎤'}</button>
                  <button onClick={() => toggleMedia('video')} className={`p-4 rounded-2xl text-xl ${muted.video ? 'bg-red-500' : 'bg-white/10 hover:bg-white/20'} transition-all`}>{muted.video ? '🚫' : '📷'}</button>
                </div>
              )}
              {!isBroadcasting && <div className="absolute inset-0 flex items-center justify-center text-center"><div><div className="text-4xl mb-4 animate-bounce">🏟️</div><p className="text-gray-600 font-black uppercase text-xs tracking-[0.5em]">Awaiting Signal</p></div></div>}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LiveStream;