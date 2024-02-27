import Image from "next/image";
import {Hero} from "@/app/(site)/Component/Hero/Hero";
import BestOfMonth from "@/app/(site)/Component/BestOfMonth/BestOfMonth";
import Features from "@/app/(site)/Component/Features/Features";
import {Story} from "@/app/(site)/Component/Story/Story";
import Cats from "@/app/(site)/Component/Cats/Cats";
import Loading from "@/app/(site)/loading";
import {BarLoader} from "react-spinners";
import UserMessage from "@/app/(site)/Component/UserMessage/UserMessage";

export default function Home() {
    return (
       <>
           <Story/>
           <Hero/>
           <BestOfMonth />
           <Features />
           <Cats/>
           <UserMessage />

       </>
    );
}
