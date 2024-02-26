"use client"
import {useState} from "react";
import List from "@/app/(site)/Component/List/List";
import {Team} from "@/app/(site)/Component/Team/Team";
import {Comment} from "@/app/(site)/Component/Comment/Comment";

export default function Sections() {
    const [selectedSession, setSelectedSession] = useState("example");
    return (<>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 ">
            <div
                onClick={() => {
                    setSelectedSession("example")
                }}
                className={["border-2 cursor-pointer my-5 border-rose-500   rounded-full w-44 h-44 mx-auto text-center flex  justify-center justify-items-center items-center  ring-2 ring-rose-500 ring-offset-4 ", selectedSession == "example" ? "bg-rose-500" : "bg-white"].join(" ")}>
                    <span
                        className={["text-xl  py-8  w-100 h-100 font-bold ", selectedSession == "example" ? "text-white " : "text-rose-500"].join(" ")}>
                        نمونه کار ها
                    </span>
            </div>
            <div
                onClick={() => {
                    setSelectedSession("team")
                }}
                className={["border-2 cursor-pointer my-5 border-rose-500   rounded-full w-44 h-44 mx-auto text-center flex  justify-center justify-items-center items-center  ring-2 ring-rose-500 ring-offset-4 ", selectedSession == "team" ? "bg-rose-500" : "bg-white"].join(" ")}>
                    <span
                        className={["text-xl  py-8  w-100 h-100 font-bold ", selectedSession == "team" ? "text-white " : "text-rose-500"].join(" ")}>
                        اعضای تیم
                    </span>
            </div>
            <div
                onClick={() => {
                    setSelectedSession("comment")
                }}
                className={["border-2 cursor-pointer my-5 border-rose-500   rounded-full w-44 h-44 mx-auto text-center flex  justify-center justify-items-center items-center  ring-2 ring-rose-500 ring-offset-4 ", selectedSession == "comment" ? "bg-rose-500" : "bg-white"].join(" ")}>
                    <span
                        className={["text-xl  py-8  w-100 h-100 font-bold ", selectedSession == "comment" ? "text-white " : "text-rose-500"].join(" ")}>
                        نظرات کاربران
                    </span>
            </div>
            <div
                onClick={() => {
                    setSelectedSession("actions")
                }}
                className={["border-2 cursor-pointer my-5 border-rose-500   rounded-full w-44 h-44 mx-auto text-center flex  justify-center justify-items-center items-center  ring-2 ring-rose-500 ring-offset-4 ", selectedSession == "actions" ? "bg-rose-500" : "bg-white"].join(" ")}>
                    <span
                        className={["text-xl  py-8  w-100 h-100 font-bold ", selectedSession == "actions" ? "text-white " : "text-rose-500"].join(" ")}>
                        آمار فعالیت گروه
                    </span>
            </div>
        </div>




         <div className="container mx-auto px-4 border bg-[#f5f5f5] my-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full  px-4 mx-auto text-center">
                    {selectedSession == "example" &&
                        <>
                    <div className={"text-2xl font-semibold py-8 text-[#dd4377]"}>
                        نمونه کار ها
                    </div>
                            <List/>
                        </>
                    }
                    {selectedSession == "comment" &&
                        <>
                            <div className={"text-2xl font-semibold py-8 text-[#dd4377]"}>
                                نظرات کاربران
                            </div>
                            <Comment/>
                        </>
                    }
                    {selectedSession == "actions" &&
                        <>
                            <div className={"text-2xl font-semibold py-8 text-[#dd4377]"}>
                               فعالیت های گروه
                            </div>

                        </>
                    }
                    {selectedSession == "team" &&
                        <>
                            <div className={"text-2xl font-semibold py-8 text-[#dd4377]"}>
                                اعضای گروه
                            </div>
                            <Team/>
                        </>
                    }
                </div>
            </div>
        </div>
    </>)
}
