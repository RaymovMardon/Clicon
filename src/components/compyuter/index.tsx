import axios from "axios";
import { LucideEye, LucideHeart, LucideShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  rating: number;
}

function CompyuterAcsesuar() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setFilteredProducts(res.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async (category: string) => {
    setLoading(true);
    try {
      if (category === "all") {
        await fetchAllProducts();
      } else {
        const res = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        );
        setFilteredProducts(res.data.products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const renderStars = (rating: number) => {
    const rounded = Math.round(rating);
    return (
      <div className="flex gap-[2px] text-yellow-400 text-sm mb-1">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>
            {i < rounded ? (
              <FaStar className="text-[#FA8232]" />
            ) : (
              <FaRegStar />
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="container flex gap-6 py-[20px] mx-auto max-w-[1280px]">
        <div className="w-full ">
          <div className="flex justify-between">
            <h4 className="font-[Public_Sans] font-[600] text-[24px] leading-[32px]">
              Computer Accessories
            </h4>
            <ul className="flex flex-wrap items-center gap-4">
              {[
                { label: "All Product", value: "all" },
                { label: "Tops", value: "tops" },
                { label: "Motorcycle", value: "motorcycle" },
                { label: "Home Decoration", value: "home-decoration" },
                { label: "Groceries", value: "groceries" },
              ].map((cat) => (
                <li key={cat.value} className="group">
                  <button
                    onClick={() => handleFilter(cat.value)}
                    className="font-[Public_Sans] font-[600] text-[#5F6C72] hover:text-black text-[14px] relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FA8232] after:transition-all after:duration-500 group-hover:after:w-full group-hover:after:left-0"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/shop"
                  className="group flex items-center gap-2 w-fit"
                >
                  <p className="font-[Public_Sans] font-[600] text-[#FA8232] text-[14px] relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#FA8232] after:transition-all after:duration-500 group-hover:after:w-full group-hover:after:left-0">
                    Browse All Product
                  </p>
                  <FaArrowRightLong className="text-[#FA8232]" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 py-[5px] md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2">
            {loading ? (
              <div className="w-full col-span-4 h-[650px] flex items-center justify-center">
                <div className="loader"></div>
              </div>
            ) : (
              filteredProducts.slice(0, 8).map((item) => (
                <div
                  key={item.id}
                  className="group relative border-2 border-[#E4E7E9] p-4 rounded shadow hover:shadow-lg transition-all"
                >
                  <div className="relative group flex items-center justify-center w-full h-[200px] mb-3 rounded-md overflow-hidden">
                    <div className="w-[160px] h-[160px]">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="group-hover:scale-115 transition-transform ease-in-out duration-300 w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 flex rounded-[5px] items-center justify-between px-3 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
                      <Link
                        className="flex items-center group justify-center bg-[white] hover:bg-[#FA8232] translate-x-[-70px] group-hover:translate-x-[0px] transition-transform ease-in-out duration-400 rounded-[50%] w-[50px] h-[50px]"
                        to="#"
                      >
                        <LucideHeart
                          size={24}
                          className="text-[#191C1F]  transition-colors duration-300"
                        />
                      </Link>
                      <Link
                        className="flex scale-0 group-hover:scale-100 ease-in-out duration-500 items-center group justify-center bg-[white] hover:bg-[#FA8232] rounded-[50%] w-[50px] h-[50px]"
                        to="#"
                      >
                        <LucideShoppingCart
                          size={24}
                          className="text-[#191C1F]"
                        />
                      </Link>
                      <Link
                        className="flex items-center group justify-center bg-[white] hover:bg-[#FA8232] rounded-[50%] w-[50px] h-[50px] translate-x-[70px] group-hover:translate-x-[0px] transition-transform ease-in-out duration-400 "
                        to={`/product/${item.id}`}
                      >
                        <LucideEye size={24} className="text-[#191C1F]" />
                      </Link>
                    </div>
                  </div>
                  {renderStars(item.rating)}
                  <h4 className="font-[Public_Sans] text-[16px] text-[#191C1F] font-[500] leading-[24px] mb-1 truncate">
                    {item.title}
                  </h4>
                  <p className="font-[Public_Sans] text-[14px] text-[#2DA5F3] font-[600]">
                    ${item.price}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="w-[300px] py-[25px] group flex flex-col items-center px-[20px] bg-[#F7E99E] rounded-[4px] ">
            <div className="w-[165px] h-[165px]  ">
              <img
                className="group-hover:scale-115 transition-transform ease-in-out duration-300 w-full h-full object-cover"
                src="/images/airpads.png"
                alt="Airpads"
              />
            </div>
            <h4 className="font-[Public_Sans] text-center font-[600] text-[28px] leading-[32px] tracking-[0px] ">
              Xiaomi True Wireless Earbuds
            </h4>
            <p className="font-[Public_Sans] py-[5px] text-[#475156] text-center font-[500] text-[16px] leading-[24px] tracking-[0px] ">
              Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
            </p>
            <div className="text-center pt-[10px] pb-[20px] flex gap-2 items-center justify-center">
              <span className="font-[Public_Sans] text-[#475156] text-center font-[400] text-[14px] leading-[20px] tracking-[0px]">
                Only for:
              </span>
              <span className="bg-white px-[5px] py-[3px] rounded-[4px] font-[Public_Sans] text-[#475156] text-center font-[600] text-[16px] leading-[24px] tracking-[0px]">
                $299 USD
              </span>
            </div>
            <Link
              to="/shop"
              className="bg-[#FA8232] hover:bg-[#F2F4F5] border-2 group border-[#FA8232] hover:border-[#FA8232] inline-flex rounded-[3px] text-white uppercase items-center gap-[10px] px-[30px] py-[8px]"
            >
              <span className="font-[Public_Sans] group-hover:text-black text-[14px] font-[700]">
                Shop Now
              </span>
              <FaArrowRightLong className="group-hover:text-black" />
            </Link>
          </div>
          <div className="bg-[#124261] rounded-[4px] flex flex-col justify-center py-[25px] items-center ">
            <span className="bg-[#FFFFFF1F] text-[white] py-[5px] px-[15px] rounded-[4px] font-[Public_Sans] font-[600] text-[14px] leading-[20px] tracking-[0px">
              SUMMER SALES
            </span>
            <h4 className="font-[Public_Sans] font-[600] text-[28px] leading-[32px] tracking-[0px] py-[15px] text-[white] ">
              37% DISCOUNT
            </h4>
            <p className=" text-[white] py-[10px] pb-[20px] font-[Public_Sans] font-[400] text-[18px] leading-[24px] tracking-[0px]">
              only for{" "}
              <span className="font-[Public_Sans] font-[600] text-[18px] leading-[24px] text-[#EFD33D] tracking-[0px]">
                SmartPhone
              </span>{" "}
              product.
            </p>
            <Link
              to="/shop"
              className="bg-[#2DA5F3] hover:bg-[#F2F4F5] border-2 group border-[#2DA5F3] hover:border-[#2DA5F3] inline-flex rounded-[3px] text-white uppercase items-center gap-[10px] px-[30px] py-[8px]"
            >
              <span className="font-[Public_Sans] group-hover:text-black text-[14px] font-[700]">
                Shop Now
              </span>
              <FaArrowRightLong className="group-hover:text-black" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompyuterAcsesuar;
