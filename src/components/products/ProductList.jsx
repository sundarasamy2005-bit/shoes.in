import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductList = ({ products, filters, onToggleVisited, visitedItems }) => {
  const navigate = useNavigate();

  // Filter Logic
  const filteredProducts = products.filter((product) => {
    if (filters.selectedBrand && product.brand !== filters.selectedBrand) return false;
    if (product.price < filters.minPrice || product.price > filters.maxPrice) return false;
    if (filters.size) {
      if (!product.sizes || !product.sizes.includes(filters.size)) return false;
    }
    return true;
  });

  if (filteredProducts.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', color: '#888' }}>
        <h3>No shoes found for this filter 🧐</h3>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <div 
          key={product.id} 
          onClick={() => navigate(`/product/${product.id}`)} // Entire card click opens page
          style={{ cursor: 'pointer' }}
        >
          <ProductCard 
            data={product} 
            // UPDATED: Button click ONLY navigates. No cart logic here.
            onAddToCart={(e) => {
              navigate(`/product/${product.id}`); 
            }}
            onToggleVisited={onToggleVisited}
            isVisited={visitedItems.some(item => item.id === product.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;