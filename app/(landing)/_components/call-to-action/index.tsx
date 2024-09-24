import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { BadgePlus } from "lucide-react"
import Link from "next/link"



const CallToAction = () => {
    return (
        <div className="flex flex-col items-start p-3 md:items-center gap-y-5 md:gap-y-0">
            <GradientText element="H1" className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold">

                Manage Your Clubs <br className="md:hidden" /> Effortlessly!
            </GradientText>





            <p className="text-sm md:text-center text-left text-muted-foreground">
                A one-stop web application to manage all your clubs effortlessly, <br className="hidden md:block" /> keeping activities and members organized in one place!
            </p>

            <div className="flex flex-col md:flex-row md:justify-center gap-5 md:mt-5 w-full">
                <Button variant="outline" className="rounded-xl bg-transparent text-base">
                    Watch demo
                </Button>
               <Link href={"/sign-in"}>
               <Button  className="flex rounded-xl text-base w-full gap-2">
                <BadgePlus/>
                Get Started


               </Button>
               </Link>

            </div>

            
        </div>
    )
}

export default CallToAction