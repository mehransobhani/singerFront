import Step from "@/app/(site)/Step/Step";
import Breadcrumb from "@/app/(site)/Component/Breadcrumb/Breadcrumb";
import Accordion from "@/app/(site)/Component/Accordion/Accordion";

export default function page() {

    const faq=[
        {
            title:"سیمبل چیست",
            content:"سیمبل سرویسی برای پید کردن خواننده برای مراسمات و عروسی هست",
        },
        {
            title:"سیمبل چیست",
            content:"سیمبل سرویسی برای پید کردن خواننده برای مراسمات و عروسی هست",
        },
        {
            title:"سیمبل چیست",
            content:"سیمبل سرویسی برای پید کردن خواننده برای مراسمات و عروسی هست",
        },
        {
            title:"سیمبل چیست",
            content:"سیمبل سرویسی برای پید کردن خواننده برای مراسمات و عروسی هست",
        }
        ,{
            title:"سیمبل چیست",
            content:"سیمبل سرویسی برای پید کردن خواننده برای مراسمات و عروسی هست",
        },
    ]
    return (<>
        <div className={"mb-2"}>
                 <Breadcrumb/>
             <div className={"flex w-full bg-white"}>

                <div className={"mx-10 w-full  pt-10 pb-20"}>
                    <h2 className="text-2xl font-bold text-center mb-10">
                        سوالات متداول <br/>{" "}
                        <span className="text-rose-500 font-extrabold my-3">شما</span>
                    </h2>
                    {
                        faq.map((item, index) => {
                            return (<>
                                 <Accordion title={item.title} index={index} content={item.content}/>

                            </>)
                        })
                    }

                </div>
            </div>
        </div>
    </>)
}
