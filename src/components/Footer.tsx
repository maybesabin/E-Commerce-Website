import mastercard from "../assets/images/mastercard.png"
import payal from "../assets/images/paypal.png"
import visa from "../assets/images/visa.png"
import creditcard from "../assets/images/creditcard.png"
import { Separator } from "@/components/ui/separator"
import logo from "../assets/images/logo.png"

const Footer = () => {
    const footerOptions = [
        { title: "who are we", options: ["company", "community", "privacy policy", "terms of use"] },
        { title: "support", options: ["help center", "shipping & devlivery", "returns & refunds", "FAQs"] },
        { title: "products", options: ["trendora fashion", "trendora accessories", "trendora home & living"] }
    ]
    const paymentOptions = [
        mastercard, payal, visa, creditcard
    ]
    const socials = [
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="black" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="black" fill="none">
            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="black" fill="none">
            <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>
    ]
    return (
        <div className="bg-[#f6f8fa] xl:p-9 mt-[7rem] py-9 px-6 flex items-center justify-center w-full">
            <div className="xl:w-[80%] w-full flex flex-col gap-9 lg:gap-[5rem] items-start justify-center">
                <div className="flex lg:flex-nowrap flex-wrap lg:gap-0 gap-9 items-start justify-between w-full">
                    {footerOptions.map((item, idx) => {
                        return (
                            <ul key={idx} className="flex flex-col items-start gap-3 capitalize text-xs md:text-[1rem] md:leading-5">
                                <li className="uppercase font-semibold text-xl tracking-[0.3rem] pb-2">{item.title}</li>
                                {item.options.map((option, idx) => {
                                    return (
                                        <li className="text-zinc-600 hover:underline cursor-pointer" key={idx}>{option}</li>
                                    )
                                })}
                            </ul>
                        )
                    })}
                    <div className="flex flex-col items-start gap-4 max-w-80">
                        <h1 className="uppercase font-semibold text-xl tracking-[0.3rem]">subscribe</h1>
                        <p className="text-xs md:text-[1rem] md:leading-5 text-zinc-600">Enter your email to get notified about our new solutions</p>
                        <div className="flex items-center justify-around bg-[#dedddd] rounded-lg w-full" title="Send a message">
                            <input type="email" className="bg-[#dedddd] py-4 outline-none rounded-lg pl-2 w-[80%]" placeholder="Enter your email" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" viewBox="0 0 24 24" width="24" height="24" color="black" fill="none">
                                <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col text-xs md:text-[1rem] md:leading-5 items-start justify-between w-full">
                    <p className="text-zinc-600 ">Kathmandu, Nepal</p>
                    <div className="flex flex-col items-start lg:items-end justify-center gap-12">
                        <p className="text-zinc-600">© 2024 Trendora Inc. All rights reserved</p>
                        <div className="flex items-center justify-center gap-9">
                            {paymentOptions.map((item, idx) => {
                                return (
                                    <img key={idx} className=" saturate-0 opacity-65 transition-all hover:opacity-100 cursor-pointer" src={item} width={'60px'} alt="" />
                                )
                            })}
                        </div>
                    </div>
                </div>

                <Separator className="lg:-mt-12 bg-gray-300" />

                <div className="flex flex-wrap lg:gap-0 md:gap-9 gap-5 items-center justify-start lg:justify-between w-full">
                    <div className="flex items-center gap-4">
                        <div className="bg-gray-300 rounded-full">
                            <img src={logo} width={'50px'} className="p-2 saturate-0" alt="" />
                        </div>
                        <h1 className="text-2xl font-semibold text-zinc-600">Trendora.</h1>
                    </div>
                    <div className="text-[1rem] uppercase font-medium hidden lg:flex items-center gap-9 tracking-widest">
                        <h1>Home</h1>
                        <h1>products</h1>
                        <h1>contact</h1>
                    </div>
                    <div className="flex items-center gap-6 md:gap-9">
                        {socials.map((item, idx) => {
                            return (
                                <div key={idx} className="bg-zinc-200 cursor-pointer hover:bg-gray-300 transition-all rounded-full">
                                    <div className="p-2">{item}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer