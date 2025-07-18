import Features from "@/components/features"
import Hero from "@/components/hero"
import TodayBestDeals from "@/components/todaybest"


function Homepage() {
  return (
    <div>
        <Hero/>
        <Features/>
        <TodayBestDeals/>
    </div>
  )
}

export default Homepage