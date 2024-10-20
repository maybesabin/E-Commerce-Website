import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "../ui/button"

const ContactHeader = () => {
    return (
        <div className="flex items-center flex-col gap-12 pt-12 justify-center w-full min-h-[75vh]">

            <div className="lg:w-[60rem] w-full lg:px-0 px-12 flex flex-col items-start justify-between md:gap-4 gap-12">
                <h1 className="capitalize tracking-tighter bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text font-bold md:text-6xl text-4xl">Contact Us <span className="text-black">.</span></h1>
                <div className="flex items-start justify-between w-full gap-12">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0473720898!2d-74.31000789526028!3d40.69753801867171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2snp!4v1729421002535!5m2!1sen!2snp" className="lg:w-[650px] lg:h-[500px] w-[500px] h-[350px] md:flex hidden" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    <form className="flex flex-col items-start md:w-1/2 w-full gap-7">
                        <div className="flex flex-col items-start gap-1 w-full">
                            <label htmlFor="name">Full Name</label>
                            <Input className="w-full" name="name" type="text" />
                        </div>
                        <div className="flex flex-col items-start gap-1 w-full">
                            <label htmlFor="email">Email</label>
                            <Input className="w-full" name="email" type="email" />
                        </div><div className="flex flex-col items-start gap-1 w-full">
                            <label htmlFor="message">Message</label>
                            <Textarea name="message" typeof="text" className="resize-none" style={{ height: '200px' }} />
                        </div>
                        <Button type="submit">Send Message</Button>
                    </form>
                </div>

            </div >
        </div>
    )
}

export default ContactHeader