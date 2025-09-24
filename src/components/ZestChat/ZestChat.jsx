import React, { useState } from 'react';
import './ZestChat.css';

const users = [
  { id: 1, name: 'Luka', language: 'en' },
  { id: 2, name: 'Mia', language: 'es' },
  { id: 3, name: 'Noa', language: 'fr' },
  { id: 4, name: 'Ivan', language: 'de' }
];

const emojis = ['😊', '🔥', '🎉', '💬', '❤️'];
const miniGames = ['Trivia', 'Emoji Match', 'Quick Draw'];

const ZestChat = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [crashResult, setCrashResult] = useState(null);

  const handleBalloonClick = (user) => {
    if (selectedUsers.length === 1) {
      const user1 = selectedUsers[0];
      const user2 = user;
      const message = `${user1.name} and ${user2.name} connected! AI translation enabled.`;
      const game = miniGames[Math.floor(Math.random() * miniGames.length)];
      const emojiSet = emojis.sort(() => 0.5 - Math.random()).slice(0, 3);

      setCrashResult({ message, game, emojiSet });
      setSelectedUsers([]);
    } else {
      setSelectedUsers([user]);
      setCrashResult(null);
    }
  };

  return (
    <div className="zest-chat-container">
      <h2>ZestChat Balloons</h2>
      <div className="balloon-area">
        {users.map((user) => (
          <div
            key={user.id}
            className="chat-balloon"
            onClick={() => handleBalloonClick(user)}
          >
            {user.name}
          </div>
        ))}
      </div>

      {crashResult && (
        <div className="chat-box">
          <h3>{crashResult.message}</h3>
          <p>Mini-game: <strong>{crashResult.game}</strong></p>
          <p>Emojis: {crashResult.emojiSet.join(' ')}</p>
        </div>
      )}
    </div>
  );
};

export default ZestChat;
