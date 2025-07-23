import Accesuar from "@/components/accesuar"
import Bannerpage from "@/components/banner"
import BannerPageLaptop from "@/components/banner2"
import CompyuterAcsesuar from "@/components/compyuter"
import Content from "@/components/content"
import Electronics from "@/components/electronics"
import Features from "@/components/features"
import Hero from "@/components/hero"
import HomeSlider from "@/components/homeslider"
import Latest from "@/components/latest"
import TodayBestDeals from "@/components/todaybest"


function Homepage() {
  return (
    <div>
        <Hero/>
        <Features/>
        <TodayBestDeals/>
        <HomeSlider/>
        <Electronics/>
        <Bannerpage/>
        <CompyuterAcsesuar/>
        <BannerPageLaptop/>
        <Accesuar/>
        <Latest/>
        <Content/>
    </div>
  )
}

export default Homepage