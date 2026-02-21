import React from 'react';

function Banner() {
  const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", name: "Nike" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", name: "Adidas" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Puma_Logo.svg", name: "Puma" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Reebok_Logo.svg", name: "Reebok" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Asics_logo.svg", name: "Asics" }
  ];

  return (
    <div className="banner-container">
      <div className="brand-animation">
        {logos.map((brand, index) => (
          <div key={index} className="brand-slot">
            <img src={brand.src} alt={brand.name} style={{ height: '50px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;