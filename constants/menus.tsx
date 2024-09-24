import { CreditCard } from "@/icons/credit-card";
import { Explore } from "@/icons/explore";
import { HomeIcon } from "@/icons/home";


export type MenuProps={
    id:number,
    label:string,
    icon:JSX.Element,
    path:string,
    section?:boolean,
    integration?:boolean
}



export const LANDING_PAGE_MENU:MenuProps[]=[
    {
        id:0,
        label:"Home",
        icon: <HomeIcon/>,
        path:"/",
        section:true
    },
    {
        id:1,
        label:"Pricing",
        icon:<CreditCard/>,
        path:"#pricing",
        section:true
    },
    {
        id:2,
        label:"Explore",
        icon:<Explore/>,
        path:"/explore",
        section:true
    }
]


