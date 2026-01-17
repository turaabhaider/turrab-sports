-- 1. Wipe the old one if it exists to start fresh
DROP DATABASE IF EXISTS turrab_sports;

-- 2. Create the new database
CREATE DATABASE turrab_sports;
USE turrab_sports;

-- 3. Create the users table with the exact fields from your Signup form
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    clubName VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    empty_space VARCHAR(255) DEFAULT '', -- Placeholder per your requirement
    Accommodation VARCHAR(255) DEFAULT 'Standard' -- 8th column per your requirement
);

-- 4. Check if it's created correctly
DESCRIBE users;