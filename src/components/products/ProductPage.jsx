import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import shoesData from '../../data/shoesData';
import '../../App.css'; 

export default function ProductPage({ onAddToCart, currentCartItem }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); 
  
  const shoeId = Number(id);
  const shoe = shoesData.find((s) => s.id === shoeId);
  const fromVisited = location.state?.fromVisited;

  // --- REVIEWS STATE ---
  const [reviewList, setReviewList] = useState([
    { id: 1, user: "Rohan Das", rating: 5, date: "10 Feb 2026", comment: "Absolutely love these! The cushioning is perfect.", verified: true },
    { id: 2, user: "Priya Sharma", rating: 4, date: "08 Feb 2026, 2:15 PM", comment: "Great color and fit, but delivery took one extra day.", verified: true },
    { id: 3, user: "Amit Verma", rating: 5, date: "05 Feb 2026, 9:45 AM", comment: "Best purchase I've made this year.", verified: false },
  ]);

  const [newReview, setNewReview] = useState({ user: '', rating: 5, comment: '' });
  
  // --- UI STATE ---
  const [toastMsg, setToastMsg] = useState(''); 
  const [showBuyModal, setShowBuyModal] = useState(false); 

  // --- ORDER FORM STATE ---
  const [orderDetails, setOrderDetails] = useState({
    name: '', mobile: '', address: '', city: '', state: '', pincode: ''
  });

  // State for Glowing Hover Effect
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isBuyHovered, setIsBuyHovered] = useState(false);

  // Safely handle images
  const imgs = useMemo(() => {
    return shoe?.images || (shoe?.image ? [shoe.image] : []);
  }, [shoe]);

  const [mainImage, setMainImage] = useState(imgs[0] || null);

  useEffect(() => {
    setMainImage(imgs[0] || null);
  }, [imgs]);

  // --- MOUSE MOVE EFFECT ---
  const handleMouseMove = (e) => {
    if (!imgs || imgs.length <= 1) return;
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const percentage = x / width;
    let index = Math.floor(percentage * imgs.length);
    index = Math.max(0, Math.min(index, imgs.length - 1));
    setMainImage(imgs[index]);
  };

  const showNotification = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  // --- BUTTON HANDLERS ---
  const handleAddToCartClick = () => {
    if (onAddToCart(shoe)) {
      showNotification("Added to Cart 🛒");
    }
  };

  const handleBuyNowClick = () => {
    setShowBuyModal(true);
  };

  const handleClose = () => {
    if (fromVisited) {
      navigate('/', { state: { returnToVisited: true } });
    } else {
      navigate('/');
    }
  };

  // --- FORM HANDLERS ---
  const handleOrderChange = (e) => setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  
  const handleResetForm = () => {
    setOrderDetails({ name: '', mobile: '', address: '', city: '', state: '', pincode: '' });
    showNotification("Form reset.");
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setShowBuyModal(false);
    showNotification("Your order successfully placed!");
  };

  // --- REVIEW HANDLERS ---
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.user || !newReview.comment) return alert("Please fill in all fields");
    const newEntry = { id: Date.now(), user: newReview.user, rating: Number(newReview.rating), date: new Date().toLocaleDateString(), comment: newReview.comment, verified: true };
    setReviewList([...reviewList, newEntry]);
    setNewReview({ user: '', rating: 5, comment: '' });
    showNotification("Review added successfully!");
  };

  const handleDeleteReview = (reviewId) => {
    if (window.confirm("Delete this review?")) {
      setReviewList(reviewList.filter((r) => r.id !== reviewId));
      showNotification("Review deleted!");
    }
  };

  const renderStars = (rating) => (
    <span className="star-rating-display">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "star filled" : "star empty"}>★</span>
      ))}
    </span>
  );

  const totalPrice = currentCartItem && shoe && currentCartItem.id === shoe.id 
    ? currentCartItem.price * currentCartItem.quantity 
    : (shoe?.price || 0);

  if (!shoe) return <div style={{padding:'50px', textAlign:'center', color:'black'}}>Product not found.</div>;

  return (
    <div className="product-page-wrapper">
      
      {toastMsg && <div className="toast-notification slide-in-toast">✅ {toastMsg}</div>}

      {/* --- PAYMENT MODAL --- */}
      {showBuyModal && (
        <div className="modal-overlay">
          <div className="modal-content slide-up-card" style={{ position: 'relative' }}>
            
            {/* MODAL CLOSE BUTTON - using global class */}
            <button 
              onClick={() => setShowBuyModal(false)}
              className="btn-close-animated"
              style={{ top: '15px', right: '15px' }}
            >
              ✕
            </button>

            <h2 className="modal-title">📦 Secure Payment Details</h2>
            <form onSubmit={handleOrderSubmit} className="payment-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" value={orderDetails.name} onChange={handleOrderChange} placeholder="Enter Name" required />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" name="mobile" value={orderDetails.mobile} onChange={handleOrderChange} placeholder="+91..." required />
              </div>
              
              {/* REMOVED LOCATION BUTTON, KEPT RESET BUTTON ALIGNED TO RIGHT */}
              <div className="location-tools" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <button type="button" className="btn-reset-form" onClick={handleResetForm} style={{ padding: '8px 15px', borderRadius: '6px', background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#475569', cursor: 'pointer', fontSize: '0.85rem' }}>
                  🔄 Reset Form
                </button>
              </div>

              <div className="form-group">
                <label>Address</label>
                <textarea name="address" value={orderDetails.address} onChange={handleOrderChange} placeholder="Street Address" required></textarea>
              </div>
              <div className="form-grid-3" style={{ display: 'flex', gap: '10px' }}>
                <input type="text" name="city" value={orderDetails.city} onChange={handleOrderChange} placeholder="City" required style={{flex:1}} />
                <input type="text" name="state" value={orderDetails.state} onChange={handleOrderChange} placeholder="State" required style={{flex:1}} />
                <input type="text" name="pincode" value={orderDetails.pincode} onChange={handleOrderChange} placeholder="Pin Code" required style={{flex:1}} />
              </div>
              <button type="submit" className="btn-submit-order glow-hover-orange" style={{ marginTop: '20px' }}>
                Submit & Pay ₹{totalPrice}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- MAIN PRODUCT CARD --- */}
      <div className="compact-card slide-up-card" style={{ position: 'relative' }}>
        
        {/* PRODUCT CARD CLOSE BUTTON - using global class */}
        <button 
          title={fromVisited ? "Back to Visited" : "Close"}
          onClick={handleClose} 
          className="btn-close-animated"
        >
          {fromVisited ? '↩' : '✕'}
        </button>

        <div className="product-main-layout">
          <div className="thumbs-sidebar">
            {imgs.map((img, idx) => (
              <div key={idx} className={`thumb-box ${mainImage === img ? 'active' : ''}`} onClick={() => setMainImage(img)}>
                <img src={img} alt={`view-${idx}`} />
              </div>
            ))}
          </div>

          <div className="main-image-stage">
            <div className="main-image-container" onMouseMove={handleMouseMove} style={{ cursor: 'ew-resize' }}>
              <img key={mainImage} src={mainImage} alt={shoe.name} className="hero-image" />
            </div>
          </div>

          <div className="details-panel">
            <p className="brand-badge">{shoe.brand}</p>
            <h1 className="product-title">{shoe.name}</h1>
            <div className="rating-row">{renderStars(4)} <span>({reviewList.length} reviews)</span></div>
            <div className="price-section"><span className="current-price">₹{shoe.price}</span></div>
            <p className="product-desc">Experience ultimate comfort with the {shoe.name}.</p>

            <div className="action-buttons" style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              
              <button 
                className="btn-cart" 
                onClick={handleAddToCartClick}
                onMouseEnter={() => setIsCartHovered(true)}
                onMouseLeave={() => setIsCartHovered(false)}
                style={{
                  flex: 1, padding: '14px', borderRadius: '10px', border: 'none', background: '#ffbb00', 
                  color: '#111', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s ease',
                  boxShadow: isCartHovered ? '0 0 25px rgba(255, 187, 0, 0.7)' : '0 4px 6px rgba(0,0,0,0.1)',
                  transform: isCartHovered ? 'translateY(-3px)' : 'none'
                }}
              >
                Add to Cart
              </button>

              <button 
                className="btn-buy" 
                onClick={handleBuyNowClick}
                onMouseEnter={() => setIsBuyHovered(true)}
                onMouseLeave={() => setIsBuyHovered(false)}
                style={{
                  flex: 1, padding: '14px', borderRadius: '10px', border: 'none', background: '#ff3333',
                  color: 'white', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s ease',
                  boxShadow: isBuyHovered ? '0 0 25px rgba(255, 51, 51, 0.7)' : '0 4px 6px rgba(0,0,0,0.1)',
                  transform: isBuyHovered ? 'translateY(-3px)' : 'none'
                }}
              >
                Buy Now
              </button>

            </div>
          </div>
        </div>
        
        {/* REVIEWS SECTION */}
        <div className="reviews-section">
          <h3>User Reviews</h3>
          <div className="review-grid">
            {reviewList.map((rev) => (
              <div key={rev.id} className="review-card hover-float">
                <div className="review-header">
                  <div className="user-info">
                    <div className="user-avatar">{rev.user.charAt(0)}</div>
                    <div><span className="review-user">{rev.user}</span><span className="review-date-small">{rev.date}</span></div>
                  </div>
                  <button className="btn-delete-review glow-hover-red" onClick={() => handleDeleteReview(rev.id)}>🗑️</button>
                </div>
                <div className="star-row">{renderStars(rev.rating)}</div>
                <p className="review-comment">"{rev.comment}"</p>
              </div>
            ))}
          </div>
          <div className="write-review-container">
            <h4>Write a Review</h4>
            <form onSubmit={handleReviewSubmit} className="review-form">
              <div className="form-row">
                <input type="text" name="user" placeholder="Name" value={newReview.user} onChange={(e) => setNewReview({...newReview, user: e.target.value})} className="form-input glow-focus" required/>
                <select name="rating" value={newReview.rating} onChange={(e) => setNewReview({...newReview, rating: e.target.value})} className="form-select glow-focus"><option value="5">★★★★★</option><option value="4">★★★★☆</option><option value="3">★★★☆☆</option><option value="2">★★☆☆☆</option><option value="1">★☆☆☆☆</option></select>
              </div>
              <textarea name="comment" placeholder="Comment..." value={newReview.comment} onChange={(e) => setNewReview({...newReview, comment: e.target.value})} className="form-textarea glow-focus" required></textarea>
              <button type="submit" className="btn-submit-review glow-hover">Submit Review</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}