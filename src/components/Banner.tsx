import { useState } from "react"
const Banner = () => {
    const [showBanner, setShowBanner] = useState(true);
    return (
        <div className={`bg-[#51755f] h-9 text-white text-xs md:text-[0.9rem] z-[999] md:leading-5 ${showBanner ? "flex" : "hidden"} items-center justify-center relative`}>
            <h1>Shop the Hottest Styles at Trendora – Limited Time Offers!</h1>
            <svg onClick={() => setShowBanner(false)} className="absolute cursor-pointer top-2 right-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
                <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    )
}

export default Banner