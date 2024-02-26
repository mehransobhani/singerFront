'use client';
import djBanner from "@/public/image/banner/dj.jpg"
import singerBanner from "@/public/image/banner/singer.jpg"
import Image from "next/image";

const callouts = [
    {
        name: 'دیجی ها',
        description: 'Work from home accessories',
        imageSrc: djBanner,
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'گروه های موسیقی',
        description: 'Journals and note-taking',
        imageSrc: singerBanner,
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },

    ]

    export default function Example() {
    return (

            <div className=" bg-[#f5f5f5] ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h1 className="text-2xl font-bold text-center">
                            دسته های  <br/>{" "}
                            <span className="text-rose-500 font-extrabold my-3">هنرمندان</span>
                        </h1>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                            {callouts.map((callout) => (
                                <div key={callout.name} className="group relative">
                                    <div
                                        className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <Image
                                            src={callout.imageSrc}
                                            alt={callout.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500">
                                        <a href={callout.href}>
                                            <span className="absolute inset-0"/>
                                            {callout.name}
                                        </a>
                                    </h3>
                                    <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    )
    }
