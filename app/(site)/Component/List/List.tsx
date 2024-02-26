'use client';

import {useEffect, useState} from "react";

export default function List() {

const [top, setTop] = useState(true);
return (
    <div className="bg-gray-100">
        <div className=" mx-auto my-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <ul className="divide-y divide-gray-200">
                    <li className="p-3 flex justify-between items-center user-card">
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full"
                                 src="https://unsplash.com/photos/oh0DITWoHi4/download?force=true&w=640" alt="Christy"/>
                            <span className="ml-3 font-medium mx-4">نمونه کار 1</span>
                        </div>
                        <div>
                            <button className="text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg>
                            </button>
                        </div>
                    </li>
                    <li className="p-3 flex justify-between items-center user-card">
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full"
                                 src="https://unsplash.com/photos/oh0DITWoHi4/download?force=true&w=640" alt="Christy"/>
                            <span className="ml-3 font-medium mx-4">نمونه کار 1</span>
                        </div>
                        <div>
                            <button className="text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg>
                            </button>
                        </div>
                    </li>
                    <li className="p-3 flex justify-between items-center user-card">
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full"
                                 src="https://unsplash.com/photos/oh0DITWoHi4/download?force=true&w=640" alt="Christy"/>
                            <span className="ml-3 font-medium mx-4">نمونه کار 1</span>
                        </div>
                        <div>
                            <button className="text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg>
                            </button>
                        </div>
                    </li>
                    <li className="p-3 flex justify-between items-center user-card">
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full"
                                 src="https://unsplash.com/photos/oh0DITWoHi4/download?force=true&w=640" alt="Christy"/>
                            <span className="ml-3 font-medium mx-4">نمونه کار 1</span>
                        </div>
                        <div>
                            <button className="text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg>
                            </button>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
)
}


