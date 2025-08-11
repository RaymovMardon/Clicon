import axios from "axios";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  FaCheck,
  FaFacebook,
  FaInstagram,
  FaReddit,
  FaRegHeart,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import {
  PiArrowsCounterClockwise,
  PiHeadphones,
  PiInfo,
  PiMapPinLine,
  PiPhoneCall,
  PiUserBold,
} from "react-icons/pi";
import { Link } from "react-router-dom";

type LangValue = "man" | "woman" | "other";
type CurrencyValue = "usd" | "eur";
interface LangOption {
  label: string;
  short: string;
  value: LangValue;
  icon: string;
}

interface CurrencyOption {
  label: string;
  short: string;
  value: CurrencyValue;
}
const options: LangOption[] = [
  { label: "English", short: "Eng", value: "man", icon: "/images/engFlag.svg" },
  {
    label: "Mandarin",
    short: "Man",
    value: "woman",
    icon: "/images/manFlag.svg",
  },
  {
    label: "Russian",
    short: "Rus",
    value: "other",
    icon: "/images/rusFlag.svg",
  },
];
const infor: CurrencyOption[] = [
  { label: "Dollar (USD)", short: "USD", value: "usd" },
  { label: "Euro (EUR)", short: "EUR", value: "eur" },
];
interface Category {
  label: string;
  subItems: string[];
}
interface Product {
  id: number;
  title: string;
  thumbnail: string;
}
const categories: Category[] = [
  {
    label: "Computer & Laptop",
    subItems: ["Asus", "Dell", "HP", "Macbook"],
  },
  {
    label: "Computer Accessories",
    subItems: ["Keyboard", "Mouse", "Webcam"],
  },
  {
    label: "SmartPhone",
    subItems: ["Apple", "Samsung", "Xiaomi", "Realme"],
  },
  {
    label: "Headphone",
    subItems: ["JBL", "Sony", "Beats"],
  },
  {
    label: "Mobile Accessories",
    subItems: ["Powerbank", "Chargers", "Cables"],
  },
  {
    label: "Gaming Console",
    subItems: ["Xbox", "PlayStation", "Nintendo"],
  },
  {
    label: "Camera & Photo",
    subItems: ["Canon", "Nikon", "Sony"],
  },
  {
    label: "TV & Home Appliances",
    subItems: ["LG", "Samsung", "Panasonic"],
  },
  {
    label: "Watches & Accessories",
    subItems: ["Casio", "Fossil", "Apple Watch"],
  },
  {
    label: "GPS & Navigation",
    subItems: ["Garmin", "TomTom", "Magellan"],
  },
  {
    label: "Wearable Technology",
    subItems: ["Smartbands", "VR Headsets", "Smart Glasses"],
  },
];

function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [isValute, setValute] = useState(false);
  const [selectedValute, setSelectedValute] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const GetItem = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetItem();
  }, []);
  useEffect(() => {
    if (search.trim()) {
      const result = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(result);
    } else {
      setFiltered([]);
    }
  }, [search, products]);
  const handleSelectLang = (value: string) => {
    setSelectedLang(value);
    setIsLangOpen(false);
  };
  const handleSelectValute = (value: string) => {
    setSelectedValute(value);
    setValute(false);
  };
  return (
    <>
      <div className="sticky top-0 z-50 ">
        <div className="bg-[#1B6392] ">
          <div className="border-b-2 border-[#ffffff25] ">
            <div className="container mx-auto max-w-[1280px] ">
              <div className="flex items-center py-[8px] justify-between">
                <p className="font-[Public Sans] font-normal text-[#FFFFFF] not-italic text-[14px] leading-[20px] tracking-normal ">
                  Welcome to Clicon online eCommerce store.
                </p>
                <div className="flex gap-5 ">
                  <div className="flex items-center gap-2 ">
                    <p className="font-[Public_sans] text-white font7-[400] text-[14px] leading-[20px] tracking-[0px] ">
                      Follow us:
                    </p>
                    <FaTwitter className="text-white" />
                    <FaFacebook className="text-white" />
                    <FaPinterestP className="text-white" />
                    <FaReddit className="text-white" />
                    <FaYoutube className="text-white" />
                    <FaInstagram className="text-white" />
                  </div>
                  <div className="border-l-2 flex justify-between gap-4 pl-[20px] border-[#ffffff22] ">
                    <div className="relative inline-block text-left">
                      <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="inline-flex justify-between
                      items-center
                      font-[Public_sans] text-[14px] font-[400] leading-[20px] tracking-[0px] w-[55px] py-[5px]
                      text-white
                      bg-[#1B6392] rounded-md focus:outline-none"
                      >
                        {selectedLang
                          ? options.find((o) => o.value === selectedLang)?.short
                          : "Eng"}
                        <ChevronDown
                          className={`text-[#a2a2a2] h-5 w-5 transition-transform duration-200 ${
                            isLangOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isLangOpen && (
                        <ul className="absolute z-10 left-[-100px] mt-1 min-w-[150px] bg-white border border-gray-200 rounded-md shadow-md">
                          {options.map((option) => (
                            <li
                              key={option.value}
                              onClick={() => handleSelectLang(option.value)}
                              className={`px-3 py-1 flex justify-between items-center cursor-pointer hover:bg-gray-100
                        ${
                          selectedLang === option.value
                            ? "text-[black] font-semibold"
                            : "text-[#5F6C72] "
                        }`}
                            >
                              <div className="flex items-center gap-2">
                                <img
                                  src={option.icon}
                                  alt={option.label}
                                  className="w-5 h-5 rounded-full"
                                />
                                <span className="text-[14px] font-medium">
                                  {option.label}
                                </span>
                              </div>
                              {selectedLang === option.value && (
                                <FaCheck className="text-[11px] text-[#FA8232] " />
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="relative inline-block text-left">
                      <button
                        onClick={() => setValute(!isValute)}
                        className="inline-flex justify-between items-center
                      font-[Public_sans] w-[55px] text-[14px] font-[400] leading-[20px] tracking-[0px] py-[5px]
                      text-white
                      bg-[#1B6392] rounded-md focus:outline-none"
                      >
                        {selectedValute
                          ? infor.find((o) => o.value === selectedValute)?.short
                          : "USD"}
                        <ChevronDown
                          className={`text-[#a2a2a2] h-5 w-5 transition-transform duration-200 ${
                            isValute ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isValute && (
                        <ul className="absolute z-10 left-[-15px] mt-1 min-w-[140px] bg-white border border-gray-200 rounded-md shadow-md">
                          {infor.map((infor) => (
                            <li
                              key={infor.value}
                              onClick={() => handleSelectValute(infor.value)}
                              className={`flex justify-between items-center px-3 py-1 font-[Public_Sans] text-[14px]
                        font-[400] cursor-pointer rounded-md
                        hover:bg-gray-100
                        ${
                          selectedValute === infor.value
                            ? "text-yellow-500 font-semibold"
                            : "text-[#5F6C72] "
                        }
                        `}
                            >
                              {infor.label}
                              {selectedValute === infor.value && (
                                <FaCheck className="text-[11px] text-[#FA8232] " />
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto max-w-[1280px]  ">
            <div className="flex justify-between items-center py-[15px] ">
              <div className="">
                <Link to="/">
                  <img
                    className="max-w-[150px]"
                    src="/images/Logo.svg"
                    alt="Sayt logosi"
                  />
                </Link>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="relative w-[700px] h-[45px] rounded-[3px] bg-white"
              >
                <div className="px-[10px] w-full h-full flex justify-between items-center ">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    className="font-[Public_sans] text-[14px] text-[#77878F] font-[400] outline-none w-full "
                    type="text"
                    value={search}
                    placeholder="Search for anything..."
                  />
                  <button className="w-[25px] h-[25px] ">
                    <img src="/images/search.svg" alt="search" />
                  </button>
                </div>
                {filtered.length > 0 && (
                  <div className="absolute top-[50px]  w-full  bg-white border border-gray-200 rounded-md shadow-md max-h-[250px] overflow-y-auto z-50">
                    {filtered.map((product) => (
                      <Link
                        to={`/product/${product.id}`}
                        key={product.id}
                        onClick={() => setSearch("")}
                        className="flex items-center gap-4 px-4 py-2 hover:bg-gray-100"
                      >
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="w-10 h-10 object-cover rounded"
                        />
                        <span className="text-sm text-black">
                          {product.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </form>
              <div className="flex items-center gap-5">
                <Link to="/card">
                  <FiShoppingCart className="text-[28px] text-white" />
                </Link>
                <Link to="/favorite">
                  <FaRegHeart className="text-[28px] text-white" />
                </Link>
                <Link to="/user">
                  <PiUserBold className="text-[28px] text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md                                                                                                                                                                                                                                                                                                                                                                                                                  qQQQQq">
          <div className="container py-[10px] flex justify-between mx-auto max-w-[1280px] ">
            <div className="flex gap-5">
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex justify-between items-center font-[Public_Sans] text-[14px] font-medium bg-[#F97316]
                text-white px-4 py-2
                rounded-md hover:bg-orange-500"
                >
                  All Category
                  <ChevronDown
                    className={` ml-2 h-4 w-4 transform transition-transform duration-500 ease-in-out ${
                      open ? "rotate-180" : ""
                    } `}
                  />
                </button>

                {open && (
                  <div className="absolute left-0 top-full mt-1 w-[250px] bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <ul className="p-2 grid gap-1">
                      {categories.map((cat) => (
                        <li key={cat.label} className="group relative">
                          <div className="flex items-center justify-between px-3 py-2 text-[14px] font-[Public_Sans] leading-[20px] tracking-[0px] hover:bg-gray-100 text-gray-700 hover:text-black text-sm cursor-pointer">
                            {cat.label}
                            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </div>

                          <ul className="absolute top-0 left-full min-w-[180px] bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
                            {cat.subItems.map((sub) => (
                              <li
                                key={sub}
                                className="px-3 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer"
                              >
                                {sub}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex">
                <Link
                  className="flex justify-center items-center gap-1 group"
                  to="/track-order"
                >
                  <PiMapPinLine className="w-[24px] h-[24px] group-hover:text-[#FA8232] text-[#5F6C72] " />
                  <span className="text-[14px] font-[500] font-[Public_Sans] text-[#5F6C72] group-hover:text-[#FA8232] ">
                    Track Order
                  </span>
                </Link>
              </div>
              <div className="flex">
                <Link
                  className="flex justify-center items-center group gap-1"
                  to="/track-order"
                >
                  <PiArrowsCounterClockwise className="w-[24px] h-[24px] group-hover:text-[#FA8232] text-[#5F6C72] " />
                  <span className="text-[14px] font-[500] font-[Public_Sans] text-[#5F6C72] group-hover:text-[#FA8232] ">
                    Compare
                  </span>
                </Link>
              </div>
              <div className="flex">
                <Link
                  className="flex justify-center items-center group gap-1"
                  to="/support"
                >
                  <PiHeadphones className="w-[24px] h-[24px] group-hover:text-[#FA8232] text-[#5F6C72] " />
                  <span className="text-[14px] font-[500] font-[Public_Sans] text-[#5F6C72] group-hover:text-[#FA8232] ">
                    Customer Support
                  </span>
                </Link>
              </div>
              <div className="flex">
                <Link
                  className="flex justify-center items-center group gap-1"
                  to="/faq"
                >
                  <PiInfo className="w-[24px] h-[24px] group-hover:text-[#FA8232] text-[#5F6C72] " />
                  <span className="text-[14px] font-[500] font-[Public_Sans] text-[#5F6C72] group-hover:text-[#FA8232] ">
                    Need Help
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex">
              <a
                className="flex justify-center items-center group gap-1"
                href="tel:+1-202-555-0104"
              >
                <PiPhoneCall className="w-[24px] h-[24px] group-hover:text-[#FA8232] text-[#5F6C72] " />
                <span className="text-[14px] font-[500] font-[Public_Sans] text-[#5F6C72] group-hover:text-[#FA8232] ">
                  +1-202-555-0104
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
