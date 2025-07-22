import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaFacebook, FaRegCopy, FaRegHeart, FaStar, FaTwitter } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { HiMiniArrowPath } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
import { Thumbs } from 'swiper/modules';
import ProductGridSections from "@/components/card/CardSection";

interface Product {
  id: number;
  title: string;
  image: string;
  images?: string[];
  price: number;
  description: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [ setThumbsSwiper] = useState<any>(null);
  const [mainImage, setMainImage] = useState<string>('');
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const fakeImages = data?.images;
        setProduct({ ...data, images: fakeImages });
        setMainImage(data.image);
        if (fakeImages && fakeImages.length > 0) {
          setMainImage(fakeImages[0]);
        }        
      });
  }, [id]);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 0 ) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    navigate('/shop', {
      state: {
        product,
        quantity: count
      }
    });
  };
  
  const handleBuyNow = () => {
    if (!product) return;
    navigate('/user', {
      state: {
        product,
        quantity: count
      }
    });
  };

  if (!product) return <div className="text-center">Yuklanmoqda...</div>;

  return (
    <>
      <section className="bg-gray-200 py-4 px-4 md:px-10">
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <main className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img src={mainImage} alt="product" className="w-full rounded-md h-[340px] object-cover" />
              <Swiper onSwiper={setThumbsSwiper} slidesPerView={5} spaceBetween={10} modules={[Thumbs]} className="mt-4 overflow-hidden flex justify-between">
                {product.images?.map((img, index) => (
                  <SwiperSlide key={index} >
                    <img src={img} onClick={() => setMainImage(img)} className="w-full h-22 py-2 object-cover bg-gray-200 border border-gray-300 rounded cursor-pointer hover:scale-105 duration-75" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="md:w-1/2 flex flex-col gap-5">
              <div className="flex items-center gap-2 text-sm">
                {[1, 2, 3, 4].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400" />
                ))}
                <FaStar className="text-gray-300" />
                <span className="font-semibold text-gray-800 ml-2">4.7 Star Rating</span>
                <span className="text-gray-600">(21,671 User feedback)</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">{product.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div className="flex gap-2"><span className="text-gray-600">Sku:</span><span className="font-medium">A264671</span></div>
                <div className="flex gap-2"><span className="text-gray-600">Brand:</span><span className="font-medium">Apple</span></div>
                <div className="flex gap-2"><span className="text-gray-600">Availability:</span><span className="font-medium text-green-600">In Stock</span></div>
                <div className="flex gap-2"><span className="text-gray-600">Category:</span><span className="font-medium">Electronics Devices</span></div>
              </div>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl text-blue-500 font-semibold">${product.price*count}</h2>
                <p className="text-lg text-gray-500 line-through">${(product.price * 1.2 * count).toFixed(2)}</p>
                <button className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded">20% OFF</button>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-8 py-6">
                <div className="flex items-center border rounded-md px-4 py-2 gap-6 text-xl font-bold">
                  <button onClick={Decrement} className="cursor-pointer px-2 hover:bg-gray-100">-</button>
                  <span>{count}</span>
                  <button onClick={Increment} className="cursor-pointer px-2 hover:bg-gray-100">+</button>
                </div>
                <button onClick={handleAddToCart} className="flex items-center text-white gap-2 px-14 py-2.5 rounded-md font-[600] bg-[#FA8232] hover:opacity-85 active:scale-96 cursor-pointer duration-325">Add to Cart <SlBasket /></button>
                <button onClick={handleBuyNow} className="border border-[#FA8232] px-8 py-2.5 rounded-md text-gray-800 font-[600] hover:opacity-85 active:scale-96 cursor-pointer duration-325">Buy Now</button>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700">
                <div className="flex items-center gap-2 cursor-pointer">
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
                <img src="/images/payProduct.png" alt="secure-payment" className="w-full max-w-[300px]" />
              </div>
            </div>
          </main>
        </div>
      </section>

      <section className="bg-white mt-10 px-4 py-6 rounded-lg shadow-sm">
        <div className="container mx-auto">
          <div className="flex justify-center gap-16 pb-10">
            {['Description', 'Additional information', 'Specification', 'Review'].map((text, idx) => (
              <h2 key={idx} className="text-[#5F6C72] text-xl font-semibold cursor-pointer hover:text-[#191C1F]">{text}</h2>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-10 py-6">
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
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
              <div className="space-y-1">
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

      <ProductGridSections />
    </>
  );
};

export default ProductDetails;
