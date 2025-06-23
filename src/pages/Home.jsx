import React, { useState } from 'react';
import { getFeedback } from '../api/feedbackApi';
import '../index.css';

const Home = () => {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async () => {
    if (!input.trim()) return;
    const res = await getFeedback(input);
    setFeedback(res.data.feedback);
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: '20px' }}>AI Feedback Generator</h2>
      <textarea
        rows={5}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your response here..."
      />
      <button onClick={handleSubmit}>Get Feedback</button>

      {feedback && (
        <div className="feedback-box">
          <strong>AI Feedback:</strong>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default Home;

