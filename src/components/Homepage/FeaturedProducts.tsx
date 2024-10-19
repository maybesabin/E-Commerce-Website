import Card from "./HomepageProductCard"
import product1 from "../../assets/images/Featured Products/product1.jpg"
import product2 from "../../assets/images/Featured Products/product2.jpg"
import product3 from "../../assets/images/Featured Products/product3.jpg"
import product4 from "../../assets/images/Featured Products/product4.jpg"
import cardbg1 from "../../assets/images/card-bg-1.jpg"
import cardbg2 from "../../assets/images/card-bg-2.jpg"

const Featured = () => {
    return (
        <div className="w-full py-12 flex flex-col items-center justify-start gap-12 px-12">
            <div className="flex flex-col items-start gap-2 md:w-auto w-full">
                <h3 className="md:text-[1rem] text-xs text-blue-500">Check Now!</h3>
                <h1 className="capitalize font-bold text-3xl md:text-5xl lg:text-7xl bg-gradient-to-bl from-blue-500 to-purple-400 bg-clip-text text-transparent">our featured products</h1>
            </div>
            <div className="max-w-[97rem] flex md:flex-row flex-col flex-wrap items-center justify-center gap-9">
                <Card productImage={product1} previousPrice={35} newPrice={30} rating={3.5} productName="Comfy Winter Sweaters" discountAmount={10} />
                <Card productImage={product2} previousPrice={25} newPrice={22} rating={2} productName="Women Hoodie" discountAmount={20} />
                <Card productImage={product3} previousPrice={30} newPrice={30} rating={3.5} productName="Winter Jackets" discountAmount={0} />
                <Card productImage={product4} previousPrice={22} newPrice={22} rating={4.5} productName="Comfy Cotton Sweaters" discountAmount={0} />
            </div>
            <div className="xl:w-[80rem] flex xl:flex-row flex-col items-center lg:justify-between justify-center gap-9 py-12">
                <div className="xl:w-1/2 md:w-[40rem] sm:w-[25rem] w-[23rem] md:h-80 h-64 flex flex-col text-white items-start p-9 justify-start relative">
                    <img src={cardbg1} className="object-cover brightness-[60%] h-full w-full absolute top-0 left-0 z-[1]" alt="" />
                    <div className="z-[2] flex flex-col items-start gap-6">
                        <h3 className="uppercase md:text-xl text-xs"><span className="font-semibold">New</span> collection</h3>
                        <h1 className="capitalize md:text-4xl text-2xl font-bold">best offer deals <br /> at tendora</h1>
                        <button className="bg-white text-black shadow-lg md:px-7 md:py-3 px-5 py-2 hover:bg-black hover:text-white transition-all duration-500 ease-in-out text-xs md:text-[1rem]">Explore Now</button>
                    </div>
                </div>
                <div className="xl:w-1/2 md:w-[40rem] sm:w-[25rem] w-[23rem] md:h-80 h-64 text-white flex flex-col items-start p-9 justify-start relative">
                    <img src={cardbg2} className="object-cover brightness-[60%] h-full w-full absolute top-0 left-0 z-[1]" alt="" />
                    <div className="z-[2] flex flex-col items-start gap-6">
                        <h1 className="md:text-4xl text-2xl font-bold">25% off Everything</h1>
                        <p className="md:text-xl text-xs w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto, voluptatum nam sint amet rem?</p>
                        <button className="bg-white text-black shadow-lg md:px-7 md:py-3 px-5 py-2 hover:bg-black hover:text-white transition-all duration-500 ease-in-out text-xs md:text-[1rem]">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;