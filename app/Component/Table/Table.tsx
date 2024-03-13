import {ReactNode} from "react";

interface props{
    children:ReactNode
}
export  default  function Table({children}:props)
{
    return(<>
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table
                            className="min-w-full text-left text-sm font-light text-surface ">
                            {children}
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
