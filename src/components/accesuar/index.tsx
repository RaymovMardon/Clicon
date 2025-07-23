import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
  stock: number;
  rating: number;
}
function Accesuar() {
  const [product, setProduct] = useState<Product[]>([]);
  const GetItem = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products/category/mobile-accessories"
      );
      console.log(res.data);
      setProduct(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetItem();
  }, []);

  const flashSale = product.slice(0, 3);
  const bestSellers = [...product]
    .sort((a, b) => b.stock - a.stock)
    .slice(0, 3);

  const topRated = [...product].sort((a, b) => b.rating - a.rating).slice(0, 5);
  const newArrival = [...product].reverse().slice(0, 5);
  return (
    <div>
      <div className="container mx-auto py-[60px] max-w-[1280px] grid grid-cols-4 gap-2 p-4">
        <div className="flex flex-col gap-4">
          <h4 className="font-[Public_Sans] font-[600] text-[16px] leading-[24px] tracking-[0px] ">
            FLASH SALE TODAY
          </h4>
          {flashSale
            .filter((p) => p.discountPercentage > 10 && p.stock > 0)
            .map((p) => (
              <div
                key={p.id}
                className="border-2 group border-[#E4E7E9] flex gap-6 items-center p-2 rounded-[4px] "
              >
                <div className="w-[80px] group-hover:scale-115 transition-transform ease-in-out duration-300 h-[80px] ">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="">
                  <p className="font-[Public_Sans] font-[400] text-[14px] leading-[20px] tracking-[0px] w-[180px] line-clamp-2">
                    {p.description}
                  </p>
                  <p className="font-[Public_Sans] font-[600] text-[14px] leading-[20px] text-[#2DA5F3] tracking-[0px]">${p.price}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-[Public_Sans] font-[600] text-[16px] leading-[24px] tracking-[0px] ">
            BEST SELLERS
          </h4>
          {bestSellers.map((p) => (
            <div
              key={p.id}
              className="border-2 border-[#E4E7E9] group flex gap-6 items-center p-2 rounded-[4px] "
            >
              <div className="w-[80px] h-[80px] group-hover:scale-115 transition-transform ease-in-out duration-300 ">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="">
                <p className="font-[Public_Sans] font-[400] text-[14px] leading-[20px] tracking-[0px] w-[180px] line-clamp-2">
                  {p.description}
                </p>
                <p className="font-[Public_Sans] font-[600] text-[14px] leading-[20px] text-[#2DA5F3] tracking-[0px]">${p.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-[Public_Sans] font-[600] text-[16px] leading-[24px] tracking-[0px] ">
            TOP RATED
          </h4>
          {topRated
            .filter((p) => p.discountPercentage > 10 && p.stock > 0)
            .map((p) => (
              <div
                key={p.id}
                className="border-2 border-[#E4E7E9] group flex gap-6 items-center p-2 rounded-[4px] "
              >
                <div className="w-[80px] h-[80px] group-hover:scale-115 transition-transform ease-in-out duration-300">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="">
                  <p className="font-[Public_Sans] font-[400] text-[14px] leading-[20px] tracking-[0px] w-[180px] line-clamp-2">
                    {p.description}
                  </p>
                  <p className="font-[Public_Sans] font-[600] text-[14px] leading-[20px] text-[#2DA5F3] tracking-[0px]">${p.price}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-[Public_Sans] font-[600] text-[16px] leading-[24px] tracking-[0px] ">
            NEW ARRIVAL
          </h4>
          {newArrival
            .filter((p) => p.discountPercentage > 10 && p.stock > 0)
            .map((p) => (
              <div
                key={p.id}
                className="border-2 border-[#E4E7E9] group flex gap-6 items-center p-2 rounded-[4px] "
              >
                <div className="w-[80px] h-[80px] group-hover:scale-115 transition-transform ease-in-out duration-300">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="">
                  <p className="font-[Public_Sans] font-[400] text-[14px] leading-[20px] tracking-[0px] w-[180px] line-clamp-2">
                    {p.description}
                  </p>
                  <p className="font-[Public_Sans] font-[600] text-[14px] leading-[20px] text-[#2DA5F3] tracking-[0px]">${p.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Accesuar;
