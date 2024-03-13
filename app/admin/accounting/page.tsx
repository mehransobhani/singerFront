import Breadcrumb from "@/app/admin/Component/Breadcrumb/Breadcrumb";
import PageHeader from "@/app/Component/PageHeader";
import {BanknotesIcon} from "@heroicons/react/24/solid";
import Panel from "@/app/admin/Component/Panel/Panel";
import Table from "@/app/Component/Table/Table";
import Thead from "@/app/Component/Table/Thead";
import Pagination from "@/app/Component/Pagination";
import RoseButton from "@/app/Component/Button/RoseButton";
import AccountingDataRow from "@/app/admin/Component/DataRow/Accounting/AccountingDataRow";


export default function Home() {
    const item =
        [
            {
                id: 1,
                stock: 1000000,
                amount: 10000,
                date: "1403/10/10",
                description: "به دلیل درخواست تسویه حساب از حساب کاربری شما کم و به حساب بانکی شما واریز شد",

            },
            {
                id: 1,
                amount: -1000000,
                stock: 300000000,

                date: "1403/10/10",
                description: "به دلیل درخواست تسویه حساب از حساب کاربری شما کم و به حساب بانکی شما واریز شد",

            },
            {
                id: 1,
                amount: 1000000,
                stock: 300000000,

                date: "1403/10/10",
                description: "به دلیل درخواست تسویه حساب از حساب کاربری شما کم و به حساب بانکی شما واریز شد",

            },
            {
                id: 1,
                amount: 1000000,
                stock: 300000000,

                date: "1403/10/10",
                description: "به دلیل درخواست تسویه حساب از حساب کاربری شما کم و به حساب بانکی شما واریز شد",

            },
        ]
    return (
        <>
            <Breadcrumb list={[{
                title: "حسابداری",
                href: "",
                current: true
            }]}/>

            <Panel>
                <PageHeader
                    title={"حسابداری"}
                    icon={<BanknotesIcon className="h-10 w-10 text-gray-700"/>}
                    description={"هنرمند عزیز لیست پرداخت های حساب کاربری خود را میتوانید در جدول زیر با جزییات مشاهده کنید ."}
                />
                <RoseButton title={"درخواست تسویه حساب"} cssClass={"mb-5"}  />
                <Table>
                    <Thead heads={[
                        {title: "تغییر"},
                        {title: "مقدار"},
                        {title: "تاریخ"},
                        {title: "توضیحات"},
                    ]}/>
                    <tbody>
                    {
                        item.map((items) => (
                            <AccountingDataRow item={items}/>
                        ))
                    }

                    </tbody>

                </Table>
                <div className={"my-10"}>
                    <hr/>
                </div>
                <div className={"grid justify-center"}>
                    <Pagination totalPage={10} currentPage={1}/>
                </div>
            </Panel>


        </>
    );
}
