import Image from "next/image";
import avatar from "@/public/image/avatar/avatar.png"

export default function UserMessage() {
    return (<>
        <div className={"bg-white py-10"}>
            <h2 className="text-2xl font-bold text-center">
                گزیده ی پیام های <br/>{" "}
                <span className="text-rose-500 font-extrabold my-3">شما </span>
            </h2>
            <div className={"w-full h-[600px] my-10 px-10"} style={{backgroundImage: "url('../../../../image/banner/world.webp')" , backgroundSize:"100% 100%",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
                <div className={"bg-opacity-85 bg-white w-full h-full"}>
                    <div className="grid grid-cols-6 relative">
                        <div className="flex flex-col col-span-6 items-center py-10  ">


                            <Image className="w-24 h-24 mb-3 rounded-full shadow-lg border bg-white"
                                   src={avatar} alt="Bonnie image"/>


                            <h5 className="my-1 text-xl font-bold ">امیر اورکی</h5>
                            <p className={"text-lg font-bold"}>
                                با تشکر از این سایت که کار مارو راحت کرد .
                            </p>


                        </div>
                        <div className="absolute right-[10%] top-12 ">
                            <Image className="w-16 h-16 mb-3 rounded-full shadow-lg border"
                                   src={avatar} alt="Bonnie image"/>
                        </div>
                        <div className="absolute right-[25%] top-72 ">
                            <Image className="w-16 h-16 mb-3 rounded-full shadow-lg border"
                                   src={avatar} alt="Bonnie image"/>
                        </div>
                        <div className="absolute right-[15%] sm:right-[35%] top-32 ">
                            <Image className="w-16 h-16 mb-3 rounded-full shadow-lg border"
                                   src={avatar} alt="Bonnie image"/>
                        </div>
                        <div className="absolute  left-[15%] top-12 ">
                            <Image className="w-16 h-16 mb-3 rounded-full shadow-lg border"
                                   src={avatar} alt="Bonnie image"/>
                        </div>
                        <div className="absolute left-[25%]  top-72 ">
                            <Image className="w-16 h-16 mb-3 rounded-full shadow-lg border"
                                   src={avatar} alt="Bonnie image"/>
                        </div>
                        <div className="absolute left-[15%] sm:left-[35%] top-32 ">
                            <Image className="w-16 h-16 mb-3 rounded-full shadow-lg border"
                                   src={avatar} alt="Bonnie image"/>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </>)
}
