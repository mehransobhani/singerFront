"use client"
import Breadcrumb from "@/app/admin/Component/Breadcrumb/Breadcrumb";
import Panel from "@/app/admin/Component/Panel/Panel";
import PageHeader from "@/app/Component/PageHeader";
import {UserCircleIcon} from "@heroicons/react/24/solid";
import {Team} from "@/app/(site)/Component/Team/Team";
import Input from "@/app/Component/Form/Input";
import RoseButton from "@/app/Component/Button/RoseButton";
import Uploader from "@/app/Component/Form/Uploader";
import Modal from "@/app/Component/Modal";
import ProfileTab from "@/app/admin/Component/Tabs/ProfileTab";



export default function Home() {

    return (
        <>
            <Modal isOpen={false} title={"افزود عضو جدید"}  >

                <h2>افزودن عضو جدید</h2>

                <div className={"my-10"}>
                    <Uploader/>
                </div>
                <div className={"my-10"}>
                    <label
                        className="block text-sm font-medium leading-6 text-gray-900">
                        نام
                    </label>
                    <Input type={"text"} name={"name"} placeHolder={"نام عضو گروه را وارد کنید"}/>
                </div>
                <div className={"my-10"}>
                    <label
                        className="block text-sm font-medium leading-6 text-gray-900">
                        وظیفه
                    </label>
                    <Input type={"text"} name={"name"} placeHolder={"وظیفه عضو گروه را وارد کنید"}/>
                </div>
                <RoseButton title={"افزودن"}/>

            </Modal>

            <Breadcrumb list={[{
                title: "تیم ",
                href: "",
                current: true
            }]}/>
            <Panel>
                <PageHeader
                    title={"اطلاعات حساب شما"}
                    icon={<UserCircleIcon className="h-10 w-10 text-gray-700"/>}
                    description={"هنرمند عزیز , در این بخش شما میتوانید اطلاعات حساب کاربری خود را مشاهده و ویرایش کنید"}
                />
                <ProfileTab />
                <div className={"grid justify-center my-10"}>
                <RoseButton title={"افزودن عضو جدید"}/>
                </div>
                <h2>
                    اعضای تیم شما
                </h2>
                <Team/>
            </Panel>

        </>
    );
}
