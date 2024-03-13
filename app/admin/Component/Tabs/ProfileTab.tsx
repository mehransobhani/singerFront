"use client"
import {usePathname} from "next/navigation";
import Link from "next/link";
interface tabs{
    title:string,
    href:string,
    current:boolean
}
export default function ProfileTab() {
    const pathName:string|null=usePathname();

    const tabs:tabs[] = [
        {
            title: "ویرایش اطلاعات اولیه",
            href: "/admin/reserve/request",
            current: pathName=="/admin/reserve/request",
        },
        {
            title: "ویرایش گروه",
            href: "/admin/reserve/awaiting-payment",
            current: pathName=="/admin/team",
        },
        {
            title: "ویرایش نمونه کار ها",
            href: "/admin/reserve/completed",
            current: pathName=="/admin/reserve/completed",
        },
        {
            title: "ویرایش اطلاعات تکمیلی",
            href: "/admin/reserve/canceled",
            current: pathName=="/admin/reserve/canceled",
        },
        {
            title: "رد شده",
            href: "/admin/reserve/rejected",
            current: pathName=="/admin/reserve/rejected",
        },{
            title: "پرداخت نشده",
            href: "/admin/reserve/unpaid",
            current: pathName=="/admin/reserve/unpaid",
        },]
    return(<>
        <ul
            className="mb-5 flex list-none flex-col sm:flex-row border-b border-rose-100 rounded flex-wrap    ps-0">

            {
                tabs.map((tab:tabs)=>(<>
                    <li className="flex-grow basis-0 text-center">
                        <Link
                            href={tab.href}
                            className={[tab.current?" text-rose-500  border-b border-b-rose-400":" hover:bg-neutral-100 text-gray-700 " ," block py-5 font-bold  h-full  px-7  text-xs  uppercase leading-tight  hover:isolate  focus:isolate   "].join(" ")}

                        >{tab.title}</Link>
                    </li>
                </>))
            }

        </ul>

    </>)
}
