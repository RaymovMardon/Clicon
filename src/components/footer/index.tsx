import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"

function Footer() {
return (
<div className="bg-[#191C1F] ">
  <div className="container flex justify-between py-[60px] mx-auto max-w-[1280px] ">
    <div className="">
      <Link to='/'>
      <img src="/images/footer_logo.svg" alt="Footer logo" />
      </Link>
      <div className="w-[250px] flex flex-col gap-3 ">
        <span className="font-[Public_Sans] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#77878F] ">
          Customer Supports:
        </span>
        <a className="font-[Public_Sans] font-[500] text-[18px] leading-[24px] tracking-[0px] text-[white]"
          href="tel:(629) 555-0129">
          (629) 555-0129
        </a>
        <p className="font-[Public_Sans] font-[400] text-[16px] leading-[24px] tracking-[0px] text-[#ADB7BC]">
          4517 Washington Ave. Manchester, Kentucky 39495
        </p>
        <a className="font-[Public_Sans] font-[500] text-[16px] leading-[24px] tracking-[0px] text-[white]"
          href="mailto:info@kinbo.com">
          info@kinbo.com
        </a>
      </div>
    </div>
    <div className="w-[200px] ">
      <h3 className="font-[Public_Sans] font-[500] text-[16px] leading-[24px] uppercase tracking-[0px] text-[#FFFFFF]">
        Top Category
      </h3>
      <ul className="flex flex-col gap-2 py-3">
        <li>
          <Link className="group flex items-center transition-all duration-300" to='#'>
          <span
            className="group-hover:mr-2 w-0 h-[2px] bg-[#EBC80C] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
          <span
            className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px]  transition-all duration-500 ease-in-out text-[#929FA5] hover:text-[white] group-hover:translate-x-[2px]">Computer
            & Laptop</span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center transition-all duration-300" to='#'>
          <span
            className="group-hover:mr-2 w-0 h-[2px] bg-[#EBC80C] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
          <span
            className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px] transition-all duration-500 ease-in-out text-[#929FA5] hover:text-[white] group-hover:translate-x-[2px]">SmartPhone</span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center transition-all duration-300" to='#'>
          <span
            className="group-hover:mr-2 w-0 h-[2px] bg-[#EBC80C] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
          <span
            className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px] transition-all duration-500 ease-in-out text-[#929FA5] hover:text-[white] group-hover:translate-x-[2px]">Headphone</span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center transition-all duration-300" to='#'>
          <span
            className="group-hover:mr-2 w-0 h-[2px] bg-[#EBC80C] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
          <span
            className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px] transition-all duration-500 ease-in-out text-[#929FA5] hover:text-[white] group-hover:translate-x-[2px]">Accessories</span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center transition-all duration-300" to='#'>
          <span
            className="group-hover:mr-2 w-0 h-[2px] bg-[#EBC80C] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
          <span
            className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px] transition-all duration-500 ease-in-out text-[#929FA5] hover:text-[white] group-hover:translate-x-[2px]">Camera
            & Photo</span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center transition-all duration-300" to='#'>
          <span
            className="group-hover:mr-2 w-0 h-[2px] bg-[#EBC80C] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
          <span
            className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px] transition-all duration-500 ease-in-out text-[#929FA5] hover:text-[white] group-hover:translate-x-[2px]">TV
            & Homes</span>
          </Link>
        </li>
        <li>
          <Link className="group flex gap-2 items-center transition-all duration-300" to='#'>
          <p className="font-[Public_Sans] font-[500] text-[14px] leading-[20px] tracking-[0px] text-[#EBC80C]">
            Browse All Product
          </p>
          <FaArrowRightLong className="text-[#EBC80C]" />
          </Link>
        </li>
      </ul>
    </div>
    <div className="w-[170px] ">
      <h3 className="font-[Public_Sans] font-[500] text-[16px] leading-[24px] uppercase tracking-[0px] text-[#FFFFFF]">
        Quick links
      </h3>
      <ul className="flex flex-col gap-2 py-3">
        <li>
          <Link className="group flex items-center transition-all duration-300" to='#'>
          <span
            className="group-hover:mr-2 w-0 h-[2px] bg-[#EBC80C] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
          <span
            className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px]  transition-all duration-500 ease-in-out text-[#929FA5] hover:text-[white] group-hover:translate-x-[2px]">Shop
            Product</span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center transition-all duration-300" to='#'>
          <span
            className="group-hover:mr-2 w-0 h-[2px] bg-[#EBC80C] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
          <span
            className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px] transition-all duration-500 ease-in-out text-[#929FA5] hover:text-[white] group-hover:translate-x-[2px]">Shoping
            Cart</span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center transition-all duration-300" to='#'>
          <span
            className="group-hover:mr-2 w-0 h-[2px] bg-[#EBC80C] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
          <span
            className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px] transition-all duration-500 ease-in-out text-[#929FA5] hover:text-[white] group-hover:translate-x-[2px]">Wishlist</span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center transition-all duration-300" to='#'>
          <span
            className="group-hover:mr-2 w-0 h-[2px] bg-[#EBC80C] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
          <span
            className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px] transition-all duration-500 ease-in-out text-[#929FA5] hover:text-[white] group-hover:translate-x-[2px]">Compare</span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center transition-all duration-300" to='#'>
          <span
            className="group-hover:mr-2 w-0 h-[2px] bg-[#EBC80C] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
          <span
            className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px] transition-all duration-500 ease-in-out text-[#929FA5] hover:text-[white] group-hover:translate-x-[2px]">Track
            Order</span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center transition-all duration-300" to='#'>
          <span
            className="group-hover:mr-2 w-0 h-[2px] bg-[#EBC80C] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
          <span
            className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px] transition-all duration-500 ease-in-out text-[#929FA5] hover:text-[white] group-hover:translate-x-[2px]">Customer
            Help</span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center transition-all duration-300" to='#'>
          <span
            className="group-hover:mr-2 w-0 h-[2px] bg-[#EBC80C] transition-all duration-500 ease-in-out group-hover:w-[24px] "></span>
          <span
            className="font-[Public_Sans] font-[500] text-[14px] leading-[24px]  tracking-[0px] transition-all duration-500 ease-in-out text-[#929FA5] hover:text-[white] group-hover:translate-x-[2px]">About
            Us</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className="w-[180px]">
      <h3 className="font-[Public_Sans] font-[500] text-[16px] leading-[24px] uppercase tracking-[0px] text-[#FFFFFF]">
        Download APp
      </h3>
      <div className="flex flex-col gap-3 py-[15px] ">
        <div className="flex gap-3 border px-[20px] py-[15px] bg-[#303639] hover:bg-[#FA8232] rounded-[3px] ">
          <img src="/images/playmarket.svg" alt="Play Market" />
          <div className="">
            <p className="font-[Inter] text-white font-[400] text-[11px] leading-[13px] tracking-[0px] ">
              Get it now
            </p>
            <h4 className="font-[Inter] text-white font-[400] text-[14px] leading-[20px] tracking-[0px] ">
              Google Play
            </h4>
          </div>
        </div>
        <div className="flex gap-3 border px-[20px] py-[15px] bg-[#303639] hover:bg-[#FA8232] rounded-[3px] ">
          <img src="/images/Apple.svg" alt="Play Market" />
          <div className="">
            <p className="font-[Inter] text-white font-[400] text-[11px] leading-[13px] tracking-[0px] ">
              Get it now
            </p>
            <h4 className="font-[Inter] text-white font-[400] text-[14px] leading-[20px] tracking-[0px] ">
              App Store
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[330px] ">
      <h3 className="font-[Public_Sans] font-[500] text-[16px] leading-[24px] uppercase tracking-[0px] text-[#FFFFFF]">
      Popular Tag
      </h3>
      <div className="flex flex-wrap gap-2">
        <div className="inline-block border-2 border-[#303639] hover:border-white hover:bg-[#303639]  px-[10px] py-[2px] rounded-[2px] ">
          <Link to='#' className="font-[Public_Sans] text-white font-[500] text-[14px] leading-[20px] tracking-[0px] ">
          Game
          </Link>
        </div>
        <div className="inline-block border-2 border-[#303639] hover:border-white hover:bg-[#303639] px-[10px] py-[2px] rounded-[2px] ">
          <Link to='#' className="font-[Public_Sans] text-white font-[500] text-[14px] leading-[20px] tracking-[0px] ">
          iPhone
          </Link>
        </div>
        <div className="inline-block border-2 border-[#303639] hover:border-white hover:bg-[#303639]  px-[10px] py-[2px] rounded-[2px] ">
          <Link to='#' className="font-[Public_Sans] text-white font-[500] text-[14px] leading-[20px] tracking-[0px] ">
          TV
          </Link>
        </div>
        <div className="inline-block border-2 border-[#303639] hover:border-white hover:bg-[#303639] px-[10px] py-[2px] rounded-[2px] ">
          <Link to='#' className="font-[Public_Sans] text-white font-[500] text-[14px] leading-[20px] tracking-[0px] ">
          Asus Laptops
          </Link>
        </div>
        <div className="inline-block border-2 border-[#303639] hover:border-white hover:bg-[#303639] px-[10px] py-[2px] rounded-[2px] ">
          <Link to='#' className="font-[Public_Sans] text-white font-[500] text-[14px] leading-[20px] tracking-[0px] ">
          Macbook 
          </Link>
        </div>
        <div className="inline-block border-2 border-[#303639] hover:border-white hover:bg-[#303639] px-[10px] py-[2px] rounded-[2px] ">
          <Link to='#' className="font-[Public_Sans] text-white font-[500] text-[14px] leading-[20px] tracking-[0px] ">
          SSD
          </Link>
        </div>
        <div className="inline-block border-2 border-[#303639] hover:border-white hover:bg-[#303639] px-[10px] py-[2px] rounded-[2px] ">
          <Link to='#' className="font-[Public_Sans] text-white font-[500] text-[14px] leading-[20px] tracking-[0px] ">
          Graphics Card 
          </Link>
        </div>
        <div className="inline-block border-2 border-[#303639] hover:border-white hover:bg-[#303639] px-[10px] py-[2px] rounded-[2px] ">
          <Link to='#' className="font-[Public_Sans] text-white font-[500] text-[14px] leading-[20px] tracking-[0px] ">
          Power Bank 
          </Link>
        </div>
        <div className="inline-block border-2 border-[#303639] hover:border-white hover:bg-[#303639] px-[10px] py-[2px] rounded-[2px] ">
          <Link to='#' className="font-[Public_Sans] text-white font-[500] text-[14px] leading-[20px] tracking-[0px] ">
          Smart TV
          </Link>
        </div>
        <div className="inline-block border-2 border-[#303639] hover:border-white hover:bg-[#303639] px-[10px] py-[2px] rounded-[2px] ">
          <Link to='#' className="font-[Public_Sans] text-white font-[500] text-[14px] leading-[20px] tracking-[0px] ">
          Speaker
          </Link>
        </div>
        <div className="inline-block border-2 border-[#303639] hover:border-white hover:bg-[#303639] px-[10px] py-[2px] rounded-[2px] ">
          <Link to='#' className="font-[Public_Sans] text-white font-[500] text-[14px] leading-[20px] tracking-[0px] ">
          Tablet
          </Link>
        </div>
        <div className="inline-block border-2 border-[#303639] hover:border-white hover:bg-[#303639] px-[10px] py-[2px] rounded-[2px] ">
          <Link to='#' className="font-[Public_Sans] text-white font-[500] text-[14px] leading-[20px] tracking-[0px] ">
          Microwave
          </Link>
        </div>
        <div className="inline-block border-2 border-[#303639] hover:border-white transition ease-in-out  hover:bg-[#303639] px-[10px] py-[2px] rounded-[2px] ">
          <Link to='#' className="font-[Public_Sans] text-white font-[500] text-[14px] leading-[20px] tracking-[0px] ">
          Samsung
          </Link>
        </div>
      </div>
    </div>
  </div>
  <hr className="text-[#303639] " />
  <div className="container py-[20px] mx-auto max-w-[1280px] ">
      <p className="font-[Public_Sans] text-[#ADB7BC] text-center font-[400] text-[14px] leading-[20px] tracking-[0px] ">
      Kinbo - eCommerce Template © 2021. Design by Templatecookie
      </p>
  </div>
</div>
)
}

export default Footer