
import { cn } from "@/lib/utils"

type BackdropGradientProps = {
    children: React.ReactNode,
    className?: string,
    container?: string
}




const BackdropGradient = ({
    children, className, container
}: BackdropGradientProps) => {
    return (
        <div className={cn("relative flex flex-col w-full", container)}>

            <div className={cn("mx-10 rounded-[50%] radial--blur absolute", className)} />


            {children}


        </div>
    )
}


export default BackdropGradient;