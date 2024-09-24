"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./menu";
import { Button } from "@/components/ui/button";
import { LogOut, MenuIcon } from "lucide-react";
import GlassSheet from "@/components/global/glass-sheet";

const LandingPageNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`w-full flex z-50 justify-between sticky top-0 items-center p-5 ${isScrolled
                    ? "bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg"
                    : "bg-transparent"
                }`}
        >
            <p className="font-bold text-2xl text-radial--circle">AllClubs.</p>
            <Menu orientation="desktop" />
            <div className="flex gap-2">
                <Link href="/sign-in">
                    <Button
                        variant="outline"
                        className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
                    >
                        <LogOut />
                        Login
                    </Button>
                </Link>
                <GlassSheet
                    triggerClass="lg:hidden"
                    trigger={
                        <Button variant="ghost" className="hover:bg-transparent">
                            <MenuIcon size={30} />
                        </Button>
                    }
                >
                    <Menu orientation="mobile" />
                </GlassSheet>
            </div>
        </div>
    );
};

export default LandingPageNavbar;
