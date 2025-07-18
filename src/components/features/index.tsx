import { PiCreditCard, PiHeadphones, PiPackageDuotone, PiTrophyLight } from "react-icons/pi";

function Features() {
  return (
    <div>
      <div className="container py-[10px]  mx-auto max-w-[1280px] ">
        <div className="grid grid-cols-4  border-2 border-[#E4E7E9] rounded-[6px]  py-[20px] ">
          <div className="flex py-[5px] px-[40px] items-center gap-4 border-r-2 border-[#E4E7E9] ">
            <PiPackageDuotone className="w-[40px] h-[40px] " />
            <div className="">
              <h3 className="font-[Public_Sans] font-[500] text-[14px] leading-[20px] tracking-[0px] uppercase ">
                Fasted Delivery
              </h3>
              <p className="font-[Public_Sans] font-[400] text-[14px] leading-[20px] tracking-[0px]">
              Delivery in 24/H
              </p>
            </div>
          </div>
          <div className="flex py-[5px] px-[40px] items-center gap-4 border-r-2 border-[#E4E7E9]">
            <PiTrophyLight className="w-[40px] h-[40px] " />
            <div className="">
              <h3 className="font-[Public_Sans] font-[500] text-[14px] leading-[20px] tracking-[0px] uppercase ">
                Fasted Delivery
              </h3>
              <p className="font-[Public_Sans] font-[400] text-[14px] leading-[20px] tracking-[0px]">
              Delivery in 24/H
              </p>
            </div>
          </div>
          <div className="flex py-[5px] px-[40px] items-center gap-4 border-r-2 border-[#E4E7E9]">
            <PiCreditCard className="w-[40px] h-[40px] " />
            <div className="">
              <h3 className="font-[Public_Sans] font-[500] text-[14px] leading-[20px] tracking-[0px] uppercase ">
                Fasted Delivery
              </h3>
              <p className="font-[Public_Sans] font-[400] text-[14px] leading-[20px] tracking-[0px]">
              Delivery in 24/H
              </p>
            </div>
          </div>
          <div className="flex py-[5px] px-[40px] items-center gap-4 ">
            <PiHeadphones className="w-[40px] h-[40px] " />
            <div className="">
              <h3 className="font-[Public_Sans] font-[500] text-[14px] leading-[20px] tracking-[0px] uppercase ">
                Fasted Delivery
              </h3>
              <p className="font-[Public_Sans] font-[400] text-[14px] leading-[20px] tracking-[0px]">
              Delivery in 24/H
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
