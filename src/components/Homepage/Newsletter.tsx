import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const Newsletter = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault(); // Prevent form refresh
        setIsSubmit(true);  // Set submission state to true
    };

    // Show toast only when isSubmit becomes true
    useEffect(() => {
        if (isSubmit) {
            toast("You have subscribed to our newsletter!");
        }
    }, [isSubmit]);

    return (
        <div className="flex flex-col items-center text-center justify-center md:h-96 h-72 w-full bg-[#f6f8fa]">
            <Toaster />
            <div className="lg:w-[80rem] w-full flex items-center justify-center flex-col gap-6">
                {isSubmit ? (
                    <>
                        <h1 className="font-semibold text-2xl md:text-4xl">It's Official 💌</h1>
                        <p className="lg:w-1/2 w-[90%] md:text-[1rem] md:leading-5 text-xs">We got your info, and we’re rooting for you. In the meantime, we’ll keep you in the loop about comfy, planet-friendly things.</p>
                    </>
                ) : (
                    <>
                        <h1 className="font-semibold text-2xl md:text-4xl">Claim It Before It's Gone!</h1>
                        <p className="lg:w-1/2 w-[90%] md:text-[1rem] md:leading-5 text-xs">Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.</p>
                        <form onSubmit={handleSubmit} className="flex sm:flex-nowrap flex-wrap items-center justify-center gap-4">
                            <input type="email" placeholder="Enter your email" className="md:text-[1rem] md:leading-5 text-xs px-4 md:w-[30rem] w-[15rem] md:h-12 h-9" />
                            <button type="submit" className="uppercase md:text-[1rem] md:leading-5 text-xs bg-black md:h-12 h-9 md:w-32 w-24 text-white hover:bg-white hover:text-black transition-all">
                                sign up
                            </button>
                        </form>
                        <h6 className="md:text-[1rem] md:leading-5 text-xs w-[90%]">Note: You can opt-out at any time. See our Privacy Policy and Terms.</h6>
                    </>
                )}
            </div>
        </div>
    );
};

export default Newsletter;
