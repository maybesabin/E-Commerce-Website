import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { data } from "../../data/FAQs"

const CustomAccordion = () => {
    return (
        <div className="flex items-center justify-center w-full py-[7rem] px-12">
            <div className="flex items-start lg:flex-row flex-col justify-center gap-12 md:gap-[5rem] w-full">
                <div className="flex flex-col items-start gap-6 md:gap-12 w-full lg:max-w-[25rem] xl:max-w-[35rem]">
                    <h1 className="font-semibold text-3xl md:text-6xl">Any questions? <br />We got you.</h1>
                    <p className="md:text-[1rem] text-xs md:leading-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea aliquid perspiciatis commodi quaerat aperiam id dicta eveniet voluptates exercitationem aut.</p>
                    <button className="text-purple-700 md:text-[1rem] text-xs md:leading-5 font-semibold flex items-center justify-center gap-2">More FAQs <ArrowForwardIcon fontSize="small" /></button>
                </div>
                <Accordion type="single" className="lg:w-[600px]" collapsible>
                    {data.map((item, idx) => {
                        return (
                            <AccordionItem key={idx} value={`item-${idx}`}>
                                <AccordionTrigger className="md:text-xl text-xs md:font-normal font-semibold text-left">{item.question}</AccordionTrigger>
                                <AccordionContent className="md:text-[1rem] text-xs md:leading-5">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </div>
        </div>
    )
}

export default CustomAccordion