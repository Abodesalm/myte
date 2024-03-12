"use client"
import Link from "next/link";
import Image from "next/image";
import logo from '../public/images/logo-text.png';
import ToggleTheme from "@/components/ToggleTheme";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="flex flex-row w-full h-[75px] bg-light dark:bg-dark items-center pad py-0 border-b boeder-2 border-black">
                <div className="nav-ss">
                    <GiHamburgerMenu className='menuu text-dark dark:text-light' fontSize={27} onClick={()=> setToggle(true)}/>
                    {toggle && (
                        <div className="nav-overlay flex__center slide-bottom">
                        <MdOutlineClose fontSize={27} className='overlay-close' onClick={()=>setToggle(false)}/>
                        <ul className="nav-links-ss">
                            <li><Link href="/" onClick={()=>setToggle(false)}>الصفحة الرئيسية</Link></li>
                            <li><Link href="/contact" onClick={()=>setToggle(false)}>تواصل معنا</Link></li>
                            <li><Link href="projects" onClick={()=>setToggle(false)}>مشاريعنا</Link></li>
                            <li><Link href="about" onClick={()=>setToggle(false)}>عنا</Link></li>
                        </ul>
                        </div>
                    )
                    }
                </div>
            <ToggleTheme/>
            <div className="w-1/2 flex flex-row justify-center gap-16 lg:gap-8 items-center flex-1">
                <Link className="nav-links relative transition duration-500 non-select" href='/'>الصفحة الرئيسية</Link>
                <Link className="nav-links relative" href='/contact'>تواصل معنا</Link>
                <Link className="nav-links relative" href='/projects'>مشاريعنا</Link>
                <Link className="nav-links relative" href='/about'>عنا</Link>
            </div>
            <div>
                <Image src={logo} alt="myte team logo" width={100}/>
            </div>
        </nav>
    )
}

