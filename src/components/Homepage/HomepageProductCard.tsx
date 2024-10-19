import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useEffect, useState } from 'react';

const HomepageProductCard = ({ previousPrice, newPrice, rating, productName, discountAmount, productImage }: {
    previousPrice: number; newPrice: number, rating: number, productName: string, discountAmount: number, productImage: string
}) => {

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = 5;
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0)

    const [isPriceSame, setIsPriceSame] = useState(false);
    useEffect(() => {
        if (previousPrice === newPrice) {
            setIsPriceSame(true)
        }
    }, [])

    return (
        <div className="flex flex-col items-center justify-center gap-2">

            <div className="group relative h-96 w-72">
                <div className="absolute top-0 left-0 h-full w-full cursor-pointer bg-gray-500 opacity-0 group-hover:opacity-75 transition-opacity duration-500 ease-in-out flex items-center justify-center z-[2]">
                    <a href='#' className="text-white">View the Product</a>
                </div>
                <div className="w-full h-full z-[1] cursor-pointer group-hover:brightness-75 transition-all duration-500 ease-in-out">
                    <img src={productImage} className="object-cover h-full w-full" alt="" />
                </div>
                {discountAmount > 0 ?
                    <div className='absolute  h-6 w-16 bg-[#51755f] top-2 left-2 flex items-center justify-center text-white text-xs'>
                        -{discountAmount}% off
                    </div>
                    :
                    <></>
                }
            </div>

            <div className="flex items-center text-xl space-x-2 pt-4">
                <span className={`text-gray-500 line-through ${isPriceSame ? "hidden" : "flex"} `}>${previousPrice}.00</span>
                <span className="text-green-600 font-semibold">${newPrice}.00</span>
            </div>
            <p className="font-medium">{productName}</p>
            <div title='rating' className="flex items-center gap-3 text-green-700">
                {Array(fullStars).fill(<StarIcon />).map((star, idx) => {
                    return (
                        <span key={idx}>{star}</span>
                    )
                })}
                {hasHalfStar && <span><StarHalfIcon /></span>}
                {Array(emptyStars).fill(<StarOutlineIcon />).map((star, index) => (
                    <span key={index}>{star}</span>
                ))}
            </div>
        </div>
    )
}

export default HomepageProductCard;