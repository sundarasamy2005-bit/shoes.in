// src/components/common/Sidebar.jsx
import React from 'react';

const Sidebar = ({ filters, setFilters }) => {
  // Use optional chaining to safely access priceMax
  const currentPrice = filters?.priceMax || 5000;

  return (
    <div className="sidebar">
      <h3>Price (Max: ₹{currentPrice})</h3>
      <input 
        type="range" 
        min="340" 
        max="5000" 
        value={currentPrice}
        onChange={(e) => setFilters({ ...filters, priceMax: parseInt(e.target.value) })}
      />
      {/* Brands logic... */}
    </div>
  );
};

export default Sidebar; // ADD THIS LINE to fix the terminal error