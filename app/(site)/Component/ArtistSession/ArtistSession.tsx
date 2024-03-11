 import Image from "next/image";
export  default  function ArtistSession()
{
    return(<>

            <div className={"relative w-full   bg-gitar bg-no-repeat bg-fixed bg-center "}>
                <div className={"w-full h-full bg-white bg-opacity-85 py-10 flex justify-center flex-col "}>
                    <h2 className="text-2xl font-bold text-center">
                        شروع فعالیت <br/>{" "}
                        <span className="text-rose-500 font-extrabold my-3">هنرمندان </span>
                    </h2>
                    <div className={"mt-6"}>
                        <p className={"text-lg font-bold text-center"}>
                            همین حالا به عنوان هنرمند در سایت ما ثبت نام کن و تیم خودت رو تشکیل بده تا همه ی افراد بتونن تیمتونو ببینن و شما را برای مراسم خود انتخاب کنند .
                        </p>
                        <div className="flex mt-4 md:mt-6  mx-auto justify-center animate-pulse">
                            <a href="#"
                               className="inline-flex items-center px-4 py-2 text-base font-medium text-center text-white bg-rose-500 rounded-lg">
                                ثبت نام به عنوان هنرمند
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}
