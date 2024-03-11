import {PresentationChartLineIcon, UserCircleIcon} from "@heroicons/react/24/solid";
import Pagination from "@/app/Component/Pagination";

export default function Home() {
    return (
        <>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  bg-white min-h-screen">
                <table className="w-full text-sm  text-gray-500 ">
                    <caption
                        className="p-5 text-lg font-semibold  text-gray-900 bg-white my-5">
                           <span className={"grid justify-center mb-2"}>
                            <PresentationChartLineIcon className="h-10 w-10 text-gray-700  me-2"/>
                        </span>
                         سفارشات
                        <p className="mt-1 text-sm font-normal text-gray-500 ">
                            لیست تمام سفارشات و رزرو های شما در جدول زیر امده و قابل مشاهده است
                        </p>
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-slate-100 ">
                    <tr>
                        <th scope="col" className="text-center py-4">
                            نام گروه
                        </th>
                        <th scope="col" className="text-center py-4">
                            تاریخ
                        </th>
                        <th scope="col" className="text-center py-4">
                            هزینه
                        </th>
                        <th scope="col" className="text-center py-4">
                            رضایت شما
                        </th>
                        <th scope="col" className="text-center py-4">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b ">
                        <th scope="row"
                            className="text-center py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="text-center py-4">
                            Silver
                        </td>
                        <td className="text-center py-4">
                            Laptop
                        </td>
                        <td className="text-center py-4">
                            $2999
                        </td>
                     </tr>
                    <tr className="bg-white border-b ">
                        <th scope="row"
                            className="text-center py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Microsoft Surface Pro
                        </th>
                        <td className="text-center py-4">
                            White
                        </td>
                        <td className="text-center py-4">
                            Laptop PC
                        </td>
                        <td className="text-center py-4">
                            $1999
                        </td>
                     </tr>
                    <tr className="bg-white ">
                        <th scope="row"
                            className="text-center py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Magic Mouse 2
                        </th>
                        <td className="text-center py-4">
                            Black
                        </td>
                        <td className="text-center py-4">
                            Accessories
                        </td>
                        <td className="text-center py-4">
                            $99
                        </td>

                    </tr>
                    </tbody>

                </table>
                <hr className={"my-10 border-slate-200"}/>
                <div className={"grid justify-center mt-10"}>
                <Pagination  currentPage={12} totalPage={12} />
                </div>

            </div>

        </>
    );
}
