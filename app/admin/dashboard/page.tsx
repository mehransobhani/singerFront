import Breadcrumb from "@/app/(site)/Component/Breadcrumb/Breadcrumb";
import {Squares2X2Icon} from "@heroicons/react/20/solid";
import PageHeader from "@/app/admin/Component/PageHeader/PageHeader";
import ColorBox from "@/app/admin/Component/ColorBox/ColorBox";
import {BellAlertIcon} from "@heroicons/react/24/solid";


export default function Home() {

    return (
        <>

            <div className={"bg-white  p-10"}>
                <PageHeader
                    title={"داشبورد"}
                    icon={<Squares2X2Icon className="h-10 w-10 text-gray-700"/>}
                    description={"هنرمند عزیز , به پنل کاربری خود خوش آمدید"}
                />
                <div className={"mb-10 grid  sm:grid-cols-3 grid-cols-1 gap-5"}>
                <ColorBox
                    title={"تعداد درخواست رزرو جدید"}
                    color={"bg-rose-700"}
                    icon={<BellAlertIcon className="h-10 w-10 text-white"/>}
                    value={"10"} />
                    <ColorBox
                    title={"تعداد رزرو جدید"}
                    color={"bg-indigo-700"}
                    icon={<BellAlertIcon className="h-10 w-10 text-white"/>}
                    value={"10"} />
                    <ColorBox
                    title={"تعداد رزرو جدید"}
                    color={"bg-fuchsia-700"}
                    icon={<BellAlertIcon className="h-10 w-10 text-white"/>}
                    value={"10"} />
                </div>
                <div
                    className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full bg-white  justify-center items-center gap-5 mb-10"}>

                   <ColorBox
                       title={"تعداد رزور های موفق"}
                       color={"bg-rose-500"}
                       icon={<Squares2X2Icon className="h-10 w-10 text-white"/>}
                       value={"10"} />
                    <ColorBox
                       title={"تعداد رزور های موفق"}
                       color={"bg-slate-500"}
                       icon={<Squares2X2Icon className="h-10 w-10 text-white"/>}
                       value={"10"} />
                    <ColorBox
                       title={"تعداد رزور های موفق"}
                       color={"bg-indigo-500"}
                       icon={<Squares2X2Icon className="h-10 w-10 text-white"/>}
                       value={"10"} />
                    <ColorBox
                       title={"تعداد رزور های موفق"}
                       color={"bg-gray-500"}
                       icon={<Squares2X2Icon className="h-10 w-10 text-white"/>}
                       value={"10"} />

                </div>

                <hr/>


            </div>
        </>
    );
}
