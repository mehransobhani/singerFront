import {ArrowDownCircleIcon, MusicalNoteIcon, PlayCircleIcon} from "@heroicons/react/24/solid";

const files = [


    {
        name: 'محمد',
         link:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'رضا',

        link:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    },
    {
        name: 'مهران',
         link:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
         link:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    },
    {
        name: 'Courtney Henry',
         link:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    },
    {
        name: 'Tom Cook',
         link:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export  default function Samples(){
    return(<>
        <ul role="list" className="  grid sm:grid-cols-2 gap-x-10">
            {files.map((file , index) => (
                <li key={index} className="flex justify-between gap-x-6 py-5 border-t" >
                    <div className="flex min-w-0 gap-x-4">
                        <div className="h-12 w-12  rounded-full border grid justify-center items-center bg-gray-100"  >
                            <MusicalNoteIcon className="h-6 w-6 text-rose-500" />
                        </div>
                        <div className="grid justify-center items-center">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{file.name}</p>
                        </div>
                    </div>
                    <div className="grid justify-center items-center">
                        <a href={file.link} target={"_blank"} className="text-sm leading-6 text-gray-900">
                            <PlayCircleIcon className="h-6 w-6 text-black hover:text-rose-500" />                        </a>

                    </div>
                </li>
            ))}
        </ul>

    </>)
}
