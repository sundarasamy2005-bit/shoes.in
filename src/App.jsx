import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Login from './components/auth/Login';
import ProductList from './components/products/ProductList';
import BrandSlider from './components/products/BrandSlider';
import shoesData from './data/shoesData';
import ProductPage from './components/products/ProductPage';
import Footer from './components/common/Footer'; // --- IMPORT FOOTER HERE ---
import './App.css';

// --- VISITED OVERLAY ---
const VisitedOverlay = ({ visitedItems, onClose }) => {
  const navigate = useNavigate();
  const handleCardClick = (id) => { onClose(); navigate(`/product/${id}`, { state: { fromVisited: true } }); };
  return (
    <div className="visited-overlay" style={{paddingTop: '20px'}}>
      <div className="visited-container" style={{ position: 'relative' }}>
        <button onClick={onClose} className="btn-close-animated">✕</button>
        <div className="visited-header" style={{textAlign:'center',color:'#333',marginBottom:'30px',marginTop:'10px'}}><h2 style={{color:'white'}}>❤️ Your Visited Collection</h2></div>
        {visitedItems.length === 0 ? <div style={{textAlign:'center',color:'#888',marginTop:'50px'}}><h3>No history yet!</h3></div> : (
          <div className="visited-grid">{visitedItems.map(item => (<div key={item.id} className="product-card" style={{background:'#1a1a2e',borderColor:'#ff0055',borderWidth:'2px',cursor:'pointer',position:'relative'}} onClick={() => handleCardClick(item.id)}><div className="image-container"><img src={item.image || (item.images && item.images[0])} alt={item.name} className="product-image" /></div><div className="product-info"><h4 style={{color:'white'}}>{item.brand}</h4><p style={{color:'#ccc'}}>{item.name}</p><p className="price">₹{item.price}</p></div></div>))}</div>
        )}
      </div>
    </div>
  );
};

// --- HOME COMPONENT ---
function Home({ auth, onLoginClick, onLogout, showVisited, setShowVisited, visitedItems, toggleVisited }) {
  const [filters, setFilters] = useState({ minPrice: 0, maxPrice: 10000, size: null, selectedBrand: null });
  const [showUserMenu, setShowUserMenu] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    if (location.state?.returnToVisited) {
      setShowVisited(true);
      window.history.replaceState({}, document.title);
    }
  }, [location, setShowVisited]);

  const getFirstName = () => {
    if (!auth) return '';
    const fullName = auth.name || auth.email.split('@')[0];
    return fullName.split(' ')[0].toUpperCase(); 
  };

  const displayName = getFirstName(); 
  const displayInitial = displayName.charAt(0); 

  return (
    <div className="App" style={{ width: '100%', minHeight: '100vh', display: 'block' }}>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-brand">shoes.in</div>
          <div className="size-selector"><span>Size: </span>{[6, 7, 8, 9, 10, 11, 12, 13].map((size) => (<button key={size} className={`size-btn ${filters.size === size ? 'active' : ''}`} onClick={() => setFilters({...filters, size: filters.size === size ? null : size})}>{size}</button>))}</div>
        </div>
        <div className="nav-actions">
          <button className={`visited-btn ${showVisited ? 'active' : ''}`} onClick={() => setShowVisited(!showVisited)}>Visited ❤️ ({visitedItems.length})</button>
          
          <div className="user-menu-container">
            <button className="user-emoji-btn" onClick={() => setShowUserMenu(!showUserMenu)}>
              {auth ? <div className="avatar-circle ai-profile-glow">{displayInitial}</div> : '👤'}
            </button>
            
            {showUserMenu && (
              <div className="user-dropdown slide-down">
                <div className="dropdown-section">
                  {auth ? (
                    <div className="user-profile-view">
                      <div className="avatar-circle ai-profile-glow">{displayInitial}</div>
                      <p>Hi, <strong>{displayName}</strong></p>
                      <button className="logout-btn-small" onClick={() => { onLogout(); setShowUserMenu(false); }}>Logout</button>
                    </div>
                  ) : (
                    <button className="login-btn-full" onClick={() => { onLoginClick(); setShowUserMenu(false); }}>Login / Sign Up</button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      {showVisited ? (<VisitedOverlay visitedItems={visitedItems} onClose={() => setShowVisited(false)} />) : (
        <>
          <BrandSlider setSelectedBrand={(b) => setFilters({...filters, selectedBrand: b})} />
          <div className="main-layout" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', paddingBottom: '50px', display: 'block' }}>
            <ProductList products={shoesData} filters={filters} onToggleVisited={toggleVisited} visitedItems={visitedItems} />
          </div>
        </>
      )}
    </div>
  );
}

// --- MAIN APP COMPONENT ---
function App() {
  const [cartItem, setCartItem] = useState(null);
  const [auth, setAuth] = useState(null); 
  const [showLogin, setShowLogin] = useState(false);
  const [pendingCartItem, setPendingCartItem] = useState(null);

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({ name: '', mobile: '', address: '', city: '', state: '', pincode: '' });

  const [visitedItems, setVisitedItems] = useState(() => {
    const stored = localStorage.getItem('shoeAppVisited');
    if (!stored) return [];
    return JSON.parse(stored).filter(item => (Date.now() - item.visitedAt) < (7 * 24 * 60 * 60 * 1000));
  });
  const [showVisited, setShowVisited] = useState(false); 

  useEffect(() => { localStorage.setItem('shoeAppVisited', JSON.stringify(visitedItems)); }, [visitedItems]);

  const toggleVisited = (product) => {
    setVisitedItems(prev => {
      const others = prev.filter(item => item.id !== product.id);
      return [...others, { ...product, visitedAt: Date.now() }];
    });
  };

  const executeAddToCart = (product) => {
    setCartItem(prev => {
      if (prev && prev.id === product.id) return { ...prev, quantity: prev.quantity + 1 };
      return { ...product, quantity: 1 };
    });
  };

  const handleAddToCartRequest = (product) => {
    if (auth) {
      executeAddToCart(product);
      return true; 
    } else {
      setPendingCartItem(product);
      setShowLogin(true); 
      return false; 
    }
  };

  const handleLoginSuccess = (creds) => {
    setAuth(creds);
    setShowLogin(false);
    if (pendingCartItem) {
      executeAddToCart(pendingCartItem);
      setPendingCartItem(null); 
    }
  };

  const handleLogout = () => setAuth(null); 

  const increaseQty = () => setCartItem(prev => ({ ...prev, quantity: prev.quantity + 1 }));
  const decreaseQty = () => setCartItem(prev => (prev.quantity > 1 ? { ...prev, quantity: prev.quantity - 1 } : prev));
  const removeCartItem = () => { if(window.confirm("Remove item?")) setCartItem(null); };

  const handleOrderChange = (e) => setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  const handleResetForm = () => setOrderDetails({ name: '', mobile: '', address: '', city: '', state: '', pincode: '' });
  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setShowCheckoutModal(false);
    alert("Your order successfully placed!");
    setCartItem(null); 
  };

  return (
    <BrowserRouter>
      {showLogin && (<Login onLogin={handleLoginSuccess} onClose={() => { setShowLogin(false); setPendingCartItem(null); }} />)}

      {showCheckoutModal && cartItem && (
        <div className="modal-overlay" style={{ zIndex: 3000 }}>
          <div className="modal-content slide-up-card" style={{ position: 'relative' }}>
            <button onClick={() => setShowCheckoutModal(false)} className="btn-close-animated" style={{ top: '15px', right: '15px' }}>✕</button>
            <h2 className="modal-title">📦 Secure Payment Details</h2>
            <form onSubmit={handleOrderSubmit} className="payment-form">
              <div className="form-group"><label>Full Name</label><input type="text" name="name" value={orderDetails.name} onChange={handleOrderChange} required /></div>
              <div className="form-group"><label>Mobile Number</label><input type="tel" name="mobile" value={orderDetails.mobile} onChange={handleOrderChange} required /></div>
              <div className="location-tools" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <button type="button" className="btn-reset-form" onClick={handleResetForm} style={{ padding: '8px 15px', borderRadius: '6px', background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#475569', cursor: 'pointer', fontSize: '0.85rem' }}>🔄 Reset Form</button>
              </div>
              <div className="form-group"><label>Address</label><textarea name="address" value={orderDetails.address} onChange={handleOrderChange} required></textarea></div>
              <div className="form-grid-3" style={{display:'flex',gap:'10px'}}>
                <input type="text" name="city" placeholder="City" value={orderDetails.city} onChange={handleOrderChange} required />
                <input type="text" name="state" placeholder="State" value={orderDetails.state} onChange={handleOrderChange} required />
                <input type="text" name="pincode" placeholder="Pin Code" value={orderDetails.pincode} onChange={handleOrderChange} required />
              </div>
              <button type="submit" className="btn-submit-order glow-hover-orange" style={{marginTop:'20px'}}>Submit & Pay ₹{cartItem.price * cartItem.quantity}</button>
            </form>
          </div>
        </div>
      )}

      {cartItem && (
        <div className="bottom-cart-bar slide-up" style={{zIndex: 2000}}>
          <div className="cart-left"><div className="cart-info"><h4>{cartItem.name}</h4><p>Total: <span className="cart-price">₹{cartItem.price * cartItem.quantity}</span></p></div></div>
          <div className="cart-controls"><button className="btn-qty" onClick={decreaseQty}>−</button><span className="qty-display">{cartItem.quantity}</span><button className="btn-qty" onClick={increaseQty}>+</button></div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button className="btn-buy glow-hover-orange" onClick={() => setShowCheckoutModal(true)} style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', color: 'white' }}>
              Buy Now
            </button>
            <button className="btn-remove-cart" onClick={removeCartItem}>Remove 🗑️</button>
          </div>
        </div>
      )}

      {/* --- FLEX WRAPPER TO PUSH FOOTER TO BOTTOM --- */}
      <div style={{ minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
        
        {/* Main Content Area */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home auth={auth} onLoginClick={() => setShowLogin(true)} onLogout={handleLogout} showVisited={showVisited} setShowVisited={setShowVisited} visitedItems={visitedItems} toggleVisited={toggleVisited}/>} />
            <Route path="/product/:id" element={<ProductPage onAddToCart={handleAddToCartRequest} currentCartItem={cartItem} />} />
          </Routes>
        </div>

        {/* --- RENDER FOOTER COMPONENT --- */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;