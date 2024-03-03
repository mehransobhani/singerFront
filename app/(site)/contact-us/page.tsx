import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Breadcrumb from "@/app/(site)/Component/Breadcrumb/Breadcrumb";

export default function Example() {
    return (
        <div className={"bg-white "}>
            <Breadcrumb />
            <div className={"bg-white md:mx-20 mx-5 py-10"}>

                <h2 className="text-2xl font-bold text-center mb-10">
                     فرم تماس  <br/>{" "}
                    <span className="text-rose-500 font-extrabold my-3">با ما</span>
                </h2>

                <form>
                    <div className="space-y-12">

                        <div className="border-b border-gray-900/10 pb-12">
                             <p className="mt-1 text-center leading-6 text-gray-600">
                                 جهت برقراری ارتباط با ما فرم زیر را تکمیل و ارسال کنید , ما در اولین فرصت با شما ارتباط برقرار میکنیم.
                             </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        نام
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            placeholder={"نام خود را وارد کنید"}

                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-rose-500   sm:text-sm sm:leading-6 "
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        نام خانوادگی
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            placeholder={"نام خانوادگی خود را وارد کنید"}
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-rose-500   sm:text-sm sm:leading-6 "
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        ایمیل
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            placeholder={"ایمیل خود را وارد کنید"}
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-rose-500   sm:text-sm sm:leading-6 "
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        شماره همراه
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            placeholder={"شماره همراه خود را وارد کنید"}

                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-rose-500   sm:text-sm sm:leading-6 "
                                        />
                                    </div>
                                </div>


                                <div className="col-span-full">
                                    <label htmlFor="street-address"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        پیام
                                    </label>
                                    <div className="mt-2">
                                <textarea id="message"
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300   focus:outline focus:outline-1 focus:outline-rose-500 "
                                          placeholder="پیام خود را وارد کنید ..."></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-center gap-x-6">

                        <button
                            type="submit"
                            className="rounded-md bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500  focus:border-0  focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0"
                        >
                            ارسال
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
