import React, { useState } from 'react';
import './ZestChat.css'; // Optional: for styling

export default function ZestChat() {
  const [chatLog, setChatLog] = useState([]);
  const [balloons] = useState(['Alice', 'Bob', 'Charlie', 'Diana']);

  const handleCrash = (user1, user2) => {
    const message = `${user1} and ${user2} crashed! 🎉 AI translation enabled.`;
    const emojis = ['😊', '🔥', '🎈', '💬', '❤️'];
    const miniGame = ['Trivia', 'Emoji Match', 'Quick Draw'][Math.floor(Math.random() * 3)];

    setChatLog([
      ...chatLog,
      {
        message,
        emojis: emojis.sort(() => 0.5 - Math.random()).slice(0, 3),
        miniGame,
      },
    ]);
  };

  return (
    <section className="zest-chat">
      <h2>🎈 ZestChat Balloons</h2>
      <div className="balloon-container">
        {balloons.map((user, index) => (
          <div
            key={index}
            className="balloon"
            onClick={() => handleCrash(user, balloons[(index + 1) % balloons.length])}
          >
            {user}
          </div>
        ))}
      </div>

      <div className="chat-log">
        {chatLog.map((entry, i) => (
          <div key={i} className="chat-entry">
            <p>{entry.message}</p>
            <p>Mini-game: <strong>{entry.miniGame}</strong></p>
            <p>Emojis: {entry.emojis.join(' ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
