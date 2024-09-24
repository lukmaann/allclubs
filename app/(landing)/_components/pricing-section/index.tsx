import BackdropGradient from "@/components/global/backdrop-gradient";
import GradientText from "@/components/global/gradient-text";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const PricingSection = () => {
  return (
    <div id="pricing" className="w-full pt-20 flex flex-col gap-3 items-center">
      <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
        <GradientText
          element="H2"
          className="md:text-center text-4xl font-semibold"
        >
          Pricing Plans That Fits You Right!
        </GradientText>
        <p className="text-sm text-left md:text-center text-muted-foreground">
          Your investment helps us deliver continuous updates and improvements.{" "}
          <br className="hidden md:block" /> Join us today for the best value!
        </p>
      </BackdropGradient>
      <Card className="p-7 mt-10 md:w-auto w-[90%] bg-themeBlack  border-themeGray">
        <div className="gap-2 flex flex-col">
          <CardTitle>Just ₹49</CardTitle>
          <CardDescription className="text-[#B4B0AE] mt-1">
            Great if you are just getting started
          </CardDescription>
          <Link href="#" className="w-full mt-3">
            <Button
              variant="default"
              className=" bg-[#333337] text-white w-full rounded-2xl hover:text-[#333337]"
            >
              Start for free
            </Button>
          </Link>
        </div>
        {/* <div className="flex flex-col text-[#b4b0a3] gap-2 mt-5">
                    <p className="font-bold  p-2">Features</p>
                    <span className="flex items-center gap-2 mt-2">
                        <Check /> Feature 1

                    </span>
                    <span className="flex items-center gap-2 mt-2">
                        <Check /> Feature 1

                    </span> <span className="flex items-center gap-2 mt-2">
                        <Check /> Feature 1

                    </span> <span className="flex items-center gap-2 mt-2">
                        <Check /> Feature 1

                    </span> 

                </div> */}
      </Card>
    </div>
  );
};
