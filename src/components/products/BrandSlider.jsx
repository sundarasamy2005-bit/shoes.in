import React from 'react';
import '../../App.css';

const brands = [
  { 
    name: "Nike", 
    logo: "brands/Nike.png" 
  },
  { 
    name: "Adidas", 
    logo: "brands/Adidas.png" 
  },
  { 
    name: "Puma", 
    logo: "brands/Puma.png" 
  },
  { 
    name: "Reebok", 
    logo: "brands/Reebok.png" 
  },
  { 
    name: "Bata", 
    logo: "brands/Bata.png" 
  },
  { 
    name: "Skechers", 
    logo: "brands/Skechers.png" 
  },
  { 
    name: "Asics", 
    logo: "brands/Asics.png" 
  },
  { 
    name: "Campus", 
    // Using a reliable sneaker icon as the Campus logo is restricted on public URLs
    logo: "brands/campus.png" 
  }
];

const BrandSlider = ({ setSelectedBrand }) => {
  return (
    <div className="brand-slider-container">
      <div className="brand-track">
        {/* Duplicating the list to create a seamless infinite scroll */}
        {[...brands, ...brands].map((brand, index) => (
          <div 
            key={index} 
            className="brand-item" 
            onClick={() => setSelectedBrand(brand.name)}
          >
            <div className="brand-logo-circle">
              <img src={brand.logo} alt={brand.name} />
            </div>
            <span className="brand-name">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;