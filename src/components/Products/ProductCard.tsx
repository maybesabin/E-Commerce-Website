import { useState, useEffect } from "react";
import { trefoil } from 'ldrs';

const ProductCard = ({ image, category, rating, name, price, grid }: { image: string, category: string, rating: number, name: string, price: number, grid: boolean }) => {
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    trefoil.register();

    useEffect(() => {
        if (imageLoaded) {
            const timer = setTimeout(() => {
                setLoading(false); // Delay ending the loader for at least 1 second
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [imageLoaded]);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    return (
        <div className={`relative ${grid ? "w-72 h-96 text-[0.8rem] flex flex-col items-start justify-start p-0 gap-4" : "w-full md:h-52 h-32 flex items-center justify-center gap-12"} border cursor-pointer rounded-xl transition-all duration-500 ease-in-out`}>

            {loading && (
                <div className="absolute inset-0 bg-white bg-opacity-100 flex items-center justify-center z-10">
                    <l-trefoil size="40" speed="1.75" color="black"></l-trefoil>
                </div>
            )}
            <img src={image}
                alt={name}
                onLoad={handleImageLoad} className={`hover:scale-105 transition-all duration-500 ease-in-out ${grid ? "h-[21rem] w-full object-cover" : "md:w-[400px] w-1/3 md:h-[200px] h-full md:object-cover "} `} />
            <div className={`flex ${grid ? "flex-row items-center justify-between" : "flex-col items-start justify-center gap-2 h-full"}  px-2 w-full`}>
                <h1 className={`${grid ? " w-[70%]" : "md:text-xl text-[1rem] md:leading-0 leading-5 font-medium"}`}>{name}</h1>
                <h3 className={`text-blue-600 ${grid ? "" : "font-semibold text-[1rem]"}`}>$ {price}</h3>
                {!grid && <h6 className="md:text-[1rem] text-xs">Rating: {rating}</h6>}
            </div >
            <div className="absolute top-2 right-2 uppercase text-zinc-500 shadow-lg w-32 h-8 md:flex hidden items-center justify-center rounded-full bg-zinc-50">{category}</div>
        </div >
    )
}

export default ProductCard