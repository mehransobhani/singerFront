"use client"
import {Fragment, useState} from 'react'
import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import {ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon} from '@heroicons/react/20/solid'
import Star from "@/app/(site)/Component/Star/Star";
import {Story} from "@/app/(site)/Component/Story/Story";
import Breadcrumb from "@/app/(site)/Component/Breadcrumb/Breadcrumb";
import Card from '../Component/Card/Card'
import Pagination from "@/app/Component/Pagination";
import MultiRange from "@/app/Component/Form/MultiRange";

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

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <>
            <Breadcrumb/>
            <div className='bg-white'>
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


                                        <Disclosure as="div"
                                                    className="border-t border-gray-200 px-4 py-6">
                                            {({open}) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button
                                                            className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span
                                                                    className="font-medium text-gray-900">قیمت</span>
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
                                                            <MultiRange min={0} max={100000}/>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div"
                                                    className="border-t border-gray-200 px-4 py-6">
                                            {({open}) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button
                                                            className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span
                                                                    className="font-medium text-gray-900">استان</span>
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
                                                            <select id="underline_select"
                                                                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                                <option selected>همه</option>
                                                                <option value="US">تهران  </option>
                                                                <option value="CA">شیراز</option>
                                                                <option value="FR">قم</option>
                                                                <option value="DE">رشت</option>
                                                            </select>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div"
                                                    className="border-t border-gray-200 px-4 py-6">
                                            {({open}) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button
                                                            className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span
                                                                    className="font-medium text-gray-900">امتیاز</span>
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
                                                            <select id="underline_select"
                                                                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                                <option selected>همه</option>
                                                                <option value="1">۱</option>
                                                                <option value="2">۲</option>
                                                                <option value="3">۳</option>
                                                                <option value="4">۴</option>
                                                                <option value="5">۵</option>
                                                            </select>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div"
                                                    className="border-t border-gray-200 px-4 py-6">
                                            {({open}) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button
                                                            className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span
                                                                    className="font-medium text-gray-900">اجرا در</span>
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
                                                            <select id="underline_select"
                                                                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                                <option selected>همه</option>
                                                                <option value="1">عروسی</option>
                                                                <option value="2">جشن ها</option>
                                                                <option value="3">کافه و رستوران</option>
                                                            </select>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>


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


                                <Disclosure as="div"
                                            className="border-t border-gray-200 px-4 py-6">
                                    {({open}) => (
                                        <>
                                            <h3 className="-mx-2 -my-3 flow-root">
                                                <Disclosure.Button
                                                    className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span
                                                                    className="font-medium text-gray-900">قیمت</span>
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
                                                    <MultiRange min={0} max={100000}/>
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div"
                                            className="border-t border-gray-200 px-4 py-6">
                                    {({open}) => (
                                        <>
                                            <h3 className="-mx-2 -my-3 flow-root">
                                                <Disclosure.Button
                                                    className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span
                                                                    className="font-medium text-gray-900">استان</span>
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
                                                    <select id="underline_select"
                                                            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                        <option selected>همه</option>
                                                        <option value="US">تهران</option>
                                                        <option value="CA">شیراز</option>
                                                        <option value="FR">قم</option>
                                                        <option value="DE">رشت</option>
                                                    </select>
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div"
                                            className="border-t border-gray-200 px-4 py-6">
                                    {({open}) => (
                                        <>
                                            <h3 className="-mx-2 -my-3 flow-root">
                                                <Disclosure.Button
                                                    className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span
                                                                    className="font-medium text-gray-900">امتیاز</span>
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
                                                    <select id="underline_select"
                                                            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                        <option selected>همه</option>
                                                        <option value="1">۱</option>
                                                        <option value="2">۲</option>
                                                        <option value="3">۳</option>
                                                        <option value="4">۴</option>
                                                        <option value="5">۵</option>
                                                    </select>
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div"
                                            className="border-t border-gray-200 px-4 py-6">
                                    {({open}) => (
                                        <>
                                            <h3 className="-mx-2 -my-3 flow-root">
                                                <Disclosure.Button
                                                    className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span
                                                                    className="font-medium text-gray-900">اجرا در</span>
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
                                                    <select id="underline_select"
                                                            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                        <option selected>همه</option>
                                                        <option value="1">عروسی</option>
                                                        <option value="2">جشن ها</option>
                                                        <option value="3">کافه و رستوران</option>
                                                    </select>
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-5 bg-[#f8f8f8] p-2">
                                <div
                                    className={"grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 justify-center "}>

                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                </div>
                                <div className={"grid justify-center my-10"}>
                                    <Pagination totalPage={5} currentPage={1}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
