"use client"

import {BarLoader} from "react-spinners";
export default function Loading() {
    return  <div className={"fixed top-0 right-0 left-0 z-50"}><BarLoader color="#f43f5e" width={"100%"}   loading={true}  /></div>
}
