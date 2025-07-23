import axios from "axios";
import { LucideEye, LucideHeart, LucideShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function TodayBestDeals() {
  const [selected, setSelected] = useState<any[]>([]);

  const GetItems = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products?sortBy=title&order=asc"
      );
      console.log(res.data);
      setSelected(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetItems();
  }, []);

  const initialSeconds: number =
    16 * 24 * 60 * 60 + 21 * 60 * 60 + 57 * 60 + 23;
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number): string => {
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number): string => String(num).padStart(2, "0");

    return `${pad(days)}d : ${pad(hours)}h : ${pad(minutes)}m : ${pad(
      seconds
    )}s`;
  };

  return (
    <div>
      <div className="container py-[20px] mx-auto max-w-[1280px] ">
        <div className="">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <h4 className="font-[Public_Sans] font-[600] text-[#000000] text-[24px] leading-[32px] tracking-[0px] ">
                Best Deals
              </h4>
              <p className="font-[Public_Sans] font-[400] text-[#000000] text-[14px] leading-[20px] tracking-[0px]">
                Deals ends in
              </p>
              <div className="bg-[#F3DE6D] rounded-[2px] px-[10px] py-1 font-[Public_Sans] font-[400] text-[#000000] text-[16px] leading-[24px] tracking-[0px]">
                {formatTime(timeLeft)}
              </div>
            </div>
            <Link
              to="#"
              className="group flex items-center gap-2 relative w-fit"
            >
              <p className="font-[Public_Sans] font-[600] text-[#2DA5F3] text-[14px] leading-[20px] tracking-[0px] relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#2DA5F3] after:transition-all after:ease-in-out after:duration-500 group-hover:after:w-full group-hover:after:left-0">
                Browse All Product
              </p>
              <FaArrowRightLong className="text-[#2DA5F3] " />
            </Link>
          </div>
          <div className="py-[20px] flex ">
            <div className="w-[375px] border-2 border-[#E4E7E9] p-[25px]  ">
              <div className="py-[20px] w-full h-[310px] ">
                <img
                  className="w-full h-full object-cover "
                  src="/images/joistik2.png"
                  alt="Joistik images"
                />
              </div>
              <div className="flex gap-1 py-2 items-center">
                <FaStar className="text-[#EBC80C] " />
                <FaStar className="text-[#EBC80C] " />
                <FaStar className="text-[#EBC80C] " />
                <FaStar className="text-[#EBC80C] " />
                <FaStar className="text-[#EBC80C] " />
                <span className="font-[Public_Sans] font-[400] text-[#77878F] text-[14px] leading-[20px] tracking-[0px]">
                  (52,677)
                </span>
              </div>
              <p className="font-[Public_Sans] font-[400] text-[#000000] text-[16px] leading-[24px] tracking-[0px]">
                Xbox Series S - 512GB SSD Console with Wireless Controller - EU
                Versio...
              </p>
              <div className="flex gap-1 py-3 ">
                <span className="font-[Public_Sans] line-through font-[400] text-[#ADB7BC] text-[16px] leading-[24px] tracking-[0px]">
                  $865.99
                </span>
                <span className="font-[Public_Sans] font-[600] text-[#2DA5F3] text-[18px] leading-[24px] tracking-[0px]">
                  $442.12
                </span>
              </div>
              <p className="font-[Public_Sans] font-[400] py-2 pb-[15px] text-[#5F6C72] text-[14px] leading-[20px] tracking-[0px]">
                Games built using the Xbox Series X|S development kit showcase
                unparalleled load times, visuals.
              </p>
              <div className="flex items-center h-[55px] justify-between ">
                <Link
                  className="flex items-center justify-center rounded-[3px] bg-[#FFE7D6] w-[55px] h-full "
                  to="/favorite"
                >
                  <LucideHeart className="text-[#191C1F] " />
                </Link>
                <Link
                  className="flex gap-3 px-[10px] group py-[4px] h-full rounded-[3px] items-center bg-[#FA8232] hover:bg-[white] border-3 border-[#FA8232] "
                  to="#"
                >
                  <LucideShoppingCart className="group-hover:text-[#FA8232] text-white" />
                  <span className="font-[Public_Sans] group-hover:text-[#FA8232] font-[700] text-[white] text-[14px] leading-[48px] tracking-[1.2%] uppercase">
                    Add to card
                  </span>
                </Link>
                <Link
                  className="flex  items-center justify-center rounded-[3px] bg-[#FFE7D6] w-[55px] h-full"
                  to="/product"
                >
                  <LucideEye className="text-[#191C1F] " />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-4 ">
              {selected.slice(0, 8).map((product, index) => (
                <div
                  key={product.id}
                  className={`group relative border-2 border-[#E4E7E9] p-4 overflow-hidden ${
                    index < 4 ? "border-b" : ""
                  }
                     ${index % 4 !== 3 ? "border-r" : ""}`}
                >
                  <div className="relative  w-full h-[220px] mb-3 overflow-hidden">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-60 h-55 group-hover:scale-115 transition-transform ease-in-out duration-300 object-cover  mb-5"
                    />
                    <div className="absolute inset-0 flex rounded-[5px] items-center justify-between px-3 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
                      <Link
                        className="flex items-center group justify-center bg-[white] hover:bg-[#FA8232] translate-x-[-70px] group-hover:translate-x-[0px] transition-transform ease-in-out duration-400 rounded-[50%] w-[50px] h-[50px]"
                        to="/favorite"
                      >
                        <LucideHeart
                          size={24}
                          className="text-[#191C1F]  transition-colors duration-300"
                        />
                      </Link>
                      <Link
                        className="flex scale-0 group-hover:scale-100 ease-in-out duration-500 items-center group justify-center bg-[white] hover:bg-[#FA8232] rounded-[50%] w-[50px] h-[50px]"
                        to="/card"
                      >
                        <LucideShoppingCart
                          size={24}
                          className="text-[#191C1F]"
                        />
                      </Link>
                      <Link
                        className="flex items-center group justify-center bg-[white] hover:bg-[#FA8232] rounded-[50%] w-[50px] h-[50px] translate-x-[70px] group-hover:translate-x-[0px] transition-transform ease-in-out duration-400 "
                        to={`/product/${product.id}`}
                      >
                        <LucideEye size={24} className="text-[#191C1F]" />
                      </Link>
                    </div>
                  </div>
                  <h2 className="font-[Public_Sans] font-[400] text-[#000000] text-[14px] leading-[20px] tracking-[0px]">
                    {product.title}
                  </h2>
                  <p className="font-[Public_Sans] font-[600] text-[#2DA5F3] text-[14px] leading-[20px] tracking-[0px]">
                    ${product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayBestDeals;
