import { FaFacebook, FaRegCopy, FaRegHeart, FaStar, FaTwitter } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { HiMiniArrowPath } from "react-icons/hi2";
import img1 from '../../../public/images/payProduct.png'
import img2 from '../../../public/images/notebook.png';


const ProductDetails = () => {
  return (
    <section className="bg-gray-200 p-10">
        <div className="container mx-auto border border-red-500 p-2">
            <main className="flex gap-4">
                <div>
                    <img src={img2} alt="product image" className="max-w-[100%] w-120" />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="box1">
                        <span className="flex items-center gap-1">
                          <FaStar className="text-yellow-500 cursor-pointer "/>
                          <FaStar className="text-yellow-500 cursor-pointer "/>
                          <FaStar className="text-yellow-500 cursor-pointer "/>
                          <FaStar className="text-yellow-500 cursor-pointer "/>
                          <FaStar className="text-white"/>
                          <p className="text-[#191C1F] px-1 font-[600]">4.7 Star Rating</p>
                          <p>(21,671 User feedback)</p>
                        </span>
                        <h2>2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray</h2>
                        <div className="flex justify-between flex-wrap pt-2">
                          <span className="flex gap-1">
                            <h3>Sku: </h3>
                            <p className="text-[#000000] font-[600]">A264671</p>
                          </span>
                          <span className="flex gap-1">
                            <h3>Brand: </h3>
                            <p className="text-[#000000] font-[600]">Apple</p>
                          </span>
                          <span className="flex gap-1">
                            <h3>Availability: </h3>
                            <p className="text-[#000000] font-[600]">In Stock</p>
                          </span>    
                          <span className="flex gap-1">
                            <h3>Category: </h3>
                            <p className="text-[#000000] font-[600]">Electronics Devices</p>
                          </span>  
                        </div>
                    </div>
                    <div className="box2 flex items-center gap-2">
                        <h2 className="text-[#2DA5F3] text-xl font-[600]">$1699</h2>
                        <p className="text-[#77878F] text-xl">$1999.00</p>
                        <button className="bg-[#EFD33D] py-1 px-2.5 text-[#191C1F] font-[600] rounded-md">21% OFF</button>
                    </div>
                    <div className="box4 flex gap- justify-between">
                        <span className="flex justify-between items-center gap-4 border py-1 px-4 rounded-md">
                            <p className="cursor-pointer font-[600] text-2xl mb-1">-</p>
                            <p className="">soni</p>
                            <p className="cursor-pointer font-[600] text-2xl mb-1">+</p>
                        </span>
                        <button className="flex items-center gap-1 py-2 px-14 border">Add to Card <SlBasket/></button>
                        <button className="border border-gray-700 py-1 px-8 ">Buy Now</button>
                    </div>
                    <div className="box5">
                        <span>
                            <FaRegHeart />
                            <p>Add to Wishlist</p>
                        </span>
                        <span>
                            <HiMiniArrowPath/>
                            <p>Add to Compare</p>
                        </span>
                        <span>
                            <p>Share product:</p>
                            <FaRegCopy />
                            <FaFacebook/>
                            <FaTwitter/>
                        </span>
                    </div>
                    <div className="box6">
                        <p>100% Guarantee Safe Checkout</p>
                        <img src={img1} alt="rasm bor" />
                    </div>
                </div>
            </main>
        </div>
    </section>
  )
}

export default ProductDetails