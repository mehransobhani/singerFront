import {ChevronLeftIcon, HomeIcon} from "@heroicons/react/24/solid";

export default  function Breadcrumb(){
    return(<>


        <nav className="flex px-5 py-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center   ">
                <li className="inline-flex items-center ">
                    <a href="#"
                       className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-rose-500 ">
                        <HomeIcon className="h-6 w-6 text-gray-500 mx-1 sm:mx-4 hover:text-rose-500"  />
                    </a>
                </li>
                <li className="inline-flex items-center ">
                    <a href="#"
                       className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-rose-500 ">
                        <ChevronLeftIcon className="h-6 w-6 text-gray-600 mx-1 sm:mx-4"/>
                          دی جی ها
                    </a>
                </li>
                <li aria-current="page">
                    <div className="flex items-center ">
                        <ChevronLeftIcon className="h-6 w-6 text-gray-600 mx-1 sm:mx-4"/>

                        <span
                            className=" text-sm font-medium text-gray-700 ">اورکی</span>
                    </div>
                </li>
            </ol>
        </nav>

    </>)
}
