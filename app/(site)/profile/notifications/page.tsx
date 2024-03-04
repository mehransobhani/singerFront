export default function Home() {
    return (
        <>
            <div className={"mx-5 md:mx-10 py-20"}>

                <div id="alert-additional-content-1"
                     className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50"
                     role="alert">
                    <div className="flex items-center">
                        <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span className="sr-only">Info</span>
                        <h3 className="text-lg font-medium">This is a info alert</h3>
                    </div>
                    <div className="mt-2 mb-4 text-sm">
                        More info about this info alert goes here. This example text is going to run a bit longer so
                        that you can see how spacing within an alert works with this kind of content.
                    </div>
                    <div className="flex">
                        <small>
                            1402/12/26 14:40:50
                        </small>
                    </div>
                </div>
                <div id="alert-additional-content-2"
                     className="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50"
                     role="alert">
                    <div className="flex items-center">
                        <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span className="sr-only">Info</span>
                        <h3 className="text-lg font-medium">This is a danger alert</h3>
                    </div>
                    <div className="mt-2 mb-4 text-sm">
                        More info about this info danger goes here. This example text is going to run a bit longer so
                        that you can see how spacing within an alert works with this kind of content.
                    </div>
                    <div className="flex">

                        <small>
                            1402/12/26 14:40:50
                        </small>
                    </div>
                </div>
                <div id="alert-additional-content-3"
                     className="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 "
                     role="alert">
                    <div className="flex items-center">
                        <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span className="sr-only">Info</span>
                        <h3 className="text-lg font-medium">This is a success alert</h3>
                    </div>
                    <div className="mt-2 mb-4 text-sm">
                        More info about this info success goes here. This example text is going to run a bit longer so
                        that you can see how spacing within an alert works with this kind of content.
                    </div>
                    <div className="flex">
                        <small>
                            1402/12/26 14:40:50
                        </small>
                    </div>
                </div>
                <div id="alert-additional-content-4"
                     className="p-4 mb-4 text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50"
                     role="alert">
                    <div className="flex items-center">
                        <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span className="sr-only">Info</span>
                        <h3 className="text-lg font-medium">This is a warning alert</h3>
                    </div>
                    <div className="mt-2 mb-4 text-sm">
                        More info about this info warning goes here. This example text is going to run a bit longer so
                        that you can see how spacing within an alert works with this kind of content.
                    </div>
                    <div className="flex">
                         <small>
                             1402/12/26 14:40:50
                         </small>
                    </div>
                </div>


            </div>
        </>
    );
}
