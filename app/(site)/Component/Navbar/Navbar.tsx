"use client"
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import logo from "@/public/image/logo/logo.png"
import Image from "next/image";

const navigation:{name:string,href:string,current:boolean}[] = [
  { name: "صفحه اصلی", href: "/", current: true },
  { name: "هنرمندان", href: "#services", current: false },
  { name: "درباره ما", href: "#pricing", current: false },
  { name: "تماس با ما", href: "#faq", current: false },
  { name: "سوالات متداول", href: "#contact", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (

    <Disclosure
      as="nav"
      className=" fixed top-0 left-0 right-0 bg-white   text-neutral-900  border-b border-neutral-200 backdrop-blur-sm z-50"
    >
      {({ open }: { open: any }) => (
        <>
          <div className="mx-auto   px-4 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                  <div className="flex flex-1 items-center justify-start">
                      <div className=" flex items-center sm:hidden ">

                          {/* Mobile menu button*/}
                          <Disclosure.Button
                              className="inline-flex items-center justify-center rounded-md text-neutral-900  ">

                              <span className="sr-only">Open main menu</span>
                              {open ? (
                                  <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                              ) : (
                                  <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                              )}
                          </Disclosure.Button>
                      </div>
                      <div className={"w-16"}>
                          <Image src={logo} alt={"website logo"} width={200} height={200}/>
                      </div>
                      {/*<span className="text-rose-500  font-bold  sm:text-xl mx-4">S I N G E R</span>*/}

                      <div className="hidden sm:mx-6 sm:block">
                          <div className="flex space-x-5 items-center" style={{direction: "rtl"}}>
                              {navigation.map((item) => (
                                  <Link
                                      key={item.name}
                                      href={item.href}
                                      className={classNames(
                                          item.current
                                              ? "text-rose-500   "
                                              : "text-neutral-900  hover:text-rose-500",
                                          "text-base font-medium mx-3"
                                      )}
                                      aria-current={item.current ? "page" : undefined}
                                  >
                                      {item.name}
                                  </Link>
                              ))}
                          </div>
                      </div>

                  </div>

                  <div className="flex items-center justify-end  ">
                      <div className="  flex items-center w-10">
                          <Link
                              href="https://github.com/humberni/halley"
                              target="_blank"
                              className=" block"
                          >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                   className="w-6 h-6">
                                  <path fillRule="evenodd"
                                        d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                                        clipRule="evenodd"/>
                              </svg>

                          </Link>
                      </div>
                      <div className="  flex items-center w-10">
                          <Link
                              href="https://github.com/humberni/halley"
                              target="_blank"
                              className=" block"
                          >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                   className="w-6 h-6">
                                  <path fillRule="evenodd"
                                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                        clipRule="evenodd"/>
                              </svg>


                          </Link>
                      </div>
                  </div>
              </div>
          </div>

            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-4 min-h-screen border-t border-neutral-200  bg-white  ">
                    {navigation.map((item) => (
                        <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                                item.current
                                    ? "text-rose-500 "
                                    : "text-neutral-900  ",
                                "block py-4 text-base font-medium border-b border-neutral-200  text-right"
                            )}
                            aria-current={item.current ? "page" : undefined}
                        >
                            {item.name}
                        </Disclosure.Button>
                    ))}

                </div>
            </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
