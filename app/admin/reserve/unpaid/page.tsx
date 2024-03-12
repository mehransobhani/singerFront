import Breadcrumb from "@/app/admin/Component/Breadcrumb/Breadcrumb";
import PageHeader from "@/app/admin/Component/PageHeader/PageHeader";
import {Squares2X2Icon} from "@heroicons/react/20/solid";
import {HandRaisedIcon, PresentationChartLineIcon} from "@heroicons/react/24/solid";
import Pagination from "@/app/Component/Pagination";
import Timer from "@/app/Component/Timer";
import Link from "next/link";


export default function Home() {

    return (
        <>
            <Breadcrumb list={[{
                title: "درخواست های رزرو",
                href: "",
                current: true
            }]}/>


            <div className={"bg-white  py-10 px-2 sm:px-10"}>


                <PageHeader
                    title={"درخواست های کاربران برای رزرو"}
                    icon={<HandRaisedIcon className="h-10 w-10 text-gray-700"/>}
                    description={"هنرمند عزیز , درخواست های اولیه کاربران برای رزرو اجرای شما در مراسم در جدول زیر قابل مشاهده است  و شما میتوانید آن را تایید و یا رد کنید ."}
                />

                <ul
                    className="mb-5 flex list-none flex-col sm:flex-row border-b border-rose-100 rounded flex-wrap    ps-0">
                    <li className="flex-grow basis-0 text-center">
                        <Link
                            href="#"
                            className=" block border-b border-b-rose-400 py-5 font-bold text-rose-500   h-full  px-7  text-xs  uppercase leading-tight  hover:isolate  hover:bg-neutral-100 focus:isolate   "

                        >درخواست های کاربران</Link>
                    </li>
                    <li className="flex-grow basis-0 text-center">
                        <Link
                            href="#"
                            className=" block py-5 font-bold text-gray-700   h-full  px-7  text-xs  uppercase leading-tight  hover:isolate  hover:bg-neutral-100 focus:isolate   "

                        >درخواست های کاربران</Link>
                    </li>
                    <li className="flex-grow basis-0 text-center">
                        <Link
                            href="#"
                            className=" block  py-5 font-bold text-gray-700   h-full  px-7  text-xs  uppercase leading-tight  hover:isolate  hover:bg-neutral-100 focus:isolate   "

                        >درخواست های کاربران</Link>
                    </li>
                    <li className="flex-grow basis-0 text-center">
                        <Link
                            href="#"
                            className=" block py-5 font-bold text-gray-700 h-full  px-7  text-xs  uppercase leading-tight  hover:isolate  hover:bg-neutral-100 focus:isolate   "

                        >درخواست های کاربران</Link>
                    </li>

                </ul>


                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table
                                    className="min-w-full text-left text-sm font-light text-surface ">
                                    <thead
                                        className="border-b border-neutral-200 font-medium">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">کاربر</th>
                                        <th scope="col" className="px-6 py-4">استان</th>
                                        <th scope="col" className="px-6 py-4">شهر</th>
                                        <th scope="col" className="px-6 py-4">تاریخ</th>
                                        <th scope="col" className="px-6 py-4">مهلت تایید</th>
                                        <th scope="col" className="px-6 py-4">#</th>
                                        <th scope="col" className="px-6 py-4">#</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                        className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">مهران</td>
                                        <td className="whitespace-nowrap px-6 py-4">تهران</td>
                                        <td className="whitespace-nowrap px-6 py-4">تهران</td>
                                        <td className="whitespace-nowrap px-6 py-4">1402/02/4</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                              <span
                                                  className="bg-rose-100 text-rose-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                                                         <Timer timeStamp={1710448993000}/>
                                              </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <button
                                                type="submit"
                                                className="rounded-md bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500  focus:border-0  focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0"
                                            >
                                                تایید
                                            </button>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <button
                                                type="submit"
                                                className="rounded-md bg-gray-800 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700  focus:border-0  focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0"
                                            >
                                                رد
                                            </button>
                                        </td>
                                    </tr>
                                    <tr
                                        className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">مهران</td>
                                        <td className="whitespace-nowrap px-6 py-4">تهران</td>
                                        <td className="whitespace-nowrap px-6 py-4">تهران</td>
                                        <td className="whitespace-nowrap px-6 py-4">1402/02/4</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                              <span
                                                  className="bg-rose-100 text-rose-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                                                         <Timer timeStamp={1710448993000}/>
                                              </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <button
                                                type="submit"
                                                className="rounded-md bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500  focus:border-0  focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0"
                                            >
                                                تایید
                                            </button>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <button
                                                type="submit"
                                                className="rounded-md bg-gray-800 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700  focus:border-0  focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0"
                                            >
                                                رد
                                            </button>
                                        </td>
                                    </tr>

                                    <tr
                                        className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">مهران</td>
                                        <td className="whitespace-nowrap px-6 py-4">تهران</td>
                                        <td className="whitespace-nowrap px-6 py-4">تهران</td>
                                        <td className="whitespace-nowrap px-6 py-4">1402/02/4</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                              <span
                                                  className="bg-rose-100 text-rose-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                                                         <Timer timeStamp={1710448993000}/>
                                              </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <button
                                                type="submit"
                                                className="rounded-md bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500  focus:border-0  focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0"
                                            >
                                                تایید
                                            </button>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <button
                                                type="submit"
                                                className="rounded-md bg-gray-800 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700  focus:border-0  focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0"
                                            >
                                                رد
                                            </button>
                                        </td>
                                    </tr>

                                    <tr
                                        className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">مهران</td>
                                        <td className="whitespace-nowrap px-6 py-4">تهران</td>
                                        <td className="whitespace-nowrap px-6 py-4">تهران</td>
                                        <td className="whitespace-nowrap px-6 py-4">1402/02/4</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                              <span
                                                  className="bg-rose-100 text-rose-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                                                         <Timer timeStamp={1710448993000}/>
                                              </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <button
                                                type="submit"
                                                className="rounded-md bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500  focus:border-0  focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0"
                                            >
                                                تایید
                                            </button>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <button
                                                type="submit"
                                                className="rounded-md bg-gray-800 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700  focus:border-0  focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0"
                                            >
                                                رد
                                            </button>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}
