"use client"

import {CiMenuFries} from 'react-icons/ci'
import {BsTelephone} from 'react-icons/bs'
import Link from "next/link"
import { useState } from 'react'
import { Navbar } from '../Navbar'

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    
    

    return (
        <div className="container mx-auto my-5 ">
            <div className="flex items-center justify-between px-5 md:px-0">
                <Link href='/'>
                  <h1 className="font-medium">Demo RealState</h1>
                </Link>

                <CiMenuFries className= "block text-2x1 md:hidden "  onClick={()=> setOpenMobileMenu(!openMobileMenu)}/>

                <Navbar openMobileMenu={openMobileMenu}/>

                <div className="flex items-center gap-2 md:gap-5">
                    <Link href="tel: 342342342" className="flex items-center gap-4 cursor-pointer">
                        <BsTelephone/>
                        <span className="hidden md:block">+54 342 342342342</span>
                    </Link>

                    <Link href="/login" className="px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black">
                        Login
                    </Link>
                </div>

            </div>

        </div>
    )
}
