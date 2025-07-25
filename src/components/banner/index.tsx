import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Bannerpage() {
  return (
    <div>
      <div className="container flex gap-5 mx-auto py-[30px] max-w-[1280px] ">
        <div className="flex justify-between w-[50%] bg-[#F2F4F5] p-[30px] rounded-[4px] ">
          <div className="w-[280px] ">
            <span className=" bg-[#2DA5F3] text-white  px-[10px] py-[5px] rounded-[3px] font-[Public_Sans] font-[600] text-[14px] leading-[20px] tracking-[0px] ">
              INTRODUCING
            </span>
            <h3 className="font-[Public_Sans] py-[15px] font-[600] text-[32px] leading-[40px] tracking-[0px] ">
              New Apple Homepod Mini
            </h3>
            <p className="font-[Public_Sans] pb-[20px] font-[400] text-[16px] leading-[24px] text-[#475156] tracking-[0px]">
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
            </p>
            <Link
              className="bg-[#FA8232] hover:bg-[#F2F4F5] border-3 group border-[#F2F4F5] hover:border-[#FA8232] inline-flex rounded-[3px] text-[white] uppercase items-center gap-[10px]  px-[20px] py-[8px]  "
              to="/shop"
            >
              <span className="font-[Public_Sans] group-hover:text-[black] text-[14px] font-[700] leading-[32px] tarcking-[1.2%]  ">
                Shop Now
              </span>
              <FaArrowRightLong className="group-hover:text-[black]" />
            </Link>
          </div>
          <div className="">
            <img src="/images/shar.svg" alt="Shar" />
          </div>
        </div>
        <div className="flex relative overflow-hidden justify-between w-[50%] bg-[#191C1F] p-[30px] rounded-[4px] ">
          <div className="w-[280px] ">
            <span className=" bg-[#2DA5F3] text-white  px-[10px] py-[5px] rounded-[3px] font-[Public_Sans] font-[600] text-[14px] leading-[20px] tracking-[0px] ">
            INTRODUCING NEW
            </span>
            <h3 className="font-[Public_Sans] py-[15px] text-white font-[600] text-[32px] leading-[40px] tracking-[0px] ">
              Xiaomi Mi 11 Ultra 12GB+256GB
            </h3>
            <p className="font-[Public_Sans] pb-[20px] font-[400] text-[16px] leading-[24px] text-[#ADB7BC] tracking-[0px]">
            *Data provided by internal laboratories. Industry measurment.
            </p>
            <Link
              className="bg-[#FA8232] hover:bg-[#F2F4F5] border-3 group border-[#191C1F] hover:border-[#FA8232] inline-flex rounded-[3px] text-[white] uppercase items-center gap-[10px]  px-[20px] py-[8px]  "
              to="/shop"
            >
              <span className="font-[Public_Sans] group-hover:text-[black] text-[14px] font-[700] leading-[32px] tarcking-[1.2%]  ">
                Shop Now
              </span>
              <FaArrowRightLong className="group-hover:text-[black]" />
            </Link>
          </div>
          <div className="absolute w-[240px] right-8 ">
            <img className="w-full h-full object-cover " src="/images/telefon.png" alt="Shar" />
          </div>
          <div className="absolute bg-[#2DA5F3] flex justify-center items-center w-[100px] h-[100px] top-6 right-6 rounded-[50%] z-30 ">
            <p className="font-[Public_Sans] text-white font-[600] text-[20px] leading-[28px] tracking-[0px] ">
             $590
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bannerpage;
