import { FaArrowRightLong } from "react-icons/fa6"

function Content() {
  return (
    <div className="bg-[#1B6392] ">
        <div className="container mx-auto py-[60px] max-w-[1280px] flex flex-col justify-center items-center ">
            <h3 className='font-[Public_Sans] text-white font-[600] text-[32px] leading-[40px] tracking-[0px] text-center '>
            Subscribe to our newsletter
            </h3>
            <p className="font-[Public_Sans] w-[550px] py-[20px] text-[#d4d4d4] font-[400] text-[16px] leading-[24px] tracking-[0px] text-center">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
            </p>
            <form className="bg-[white] px-[10px] py-[10px] rounded-[4px] flex w-[600px] h-[65px] justify-between ">
                <input className="outline-none w-[400px] px-[15px] text-[#767676] " placeholder="Email address" type="text" />
                <button className="bg-[#FA8232] w-[150px] h-full rounded-[4px] flex gap-5 items-center justify-center ">
                    <span className="font-[Public_Sans] text-[#FFFFFF] uppercase font-[700] text-[14px] leading-[48px] tracking-[1.2%] text-center">
                    Subscribe
                    </span>
                    <FaArrowRightLong className="text-[white] " />
                </button>
            </form>
            <hr className="w-[400px] mt-6 text-[#5a7ce3] "/>
            <div className="flex gap-10">
                <img className="opacity-60 " src="/images/logo1.svg" alt="Logotip" />
                <img className="opacity-60 " src="/images/logo2.svg" alt="Logotip" />
                <img className="opacity-60 " src="/images/logo3.svg" alt="Logotip" />
                <img className="opacity-60 " src="/images/logo4.svg" alt="Logotip" />
                <img className="opacity-60 " src="/images/logo5.svg" alt="Logotip" />
            </div>
        </div>
    </div>
  )
}

export default Content