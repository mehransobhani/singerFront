"use client"
import {useState} from "react";
import Actions from "@/app/(site)/Component/Actions/Actions";
import {Team} from "@/app/(site)/Component/Team/Team";
import {Comment} from "@/app/(site)/Component/Comment/Comment";
import {ChartBarIcon, ChatBubbleLeftEllipsisIcon, UserGroupIcon} from "@heroicons/react/24/solid";
import {Squares2X2Icon} from "@heroicons/react/20/solid";
import ArtistDetails from "@/app/(site)/Component/ArtistDetails/ArtistDetails";
import Samples from "@/app/(site)/Component/Samples/Samples";

export default function Sections() {
    const [selectedSession, setSelectedSession] = useState("Property");

    const menu = [
        {name: 'ویژگی ها', session: 'Property',view:<ArtistDetails/>,icon:<Squares2X2Icon className={["h-6 w-6 ","Property"==selectedSession?"text-white":"text-gray-500"].join(" ")}/>},
        {name: 'نمونه کار ها', session: 'samples',view:<Samples/>,icon:<Squares2X2Icon className={["h-6 w-6 ","samples"==selectedSession?"text-white":"text-gray-500"].join(" ")}/>},
        {name: ' اعضای تیم', session: 'team' ,view:<Team/>,icon:<UserGroupIcon className={["h-6 w-6 ","team"==selectedSession?"text-white":"text-gray-500"].join(" ")}/>},
        {name: 'فعالیت ها', session: 'actions',view:<Actions/> ,icon:<ChartBarIcon className={["h-6 w-6 ","actions"==selectedSession?"text-white":"text-gray-500"].join(" ")} />},
        {name: 'نظرات', session: 'comments',view: <Comment/>,icon:<ChatBubbleLeftEllipsisIcon className={["h-6 w-6 ","comments"==selectedSession?"text-white":"text-gray-500"].join(" ")} /> },
    ]

    return (<>


        <div className="md:flex mx-5  ">
            <ul className="flex-column space-y space-y-1 md:space-y-4 text-sm font-medium text-gray-700 md:me-4 mb-4 md:mb-0 w-full md:w-60">

                {
                    menu.map((item,index) => (
                        <li>
                            <div
                                onClick={() => {
                                    setSelectedSession(item.session)
                                }}
                                className={[selectedSession == item.session ? "text-white bg-rose-500 font-bold " : "bg-white", "cursor-pointer inline-flex items-center px-4 py-3  gap-5 border rounded-lg active w-full "].join(" ")}
                                aria-current="page">
                                {item.icon}
                                {item.name}
                            </div>
                        </li>
                    ))
                }

            </ul>
            <div
                className="bg-white border text-medium text-gray-700  rounded-lg w-full py-5  px-6  ">

                {
                    menu.map((item,index)=>(
                        <>
                        {

                            selectedSession==item.session && <>
                            <div className={"text-2xl font-bold  text-[#dd4377]"}>
                                {
                                    item.name
                                }
                            </div>
                                <div className={"py-10"}>

                                {
                                    item.view
                                }
                                </div>
                            </>

                        }
                            </>
                    ))
                }
            </div>
        </div>
    </>)
}
