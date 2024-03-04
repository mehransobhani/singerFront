"use client"
import {
    BellAlertIcon,
    ClipboardDocumentListIcon, FlagIcon,
    PresentationChartLineIcon, TicketIcon,
    UserCircleIcon, UserGroupIcon
} from "@heroicons/react/24/solid";
import {usePathname} from "next/navigation";
import Link from "next/link";



function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const pathName=usePathname();

    const navigation:{name:string,href:string,current:boolean,icon:any}[] = [
        { name: "پروفایل", href: "/profile", current: pathName=="/profile",icon:<UserCircleIcon className="h-6 w-6 text-gray-500  me-2" />},
        { name: "درخواست ها", href: "/profile/requests", current: pathName=="/profile/requests",icon:<ClipboardDocumentListIcon className="h-6 w-6 text-gray-500  me-2" /> },
        { name: "لیست سفارشات", href: "/profile/orders", current: pathName=="/profile/orders",icon:<PresentationChartLineIcon className="h-6 w-6 text-gray-500  me-2" /> },
        { name: "تیکت", href: "/profile/ticket", current: pathName=="/profile/ticket",icon:<FlagIcon className="h-6 w-6 text-gray-500 me-2" />},
        { name: "اعلان ها", href: "/profile/notifications", current: pathName=="/profile/notifications",icon:<BellAlertIcon className="h-6 w-6 text-gray-500 me-2" />},
     ];
  return (<>


          <div className="border-b border-gray-200 pt-1">
              <ul className="sm:flex sm:flex-wrap -mb-px text-sm font-medium text-center text-gray-500 md:px-10">
                  {
                      navigation.map((item:{name:string,href:string,icon:any,current:boolean},index:number)=>{return(<>

                          <li className="me-2">
                              <Link href={item.href}
                                 className={["inline-flex w-full sm:w-fit items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300   group  hover:text-rose-500" , item.current&&"text-black border-b-0  bg-rose-50 hover:text-black"].join(" ")}>
                                  {
                                      item.icon
                                  }
                                  {
                                      item.name
                                  }


                              </Link>
                          </li>

                      </>)
                      })
                  }

              </ul>
          </div>

      </>
  );
}
