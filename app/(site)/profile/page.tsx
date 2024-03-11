import {UserCircleIcon} from "@heroicons/react/24/solid";

export default function Home() {
    return (
        <>
            <div className={"bg-white"}>
            <div className={"md:mx-5 mx-5 py-10 divide-rose space-y-12"}>
                 <div className="space-y-12">
                    <div className="   pb-12">
                        <span className={"grid justify-center"}>
                            <UserCircleIcon className="h-10 w-10 text-gray-700  me-2" />
                        </span>
                        <p className="mt-2 text-center leading-6 text-gray-600">
                          در این بخش میتوانید اطلاعات حساب کاربری خود را مشاهده و ویرایش کنید .
                        </p>
                        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-16">
                            <div className="sm:col-span-1 ">
                                <div className=" grid grid-cols-1 gap-x-6   border rounded px-5 py-3  shadow">
                                    <h2 className={"text-gray-500 font-bold border-b pb-3"}>
                                        ویرایش اطلاعات کاربری
                                    </h2>

                                    <form className={"gap-y-5 grid grid-cols-6 gap-x-5 mt-5"}>
                                        <div className={"col-span-6 md:col-span-3"}>
                                            <label htmlFor="first-name"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                نام
                                            </label>
                                            <div className="mt-2 ">
                                                <input
                                                    type="text"
                                                    defaultValue={"mehran"}

                                                    name="first-name"
                                                    id="first-name"
                                                    placeholder={"نام خود را وارد کنید"}

                                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-rose-500   sm:text-sm sm:leading-6 "
                                                />
                                            </div>
                                        </div>

                                        <div className={"col-span-6 md:col-span-3"}>
                                            <label htmlFor="last-name"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                نام خانوادگی
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    defaultValue={"sobhani"}

                                                    name="last-name"
                                                    id="last-name"
                                                    placeholder={"نام خانوادگی خود را وارد کنید"}
                                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-rose-500   sm:text-sm sm:leading-6 "
                                                />
                                            </div>
                                        </div>
                                        <div className={"col-span-6 md:col-span-3"}>
                                            <label htmlFor="first-name"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                ایمیل
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    defaultValue={"mehransobhani77@gmail.com"}

                                                    name="first-name"
                                                    id="first-name"
                                                    placeholder={"ایمیل خود را وارد کنید"}
                                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-rose-500   sm:text-sm sm:leading-6 "
                                                />
                                            </div>
                                        </div>
                                        <div className={"col-span-6 md:col-span-3"}>

                                            <label htmlFor="last-name"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                شماره همراه
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    defaultValue={"09194961416"}
                                                    name="last-name"
                                                    id="last-name"
                                                    placeholder={"شماره همراه خود را وارد کنید"}

                                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-rose-500   sm:text-sm sm:leading-6 "
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-6 mt-10 flex items-center justify-center gap-x-6">

                                            <button
                                                type="submit"
                                                className="rounded-md bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500  focus:border-0  focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0"
                                            >
                                                ویرایش
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className="sm:col-span-1">
                                <div className=" grid grid-cols-1 gap-x-6    border py-3 px-5 rounded  shadow">
                                    <div>
                                        <h2 className={"text-gray-500 font-bold border-b pb-3"}>
                                            ویرایش رمز عبور
                                        </h2>
                                    </div>
                                    <form className={"gap-y-5 grid mt-5 grid-cols-6 gap-x-5"}>
                                        <div className={"col-span-6 md:col-span-2"}>
                                            <label htmlFor="first-name"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                رمز عبور فعلی
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="password"
                                                    name="first-name"
                                                    id="first-name"
                                                    placeholder={"رمز عبور فعلی خود را وارد کنید"}

                                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-rose-500   sm:text-sm sm:leading-6 "
                                                />
                                            </div>
                                        </div>
                                        <div className={"col-span-6 md:col-span-2"}>
                                            <label htmlFor="last-name"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                رمز عبور جدید
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="password"
                                                    name="last-name"
                                                    id="last-name"
                                                    placeholder={"رمز عبور جدید خود را وارد کنید"}
                                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-rose-500   sm:text-sm sm:leading-6 "
                                                />
                                            </div>
                                        </div>
                                        <div className={"col-span-6 md:col-span-2"}>
                                            <label htmlFor="first-name"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                تکرار رمز عبور جدید
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="password"
                                                    name="first-name"
                                                    id="first-name"
                                                    placeholder={"رمز عبور جدید خود را وارد کنید"}
                                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-rose-500   sm:text-sm sm:leading-6 "
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-6 mt-10 flex items-center justify-center gap-x-6">

                                            <button
                                                type="submit"
                                                className="rounded-md bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500  focus:border-0  focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0"
                                            >
                                                ویرایش
                                            </button>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>



            </div>
            </div>
        </>
    );
}
