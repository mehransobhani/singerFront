import Star from "@/app/(site)/Component/Star/Star";
import Sections from "@/app/(site)/Component/Sections/Sections";
import Breadcrumb from "@/app/(site)/Component/Breadcrumb/Breadcrumb";
import banner from "@/public/image/banner/dj.jpg";
import Image from "next/image";

export default function Page() {
    return <>
        <div className='py-2'>
            <Breadcrumb/>
        </div>
        <section className="relative  bg-white text-black  ">
            <div className="items-center flex flex-wrap  ">

                <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="min-w-full ml-auto mr-auto rounded p-4  md:col-span-2">
                        <Image src={banner} alt={"banner"} className="max-w-full rounded-lg shadow-lg"/>
                    </div>

                    <div className="min-w-full ml-auto mr-auto rounded-lg p-4 md:col-span-3 shadow-sm ">
                        <div>

                            <div className={"flex my-2 gap-3"}>
                            <h3 className="text-xl font-semibold text-gray-800">گروه 7 </h3>
                            <div className={"flex justify-center"}>
                                <Star score={3}/>
                            </div>
                            </div>
                            <hr/>

                            <p className="mt-4  leading-relaxed text-gray-700">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                                برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                                می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                                الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                                داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                                طراحی اساسا مورد استفاده قرار گیرد.
                            </p>

                            <div className={"flex mt-4 gap-3"}>
                                <span>
                                    هزینه اجرا :
                                </span>
                                <span className={"text-rose-500 font-bold"}>
                                    20,000,000
                                </span>
                                <span>
                                    تومان
                                </span>

                            </div>

                            <div className="flex mt-4">
                                <span
                                    className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg   ">
                                    درخواست رزرو</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className={"my-10"}>
            <hr/>
            </div>
            <Sections/>

        </section>
    </>
}
