import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function HomeSlider() {
  interface Product {
    id: number;
    title: string;
    thumbnail: string;
  }
  const [selected, setSelected] = useState<Product[]>([]);
  const [index, setIndex] = useState(0);
  const card = 216;
  const scrollRight = () => {
    if (index < selected.length - 5) {
      setIndex((prev) => prev + 1);
    }
  };

  const scrollLeft = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const GetSlider = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products/category/smartphones"
      );
      console.log(res.data.products);
      setSelected(res?.data?.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetSlider();
  }, []);

  const uzunCard = [...selected,...selected,...selected]

  return (
    <div>
      <div className="container relative mx-auto max-w-[1280px] ">
        <div className="relative  flex items-center bg-white py-[20px] ">
          <div className="absolute left-[-15px] -translate-y-0.5 z-10">
            <button
              className=" bg-orange-400 text-white w-[30px] h-[30px] flex justify-center items-center rounded-[30px] "
              onClick={scrollLeft}
            >
              <FaArrowLeftLong />
            </button>
          </div>
          <div className="absolute right-[-15px] -translate-y-0.5 z-10">
            <button
              className=" bg-orange-400 text-white w-[30px] h-[30px] flex justify-center items-center rounded-[30px] "
              onClick={scrollRight}
            >
              <FaArrowRightLong />
            </button>
          </div>
          <div className="overflow-hidden h-[230px] flex items-center ">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * card}px)`,
              }}
            >
              {uzunCard.map((product) => (
                <div
                  key={product.id}
                  className="w-[200px] hover:scale-105 h-[210px] flex flex-col justify-center items-center py-[10px] flex-shrink-0 rounded-xl shadow bg-gray-100"
                >
                  <div className="w-[150px] h-[150px] ">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="p-2 text-center font-medium text-sm">
                    {product.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
