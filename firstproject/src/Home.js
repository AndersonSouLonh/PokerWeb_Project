import { useState } from 'react';
import {useNavigate } from 'react-router-dom';

const Home = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    // Create game logic
    const handleCreateGame = () => {
        navigate('/GameSetting');
    }

    // Create game logic
    const handleJoinGame = () => {
        navigate('/JoinGame');
    }

    const handleHowToPlay = () => {
        navigate('/HowToPlay');
    }

    const handleOffline = () => {
        navigate('/Offline');
    }

    return (
        <div className = "home-container">
            <h1> Poker Game </h1>
            <input 
                type="text"
                placeholder="Enter your username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="username-input"
            />
            <div className = "button-grid">
                <button onClick={handleCreateGame}> CREATE GAME! </button>
                <button onClick={handleJoinGame}> JOIN GAME! </button>
                <button onClick={handleHowToPlay}> HOW TO PLAY </button>
                <button onClick={handleOffline}> OFFLINE </button>
            </div>
        </div>
    )
}

export default Home;