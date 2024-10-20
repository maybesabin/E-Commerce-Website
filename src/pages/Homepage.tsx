import Hero from "../components/Homepage/HomepageHero"
import Featured from "../components/Homepage/FeaturedProducts"
import Partners from "../components/Homepage/Partners"
import Features from "@/components/Homepage/Features"
import CustomAccordion from "../components/Homepage/CustomAccordion"
import Newsletter from "@/components/Homepage/Newsletter"
import Testimonials from "@/components/Homepage/Testimonials"
const Homepage = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <Partners />
            <Featured />
            <Features />
            <CustomAccordion />
            <Newsletter />
            <Testimonials />
        </div>
    )
}

export default Homepage