import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function BannerPageLaptop() {
  return (
    <div className="bg-[#FFE7D6] ">
      <div className="container flex justify-between mx-auto max-w-[1280px] ">
        <div className="flex w-[400px] flex-col items-start justify-center">
          <p className="bg-[#2DA5F3] text-white py-[5px] px-[10px] rounded-[3px] font-[Public_Sans] font-[600] text-[14px] leading-[20px] tracking-[0px] ">
            SAVE UP TO $200.00
          </p>
          <h4 className="font-[Public_Sans] py-[15px] font-[600] text-[48px] leading-[56px] tracking-[0px]">
            Macbook Pro
          </h4>
          <p className="font-[Public_Sans] pb-[20px] font-[400] text-[24px] leading-[32px] tracking-[0px]">
            Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
          </p>
          <Link
            to="/shop"
            className="bg-[#FA8232] hover:bg-[#F2F4F5] border-2 group border-[#FA8232] hover:border-[#FA8232] inline-flex rounded-[3px] text-white uppercase items-center gap-[10px] px-[35px] py-[12px]"
          >
            <span className="font-[Public_Sans] group-hover:text-black text-[14px] font-[700]">
              Shop Now
            </span>
            <FaArrowRightLong className="group-hover:text-black" />
          </Link>
        </div>
        <div className="relative">
            <img src="/images/laptop.png" alt="laptop" />
            <div className="bg-[#FFCEAD] top-10 left-8 z-20 absolute w-[100px] h-[100px] rounded-[50%] flex justify-center items-center border-6 border-white ">
                <span className="font-[Public_Sans] text-black text-[20px] font-[600] leading-[28px] tracking-[0px]">
                    $1999
                </span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BannerPageLaptop;
