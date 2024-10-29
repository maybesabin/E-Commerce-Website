import Hero from "../components/Homepage/HomepageHero"
import Featured from "../components/Homepage/FeaturedProducts"
import Partners from "../components/Homepage/Partners"
import Features from "@/components/Homepage/Features"
import CustomAccordion from "../components/Homepage/CustomAccordion"
import Newsletter from "@/components/Homepage/Newsletter"
import Testimonials from "@/components/Homepage/Testimonials"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
const Homepage = () => {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <Hero />
            <Partners />
            <Featured />
            <Features />
            <CustomAccordion />
            <Newsletter />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Homepage