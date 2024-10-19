import globe from "../../assets/images/travel.png"
import security from "../../assets/images/security.png"
import money from "../../assets/images/money.png"
import purse from "../../assets/images/purse.png"
const Features = () => {
    return (
        <div className="flex items-center justify-center md:py-[7rem] py-12 w-full bg-[#f6f8fa]">
            <div className="flex items-center xl:flex-row flex-col justify-center xl:justify-between gap-9 lg:w-[80rem] w-full">

                <div className="xl:w-1/3 md:w-96 w-80 xl:h-64 md:h-28 h-20 rounded-xl flex xl:flex-col flex-row items-center justify-center gap-5 bg-white shadow-sm">
                    <div className="bg-white rounded-full shadow-lg">
                        <img src={globe} className="md:p-4 p-2 md:w-[70px] w-[50px]" alt="" />
                    </div>
                    <h1 className="md:text-xl text-zinc-500 font-medium">Super Fast & Free Delivery</h1>
                </div>
                <div className="xl:w-1/3 md:w-96 w-80 md:h-64 h-[12rem] flex flex-col xl:items-start items-center justify-between gap-9">
                    <div className="xl:w-full w-full h-1/2 rounded-xl flex items-center justify-center gap-5 bg-white shadow-sm">
                        <div className="bg-white rounded-full shadow-lg">
                            <img src={security} className="md:p-4 p-2 md:w-[70px] w-[50px]" alt="" />
                        </div>
                        <h1 className="md:text-xl text-zinc-500 font-medium">Super Fast & Free Delivery</h1>
                    </div>
                    <div className="xl:w-full w-full h-1/2 rounded-xl flex items-center justify-center gap-5 bg-white shadow-sm">
                        <div className="bg-white rounded-full shadow-lg">
                            <img src={money} className="md:p-4 p-2 md:w-[70px] w-[50px]" alt="" />
                        </div>
                        <h1 className="md:text-xl text-zinc-500 font-medium">Super Fast & Free Delivery</h1>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-96 w-80 xl:h-64 md:h-28 h-20 rounded-xl flex xl:flex-col flex-row items-center justify-center gap-5 bg-white shadow-sm">
                    <div className="bg-white rounded-full shadow-lg">
                        <img src={purse} className="md:p-4 p-2 md:w-[70px] w-[50px]" alt="" />
                    </div>
                    <h1 className="md:text-xl text-zinc-500 font-medium">Super Fast & Free Delivery</h1>
                </div>

            </div>
        </div>
    )
}

export default Features