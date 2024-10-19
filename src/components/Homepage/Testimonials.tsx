import Marquee from "react-fast-marquee";
import data from "../../data/Testimonials"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center text-yellow-500">
            {/* Render full stars */}
            {[...Array(fullStars)].map((_, index) => (
                <StarIcon fontSize="small" key={index} />
            ))}

            {/* Render half star */}
            {hasHalfStar && <StarHalfIcon fontSize="small" />}

            {/* Render empty stars */}
            {[...Array(emptyStars)].map((_, index) => (
                <StarBorderIcon fontSize="small" key={index} />
            ))}
        </div>
    );
};
const Testimonials = () => {
    return (
        <div className="flex w-full items-center justify-center md:py-[7rem] pt-[5rem]">
            <div className="lg:w-[80rem] w-full flex flex-col items-center justify-center md:gap-[5rem] md:h-[35rem] h-[25rem]">
                <Marquee className="h-full w-full cursor-pointer overflow-y-hidden" pauseOnHover={true} gradient={true} gradientWidth={70} direction="left">
                    {data.slice(0, 4).map((item, idx) => {
                        return (
                            <div key={idx} className="flex flex-col md:mx-12 mx-6 items-start justify-center md:justify-between md:gap-6 gap-4 md:p-6 p-3 shadow-lg md:h-48 h-32 rounded-xl md:w-80 w-52">
                                <div className="flex items-start justify-between w-full">
                                    <img src={item.userIcon} className="rounded-full w-[30px] md:w-[50px]" alt="" />
                                    <div className="flex flex-col items-start">
                                        <h1 className="font-semibold text-xs md:text-[1rem]">{item.username}</h1>
                                        <StarRating rating={item.rating} />
                                    </div>
                                </div>
                                <p className="md:text-[1rem] md:leading-5 text-[0.65rem]">{item.description}</p>
                            </div>
                        )
                    })}
                </Marquee>
                <Marquee className="h-full w-full cursor-pointer overflow-y-hidden" pauseOnHover={true} gradient={true} gradientWidth={70} direction="right">
                    {data.slice(0, 4).map((item, idx) => {
                        return (
                            <div key={idx} className="flex flex-col md:mx-12 mx-6 items-start justify-center md:justify-between md:gap-6 gap-4 md:p-6 p-3 shadow-lg md:h-48 h-32 rounded-xl md:w-80 w-52">
                                <div className="flex items-start justify-between w-full">
                                    <img src={item.userIcon} className="rounded-full w-[30px] md:w-[50px]" alt="" />
                                    <div className="flex flex-col items-start">
                                        <h1 className="font-semibold text-xs md:text-[1rem]">{item.username}</h1>
                                        <StarRating rating={item.rating} />
                                    </div>
                                </div>
                                <p className="md:text-[1rem] md:leading-5 text-[0.65rem]">{item.description}</p>
                            </div>
                        )
                    })}
                </Marquee>
            </div>
        </div>
    )
}

export default Testimonials