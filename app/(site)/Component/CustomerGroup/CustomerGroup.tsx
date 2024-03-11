import {
    BuildingStorefrontIcon,
    CakeIcon, CircleStackIcon,
    GiftIcon,
    MusicalNoteIcon
} from "@heroicons/react/24/solid";

const features = [


    {
        name: 'عروسی ها',
        icon: <CakeIcon className="h-10 w-10 text-rose-500"/>
    },
    {
        name: 'مهمانی ها',
        icon: <MusicalNoteIcon className="h-10 w-10 text-rose-500"/>

    },
    {
        name: 'جشن ها',
        icon: <GiftIcon className="h-10 w-10 text-rose-500"/>
    },
    {
        name: 'رستوران ها',
        icon: <BuildingStorefrontIcon className="h-10 w-10 text-rose-500"/>
    },
    {
        name: 'کافه ها',
        icon: <CircleStackIcon className="h-10 w-10 text-rose-500"/>
    },
]

export default function CustomerGroup() {
    return (
        <div className="bg-white py-10" id={"f"}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-2xl font-bold text-center">
                        مخاطبان سایت <br/>{" "}
                        <span className="text-rose-500 font-extrabold my-3">سمبیت </span>
                    </h2>
                </div>
                <div className="mx-auto my-24 max-w-2xl lg:max-w-4xl">
                    <dl className="grid  grid-cols-1   justify-center justify-items-center items-center gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-5 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col items-center  space-y-2 rounded-full border border-dashed hover:bg-slate-50  hover:border-rose-500 transition-all justify-center  h-32 w-32 cursor-pointer">
                                <span>
                                {feature.icon}
                                    </span>
                                <span>
                                {feature.name}
                                    </span>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
