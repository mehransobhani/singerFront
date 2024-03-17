"use client"

import Breadcrumb from "@/app/admin/Component/Breadcrumb/Breadcrumb";
import Panel from "@/app/admin/Component/Panel/Panel";
import ProfileTab from "@/app/admin/Component/Tabs/ProfileTab";
import PageHeader from "@/app/Component/PageHeader";
import {UserCircleIcon} from "@heroicons/react/24/solid";
import RoseButton from "@/app/Component/Button/RoseButton";
import {Team} from "@/app/(site)/Component/Team/Team";
import Samples from "@/app/(site)/Component/Samples/Samples";
import Modal from "@/app/Component/Modal";
import Uploader from "@/app/Component/Form/Uploader";
import Input from "@/app/Component/Form/Input";


export default function Home() {

    return (
        <>
            <Modal isOpen={false} title={"افزودن نمونه کار"}>

                <h2>افزودن نمونه کار</h2>

                <div className={"my-10"}>
                    <Uploader/>
                </div>
                <div className={"my-10"}>
                    <label
                        className="block text-sm font-medium leading-6 text-gray-900">
                        عنوان
                    </label>
                    <Input type={"text"} name={"name"} placeHolder={"عنوان را وارد کنید"}/>
                </div>

                <RoseButton title={"افزودن"}/>

            </Modal>
            <Breadcrumb list={[
                {
                    title: "حساب کاربری ",
                    href: "/admin/profile",
                    current: false
                },
                {
                    title: "ویرایش نمونه کار ها ",
                    href: "",
                    current: true
                }
            ]}/>
            <ProfileTab/>
            <Panel>

                <PageHeader
                    title={"نمونه کار های شما"}
                    icon={<UserCircleIcon className="h-10 w-10 text-gray-700"/>}
                    description={"هنرمند عزیز , در این بخش شما میتوانیدنمونه کارهای خود را مشاهده و ویرایش کنید"}
                />
                <div className={"grid justify-center my-10"}>
                    <RoseButton title={"افزودن نمونه کار جدید"}/>
                </div>
                <h2>
                    نمونه کارهای شما
                </h2>
                <Samples/>
            </Panel>


        </>
    );
}
