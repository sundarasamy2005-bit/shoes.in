import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecommendationEngine = ({ currentSize }) => {
  const [picks, setPicks] = useState([]);

  useEffect(() => {
    if (currentSize) {
      // Trigger Python AI on Port 5001
      axios.post('http://localhost:5001/api/recommend', { size: currentSize })
        .then(res => setPicks(res.data.picks))
        .catch(err => console.error(err));
    }
  }, [currentSize]);

  if (!currentSize) return null;

  return (
    <div className="ai-picks-container animate-fade-in">
      <h3>AI Smart Picks for Size {currentSize}</h3>
      <div className="picks-list">
        {picks.map(p => <span key={p} className="badge">{p}</span>)}
      </div>
    </div>
  );
};

export default RecommendationEngine;