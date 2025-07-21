import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Hero() {
  const [current, setCurrent] = useState(0);
  const images = [
    {
      img: "/images/joistik.png",
      title: "Yangi kolleksiya 2025",
    },
    {
      img: "/images/joistik.png",
      title: "Yangi kolleksiya 2025",
    },
    {
      img: "/images/joistik.png",
      title: "Yangi kolleksiya 2025",
    },
  ];

  useEffect(() => {
    const interval:NodeJS.Timeout = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container mx-auto max-w-[1280px] ">
      <div className="">
        <div className="flex py-[30px] gap-4">
          <div className="w-full mx-auto ">
            <div className="relative w-full h-[520px] overflow-hidden rounded-xl shadow-lg">
              {images.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                    index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <div className="absolute z-10 right-10 top-[60px] w-[350px] h-[350px] ">
                    <img
                      src={slide.img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#F2F4F5] "></div>
                  <div className="absolute top-[150px] left-12 ">
                    <a
                      className="group flex items-center transition-all duration-300"
                      href="#"
                    >
                      <span className="group-hover:mr-2 w-0 h-[2px] bg-[#2484C2] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
                      <span className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px] transition-all duration-500 ease-in-out text-[black] hover:text-[#2484C2] group-hover:translate-x-[2px]">
                        THE BEST PLACE TO PLAY
                      </span>
                    </a>
                    <h2 className="font-[Public_Sans] py-[10px] text-[black] font-[600] text-[48px] leading-[56px] tracking-[0px]  ">
                      Xbox Consoles
                    </h2>
                    <p className="font-[Public_Sans] pb-[20px] w-[370px] font-[400] text-[18px] leading-[24px] tracking-[0px] ">
                      Save up to 50% on select Xbox games. Get 3 months of PC
                      Game Pass for $2 USD.
                    </p>
                    <Link
                      className="bg-[#FA8232] hover:bg-[#F2F4F5] border-2 group border-[#F2F4F5] hover:border-[#FA8232] inline-flex rounded-[3px] text-[white] uppercase items-center gap-[10px]  px-[20px] py-[8px]  "
                      to="/shop"
                    >
                      <span className="font-[Public_Sans] group-hover:text-[black] text-[14px] font-[700] leading-[32px] tarcking-[1.2%]  ">
                        Shop Now
                      </span>
                      <FaArrowRightLong className="group-hover:text-[black]" />
                    </Link>
                  </div>
                </div>
              ))}
              <div className="absolute bottom-10 left-[80px] -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === current ? "bg-black" : "bg-[#ADB7BC] "
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="relative overflow-hidden w-[450px] h-[250px] bg-black rounded-[6px] px-[40px] py-[60px] ">
              <p className="font-[Public_Sans] text-[#EBC80C] text-[14px] font-[500] leading-[20px] tracking-[0px] uppercase ">
                Summer Sales
              </p>
              <h3 className="font-[Public_Sans] w-[150px] pb-[20px] pt-[5px] font-[600] text-[24px] leading-[32px] tracking-[0px] text-[white] ">
                New Google Pixel 6 Pro
              </h3>
              <Link
                className="bg-[#FA8232] hover:bg-[black] border-2 border-black hover:border-[#FA8232] inline-flex rounded-[3px] text-[white] uppercase items-center gap-[10px]  px-[20px] py-[8px]  "
                to="/shop"
              >
                <span className="font-[Public_Sans] text-[14px] font-[700] leading-[32px] tarcking-[1.2%]  ">
                  Shop Now
                </span>
                <FaArrowRightLong />
              </Link>
              <div className="bg-[#EFD33D] px-[10px] py-[5px] rounded-[3px] absolute z-10 top-6 right-6 ">
                <p className="font-[Public_Sans] font-[600] text-[16px] leading-[24px] tracking-[0px]  ">
                  29% OFF
                </p>
              </div>
              <div className="absolute top-[40px] z-0 w-[300px] h-[350px] right-[-60px]  ">
                <img
                  className="w-full h-full object-cover "
                  src="/images/tel.png"
                  alt="Images tel"
                />
              </div>
            </div>
            <div className=" flex flex-row-reverse justify-between  overflow-hidden w-[450px] h-[250px] bg-[#F2F4F5] rounded-[6px] px-[40px] py-[40px]">
              <div className="w-[150px]">
                <h3 className="font-[Public_Sans]  pb-[10px] pt-[5px] font-[600] text-[24px] leading-[32px] tracking-[0px] text-[black]">
                  Xiaomi FlipBuds Pro
                </h3>
                <p className="font-[Public_Sans] pb-[10px] text-[#2DA5F3] font-[600] text-[18px] leading-[24px] tracking-[0px]  ">
                  $299 USD
                </p>
                <Link
                  className="bg-[#FA8232] hover:bg-[#F2F4F5] border-2 border-[#F2F4F5] hover:border-[#FA8232] group inline-flex rounded-[3px] text-[white] uppercase items-center gap-[10px]  px-[20px] py-[8px]  "
                  to="/shop"
                >
                  <span className="font-[Public_Sans] group-hover:text-[black] text-[14px] font-[700] leading-[32px] tarcking-[1.2%]  ">
                    Shop Now
                  </span>
                  <FaArrowRightLong className="group-hover:text-[black]" />
                </Link>
              </div>
              <div className="w-[170px] h-[170px] ">
                <img className="w-full h-full object-cover" src="/images/airpad.png" alt="Airpods" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
