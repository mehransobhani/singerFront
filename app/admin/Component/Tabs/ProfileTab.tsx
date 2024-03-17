"use client"
import {usePathname} from "next/navigation";
import Link from "next/link";
import {ClipboardDocumentListIcon, DocumentTextIcon, MusicalNoteIcon, UserGroupIcon} from "@heroicons/react/24/solid";
import {ReactNode} from "react";

interface tabs {
    title: string,
    icon: ReactNode,
    href: string,
    current: boolean
}

export default function ProfileTab() {
    const pathName: string | null = usePathname();

    const tabs: tabs[] = [
        {
            icon: <DocumentTextIcon
                className={["h-6 w-6 ", pathName == "/admin/samples" ? "text-rose-500" : "text-gray-500 group-hover:text-rose-500"].join(" ")}/>,

            title: "ویرایش اطلاعات اولیه",
            href:  "/admin/profile/basic-information",
            current: pathName == "/admin/profile/basic-information",
        },
        {
            icon: <UserGroupIcon
                className={["h-6 w-6 ", pathName == "/admin/team" ? "text-rose-500" : "text-gray-500 group-hover:text-rose-500"].join(" ")}/>,
            title: "ویرایش گروه",
            href: "/admin/profile/team",
            current: pathName=="/admin/profile/team",
        },
        {
            icon: <MusicalNoteIcon
                className={["h-6 w-6 ", pathName == "/admin/samples" ? "text-rose-500" : "text-gray-500 group-hover:text-rose-500"].join(" ")}/>,

            title: "ویرایش نمونه کار ها",
            href: "/admin/profile/samples",
            current: pathName == "/admin/profile/samples",
        },
        {

                icon: <ClipboardDocumentListIcon
                    className={["h-6 w-6 ", pathName == "/admin/samples" ? "text-rose-500" : "text-gray-500 group-hover:text-rose-500"].join(" ")}/>,

            title: "ویرایش اطلاعات تکمیلی",
            href: "/admin/profile/further-information",
            current: pathName == "/admin/profile/further-information",
        },
    ]
    return (<>
        <div className='pb-2 bg-[#f5f5f5]'>
            <ul
                className=" py-5 bg-white flex list-none flex-col sm:flex-row gap-y-4  border-rose-100 rounded flex-wrap    ps-0">

                {
                    tabs.map((tab: tabs) => (<>
                        <li className="flex-grow basis-0 text-center">
                            <Link
                                href={tab.href}
                                className={[tab.current ? " text-rose-500  border-b border-b-rose-400 border border-rose-500 " : " group border border-dotted hover:border-solid text-gray-700 transition-all   hover:text-rose-500 ", "  justify-center items-center justify-items-center grid rounded-full w-40 h-40  mx-auto  py-5 font-bold   px-7  text-xs  uppercase leading-tight  hover:isolate  focus:isolate   "].join(" ")}

                            >

                                <div className={"col-span-2"}>
                                 <span className={"grid justify-center my-2 group-hover:animate-bounce"}>
                                          {tab.icon}
                                 </span>
                                    <span className={"grid justify-center my-2 "}>

                                 {tab.title}
                                    </span>
                                </div>

                            </Link>
                        </li>
                    </>))
                }

            </ul>
        </div>
    </>)
}
