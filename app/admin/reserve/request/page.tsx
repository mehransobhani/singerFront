import Breadcrumb from "@/app/admin/Component/Breadcrumb/Breadcrumb";
import PageHeader from "@/app/Component/PageHeader";
import {HandRaisedIcon} from "@heroicons/react/24/solid";
import OrderStepTab from "@/app/admin/Component/Tabs/OrderStepTab";
import Table from "@/app/Component/Table/Table";
import Thead from "@/app/Component/Table/Thead";
import RequestDataRow from "@/app/admin/Component/DataRow/Reserve/RequestDataRow";


export default function Home() {

    const item=
       [
           {
           id: 1,
           name: "string",
           date: "string",
           province: "string",
           city: "string",
           expire: 1710619834
       },
           {
           id: 1,
           name: "string",
           date: "string",
           province: "string",
           city: "string",
           expire: 1710319834
       },{
           id: 1,
           name: "string",
           date: "string",
           province: "string",
           city: "string",
           expire: 1710310834
       },

]


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
                <OrderStepTab/>
                <Table>
                    <Thead heads={[
                        {title: "کاربر"},
                        {title: "استان"},
                        {title: "شهر"},
                        {title: "تاریخ"},
                        {title: "مهلت تایید"},
                        {title: "#"},
                        {title: "#"},
                    ]}/>
                    <tbody>
                    {
                        item.map((items)=>(
                            <RequestDataRow item={items}/>
                        ))
                    }
                    </tbody>
                </Table>


            </div>

        </>
    );
}
