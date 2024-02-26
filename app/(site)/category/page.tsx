"use client"
import {Fragment, useState} from 'react'
import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import {ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon} from '@heroicons/react/20/solid'
import Star from "@/app/(site)/Component/Star/Star";
import {Story} from "@/app/(site)/Component/Story/Story";
import Breadcrumb from "@/app/(site)/Component/Breadcrumb/Breadcrumb";

const sortOptions = [
    {name: 'محبوب ترین', href: '#', current: true},
    {name: 'بیشترین بازدید', href: '#', current: false},
    {name: 'جدید ترین', href: '#', current: false},
    {name: 'قدیمی ترین', href: '#', current: false},
    {name: 'کمترین قیمت', href: '#', current: false},
    {name: 'بیشترین قیمت', href: '#', current: false},
]
const subCategories = [
    {name: 'خوانندگان', href: '#'},
    {name: 'دیجی ها', href: '#'},
    {name: 'کمدین ها', href: '#'},

]
const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            {value: 'white', label: 'White', checked: false},
            {value: 'beige', label: 'Beige', checked: false},
            {value: 'blue', label: 'Blue', checked: true},
            {value: 'brown', label: 'Brown', checked: false},
            {value: 'green', label: 'Green', checked: false},
            {value: 'purple', label: 'Purple', checked: false},
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            {value: 'new-arrivals', label: 'New Arrivals', checked: false},
            {value: 'sale', label: 'Sale', checked: false},
            {value: 'travel', label: 'Travel', checked: true},
            {value: 'organization', label: 'Organization', checked: false},
            {value: 'accessories', label: 'Accessories', checked: false},
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            {value: '2l', label: '2L', checked: false},
            {value: '6l', label: '6L', checked: false},
            {value: '12l', label: '12L', checked: false},
            {value: '18l', label: '18L', checked: false},
            {value: '20l', label: '20L', checked: false},
            {value: '40l', label: '40L', checked: true},
        ],
    },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <>
            <Story />
            <div className="bg-white">
                <Breadcrumb />
                <div>
                    {/* Mobile filter dialog */}
                    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25"/>
                            </Transition.Child>

                            <div className="fixed inset-0 z-40 flex">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel
                                        className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                        <div className="flex items-center justify-between px-4">
                                            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                            <button
                                                type="button"
                                                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                                onClick={() => setMobileFiltersOpen(false)}
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                            </button>
                                        </div>

                                        {/* Filters */}
                                        <form className="mt-4 border-t border-gray-200">
                                            <h3 className="sr-only">Categories</h3>
                                            <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                                {subCategories.map((category) => (
                                                    <li key={category.name}>
                                                        <a href={category.href} className="block px-2 py-3">
                                                            {category.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>

                                            {filters.map((section) => (
                                                <Disclosure as="div" key={section.id}
                                                            className="border-t border-gray-200 px-4 py-6">
                                                    {({open}) => (
                                                        <>
                                                            <h3 className="-mx-2 -my-3 flow-root">
                                                                <Disclosure.Button
                                                                    className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span
                                                                    className="font-medium text-gray-900">{section.name}</span>
                                                                    <span className="ml-6 flex items-center">
                                  {open ? (
                                      <MinusIcon className="h-5 w-5" aria-hidden="true"/>
                                  ) : (
                                      <PlusIcon className="h-5 w-5" aria-hidden="true"/>
                                  )}
                                </span>
                                                                </Disclosure.Button>
                                                            </h3>
                                                            <Disclosure.Panel className="pt-6">
                                                                <div className="space-y-6">
                                                                    {section.options.map((option, optionIdx) => (
                                                                        <div key={option.value}
                                                                             className="flex items-center">
                                                                            <input
                                                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                                name={`${section.id}[]`}
                                                                                defaultValue={option.value}
                                                                                type="checkbox"
                                                                                defaultChecked={option.checked}
                                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                            />
                                                                            <label
                                                                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                                className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                            >
                                                                                {option.label}
                                                                            </label>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            ))}
                                        </form>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>

                    <main className="mx-auto   px-4 sm:px-6 lg:px-8">
                        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
                            <h1 className="text-2xl font-bold tracking-tight text-rose-500">لیست خوانندگان</h1>

                            <div className="flex items-center">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button
                                            className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                            مرتب سازی
                                            <ChevronDownIcon
                                                className="mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items
                                            className="absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                {sortOptions.map((option) => (
                                                    <Menu.Item key={option.name}>
                                                        {({active}) => (
                                                            <a
                                                                href={option.href}
                                                                className={classNames(
                                                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                {option.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                <button
                                    type="button"
                                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                    onClick={() => setMobileFiltersOpen(true)}
                                >
                                    <span className="sr-only">فیلتر ها </span>
                                    <FunnelIcon className="h-5 w-5" aria-hidden="true"/>
                                </button>
                            </div>
                        </div>

                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-6">
                                {/* Filters */}
                                <form className="hidden lg:block">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list"
                                        className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                        {subCategories.map((category) => (
                                            <li key={category.name}>
                                                <a href={category.href}>{category.name}</a>
                                            </li>
                                        ))}
                                    </ul>

                                    {filters.map((section) => (
                                        <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                            {({open}) => (
                                                <>
                                                    <h3 className="-my-3 flow-root">
                                                        <Disclosure.Button
                                                            className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span
                                                            className="font-medium text-gray-900">{section.name}</span>
                                                            <span className="ml-6 flex items-center">
                              {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true"/>
                              ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true"/>
                              )}
                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-4">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div key={option.value} className="flex items-center">
                                                                    <input
                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={option.value}
                                                                        type="checkbox"
                                                                        defaultChecked={option.checked}
                                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                        className="ml-3 text-sm text-gray-600"
                                                                    >
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>

                                {/* Product grid */}
                                <div className="lg:col-span-5 bg-[#f5f5f5] p-2">
                                    <div className={"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 justify-center "}>


                                        <div
                                            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto"}>

                                            <div className="flex flex-col items-center pb-10">
                                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                                     src={'../../../avatar.png'} alt="Bonnie image"/>
                                                <span className="text-sm text-gray-500 "><Star score={4}/> </span>

                                                <h5 className="mb-1 text-xl font-medium text-gray-900  ">گروه
                                                    موسیقی
                                                    7</h5>
                                                <span className="text-sm text-gray-500  ">تهران</span>
                                                <div className="flex mt-4 md:mt-6">
                                                    <a href="#"
                                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                                        مشاهده</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto"}>

                                            <div className="flex flex-col items-center pb-10">
                                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                                     src={'../../../avatar.png'} alt="Bonnie image"/>
                                                <span className="text-sm text-gray-500 "><Star score={4}/> </span>

                                                <h5 className="mb-1 text-xl font-medium text-gray-900  ">گروه
                                                    موسیقی
                                                    7</h5>
                                                <span className="text-sm text-gray-500  ">تهران</span>
                                                <div className="flex mt-4 md:mt-6">
                                                    <a href="#"
                                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                                        مشاهده</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto"}>

                                            <div className="flex flex-col items-center pb-10">
                                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                                     src={'../../../avatar.png'} alt="Bonnie image"/>
                                                <span className="text-sm text-gray-500 "><Star score={2}/> </span>

                                                <h5 className="mb-1 text-xl font-medium text-gray-900  ">گروه
                                                    موسیقی
                                                    7</h5>
                                                <span className="text-sm text-gray-500  ">تهران</span>
                                                <div className="flex mt-4 md:mt-6">
                                                    <a href="#"
                                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                                        مشاهده</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto"}>

                                            <div className="flex flex-col items-center pb-10">
                                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                                     src={'../../../avatar.png'} alt="Bonnie image"/>
                                                <span className="text-sm text-gray-500 "><Star score={5}/> </span>

                                                <h5 className="mb-1 text-xl font-medium text-gray-900  ">گروه
                                                    موسیقی
                                                    7</h5>
                                                <span className="text-sm text-gray-500  ">تهران</span>
                                                <div className="flex mt-4 md:mt-6">
                                                    <a href="#"
                                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                                        مشاهده</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto"}>

                                            <div className="flex flex-col items-center pb-10">
                                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                                     src={'../../../avatar.png'} alt="Bonnie image"/>
                                                <span className="text-sm text-gray-500 "><Star score={4}/> </span>

                                                <h5 className="mb-1 text-xl font-medium text-gray-900  ">گروه
                                                    موسیقی
                                                    7</h5>
                                                <span className="text-sm text-gray-500  ">تهران</span>
                                                <div className="flex mt-4 md:mt-6">
                                                    <a href="#"
                                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                                        مشاهده</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto"}>

                                            <div className="flex flex-col items-center pb-10">
                                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                                     src={'../../../avatar.png'} alt="Bonnie image"/>
                                                <span className="text-sm text-gray-500 "><Star score={4}/> </span>

                                                <h5 className="mb-1 text-xl font-medium text-gray-900  ">گروه
                                                    موسیقی
                                                    7</h5>
                                                <span className="text-sm text-gray-500  ">تهران</span>
                                                <div className="flex mt-4 md:mt-6">
                                                    <a href="#"
                                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                                        مشاهده</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}