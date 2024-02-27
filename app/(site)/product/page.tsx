import Star from "@/app/(site)/Component/Star/Star";
import Sections from "@/app/(site)/Component/Sections/Sections";
import Breadcrumb from "@/app/(site)/Component/Breadcrumb/Breadcrumb";

export default function Page() {
    return <>
        <div className='py-2'>
            <Breadcrumb/>
        </div>

        <section className="relative  bg-white text-black  ">
            <div className="items-center flex flex-wrap pt-[50px] pb-[10px]">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-12 p-8">
                    <div className="min-w-full ml-auto mr-auto rounded p-4 bg-[#f5f5f5]">
                        <img alt="..." className="max-w-full rounded-lg shadow-lg"
                             src="https://assets-global.website-files.com/62d691a88df4876c34575a08/641c8b395f4605639562f6e9_how-to-start-a-band-and-get-booked-header.jpeg"/>
                        <div className={"mt-4 content-center mx-auto items-center flex"}>
                            <Star score={5}/>
                        </div>
                        <div className={"flex mt-8 "}>
                            <h3 className="text-xl   mx-auto font-semibold text-center text-white bg-rose-500 rounded-lg px-4 py-2 "> 20,000,000
                                تومان </h3>
                        </div>
                    </div>
                    <div className="min-w-full ml-auto mr-auto rounded p-4 bg-[#f5f5f5]">
                        <div className="md:pr-12">
                            <div
                                className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
                                <i className="fas fa-rocket text-xl"></i>
                            </div>

                            <h3 className="text-3xl font-semibold">گروه 7 </h3>
                            <div className="flex mt-4 md:mt-6">
                                <a href="#"
                                   className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                    درخواست رزرو</a>
                            </div>
                            <p className="mt-4 text-lg leading-relaxed text-gray-700">
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


                        </div>
                    </div>
                </div>
            </div>

            <Sections />

        </section>
    </>
}
