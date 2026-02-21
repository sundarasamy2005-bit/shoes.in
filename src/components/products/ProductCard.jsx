import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data, onAddToCart, onToggleVisited, isVisited }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="product-card" 
      onClick={() => navigate(`/product/${data.id}`)} 
      style={{ cursor: 'pointer' }}
    >
      <div className="image-container">
        <img
          src={data.images && data.images.length > 0 ? data.images[0] : data.image}
          alt={data.name}
          className="product-image shoe-image"
        />
        
        {/* HEART / VISITED BUTTON */}
        <button 
          className={`heart-btn ${isVisited ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation(); // Don't navigate to product page
            onToggleVisited(data);
          }}
          title={isVisited ? "Remove from Visited" : "Mark as Visited"}
        >
          {isVisited ? '❤️' : '🤍'}
        </button>

        {/* Removed 'Click for Details' badge as requested to replace with heart interaction */}
      </div>
      
      <div className="product-info">
        <h4 className="brand-name">{data.brand}</h4>
        <p className="product-name">{data.name}</p>
        <p className="price">₹{data.price}</p>
        
        <button 
          className="add-to-cart-btn" 
          onClick={(e) => {
            e.stopPropagation(); 
            if (onAddToCart) onAddToCart(data);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;