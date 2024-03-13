"use client"
import {EnvelopeIcon} from "@heroicons/react/24/solid";
import AdminChatMessage from "@/app/(site)/profile/Component/Chat/AdminChatMessage";
import UserChatMessage from "@/app/(site)/profile/Component/Chat/UserChatMessage";
import {Story} from "@/app/(site)/Component/Story/Story";
import {Dialog, Disclosure, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {MinusIcon, PlusIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

export  default  function Chat()
{

    const [shows,setShows]=useState(false);
    const ticket=[
        {
        id:1,
        unseenMessage:1,
        status:1,
        title:"خطای سایت",
    },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
    ]
    // const message: {id: number, admin: number, date: string, message: string}[]=[
    //     {
    //     id:1,
    //     admin:0,
    //     date:"1402/12/12",
    //     message:"خطای سایت",
    // },
    //     {
    //         id:1,
    //         admin:1,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     {
    //         id:1,
    //         admin:0,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     {
    //         id:1,
    //         admin:0,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     {
    //         id:1,
    //         admin:0,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     {
    //         id:1,
    //         admin:1,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     {
    //         id:1,
    //         admin:1,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     {
    //         id:1,
    //         admin:0,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     {
    //         id:1,
    //         admin:0,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     {
    //         id:1,
    //         admin:0,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     {
    //         id:1,
    //         admin:1,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     ,
    //     {
    //         id:1,
    //         admin:1,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     {
    //         id:1,
    //         admin:0,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     {
    //         id:1,
    //         admin:0,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     {
    //         id:1,
    //         admin:0,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    //     {
    //         id:1,
    //         admin:1,
    //         date:"1402/12/12",
    //         message:"خطای سایت",
    //     },
    // ]
    return(<>

        <div className="flex h-[90vh] overflow-hidden">

            <Transition show={shows} as={Fragment}
                        enter="transition ease-in-out duration-500 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full">

                                <div className="w-96 absolute md:static md:w-1/4 bg-white border-l border-gray-300 ">

                                    <header
                                        className="p-4 border-b border-gray-300 flex justify-between items-center bg-rose-500 text-white">
                                        <h1 className="text-xl font-semibold">لیست تیکت ها </h1>
                                        <div>
                                            <XMarkIcon className="h-6 w-6 text-white" onClick={()=>{setShows(false)}} />
                                        </div>
                                    </header>


                                    <div className="overflow-y-auto h-screen p-3 mb-9 pb-20 bg-white">
                                        {
                                            ticket.map((item) => {
                                                return (<>
                                                    <div
                                                        className="flex items-center mb-4 cursor-pointer hover:bg-slate-200 p-2 rounded-md gap-x-3">
                                                        <div
                                                            className="w-12 h-12 rounded-full mr-3 bg-rose-500 flex justify-center items-center">
                                                            <EnvelopeIcon className="h-6 w-6 text-white "/>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h2 className="text-gray-700 font-semibold">{item.title}</h2>
                                                            <small className="text-gray-500 font-semibold">بسته</small>
                                                        </div>
                                                        <div
                                                            className={"w-5 h-5 text-white bg-rose-500 rounded-full flex justify-center"}>
                                                            {item.unseenMessage}
                                                        </div>
                                                    </div>
                                                </>)
                                            })
                                        }
                                    </div>
                                </div>


             </Transition>


            <div className="flex-1  bg-slate-100   ">

                <header className="  p-4 text-gray-700">
                       <span
                           onClick={() => setShows(true)}
                           className="cursor-pointer my-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-rose-500 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300">
                    لیست تیکت ها
                </span>
                    <h1 className="text-2xl font-semibold">خطای سایت</h1>
                </header>

                <div className="p-4 h-[70vh]  overflow-y-auto  pb-12">

                    {/*{*/}
                    {/*    message.map((item: {id: number, admin: number, date: string, message: string}) => (*/}
                    {/*        <>*/}
                    {/*            {item.admin ? <AdminChatMessage message={item.message}/> :*/}
                    {/*                <UserChatMessage message={item.message}/>}*/}
                    {/*        </>*/}
                    {/*    ))*/}
                    {/*}*/}

                </div>
                <footer className="bg-white border-t border-gray-300 p-4 w-full">
                    <div className="flex items-center">
                        <input type="text" placeholder="Type a message..."
                               className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"/>
                        <button className="bg-rose-500 text-white px-4 py-2 rounded-md ml-2">ارسال</button>
                    </div>
                </footer>

            </div>

        </div>


    </>)
}
