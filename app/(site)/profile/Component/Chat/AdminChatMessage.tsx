import {CodeBracketIcon, FaceSmileIcon, WrenchScrewdriverIcon} from "@heroicons/react/24/solid";

export  default function  AdminChatMessage({message}:{message:string}){
    return(
        <>
            <div className="flex justify-end mb-4 cursor-pointer">
                <div className="flex max-w-96 bg-rose-500 text-white rounded-lg p-3 gap-3">
                    <p>{message}</p>
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2 bg-rose-500">
                    <WrenchScrewdriverIcon className="h-4 w-4 text-white" />
                </div>
            </div>
        </>
    )
}
