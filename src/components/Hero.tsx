import bgimage from "../assets/images/bgimage.jpg"

const HeroSection = () => {
    return (
        <div className="relative overflow-x-hidden lg:h-[50rem] md:h-[30rem] min-h-[60vh] py-12 md:py-0 w-full flex md:flex-row flex-col items-start md:items-center justify-center px-12 md:gap-[7rem] gap-12">

            <div className="flex flex-col items-start justify-start lg:gap-9 gap-4 md:w-[35rem]">
                <h2 className="uppercase lg:text-3xl text-xl">Tendora</h2>

                <h1 className="xl:text-7xl lg:text-5xl text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent">Where style <br />meets you 🛍️</h1>

                <p className="lg:text-[1rem] text-xs lg:leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestias totam natus accusantium vel excepturi fugiat ea consequatur facere nemo.</p>
                <button className="bg-black text-white lg:px-8 px-5 lg:py-4 py-3 hover:text-black hover:bg-white hover:border-black border transition-all">Shop Now</button>
            </div>

            <div className="relative xl:mr-0 mr-12">
                <img src={bgimage} className="xl:w-[600px] md:w-[550px] w-[450px] z-[2] relative" alt="" />
                <div className="bg-purple-300 lg:-top-12 -bottom-6 lg:-right-12 -right-6 lg:h-72 md:h-32 h-24 lg:w-[350px] md:w-[250px] w-[200px] z-[1] absolute"></div>
            </div>
        </div>
    )
}

export default HeroSection