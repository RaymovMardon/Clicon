import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pro from '../../../public/images/Protsessor.png'

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface Carts {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export function CategoryPage() {
  const [category, setCategory] = useState<Carts[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Most Popular');

  const getCategory = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/carts");
      setCategory(res?.data?.carts || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const filteredCategory = category.filter((item) =>
    item?.products?.[0]?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCategory = [...filteredCategory].sort((a: Carts, b: Carts) => {
    if (sortBy === 'Most Popular') {
      return Math.random() - 0.5; 
    }
    return 0;
  });

  return (
    <section className="container mx-auto p-5 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/4 flex flex-col gap-6">
        <div className="flex flex-col mt-10">
          <p className="font-semibold mb-2">Category</p>
          <span className="flex items-center gap-2 mb-1">
            <input type="radio" name="category" onChange={() => setSearchTerm('')} />
            <label htmlFor="all">All</label>
          </span>
          <span className="flex items-center gap-2 mb-1">
            <input type="radio" name="category" onChange={() => setSearchTerm('Electronics')} />
            <label htmlFor="electronics">Electronics Devices</label>
          </span>
          <span className="flex items-center gap-2 mb-1">
            <input type="radio" name="category" onChange={() => setSearchTerm('Computer')} />
            <label htmlFor="computer">Computer & Laptop</label>
          </span>
          <span className="flex items-center gap-2 mb-1">
            <input type="radio" name="category" onChange={() => setSearchTerm('Accessories')} />
            <label htmlFor="accessories">Computer Accessories</label>
          </span>
          <span className="flex items-center gap-2 mb-1">
            <input type="radio" name="category" onChange={() => setSearchTerm('SmartPhone')} />
            <label htmlFor="smartphone">SmartPhone</label>
          </span>
          <span className="flex items-center gap-2 mb-1">
            <input type="radio" name="category" onChange={() => setSearchTerm('Headphone')} />
            <label htmlFor="headphone">Headphone</label>
          </span>
          <span className="flex items-center gap-2 mb-1">
            <input type="radio" name="category" onChange={() => setSearchTerm('Mobile')} />
            <label htmlFor="mobile">Mobile Accessories</label>
          </span>
          <span className="flex items-center gap-2 mb-1">
            <input type="radio" name="category" onChange={() => setSearchTerm('Gaming')} />
            <label htmlFor="gaming">Gaming Console</label>
          </span>
          <span className="flex items-center gap-2 mb-1">
            <input type="radio" name="category" onChange={() => setSearchTerm('Camera')} />
            <label htmlFor="camera">Camera & Photo</label>
          </span>
        </div>

        <div>
          <p className="font-semibold mb-2">Last Blog</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-5">
              <img src={Pro} alt="blog image" className="w-12 h-12 object-cover rounded" />
              <span>
                <blockquote className="text-gray-600 italic mb-1">Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.</blockquote>
                <b>28 Nov, 2015</b>
              </span>
            </li>
            <li className="flex items-center gap-5">
              <img src={Pro} alt="blog image" className="w-12 h-12 object-cover rounded" />
              <span>
                <blockquote className="text-gray-600 italic mb-1">Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.</blockquote>
                <b>28 Nov, 2015</b>
              </span>
            </li>
            <li className="flex items-center gap-5">
              <img src={Pro} alt="blog image" className="w-12 h-12 object-cover rounded" />
              <span>
                <blockquote className="text-gray-600 italic mb-1">Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.</blockquote>
                <b>28 Nov, 2015</b>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Gallery</p>
          <ul className="grid grid-cols-4 gap-2">
            <li><img src="https://plus.unsplash.com/premium_photo-1709031620960-877745c2bc34?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Gallery_images" className="w-full h-24 object-cover rounded" /></li>
            <li><img src="https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg" alt="Gallery_images" className="w-full h-24 object-cover rounded" /></li>
            <li><img src="https://artlogic-res.cloudinary.com/w_1400,h_1400,c_limit,f_auto,fl_lossy,q_auto:good/ws-flowers/usr/images/feature_panels/image/10/flowers-cork-street-50-years-2020-14-of-17-.jpg" alt="Gallery_images" className="w-full h-24 object-cover rounded" /></li>
            <li><img src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Gallery_images" className="w-full h-24 object-cover rounded" /></li>
            <li><img src="https://media.istockphoto.com/id/1218961153/photo/art-museum.jpg?s=612x612&w=0&k=20&c=9fK54fu1mjzFjDOSqg_jfrMy4Hkp8vsmImB7rLrbhJs=" alt="Gallery_images" className="w-full h-24 object-cover rounded" /></li>
            <li><img src="https://www.shutterstock.com/image-illustration/image-paintings-art-gallery-260nw-2578467971.jpg" alt="Gallery_images" className="w-full h-24 object-cover rounded" /></li>
            <li><img src="https://www.sheffieldmuseums.org.uk/media/potp3mpl/portrait-gallery-1-web-copy.jpg" alt="Gallery_images" className="w-full h-24 object-cover rounded" /></li>
            <li><img src="https://images.unsplash.com/photo-1507643179773-3e975d7ac515?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0JTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Gallery_images" className="w-full h-24 object-cover rounded" /></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Popular Tag</p>
          <div className="grid grid-cols-2 gap-2">
            <button className="border rounded-xl hover:text-orange-500 hover:bg-amber-200 px-2 py-1">Game</button>
            <button className="border rounded-xl hover:text-orange-500 hover:bg-amber-200 px-2 py-1">Iphone</button>
            <button className="border rounded-xl hover:text-orange-500 hover:bg-amber-200 px-2 py-1">TV</button>
            <button className="border rounded-xl hover:text-orange-500 hover:bg-amber-200 px-2 py-1">Asus Laptop</button>
            <button className="border rounded-xl hover:text-orange-500 hover:bg-amber-200 px-2 py-1">Macbook</button>
            <button className="border rounded-xl hover:text-orange-500 hover:bg-amber-200 px-2 py-1">SSD</button>
            <button className="border rounded-xl hover:text-orange-500 hover:bg-amber-200 px-2 py-1">Graphics Card</button>
            <button className="border rounded-xl hover:text-orange-500 hover:bg-amber-200 px-2 py-1">Speaker</button>
            <button className="border rounded-xl hover:text-orange-500 hover:bg-amber-200 px-2 py-1">Tablet</button>
            <button className="border rounded-xl hover:text-orange-500 hover:bg-amber-200 px-2 py-1">Microwave</button>
            <button className="border rounded-xl hover:text-orange-500 hover:bg-amber-200 px-2 py-1">Sumsung</button>
            <button className="border rounded-xl hover:text-orange-500 hover:bg-amber-200 px-2 py-1">Power Bank</button>
          </div>
        </div>
      </div>

      <div className="md:w-3/4 flex flex-col gap-6">
        <div className="flex gap-4 mb-4">
          <div>
            <form>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 rounded"
              />
            </form>
          </div>
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="Most Popular">Sorted by: Most Popular</option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {sortedCategory.map((categoriyalar, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={categoriyalar?.products?.[0]?.thumbnail}
                alt={categoriyalar?.products?.[0]?.title || 'Mahsulot rasmi'}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="flex justify-center items-center gap-5 text-sm text-gray-500 mb-2">
                  <p>👤 {categoriyalar?.id}</p>
                  <p>📅 27 Jul, 2025</p>
                  <p>👁 {Math.floor(Math.random() * 1000)}</p>
                </span>
                <h4 className="text-lg font-semibold mb-2">
                  {categoriyalar?.products?.[0]?.title}
                </h4>
                <blockquote className="text-gray-600 italic mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, porro?
                </blockquote>
                <button className="text-orange-600 font-medium hover:underline">
                  READ MORE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryPage;