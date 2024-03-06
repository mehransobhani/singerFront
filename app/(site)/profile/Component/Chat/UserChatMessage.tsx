export  default function  UserChatMessage({message}:{message:string}){
    return(
        <>
            <div className={["flex mb-4 cursor-pointer"].join(" ")}>
                <div className="flex flex-col max-w-96 bg-rose-200 rounded-lg p-3 gap-3">
                    <p className="text-gray-700">{message}</p>

                    <small className={"text-gray-500 text-xs"}>
                        1402/10/10 14:33:11
                    </small>
                </div>

            </div>
        </>
    )
}
