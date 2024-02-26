export const Sample = () => {
    return (
        <>
            <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2">
                <div
                    className="w-[300px] rounded-xl border border-gray-200 bg-white py-4 px-2 shadow-md shadow-gray-100">
                    <div className="flex items-center justify-between px-2 text-base font-medium text-gray-700">
                        <div>Add Block</div>
                        <div>
                            <button
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-black">

                            </button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex max-h-[400px] w-full flex-col overflow-y-scroll">
                            <button
                                className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                                <div
                                    className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                                    <span
                                        className="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900">A</span>
                                </div>
                                <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                    <p className="text-[15px]">Text</p>
                                    <span className="text-xs font-light text-gray-400">just start writing with plain text</span>
                                </div>
                            </button>
                            <button
                                className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                                <div
                                    className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
            <span className="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900">

            </span>
                                </div>
                                <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                    <p className="text-[15px]">Checklist</p>
                                    <span
                                        className="text-xs font-light text-gray-400">create a to-do or checklist</span>
                                </div>
                            </button>
                            <button
                                className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                                <div
                                    className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                                    <span
                                        className="tag w-full text-center text-lg font-medium text-gray-700 group-hover:text-green-900"> H1 </span>
                                </div>
                                <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                    <p className="text-[15px]">Heading 1</p>
                                    <span className="text-xs font-light text-gray-400">Big section heading</span>
                                </div>
                            </button>
                            <button
                                className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                                <div
                                    className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                                    <span
                                        className="tag w-full text-center text-lg font-medium text-gray-700 group-hover:text-green-900"> H2 </span>
                                </div>
                                <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                    <p className="text-[15px]">Heading 2</p>
                                    <span className="text-xs font-light text-gray-400">Medium section heading</span>
                                </div>
                            </button>
                            <button
                                className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                                <div
                                    className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                                    <span
                                        className="tag w-full text-center text-lg font-medium text-gray-700 group-hover:text-green-900"> H3 </span>
                                </div>
                                <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                    <p className="text-[15px]">Heading 3</p>
                                    <span className="text-xs font-light text-gray-400">small section heading</span>
                                </div>
                            </button>
                            <h3 className="my-2 px-4 text-[15px] text-gray-400">More</h3>
                            <button
                                className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                                <div
                                    className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
            <span className="tag w-full text-center text-xl font-medium text-gray-700 group-hover:text-green-900">

            </span>
                                </div>
                                <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                    <p className="text-[15px]">Bullet list</p>
                                    <span
                                        className="text-xs font-light text-gray-400">Create a simple bullet list</span>
                                </div>
                            </button>
                            <button
                                className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                                <div
                                    className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
            <span className="tag w-full text-center text-xl font-medium text-gray-700 group-hover:text-green-900">

            </span>
                                </div>
                                <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                    <p className="text-[15px]">Ordered list</p>
                                    <span
                                        className="text-xs font-light text-gray-400">Create a list with numbered</span>
                                </div>
                            </button>
                            <button
                                className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                                <div
                                    className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
            <span className="tag w-full text-center text-xl font-medium text-gray-700 group-hover:text-green-900">

            </span>
                                </div>
                                <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                    <p className="text-[15px]">Info box</p>
                                    <span
                                        className="text-xs font-light text-gray-400">Add a box with additional info</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <a href="https://github.com/samansayar" target="_blank"
                   className="mx-auto flex w-[300px] items-center justify-start gap-x-3 rounded-lg border border-gray-700 bg-gray-700 px-4 py-2">
                    <button
                        className="inline-flex items-center space-x-2 rounded-full bg-gray-700 font-semibold text-white">

                    </button>
                    <p className="text-sm text-white">My Github 🙂</p>
                </a>
            </div>
        </>
    );
};
