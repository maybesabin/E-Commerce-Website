import Hero from "../components/Hero"
import Featured from "../components/FeaturedProducts"
import Partners from "../components/Partners"
import Features from "@/components/Features"
import CustomAccordion from "../components/CustomAccordion"
const Homepage = () => {
    return (
        <>
            <Hero />
            <Partners />
            <Featured />
            <Features />
            <CustomAccordion />
        </>
    )
}

export default Homepage