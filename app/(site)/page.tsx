import {Hero} from "@/app/(site)/Component/Hero/Hero";
import BestOfMonth from "@/app/(site)/Component/BestOfMonth/BestOfMonth";
import Features from "@/app/(site)/Component/Features/Features";
import {Story} from "@/app/(site)/Component/Story/Story";
import Cats from "@/app/(site)/Component/Cats/Cats";
import UserMessage from "@/app/(site)/Component/UserMessage/UserMessage";
import ArtistSession from "@/app/(site)/Component/ArtistSession/ArtistSession";
import CustomerGroup from "@/app/(site)/Component/CustomerGroup/CustomerGroup";

export default function Home() {

    return (
        <>
            <Story/>
            <Hero/>
            <Cats/>
            <ArtistSession/>

            <BestOfMonth/>
            <CustomerGroup/>
            <Features/>
            <UserMessage/>
        </>
    );
}
