import {
    ChatBubbleOvalLeftIcon,
    CursorArrowRaysIcon,
    EyeIcon,
    GlobeAltIcon,
    MapPinIcon
} from "@heroicons/react/24/solid";

const features = [


    {
        name: 'تنوع',
        description:
            'تنوع بین این همه گروه موسیقی و دیجی',
        icon:<GlobeAltIcon className="h-6 w-6 text-white" />
     },
    {
        name: 'رزرو کردن ساده',
        description:
            'خیلی ساده هر گروهی که پسندیدی با یه کلیلک رزرو کن',
        icon:<CursorArrowRaysIcon className="h-6 w-6 text-white" />

    },
    {
        name: 'استفاده از تجارب دیگران',
        description:
            'میتونی تجربه های افراد دیگه ای رو که با هر گروه موسیقی کار کردن ببینی و انتخاب کنی',
        icon: <ChatBubbleOvalLeftIcon className="h-6 w-6 text-white" />
     },
    {
        name: 'مشاهده نمونه کار ها',
        description:
            'توی بخش پروفایل گروه های موسیقی نمونه کارهاشون قرار داره که میتونی با توجه به اونها انتخاب بهتری کنید .',
        icon: <EyeIcon className="h-6 w-6 text-white" />

    },
]

export default function Features() {
     return (
        <div className="bg-white py-24 sm:py-32" id={"f"} >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-[#dd4377]">همین حالا</h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        گروه موسیقی مورد نظرتو برای مراسمت انتخاب کن
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500">
                                        {feature.icon}
                                     </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
