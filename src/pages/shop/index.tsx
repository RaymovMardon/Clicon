 
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
 

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  brand: string;
  category: string;
}

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-xl mt-10">Loading products...</div>;
  }

  const first16 = products.slice(0, 16);
  const restRaw = products.slice(16, 16 + 3 * 4);  

  const restGrouped = [];
  for (let i = 0; i < restRaw.length; i += 3) {
    restGrouped.push(restRaw.slice(i, i + 3));
  }

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-900">
        🛍️ Product Gallery
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-5 rounded-xl shadow-md space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Category</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><button className="hover:text-blue-600">Smartphones</button></li>
              <li><button className="hover:text-blue-600">Laptops</button></li>
              <li><button className="hover:text-blue-600">Fragrances</button></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Sort by</h2>
            <select className="w-full border rounded px-2 py-1 text-sm">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Price Range</h2>
            <input type="range" min={0} max={1000} className="w-full" />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Brands</h2>
            <label className="block text-sm">
              <input type="checkbox" className="mr-1" /> Apple
            </label>
            <label className="block text-sm">
              <input type="checkbox" className="mr-1" /> Samsung
            </label>
            <label className="block text-sm">
              <input type="checkbox" className="mr-1" /> Huawei
            </label>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Popular Tags</h2>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">New</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Sale</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Top</span>
            </div>
          </div>
        </div>

        
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
