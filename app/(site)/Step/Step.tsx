import {ArrowPathIcon, CheckCircleIcon} from "@heroicons/react/24/solid";

export default function Step() {
    const checkoutSteps = [
        {
            title: "انتخاب هنرمند",
            description: "انتخاب هنر مند و تاریخ مراسم و درخواست رزرو",
            current:true,
            icon: ""
        },

        {
            title: "تایید هنرمند",
            description: "هنرمند یک ساعت فرصت دارد تا درخواست شمارا تایید یا رد کند",
            current:false,
            icon: ""
        },
        {
            title: "پرداخت پیش پرداخت",
            description: "شما پس از تایید درخواست شما توسط هنرمند یک ساعت مهلت دارید تا جهت تکمیل فراید مبلغ پیش پرداخت را پرداخت کنید",
            current:false,
            icon: ""
        },
        {
            title: "تکمیل فرایند",
            description: "پس از تایید پرداخت شما توسط بانک فرایند تکمیل شده و اطلاعات تماس هنرمند به شما نشان داده میشود",
            current:false,
            icon: ""
        },
    ]

    return (<>


        <ol className="relative text-gray-500 border-s border-gray-200 ">


            {
                checkoutSteps.map((item, index) => (<>
                    <li className="mb-10 ms-6">
        <span
            className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white ">
          {
              item.current ? <CheckCircleIcon className="h-6 w-6 text-green-500"/> :
                  <ArrowPathIcon className="h-6 w-6 text-gray-500" />
          }

        </span>
                        <h3 className={["font-medium leading-tight", item.current ? "text-green-500" : ""].join(" ")}>{item.title}</h3>
                        <p className={["text-sm", item.current ? "text-green-500" : ""].join(" ")}>{item.description}</p>
                    </li>
                </>))
            }


        </ol>

    </>)
}
