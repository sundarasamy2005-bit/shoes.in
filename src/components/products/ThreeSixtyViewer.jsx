import React, { useState } from 'react';

const ThreeSixtyView = ({ shoeData, onReturn }) => {
  const [frame, setFrame] = useState(1);

  if (!shoeData) return null;

  return (
    <div className="three-sixty-page" style={{ textAlign: 'center', padding: '20px' }}>
      <h2>360° View: {shoeData.brand} {shoeData.name}</h2>
      <div className="viewer-container">
        {/* Ensure images are named [brand]_[frame].jpg in public/images/360/ */}
        <img 
          src={`/images/360/${shoeData.brand.toLowerCase()}_${frame}.jpg`} 
          alt="360 rotation" 
          style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }} 
        />
      </div>
      <input 
        type="range" min="1" max="36" value={frame} 
        onChange={(e) => setFrame(e.target.value)}
        style={{ width: '80%', marginTop: '20px' }}
      />
      <br />
      <button onClick={onReturn} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#febd69', border: 'none', fontWeight: 'bold' }}>
        Return to Home
      </button>
    </div>
  );
};

export default ThreeSixtyView;