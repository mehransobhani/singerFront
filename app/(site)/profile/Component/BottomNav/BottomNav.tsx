"use client"
import {
    BellAlertIcon,
    BellIcon,
    ClipboardDocumentListIcon, FlagIcon,
    HomeIcon,
    PresentationChartLineIcon,
    UserCircleIcon
} from "@heroicons/react/24/solid";
import {usePathname} from "next/navigation";
import Link from "next/link";

export  default  function BottomNav() {

    const pathName=usePathname();

    const navigation:{name:string,href:string,current:boolean,icon:any}[] = [
        { name: "پروفایل", href: "/profile", current: pathName=="/profile",icon:<UserCircleIcon className={["h-6 w-6   me-3",pathName=="/profile"?"text-white":"text-gray-600"].join(" ")} />},
        { name: "درخواست ها", href: "/profile/requests", current: pathName=="/profile/requests",icon:<ClipboardDocumentListIcon className={["h-6 w-6   me-3",pathName=="/profile/requests"?"text-white":"text-gray-600"].join(" ")}/> },
        { name: "درخواست ها", href: "/", current: pathName=="/profile/requests",icon:<ClipboardDocumentListIcon className={["h-6 w-6   me-3",pathName=="/profile/requests"?"text-white":"text-gray-600"].join(" ")}/> },
        { name: "لیست سفارشات", href: "/profile/orders", current: pathName=="/profile/orders",icon:<PresentationChartLineIcon className={["h-6 w-6   me-3",pathName=="/profile/orders"?"text-white":"text-gray-600"].join(" ")} /> },
        { name: "تیکت", href: "/profile/ticket", current: pathName=="/profile/ticket",icon:<FlagIcon className={["h-6 w-6   me-3",pathName=="/profile/ticket"?"text-white":"text-gray-600"].join(" ")} />},
     ];

return (


    <div
        className="fixed z-50 w-full h-16   bg-white border-t border-slate-200 r bottom-0 left-0 right-0 backdrop-blur bg-white/50 ">
        <div className="grid h-full   grid-cols-5 mx-auto">
            <Link  href={"/profile"}
                   className={["inline-flex flex-col items-center justify-center  group",pathName=="/profile"?"bg-rose-500":"backdrop-blur bg-white/50  hover:bg-slate-100 "].join(" ")}>
                <UserCircleIcon className={["h-6 w-6",pathName=="/profile"?"text-white":"text-gray-600"].join(" ")} />
                <span className={["text-gray-700 text-xs sm:text-sm",pathName=="/profile"?"text-white":"text-gray-600"].join(" ")}>  پروفایل</span>
            </Link>
            <Link  href={"/profile/requests"}
                   className={["inline-flex flex-col items-center justify-center group",pathName=="/profile/requests"?"bg-rose-500":"backdrop-blur bg-white/50  hover:bg-slate-100 "].join(" ")}>
                <ClipboardDocumentListIcon className={["h-6 w-6",pathName=="/profile/requests"?"text-white":"text-gray-600"].join(" ")} />
                <span className={["text-gray-700 text-xs sm:text-sm",pathName=="/profile/requests"?"text-white":"text-gray-600"].join(" ")}>درخواست ها</span>
            </Link>



            <div className="flex items-center justify-center backdrop-blur bg-white/50">
                <Link href={"/"}
                        className="inline-flex p-2 items-center justify-center w-10 h-10 font-medium bg-rose-500 rounded-full hover:bg-rose-700 group focus:ring-4 focus:ring-rose-300 focus:outline-none  ">
                    <HomeIcon className="h-8 w-8 text-white"/>
                </Link>
            </div>

            <Link   href={"/profile/orders"}
                    className={["inline-flex flex-col items-center justify-center  group",pathName=="/profile/orders"?"bg-rose-500":"backdrop-blur bg-white/50  hover:bg-slate-100 "].join(" ")}>
                <PresentationChartLineIcon className={["h-6 w-6 ",pathName=="/profile/orders"?"text-white":"text-gray-600"].join(" ")} />
                <span className={["text-gray-700 text-xs sm:text-sm" ,pathName=="/profile/orders"?"text-white":"text-gray-600" ].join(" ")}> سفارشات</span>
            </Link>


            <Link  href={"/profile/ticket"}
                   className={["inline-flex flex-col items-center justify-center  group",pathName=="/profile/ticket"?"bg-rose-500":"backdrop-blur bg-white/50   hover:bg-slate-100 "].join(" ")}>
                <FlagIcon className={["h-6 w-6",pathName=="/profile/ticket"?"text-white":"text-gray-600"].join(" ")} />
                <span className={["text-gray-700 text-xs sm:text-sm",pathName=="/profile/ticket"?"text-white":"text-gray-600"].join(" ")}>تیکت ها</span>
            </Link>


        </div>
    </div>

)
}
