import adidas from "../assets/images/Brand Logos/adidas.png";
import nike from "../assets/images/Brand Logos/nike.png";
import chanel from "../assets/images/Brand Logos/chanel.png";
import gucci from "../assets/images/Brand Logos/gucci.png";
import lv from "../assets/images/Brand Logos/lv.png";
import zara from "../assets/images/Brand Logos/zara.png";
import balenciaga from "../assets/images/Brand Logos/balenciaga.png"
import prada from "../assets/images/Brand Logos/prada.png"
import levis from "../assets/images/Brand Logos/levis.png"
import Marquee from "react-fast-marquee";

const Partners = () => {
    const imgContainer = [adidas, nike, chanel, prada, gucci, lv, zara, balenciaga, levis];

    return (
        <div className="w-full flex items-center justify-center md:-mt-12 mt-12 md:mb-[7rem] lg:px-12 opacity-75">
            <div className="lg:w-[80rem] w-full lg:max-h-64 max-h-52 flex flex-col gap-[5rem] items-center justify-center bg-gradient-to-r from-slate-50 to-white lg:py-6 py-4 rounded-full">
                <Marquee
                    pauseOnHover={true}
                    speed={50}
                    gradient={true}
                    gradientColor="white"
                    className="h-full w-full cursor-pointer overflow-y-hidden"
                >
                    {imgContainer.map((item, idx) => (
                        <img
                            key={idx}
                            src={item}
                            className="saturate-0 opacity-40 hover:opacity-100 transition-all duration-500 object-cover md:h-14 h-8 w-auto md:mx-12 mx-6"
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Partners;