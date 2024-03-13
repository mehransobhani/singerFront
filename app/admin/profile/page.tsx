import Breadcrumb from "@/app/admin/Component/Breadcrumb/Breadcrumb";
import Panel from "@/app/admin/Component/Panel/Panel";
import PageHeader from "@/app/Component/PageHeader";
import {PresentationChartLineIcon, UserCircleIcon} from "@heroicons/react/24/solid";
import RoseButton from "@/app/Component/Button/RoseButton";
import ListItem from "@/app/Component/ListItem";
import image from "@/public/image/banner/bg.webp"
import Image from "next/image";
import {Team} from "@/app/(site)/Component/Team/Team";
import Samples from "@/app/(site)/Component/Samples/Samples";
import DarkButton from "@/app/Component/Button/DarkButton";

export default function Home() {

    return (
        <>
            <Breadcrumb list={[{
                title: "  حساب کاربری",
                href: "",
                current: true
            }]}/>

            <Panel>
                <PageHeader
                    title={"اطلاعات حساب شما"}
                    icon={<UserCircleIcon className="h-10 w-10 text-gray-700"/>}
                    description={"هنرمند عزیز , در این بخش شما میتوانید اطلاعات حساب کاربری خود را مشاهده و ویرایش کنید"}
                />
                <RoseButton title={"ویرایش اطلاعات"} cssClass={"mx-1"}/>
                <DarkButton title={"مشاهده"} cssClass={"mx-1"}/>

                <div className={"my-16"}>
                    <h2>
                        تصویر بنر
                    </h2>
                    <div
                        className="group relative m-0 flex h-72 w-full rounded-xl ring-gray-900/5 sm:mx-auto  sm:max-w-lg">
                        <div
                            className="overflow-hidden whitespace-nowrap z-10 h-full w-full   rounded-xl border border-gray-200  transition duration-300 ease-in-out group-hover:opacity-100">

                            <Image
                                src={image}
                                className=" block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-105"
                                alt=""/>
                        </div>

                    </div>
                </div>
                <div className={"my-16"}>


                    <h2>
                        اطلاعات پایه
                    </h2>
                    <ListItem title={"نام"} value={""}/>
                    <ListItem title={"وضعیت"} value={"فعال"}/>
                    <ListItem title={"استان"} value={"تهران"}/>
                    <ListItem title={"اجرا در عروسی"} value={"بله"}/>
                    <ListItem title={"اجرا در جشن ها"} value={"بله"}/>
                    <ListItem title={"اجرا در کافه"} value={"بله"}/>
                    <ListItem title={"اجرا در رستوران"} value={"بله"}/>
                    <ListItem title={"دستمزد"} value={"10,000,000"}/>
                    <ListItem title={"توضیحات و معرفی"}
                              value={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."}/>
                </div>

                <div className={"my-16"}>
                    <h2>
                        اعضای گروه
                    </h2>
                    <Team/>
                </div>
                <div className={"my-16"}>
                    <h2>
                        نمونه کار ها
                    </h2>
                    <Samples/>
                </div>
            </Panel>

        </>
    );
}
