import Image from "next/image";
import {Hero} from "@/app/(site)/Component/Hero/Hero";
import BestOfMonth from "@/app/(site)/Component/BestOfMonth/BestOfMonth";
import Features from "@/app/(site)/Component/Features/Features";
import {Story} from "@/app/(site)/Component/Story/Story";
import Cats from "@/app/(site)/Component/Cats/Cats";

export default function Home() {
    return (
       <>
           <Story/>
           <Hero/>
           <BestOfMonth />
           <Features />
           <Cats/>
       </>
    );
}
