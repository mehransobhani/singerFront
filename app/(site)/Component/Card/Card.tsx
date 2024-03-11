import avatar from "@/public/image/avatar/avatar.png"
import Image from "next/image"
import Star from "../Star/Star"
import { MapPinIcon } from "@heroicons/react/24/solid"
import Link from "next/link";

export default function Card() {
    return (
        <div
            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"}>

            <div className="flex flex-col items-center py-10">


                <Image className="w-24 h-24 mb-3 rounded-full shadow-lg border"
                    src={avatar} alt="Bonnie image" />

<span className=" my-1 text-sm text-gray-500 "><Star score={4} /> </span>


                <h5 className="my-1 text-xl font-medium text-gray-900">گروه موسیقی
                    7</h5>


                <div className={"my-1 flex gap-1 text-gray-500 "}>
                    <span className={"grid justify-center items-center"}>
                        هزینه اجرا  :</span>

                    <span className="grid justify-center items-center ">8,500,000</span>
                </div>

                <div className={"flex gap-1 my-1"}>
                    <span className={"grid justify-center items-center"}><MapPinIcon
                        className="h-4 w-4 text-gray-500" /></span>

                    <span className="text-sm text-gray-500 ">تهران</span>
                </div>




                <div className="flex mt-4 md:mt-6">
                    <Link href={"product"}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                        مشاهده</Link>
                </div>

            </div>
        </div>
    )
}
