'use client';
import NavbarItem from "@/components/NavbarItem";
import {AiOutlineHome} from "react-icons/ai";
import {FcAbout, FcNightLandscape} from "react-icons/fc";
import {BiAnalyse} from "react-icons/bi";
import React, {useEffect, useMemo, useState} from "react";
import {usePathname, useRouter} from "next/navigation";

interface NavbarProps {
    className?: string;
    children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({className, children}) => {
    const pathname = usePathname()
    const router = useRouter()
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])
    const handleThemeSwitch = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const routes = useMemo(() => [
        {
            icon: AiOutlineHome,
            label: 'Home',
            active: pathname !== '/',
            href: '/',
        }, {
            icon: BiAnalyse,
            label: 'Analyze',
            active: pathname === '/analyze',
            href: '/analyze',
        }, {
            icon: FcAbout,
            label: 'About Us',
            active: pathname === '/aboutUs',
            href: '/about',
        }
    ], [pathname]);

    return (
        <div className={className}>
            <div className={`flex  justify-between items-center`}>
                <span className={`font-black text-white dark:text-black  `}>TreeTally</span>
                <div className={'flex gap-8 '}>
                    {}
                    {routes.map((item) => (
                        <NavbarItem key={item.label} {...item}/>
                    ))}
                </div>
                <button className={`bg-white mr-5 rounded-full dark:bg-black`} onClick={handleThemeSwitch}>
                    <FcNightLandscape
                        size={20}/>
                </button>
            </div>
            {children}
        </div>

    )
}
export default Navbar
