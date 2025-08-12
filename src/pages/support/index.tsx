import img1 from "../../../public/images/support.jpg"
import img2 from "../../../public/images/call.png"
import img3 from "../../../public/images/msg.png"
import { FaTruck, FaKey, FaCreditCard, FaUser, FaHeart, FaBoxOpen, FaShoppingCart, FaStore } from "react-icons/fa";
function Supportpage() {
    const items:any = [
        { icon: <FaTruck className="text-orange-500 text-xl" />, label: "Track Order" },
        { icon: <FaKey className="text-orange-500 text-xl" />, label: "Reset Password" },
        { icon: <FaCreditCard className="text-orange-500 text-xl" />, label: "Payment Option" },
        { icon: <FaUser className="text-orange-500 text-xl" />, label: "User & Account" },
        { icon: <FaHeart className="text-orange-500 text-xl" />, label: "Wishlist & Compare" },
        { icon: <FaBoxOpen className="text-orange-500 text-xl" />, label: "Shipping & Billing" },
        { icon: <FaShoppingCart className="text-orange-500 text-xl" />, label: "Shopping Cart & Wallet" },
        { icon: <FaStore className="text-orange-500 text-xl" />, label: "Sell on Gicon" },
      ];
      const topics: string[][] = [
        ["How do I return my item?", "What is Clicon’s Return Policy?", "How long is the refund process?"],
        ["What are the ‘Delivery Timelines’?", "What is ‘Discover Your Dance Campaign 2022’?", "What is the Voucher & Gift Offer in this Campaign?"],
        ["How to cancel Clicon Order", "Ask the Digital and Device Community", "How to change my shop name?"],
      ];
    return (
        <>
        <div className="bg-[#F2F4F5] h-[62px]"></div>
        <section className="w-full bg-white py-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 px-4">
        
        {/* Левая часть */}
        <div className="flex-1 space-y-4">
          <span className="bg-yellow-400 text-xs font-semibold px-3 py-1 rounded">
            HELP CENTER
          </span>
          <h2 className="text-2xl font-bold">How we can help you!</h2>

          <div className="flex w-full max-w-md border border-gray-300 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Enter your question or keyword"
              className="flex-1 px-3 py-2 text-sm outline-none"
            />
            <button className="bg-orange-500 text-white px-4 text-sm font-semibold hover:bg-orange-600 transition">
              SEARCH
            </button>
          </div>
        </div>

        {/* Правая часть (картинка) */}
        <div className="flex-1 flex justify-center">
          <img
            src={img1} // замените на вашу картинку
            alt="Help Center"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Заголовок */}
        <h2 className="text-center text-2xl font-semibold mb-8">
          What can we assist you with today?
        </h2>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item:any, index:any) => (
            <div
              key={index}
              className="flex items-center gap-3 border border-orange-100 rounded-sm px-4 py-6 hover:border-orange-300 shadow-md transition cursor-pointer"
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="w-full py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Заголовок */}
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-8">
          Popular Topics
        </h2>

        {/* Сетка */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map((column: string[], colIndex: number) => (
            <ul key={colIndex} className="space-y-2">
              {column.map((topic: string, idx: number) => (
                <li
                  key={idx}
                  className={`text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-500`}
                >
                  • {topic}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-[#F2F4F5] py-16">
        <div className="container mx-auto max-w-[1280px]">
            <div className="flex flex-col">
        <a href="tel:+1-202-555-0126" className="bg-[#2DA5F3]  my-4 mx-auto px-6 py-1.5 transition-all text-white hover:bg-blue-500">CONTACT US</a>
        </div>
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-8">
        Don’t find your answer. <br /> Contact with us
        </h2> 
        <div className="flex flex-col mx-4 gap-6 md:flex-row">
            <div className="flex items-start p-8 rounded-sm gap-6 bg-white shadow-lg transition-all hover:shadow-2xl"><div className=" flex justify-center">
          <img
            src={img2} // замените на вашу картинку
            alt="call"
            className="w-full max-w-sm object-contain"
          />
        </div><div className="flex flex-col items-baseline gap-1">
            <h3 className="text-lg font-semibold">Call us now</h3>
            <p className="text-[14px] text-gray-600 font-normal">we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</p>
            <h4 className="text-2xl font-semibold">+1-202-555-0126</h4>
            <a href="tel:+1-202-555-0126" className="bg-[#2DA5F3] mt-1.5 px-6 py-1.5 transition-all text-white hover:bg-blue-500">CALL NOW</a>
            </div></div>
            <div className="flex items-start p-8 rounded-sm gap-6 bg-white shadow-lg transition-all hover:shadow-2xl">
            <div className=" flex justify-center">
          <img
            src={img3} // замените на вашу картинку
            alt="msg"
            className="w-full max-w-sm object-contain"
          />
        </div> <div className="flex flex-col items-baseline gap-1">
            <h3 className="text-lg font-semibold">Chat with us</h3>
            <p className="text-[14px] text-gray-600 font-normal">we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</p>
            <h4 className="text-2xl font-semibold">Support@clicon.com</h4>
            <a href="mailto:support@clicon.com" className="bg-[#2DB224] mt-1.5  transition-all px-6 py-1.5 text-white hover:bg-green-600">CONTACT US</a>
            </div> 
            </div>
            </div> 
        </div>
    </section>
        </>
    );
}
export default Supportpage;