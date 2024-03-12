import Breadcrumb from "@/app/admin/Component/Breadcrumb/Breadcrumb";


export default function Home() {

    return (
        <>
            <Breadcrumb list={[{
                title: "نمونه کار ها",
                href: "",
                current: true
            }]}/>

        </>
    );
}
