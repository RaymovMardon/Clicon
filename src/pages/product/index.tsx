import { FaFacebook, FaRegCopy, FaRegHeart, FaStar, FaTwitter } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { HiMiniArrowPath } from "react-icons/hi2";
import img1 from '../../../public/images/payProduct.png';
import img2 from '../../../public/images/notebook.png';
import ProductGridSections from "../../components/card/CardSection";
import { useState } from "react";

const ProductDetails = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
    <section className="bg-gray-200 py-4 px-4 md:px-10">
      <div className="max-w-7xl mx-auto bg-white py-8 px-2 rounded-xl shadow-md">
        <main className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img src={img2} alt="product" className="w-full rounded-md" />
          </div>
          <div className="md:w-1/2 flex flex-col gap-5">
            <div className="flex items-center gap-2 text-sm">
              {[1, 2, 3, 4].map((_, idx) => (<FaStar key={idx} className="text-yellow-400" />))}
              <FaStar className="text-gray-300" />
              <span className="font-semibold text-gray-800 ml-2">4.7 Star Rating</span>
              <span className="text-gray-600">(21,671 User feedback)</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div className="flex gap-2"><span className="text-gray-600">Sku:</span><span className="font-medium">A264671</span></div>
              <div className="flex gap-2"><span className="text-gray-600">Brand:</span><span className="font-medium">Apple</span></div>
              <div className="flex gap-2"><span className="text-gray-600">Availability:</span><span className="font-medium text-green-600">In Stock</span></div>
              <div className="flex gap-2"><span className="text-gray-600">Category:</span><span className="font-medium">Electronics Devices</span></div>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl text-blue-500 font-semibold">$1699</h2>
              <p className="text-lg text-gray-500 line-through">$1999.00</p>
              <button className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded">21% OFF</button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center border rounded-md px-3 py-2 gap-4 text-xl font-bold">
                <button className="cursor-pointer" onClick={handleDecrement}>-</button>
                <span>{count}</span>
                <button className="cursor-pointer" onClick={handleIncrement}>+</button>
              </div>
              <button className="flex items-center gap-2 px-12 py-2.5 text-white rounded-md bg-[#FA8232] hover:opacity-85 cursor-pointer">Add to Cart <SlBasket /></button>
              <button className="px-6 py-2 rounded-md border border-[#FA8232] text-[#FA8232] font-[600] hover:bg-gray-100 cursor-pointer">Buy Now</button>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2 cursor-pointer">
                {}
                <FaRegHeart />
                <p>Add to Wishlist</p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <HiMiniArrowPath />
                <p>Add to Compare</p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <p>Share:</p>
                <FaRegCopy />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
            <div className="pt-4">
              <p className="font-medium text-gray-800 mb-2">100% Guarantee Safe Checkout</p>
              <img src={img1} alt="secure-payment" className="w-full max-w-[300px]" />
            </div>
          </div>
        </main>
      </div>
    </section>

    <section className="bg-white mt-10 px-4 py-6 rounded-lg shadow-sm">
      <div className="container mx-auto ">
        <div className="flex justify-center gap-16 pb-10">
          <h2 className="text-[#5F6C72] text-xl font-semibold cursor-pointer hover:text-[#191C1F]">Description</h2>
          <h2 className="text-[#5F6C72] text-xl font-semibold cursor-pointer hover:text-[#191C1F]">Additional information</h2>
          <h2 className="text-[#5F6C72] text-xl font-semibold cursor-pointer hover:text-[#191C1F]">Specification</h2>
          <h2 className="text-[#5F6C72] text-xl font-semibold cursor-pointer hover:text-[#191C1F]">Review</h2>
        </div>
      <div className="flex flex-col md:flex-row gap-10 py-6">
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-lg font-semibold">Description</h3>
          <p className="text-gray-600 text-sm">The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.</p>
          <p className="text-gray-600 text-sm">Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.
          </p>
        </div>
        <div className="md:w-1/4 space-y-2">
          <h3 className="text-lg font-semibold">Feature</h3>
          <ul className="text-gray-700 text-lg list-disc ml-4 space-y-2">
            <li>Free 1 Year Warranty</li>
            <li>Free Shipping & Fasted Delivery</li>
            <li>100% Money-back guarantee</li>
            <li>24/7 Customer support</li>
            <li>Secure payment method</li>
          </ul>
        </div>
        <div className="md:w-1/4 space-y-2">
          <h3 className="text-lg font-semibold">Shipping Information</h3>
          <div>
            <span className="flex items-center gap-2">
              <h3 className='text-gray-800 text-lg font-[600]'>Courier:</h3>
              <p className="text-gray-700 text-md"> 2-4 days, free shipping</p>
            </span>
            <span className="flex items-center gap-2">
              <h3 className='text-gray-800 text-lg font-[600]'>Local Shipping:</h3> 
              <p className="text-gray-700 text-md">up to one week, $19.00</p>
            </span>
            <span className="flex items-center gap-2">
              <h3 className='text-gray-800 text-lg font-[600]'>UPS Ground Shipping:</h3> 
              <p className="text-gray-700 text-md">4-6 days, $29.00</p>
            </span>
            <span className="flex items-center gap-2">
              <h3 className='text-gray-800 text-lg font-[600]'>Unishop Global Export: </h3>
              <p className="text-gray-700 text-md">3-4 days, $39.00</p>
            </span>
          </div>
        </div>
      </div>
      </div>
    </section>

    <ProductGridSections/>
    </>
  );
};

export default ProductDetails;
