const people = [


    {
        name: 'محمد',
         role: 'کیبورد',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
     },
    {
        name: 'رضا',
        email: 'michael.foster@example.com',
        role: 'گیتاریست',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    },
    {
        name: 'مهران',
         role: 'خواننده',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
     },
    {
        name: 'Lindsay Walton',
        role: 'کیبورد',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    },
    {
        name: 'Courtney Henry',
         role: 'درام',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    },
    {
        name: 'Tom Cook',
         role: '',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
     },
]
export const Team = () => {
    return (
        <>
            <ul role="list" className="divide-y divide-gray-200">
                {people.map((person) => (
                    <li key={person.email} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt=""/>
                            <div className="grid justify-center items-center">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                             </div>
                        </div>
                        <div className="grid justify-center items-center">
                            <p className="text-sm leading-6 text-gray-900">{person.role}</p>

                        </div>
                    </li>
                ))}
            </ul>

        </>
    );
};
