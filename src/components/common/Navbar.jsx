import React from 'react';

const Navbar = ({ onMenuClick, onSignInClick, user, onSizeSelect, activeSize, onLogout, showPriceBar, filters, setFilters }) => {
  const sizes = [5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <nav className="navbar">
      <div className="nav-top" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
        <div className="nav-left" style={{ paddingLeft: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Menu button to toggle price filter */}
          <button className="menu-btn" onClick={onMenuClick} style={{ cursor: 'pointer', fontSize: '22px', padding: '8px 14px', borderRadius: '8px', background: 'none', border: '1px solid #333333' }}>
            ☰
          </button>
          
          {/* Sign In button */}
          {!user && (
            <button className="signin-btn" onClick={onSignInClick} style={{ cursor: 'pointer', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold' }}>
              Sign In
            </button>
          )}
          {user && (
            <button className="logout-btn" onClick={onLogout} style={{ cursor: 'pointer', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold' }}>
              🚪 Logout
            </button>
          )}
        </div>

        <div className="logo" style={{ textAlign: 'center', fontWeight: 'bold' }}>shoes.in</div>
        
        <div className="nav-right" style={{ textAlign: 'right' }}>
          <button className="home-btn" onClick={() => window.location.reload()}>Back to Home</button>
        </div>
      </div>

      {showPriceBar && (
        <div className="price-bar">
          <input
            type="number"
            placeholder="Min ₹"
            value={filters.minPrice}
            onChange={(e) =>
              setFilters({ ...filters, minPrice: Number(e.target.value) })
            }
          />
          <span style={{ color: '#999' }}>to</span>
          <input
            type="number"
            placeholder="Max ₹"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: Number(e.target.value) })
            }
          />
        </div>
      )}

      <div className="nav-size-row">
        <span>Select Size: </span>
        {sizes.map(size => (
          <button 
            key={size} 
            className={`size-btn ${activeSize === size ? 'glow' : ''}`}
            onClick={() => onSizeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;