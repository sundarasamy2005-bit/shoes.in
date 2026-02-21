import "./BrandFilter.css";

const brands = [
  { name: "All", logo: "🎯" },
  { name: "Nike", logo: "🔵" },
  { name: "Adidas", logo: "⚫" },
  { name: "Puma", logo: "🐆" },
  { name: "Reebok", logo: "🏃" },
  { name: "Asics", logo: "🟠" },
  { name: "Skechers", logo: "👟" },
  { name: "Campus", logo: "📚" },
  { name: "Bata", logo: "🔴" },
];

function BrandFilter({ selectedBrand, setSelectedBrand }) {
  return (
    <div className="brand-filter-container">
      <p className="filter-label">Filter by Brand:</p>
      <div className="brand-filter">
        {brands.map((brand) => (
          <button
            key={brand.name}
            className={`brand-btn ${selectedBrand === brand.name ? "active" : ""}`}
            onClick={() => setSelectedBrand(brand.name)}
            title={brand.name}
          >
            <span className="brand-logo">{brand.logo}</span>
            <span className="brand-name">{brand.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default BrandFilter;
