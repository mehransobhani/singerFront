import Step from "@/app/(site)/Step/Step";
import Breadcrumb from "@/app/(site)/Component/Breadcrumb/Breadcrumb";
import Accordion from "@/app/(site)/Component/Accordion/Accordion";

export default function page() {
    return (<>
        <div className={"pb-4 bg-[#f8f8f8]"}>
                <Breadcrumb/>
            <div className="grid lg:grid-cols-4 gap-5 mx-10">
                <div className={"lg:col-span-1  bg-white px-10 py-5 rounded shadow-lg "}>
                     <Step/>
                </div>
                <div className={"lg:col-span-3  bg-white px-10 py-5  rounded shadow-lg"}>


                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-center text-gray-500 border-collapse">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr className=" flex-col flex-no wrap sm:table-row border-b hidden">
                                <th scope="col" className="px-6 py-3 border">
                                    نام گروه / هنرمند
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    تاریخ
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    وضعیت
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    عملیات
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    عملیات
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="flex flex-col flex-no wrap sm:table-row bg-white border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border">
                                    گروه 7
                                </th>
                                <td className="px-6 py-4 border">1402/12/28</td>
                                <td className="px-6 py-4 border">تایید هنرمند</td>
                                <td className="px-6 py-4 border">
                                    <button type="button"
                                            className="transition-all text-green-500 hover:text-white border border-green-500 hover:bg-green-500   focus:outline-none   font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                        پرداخت
                                    </button>
                                </td>
                                <td className="px-6 py-4 border">
                                    <button type="button"
                                            className="transition-all text-rose-500 hover:text-white border border-rose-500 hover:bg-rose-500   focus:outline-none   font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                        انصراف
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>


                    </div>


                </div>
            </div>
        </div>
    </>)
}
