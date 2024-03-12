import Breadcrumb from "@/app/admin/Component/Breadcrumb/Breadcrumb";


export default function Home() {

    return (
        <>
            <Breadcrumb list={[{
                title: "تیکت ها",
                href: "",
                current: true
            }]}/>

        </>
    );
}
