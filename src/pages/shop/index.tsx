import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ReactSlider from "react-slider";
import { Link } from "react-router-dom";
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
        const brands = Array.from(new Set(data.products.map((p: Product) => p.brand).filter(Boolean)));
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

  const groupedSlides = [];
  for (let i = 0; i < sorted.length; i += 20) {
    groupedSlides.push(sorted.slice(i, i + 20));
  }

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-900">Product Gallery</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-5 rounded-xl shadow-md space-y-6 overflow-auto">
          {/* Categories */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold mb-2">Category</h2>
              <button onClick={() => setShowAllCategories((prev) => !prev)} className="text-sm text-blue-600 underline">
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
                      className={`hover:text-blue-600 ${cat === category ? "text-blue-800 font-bold" : ""}`}
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
            <div className="max-h-60 overflow-y-auto space-y-1 mb-2">
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
            {brands.length > 0 && (
              <button onClick={() => setBrands([])} className="text-xs text-blue-600 underline hover:text-blue-800">
                Reset Brands
              </button>
            )}
          </div>
        </div>

        {/* Products Display */}
        <div className="w-full md:w-3/4 space-y-10">
          {sorted.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <img
                src="https://www.svgrepo.com/show/382106/empty-box.svg"
                alt="No items"
                className="w-40 h-40 mb-6 opacity-80 animate-bounce"
              />
              <h2 className="text-2xl font-bold text-gray-700">Oops! No products found</h2>
              <p className="text-md text-gray-500 mt-2 max-w-md">
                It looks like we couldn’t find any items matching your selected filters. Try changing the category,
                brand, or price range to explore more products.
              </p>
              <button
                onClick={() => {
                  setCategory("");
                  setBrands([]);
                  setPriceRange([0, 1000]);
                  setSortBy("");
                }}
                className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition duration-300"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              modules={[Navigation, Pagination]}
            >
              {groupedSlides.map((group, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {group.map((product) => (
                      <div
                        key={product.id}
                        className="group relative bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
                      >
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="w-full h-48 object-cover rounded mb-3"
                        />
                        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Link
                            to={`/favorites?id=${product.id}`}
                            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center group/icon hover:bg-orange-500 transition"
                          >
                            <svg
                              className="w-5 h-5 text-gray-700 group-hover/icon:text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                                2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                                4.5 2.09C13.09 3.81 14.76 3 
                                16.5 3 19.58 3 22 5.42 22 8.5c0 
                                3.78-3.4 6.86-8.55 11.54L12 
                                21.35z" />
                            </svg>
                          </Link>
                          <Link
                            to={`/cart?id=${product.id}`}
                            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center group/icon hover:bg-orange-500 transition"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round" viewBox="0 0 24 24" className="text-[#191C1F]">
                              <circle cx="8" cy="21" r="1"></circle>
                              <circle cx="19" cy="21" r="1"></circle>
                              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 
                              2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                            </svg>
                          </Link>
                          <Link
                            to={`/product/${product.id}`}
                            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center group/icon hover:bg-orange-500 transition"
                          >
                            <svg
                              className="w-5 h-5 text-gray-700 group-hover/icon:text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          </Link>
                        </div>
                        <h3 className="font-semibold text-lg">{product.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                        <p className="text-blue-600 font-bold mt-1">${product.price}</p>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
