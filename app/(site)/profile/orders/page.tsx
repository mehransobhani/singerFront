import {PresentationChartLineIcon, UserCircleIcon} from "@heroicons/react/24/solid";
import Pagination from "@/app/Component/Pagination";
import PageHeader from "@/app/Component/PageHeader";
import Panel from "@/app/admin/Component/Panel/Panel";
import Table from "@/app/Component/Table/Table";
import Thead from "@/app/Component/Table/Thead";
import Tr from "@/app/Component/Table/Tr";
import Td from "@/app/Component/Table/Td";

export default function Home() {
    return (
        <>
            <Panel>
                <PageHeader
                    title={" سفارشات"}
                    icon={<PresentationChartLineIcon className="h-10 w-10 text-gray-700  me-2"/>}
                    description={"    لیست تمام سفارشات و رزرو های شما در جدول زیر امده و قابل مشاهده است"}/>
                <Table>
                    <Thead heads={
                        [
                            {title: "نام گروه"},
                            {title: " تاریخ"},
                            {title: "هزینه"},
                            {title: "رضایت شما"},
                        ]
                    }/>
                    <tbody>
                    <Tr>
                        <Td>test</Td>
                        <Td>test</Td>
                        <Td>test</Td>
                        <Td>test</Td>
                    </Tr>
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
