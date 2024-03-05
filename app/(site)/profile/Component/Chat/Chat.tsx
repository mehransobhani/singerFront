import {EnvelopeIcon} from "@heroicons/react/24/solid";

export  default  function Chat()
{

    const ticket=[
        {
        id:1,
        unseenMessage:1,
        status:1,
        title:"خطای سایت",
    },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
        {
            id:1,
            unseenMessage:1,
            status:1,
            title:"خطای سایت",
        },
    ]
    return(<>
        <div className="flex h-screen overflow-hidden">

            <div className="w-1/4 bg-white border-r border-gray-300">

                <header
                    className="p-4 border-b border-gray-300 flex justify-between items-center bg-rose-500 text-white">
                    <h1 className="text-xl font-semibold">لیست تیکت ها </h1>
                    <div className="relative">
                        <button id="menuButton" className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-100"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z"/>
                            </svg>
                        </button>
                        <div id="menuDropdown"
                             className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden">
                            <ul className="py-2 px-3">
                                <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-gray-400">Option
                                    1</a></li>
                                <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-gray-400">Option
                                    2</a></li>

                            </ul>
                        </div>
                    </div>
                </header>


                <div className="overflow-y-auto h-screen p-3 mb-9 pb-20 bg-white">
                        {
                            ticket.map((item)=>{return(<>
                                <div
                                    className="flex items-center mb-4 cursor-pointer hover:bg-slate-200 p-2 rounded-md gap-x-3">
                                    <div
                                        className="w-12 h-12 rounded-full mr-3 bg-rose-500 flex justify-center items-center">
                                        <EnvelopeIcon className="h-6 w-6 text-white "/>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-gray-700 font-semibold">{item.title}</h2>
                                        <small className="text-gray-500 font-semibold">بسته</small>
                                    </div>
                                    <div className={"w-5 h-5 text-white bg-rose-500 rounded-full flex justify-center"}>
                                        {item.unseenMessage}
                                    </div>
                                </div>
                            </>)
                            })
                        }
                </div>
            </div>

             <div className="flex-1">
                 <header className="bg-white p-4 text-gray-700">
                    <h1 className="text-2xl font-semibold">Alice</h1>
                </header>

                 <div className="h-screen overflow-y-auto p-4 pb-36">
                     <div className="flex mb-4 cursor-pointer">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                            <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                 alt="User Avatar" className="w-8 h-8 rounded-full"/>
                        </div>
                        <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                            <p className="text-gray-700">Hey Bob, how's it going?</p>
                        </div>
                    </div>

                     <div className="flex justify-end mb-4 cursor-pointer">
                        <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                            <p>Hi Alice! I'm good, just finished a great book. How about you?</p>
                        </div>
                        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                            <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                 alt="My Avatar" className="w-8 h-8 rounded-full"/>
                        </div>
                    </div>

                     <div className="flex mb-4 cursor-pointer">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                            <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                 alt="User Avatar" className="w-8 h-8 rounded-full"/>
                        </div>
                        <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                            <p className="text-gray-700">That book sounds interesting! What's it about?</p>
                        </div>
                    </div>

                     <div className="flex justify-end mb-4 cursor-pointer">
                        <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                            <p>It's about an astronaut stranded on Mars, trying to survive. Gripping stuff!</p>
                        </div>
                        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                            <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                 alt="My Avatar" className="w-8 h-8 rounded-full"/>
                        </div>
                    </div>

                     <div className="flex mb-4 cursor-pointer">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                            <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                 alt="User Avatar" className="w-8 h-8 rounded-full"/>
                        </div>
                        <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                            <p className="text-gray-700">I'm intrigued! Maybe I'll borrow it from you when you're
                                done?</p>
                        </div>
                    </div>

                     <div className="flex justify-end mb-4 cursor-pointer">
                        <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                            <p>Of course! I'll drop it off at your place tomorrow.</p>
                        </div>
                        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                            <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                 alt="My Avatar" className="w-8 h-8 rounded-full"/>
                        </div>
                    </div>

                     <div className="flex mb-4 cursor-pointer">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                            <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                 alt="User Avatar" className="w-8 h-8 rounded-full"/>
                        </div>
                        <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                            <p className="text-gray-700">Thanks, you're the best!</p>
                        </div>
                    </div>

                     <div className="flex justify-end mb-4 cursor-pointer">
                        <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                            <p>Anytime! Let me know how you like it. 😊</p>
                        </div>
                        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                            <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                 alt="My Avatar" className="w-8 h-8 rounded-full"/>
                        </div>
                    </div>


                    <div className="flex mb-4 cursor-pointer">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                            <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                 alt="User Avatar" className="w-8 h-8 rounded-full"/>
                        </div>
                        <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                            <p className="text-gray-700">So, pizza next week, right?</p>
                        </div>
                    </div>


                    <div className="flex justify-end mb-4 cursor-pointer">
                        <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                            <p>Absolutely! Can't wait for our pizza date. 🍕</p>
                        </div>
                        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                            <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                 alt="My Avatar" className="w-8 h-8 rounded-full"/>
                        </div>
                    </div>

                    <div className="flex mb-4 cursor-pointer">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                            <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                 alt="User Avatar" className="w-8 h-8 rounded-full"/>
                        </div>
                        <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                            <p className="text-gray-700">Hoorayy!!</p>
                        </div>
                    </div>

                </div>

                <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
                    <div className="flex items-center">
                        <input type="text" placeholder="Type a message..."
                               className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"/>
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
                    </div>
                </footer>
            </div>
        </div>


    </>)
}
