import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ReactSlider from "react-slider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  brand: string;
  category: string;
}

const allCategories = [
  "beauty", "fragrances", "furniture", "groceries", "home-decoration", "kitchen-accessories",
  "laptops", "mens-shirts", "mens-shoes", "mens-watches", "mobile-accessories", "motorcycle",
  "skin-care", "smartphones", "sports-accessories", "sunglasses", "tablets", "tops", "vehicle",
  "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"
];

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("");
  const [brands, setBrands] = useState<string[]>([]);
  const [uniqueBrands, setUniqueBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState("");

  const [categorySearch, setCategorySearch] = useState("");
  const [showAllCategories, setShowAllCategories] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        const brands = Array.from(
          new Set(data.products.map((p: Product) => p.brand).filter(Boolean))
        );
        setUniqueBrands(brands);
        setLoading(false);
      });
  }, []);

  const toggleBrand = (brand: string) => {
    setBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filtered = products
    .filter((p) => (category ? p.category === category : true))
    .filter((p) => (brands.length ? brands.includes(p.brand) : true))
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "low-high") return a.price - b.price;
    if (sortBy === "high-low") return b.price - a.price;
    return 0;
  });

  const first16 = sorted.slice(0, 16);
  const restRaw = sorted.slice(16, 28);
  const restGrouped = [];
  for (let i = 0; i < restRaw.length; i += 3) {
    restGrouped.push(restRaw.slice(i, i + 3));
  }

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-900">🛍️ Product Gallery</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-5 rounded-xl shadow-md space-y-6 overflow-auto">
          {/* Categories */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold mb-2">Category</h2>
              <button
                onClick={() => setShowAllCategories((prev) => !prev)}
                className="text-sm text-blue-600 underline"
              >
                {showAllCategories ? "Hide" : "Show All"}
              </button>
            </div>
            <input
              type="text"
              placeholder="Search category..."
              className="w-full mb-3 px-2 py-1 text-sm border rounded"
              value={categorySearch}
              onChange={(e) => setCategorySearch(e.target.value.toLowerCase())}
            />
            <ul className="space-y-1 text-sm text-gray-700 max-h-[300px] overflow-y-auto">
              {allCategories
                .filter((cat) => cat.includes(categorySearch))
                .slice(0, showAllCategories ? allCategories.length : 6)
                .map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setCategory(cat === category ? "" : cat)}
                      className={`hover:text-blue-600 ${cat === category ? "text-blue-800 font-bold" : ""
                        }`}
                    >
                      {cat.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Sort */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Sort by</h2>
            <select
              className="w-full border rounded px-2 py-1 text-sm"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </h2>
            <ReactSlider
              className="w-full h-2 bg-gray-300 rounded relative mt-2"
              thumbClassName="bg-blue-500 h-5 w-5 rounded-full cursor-pointer shadow border-2 border-white -top-1"
              trackClassName="bg-blue-300 h-2 rounded"
              value={priceRange}
              onChange={(val: [number, number]) => setPriceRange(val)}
              min={0}
              max={2000}
              step={10}
              minDistance={50}
              pearling
            />
          </div>

          {/* Brands */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Brands</h2>
            <div className="max-h-60 overflow-y-auto space-y-1">
              {uniqueBrands.map((brand) => (
                <label key={brand} className="block text-sm">
                  <input
                    type="checkbox"
                    checked={brands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="mr-1"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="w-full md:w-3/4 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {first16.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                <p className="text-blue-600 font-bold mt-1">${product.price}</p>
              </div>
            ))}
          </div>

          {/* Swiper */}
          {restGrouped.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Explore More</h2>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
              >
                {restGrouped.map((group, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {group.map((product) => (
                        <div
                          key={product.id}
                          className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
                        >
                          <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-48 object-cover rounded mb-3"
                          />
                          <h3 className="font-semibold text-lg">{product.title}</h3>
                          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                          <p className="text-blue-600 font-bold mt-1">${product.price}</p>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
