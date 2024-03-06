"use client"
import {
    Bars3Icon,
    BellAlertIcon, ChevronDoubleLeftIcon,
    ClipboardDocumentListIcon, FlagIcon,
    PresentationChartLineIcon, TicketIcon,
    UserCircleIcon, UserGroupIcon, XMarkIcon
} from "@heroicons/react/24/solid";
import {usePathname} from "next/navigation";
import Link from "next/link";



function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const pathName=usePathname();

    const navigation:{name:string,href:string,current:boolean,icon:any}[] = [
        { name: "پروفایل", href: "/profile", current: pathName=="/profile",icon:<UserCircleIcon className={["h-6 w-6   me-3",pathName=="/profile"?"text-white":"text-gray-800"].join(" ")} />},
        { name: "درخواست ها", href: "/profile/requests", current: pathName=="/profile/requests",icon:<ClipboardDocumentListIcon className={["h-6 w-6   me-3",pathName=="/profile/requests"?"text-white":"text-gray-800"].join(" ")}/> },
        { name: "لیست سفارشات", href: "/profile/orders", current: pathName=="/profile/orders",icon:<PresentationChartLineIcon className={["h-6 w-6   me-3",pathName=="/profile/orders"?"text-white":"text-gray-800"].join(" ")} /> },
        { name: "تیکت", href: "/profile/ticket", current: pathName=="/profile/ticket",icon:<FlagIcon className={["h-6 w-6   me-3",pathName=="/profile/ticket"?"text-white":"text-gray-800"].join(" ")} />},
        { name: "اعلان ها", href: "/profile/notifications", current: pathName=="/profile/notifications",icon:<BellAlertIcon className={["h-6 w-6   me-3",pathName=="/profile/notifications"?"text-white":"text-gray-800"].join(" ")} />},
     ];
  return (<>
          <div className="flex min-h-screen">
              <input type="checkbox" id="drawer-toggle" className="relative sr-only peer " defaultChecked={false} />
              <label htmlFor="drawer-toggle"
                     className="rounded-r-none absolute top-0 right-0 inline-block p-3 transition-all border cursor-pointer   duration-500 mt-20 bg-white rounded-lg peer-checked:rotate-180  peer-checked:rounded-l-none peer-checked:rounded-r-md peer-checked:right-52">
                   <Bars3Icon className="h-4 w-4 text-black" />

              </label>
              <div
                  className="fixed mt-16 md:mt-0 md:static h-screen md:h-auto top-0  w-0 whitespace-nowrap transition-all duration-500 transform translate-x-full bg-white border-l  overflow-hidden peer-checked:translate-x-0 peer-checked:w-full sm:peer-checked:w-52">
                  <div className=" py-1 w-full relative" >
                      <div className={"justify-end flex sm:hidden "}>
                      <input type="checkbox" id="drawer-toggle" className="relative sr-only peer invisible "
                             defaultChecked={true}/>
                      <label htmlFor="drawer-toggle"
                             className="cursor-pointer    bg-white  ">
                          <XMarkIcon className="h-5 w-5 text-black" />
                      </label>
                      </div>
                      <ul className="sm:flex sm:flex-wrap w-full -mb-px text-sm font-medium text-center text-gray-500 justify-start ">
                          {
                              navigation.map((item: {
                                  name: string,
                                  href: string,
                                  icon: any,
                                  current: boolean
                              }, index: number) => {
                                  return (<>

                                      <li className="w-full border-b ">
                                          <Link href={item.href}
                                                className={["inline-flex w-full  justify-start items-center  p-4    group ", item.current ? "text-white   bg-rose-500 " : "  hover:border-gray-300  hover:text-rose-500 hover:bg-slate-100 "].join(" ")}>
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
              </div>
          </div>

          {/*<div className="border-b border-gray-200 pt-1">*/}
          {/*    <ul className="sm:flex sm:flex-wrap -mb-px text-sm font-medium text-center text-gray-500 md:px-10">*/}
          {/*        {*/}
          {/*            navigation.map((item:{name:string,href:string,icon:any,current:boolean},index:number)=>{return(<>*/}

          {/*                <li className="me-2">*/}
          {/*                    <Link href={item.href}*/}
          {/*                       className={["inline-flex w-full sm:w-fit items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300   group  hover:text-rose-500" , item.current&&"text-black border-b-0  bg-rose-50 hover:text-black"].join(" ")}>*/}
          {/*                        {*/}
          {/*                            item.icon*/}
          {/*                        }*/}
          {/*                        {*/}
          {/*                            item.name*/}
          {/*                        }*/}


          {/*                    </Link>*/}
          {/*                </li>*/}

          {/*            </>)*/}
          {/*            })*/}
          {/*        }*/}

          {/*    </ul>*/}
          {/*</div>*/}

      </>
  );
}
