"use client"
import {ChevronLeftIcon, HomeIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import {Squares2X2Icon} from "@heroicons/react/20/solid";

interface breadcrumb {
    href: string,
    title: string,
    current: boolean
}

export default function Breadcrumb({list}: { list: breadcrumb[] }) {
    return (<>
        <div className='py-2 bg-[#f5f5f5]'>
            <nav className="flex px-5 py-2 bg-white  " aria-label="Breadcrumb">
                <ol className="inline-flex items-center   ">
                    <li className="inline-flex items-center ">
                        <Link href={"/admin/dashboard"}
                              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-rose-500 ">
                            <Squares2X2Icon className="h-6 w-6 text-gray-500 mx-1 sm:mx-4 hover:text-rose-500"/>
                        </Link>
                    </li>
                    {
                        list && list.map((item: breadcrumb) => (<>
                            <li className="inline-flex items-center ">

                                {
                                    item.current ? <div className="flex items-center ">
                                            <ChevronLeftIcon className="h-6 w-6 text-gray-500 mx-1 sm:mx-4"/>

                                            <span
                                                className=" text-sm font-bold text-gray-800 ">{item.title}</span>
                                        </div> :
                                        <Link href={item.href}
                                              className="inline-flex items-center text-sm font-bold text-gray-500  hover:text-rose-500 ">
                                            <ChevronLeftIcon className="h-6 w-6 text-gray-500 mx-1 sm:mx-4"/>
                                            {item.title}
                                        </Link>
                                }
                            </li>

                        </>))
                    }

                </ol>
            </nav>
        </div>
    </>)
}
