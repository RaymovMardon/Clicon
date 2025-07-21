import Electronics from "@/components/electronics"
import Features from "@/components/features"
import Hero from "@/components/hero"
import HomeSlider from "@/components/homeslider"
import TodayBestDeals from "@/components/todaybest"


function Homepage() {
  return (
    <div>
        <Hero/>
        <Features/>
        <TodayBestDeals/>
        <HomeSlider/>
        <Electronics/>
    </div>
  )
}

export default Homepage