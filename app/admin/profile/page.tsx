import Breadcrumb from "@/app/admin/Component/Breadcrumb/Breadcrumb";


export default function Home() {

    return (
        <>
            <Breadcrumb list={[{
                title: "  حساب کاربری",
                href: "",
                current: true
            }]}/>

        </>
    );
}
