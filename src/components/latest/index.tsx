import { FaArrowRightLong } from "react-icons/fa6";
import {
  PiCalendarBlank,
  PiChatCircleDots,
  PiUserCircle,
} from "react-icons/pi";
import { Link } from "react-router-dom";

function Latest() {
  return (
    <div className="bg-[#F2F4F5] ">
      <div className="container mx-auto py-[60px] max-w-[1280px] ">
        <h3 className="font-[Public_Sans] pb-[40px] text-center font-[600] text-[32px] leading-[40px] tracking-[0px] ">
          Latest News
        </h3>
        <ul className="grid grid-cols-3 gap-6">
          <li className="bg-[white] p-[30px] rounded-[4px] group ">
            <div className="w-full h-[240px] rounded-[4px] overflow-hidden ">
              <img
                className="w-full h-full object-cover group-hover:scale-120 transition-transform ease-in-out duration-300 "
                src="/images/smartwach.jpg"
                alt="Smartwach"
              />
            </div>
            <div className="flex gap-3 py-[10px] pt-[20px] ">
              <div className="flex items-center gap-2">
                <PiUserCircle className="text-[#FA8232] text-[23px]  " />
                <span className="font-[Public_Sans] text-[#475156] text-center font-[400] text-[14px] leading-[20px] tracking-[0px]">
                  Kristin
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PiCalendarBlank className="text-[#FA8232] text-[23px] " />
                <span className="font-[Public_Sans] text-[#475156] text-center font-[400] text-[14px] leading-[20px] tracking-[0px]">
                  19Dec, 2013
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PiChatCircleDots className="text-[#FA8232] text-[23px] " />
                <span className="font-[Public_Sans] text-[#475156] text-center font-[400] text-[14px] leading-[20px] tracking-[0px]">
                  453
                </span>
              </div>
            </div>
            <h3 className="font-[Public_Sans] text-[black] font-[500] text-[18px] leading-[20px] tracking-[0px]">
              Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum
              dolor.
            </h3>
            <p className="font-[Public_Sans] py-[20px] text-[#77878F] font-[400] text-[16px] leading-[24px] tracking-[0px]">
              Maecenas scelerisque, arcu quis tempus egestas, ligula diam
              molestie lectus, tincidunt malesuada arcu metus posuere metus.
            </p>
            <Link className="flex w-[170px] h-[50px] rounded-[4px] group  justify-center items-center  gap-3 border-3 border-[#FFE7D6] hover:border-[#FA8232] " to="">
              <span className="font-[Public_Sans] text-[#f4924c] group-hover:text-[#FA8232] font-[700] text-[14px] leading-[48px] tracking-[1.2%]">
                Read more
              </span>
              <FaArrowRightLong className=" text-[#f4924c]  group-hover:text-[#FA8232]" />
            </Link>
          </li>
          <li className="bg-[white] p-[30px] group rounded-[4px] ">
            <div className="w-full h-[240px] rounded-[4px] overflow-hidden ">
              <img
                className="w-full h-full object-cover group-hover:scale-120 transition-transform ease-in-out duration-300 "
                src="/images/sxema.jpg"
                alt="Smartwach"
              />
            </div>
            <div className="flex gap-3 py-[10px] pt-[20px] ">
              <div className="flex items-center gap-2">
                <PiUserCircle className="text-[#FA8232] text-[23px]  " />
                <span className="font-[Public_Sans] text-[#475156] text-center font-[400] text-[14px] leading-[20px] tracking-[0px]">
                  Kristin
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PiCalendarBlank className="text-[#FA8232] text-[23px] " />
                <span className="font-[Public_Sans] text-[#475156] text-center font-[400] text-[14px] leading-[20px] tracking-[0px]">
                  19Dec, 2013
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PiChatCircleDots className="text-[#FA8232] text-[23px] " />
                <span className="font-[Public_Sans] text-[#475156] text-center font-[400] text-[14px] leading-[20px] tracking-[0px]">
                  453
                </span>
              </div>
            </div>
            <h3 className="font-[Public_Sans] text-[black] font-[500] text-[18px] leading-[20px] tracking-[0px]">
                Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. 
            </h3>
            <p className="font-[Public_Sans] py-[20px] text-[#77878F] font-[400] text-[16px] leading-[24px] tracking-[0px]">
                Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. 
            </p>
            <Link className="flex w-[170px] h-[50px] rounded-[4px] group  justify-center items-center  gap-3 border-3 border-[#FFE7D6] hover:border-[#FA8232] " to="">
              <span className="font-[Public_Sans] text-[#f4924c] group-hover:text-[#FA8232] font-[700] text-[14px] leading-[48px] tracking-[1.2%]">
                Read more
              </span>
              <FaArrowRightLong className=" text-[#f4924c]  group-hover:text-[#FA8232]" />
            </Link>
          </li>
          <li className="bg-[white] p-[30px] group rounded-[4px] ">
            <div className="w-full h-[240px] rounded-[4px] overflow-hidden ">
              <img
                className="w-full h-full object-cover group-hover:scale-120 transition-transform ease-in-out duration-300 "
                src="/images/tel.jpg"
                alt="Smartwach"
              />
            </div>
            <div className="flex gap-3 py-[10px] pt-[20px] ">
              <div className="flex items-center gap-2">
                <PiUserCircle className="text-[#FA8232] text-[23px]  " />
                <span className="font-[Public_Sans] text-[#475156] text-center font-[400] text-[14px] leading-[20px] tracking-[0px]">
                  Kristin
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PiCalendarBlank className="text-[#FA8232] text-[23px] " />
                <span className="font-[Public_Sans] text-[#475156] text-center font-[400] text-[14px] leading-[20px] tracking-[0px]">
                  19Dec, 2013
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PiChatCircleDots className="text-[#FA8232] text-[23px] " />
                <span className="font-[Public_Sans] text-[#475156] text-center font-[400] text-[14px] leading-[20px] tracking-[0px]">
                  453
                </span>
              </div>
            </div>
            <h3 className="font-[Public_Sans] text-[black] font-[500] text-[18px] leading-[20px] tracking-[0px]">
                Curabitur massa orci, consectetur et blandit ac, auctor et tellus.
            </h3>
            <p className="font-[Public_Sans] py-[20px] text-[#77878F] font-[400] text-[16px] leading-[24px] tracking-[0px]">
                Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.
            </p>
            <Link className="flex w-[170px] h-[50px] rounded-[4px] group  justify-center items-center  gap-3 border-3 border-[#FFE7D6] hover:border-[#FA8232] " to="">
              <span className="font-[Public_Sans] text-[#f4924c] group-hover:text-[#FA8232] font-[700] text-[14px] leading-[48px] tracking-[1.2%]">
                Read more
              </span>
              <FaArrowRightLong className=" text-[#f4924c]  group-hover:text-[#FA8232]" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Latest;
