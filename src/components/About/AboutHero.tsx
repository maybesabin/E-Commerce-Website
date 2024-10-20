import banner from "../../assets/images/banner.jpg"
import person1 from "../../assets/images/person1.png"
import person2 from "../../assets/images/person2.png"
import fashion from "../../assets/images/fashion.jpg"
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";


const AboutHero = () => {

    const statistics = [
        { title: "happy customers", amount: 1500 },
        { title: "trendy products", amount: 1000 },
        { title: "daily orders", amount: 300 },
        { title: "items shipped", amount: 10000 },
    ]

    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="flex items-center justify-center flex-col gap-12 md:gap-[10rem]">

            <div className="relative w-full h-64 md:flex hidden">
                <img src={banner} alt="Your Image" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            <div className="xl:w-[80rem] md:pt-0 pt-12 w-full xl:px-0 px-12 flex md:flex-row flex-col items-center gap-12 justify-between relative">
                <h1 className="capitalize md:flex hidden absolute -top-[14.5rem] tracking-wide bg-gradient-to-tl from-blue-900 to-blue-400 text-transparent bg-clip-text font-bold text-7xl">who <br /> we are</h1>
                <div className="flex items-center gap-6  h-[20rem]">
                    <div className="w-1/2 h-full cursor-pointer opacity-90 hover:opacity-100 transition-all hover:scale-105 duration-500 ease-in-out relative">
                        <img src={person1} className="w-full object-cover  h-[20rem]" alt="" />
                        <div className="absolute top-5 -right-[12rem] flex items-center gap-6">
                            <div className="bg-blue-500 h-[2px] w-16"></div>
                            <div className="flex flex-col items-start gap-0">
                                <h1 className="font-semibold">John Anderson</h1>
                                <p className="uppercase text-xs text-zinc-400">director</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-full cursor-pointer opacity-90 hover:opacity-100 transition-all hover:scale-105 duration-500 ease-in-out relative -mb-[10rem]">
                        <img src={person2} className="w-full object-cover h-full" alt="" />
                        <div className="absolute bottom-5 -left-[12rem] flex items-center gap-6">
                            <div className="flex flex-col items-start gap-0">
                                <h1 className="font-semibold">Fabian Hellgardt</h1>
                                <p className="uppercase text-xs text-zinc-400">creative director</p>
                            </div>
                            <div className="bg-blue-500 h-[2px] w-16"></div>
                        </div>
                    </div>
                </div>
                <div className="h-full md:w-2/3 w-full flex flex-col items-start gap-12 md:pt-0 pt-12">
                    <h1 className="uppercase font-semibold md:-tracking-[0.3rem] text-3xl md:text-6xl">about us<span className="text-blue-500"> .</span></h1>
                    <p className="text-zinc-400 md:text-[1rem] md:leading-5 text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti tempora voluptate molestias. Qui molestias accusamus pariatur dolorum. Quisquam unde natus saepe magnam asperiores cum doloremque, amet quas ipsam! Minus dolore quisquam harum ducimus quas tempore possimus sint eum laudantium omnis! Sequi perspiciatis in voluptate, iure quae, voluptatum quibusdam pariatur optio aliquid impedit expedita. Nihil cum nisi repellendus a officiis ipsa.</p>
                    <p className="text-zinc-400 lg:flex hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste magnam ipsa harum tempora, amet totam optio iusto corrupti reprehenderit placeat porro nihil. Tenetur eius unde hic doloremque non necessitatibus quibusdam reiciendis eum cupiditate, deleniti, nam distinctio quo sunt recusandae voluptatibus suscipit fugiat voluptate voluptates alias. Tempora ipsum ea animi libero quos. Voluptas obcaecati tempora, maiores laboriosam eos dolorum quidem.</p>
                </div>
            </div>

            <div ref={sectionRef} className="xl:w-[80rem] w-full xl:px-0 px-12 flex items-center justify-between md:flex-nowrap md:gap-0 gap-12 flex-wrap">
                {statistics.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-start gap-1">
                        <h1
                            className={`font-semibold -tracking-wider text-zinc-600 text-3xl lg:text-6xl ${inView ? "blur-effect" : ""
                                }`}
                        >
                            {inView ? (
                                <CountUp
                                    start={0}
                                    end={item.amount}
                                    duration={1 + item.amount / 5000} // Faster count-up logic
                                    separator=","
                                />
                            ) : (
                                "0"
                            )}
                            +
                        </h1>
                        <p className="capitalize tracking-tight lg:text-xl text-xs text-zinc-400">{item.title}</p>
                    </div>
                ))}
            </div>

            <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-start gap-12 xl:w-[80rem] w-full xl:px-0 px-12">
                <div className="flex flex-col items-center justify-center p-4">
                    <blockquote className="relative text-center max-w-lg mx-auto p-6 ">
                        <span className="absolute top-0 left-0 text-5xl font-bold text-gray-500 -translate-x-8 -translate-y-4">
                            &ldquo;
                        </span>
                        <p className="text-xl text-left italic font-serif text-gray-700">
                            Our work does make sense only if it is a faithful witness of his time.
                        </p>
                        <span className="absolute bottom-0 right-0 text-5xl font-bold text-gray-500 translate-x-8 translate-y-4">
                            &rdquo;
                        </span>
                        <cite className="block mt-4 text-left text-sm text-gray-500">
                            Jean–Philippe Nuel, Director
                        </cite>
                    </blockquote>
                </div>
                <img src={fashion} className="lg:w-[650px] w-[500px]" alt="" />
            </div>


        </div>
    )
}

export default AboutHero