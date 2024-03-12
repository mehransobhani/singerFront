
import speaker from "@/public/image/banner/speaker.png"
import djBanner from "@/public/image/banner/dj.jpg"
import singerBanner from "@/public/image/banner/singer.jpg"
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

const callouts: {
    name: string,
    description: string,
    imageAlt: string,
    href: string,
    imageSrc: StaticImageData
}[] = [
    {
        name: 'گروه های موسیقی',
        description:'یافتن گروه های موسیقی برای انواع مراسمات و جشن ها',
        imageSrc: singerBanner,
        imageAlt: 'یافتن گروه های موسیقی برای انواع مراسمات و جشن ها',
        href: 'category',
    },
    {
        name: 'دیجی ها',
        description: 'یافتن دیجی برای انواع مراسمات و جشن ها',
        imageSrc: djBanner,
        imageAlt: 'یافتن دیجی برای انواع مراسمات و جشن ها',
        href: 'category',
    },

]

export default function Example(): JSX.Element {
    return (
<div className={"w-full bg-white"}>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 ">
                 <h2 className="text-2xl font-bold text-center">
                    دسته بندی های <br/>{" "}
                    <span className="text-rose-500 font-extrabold my-3">هنرمندان</span>
                </h2>

                <div className={"grid grid-cols-1 md:grid-cols-2 gap-5  my-24"}>


                    {callouts.map((callout: {
                        name: string,
                        description: string, imageAlt: string, href: string, imageSrc: StaticImageData
                    }, index: number) => (
                        <>
                            <div key={index} className={" hover:shadow-2xl hover:scale-105  transition-all  "}>
                                <Link href={callout.href} >
                            <article
                                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40  h-96  mx-auto ">
                                <Image src={callout.imageSrc} alt="University of Southern California"
                                       className="absolute inset-0 h-full w-full object-cover "/>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                <h3 className="z-10 mt-3 text-3xl font-bold text-white">{callout.name}</h3>
                                <div
                                    className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{callout.description}</div>
                            </article>
                                </Link>
                            </div>
                        </>
                    ))}

                </div>
            </div>

</div>
    )
}
