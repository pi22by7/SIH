'use client';
import NavbarItem from "@/components/NavbarItem";
import {AiOutlineHome} from "react-icons/ai";
import {FcAbout, FcNightLandscape} from "react-icons/fc";
import {BiAnalyse} from "react-icons/bi";
import React, {useEffect, useMemo, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {FaPeopleGroup, FaTreeCity} from "react-icons/fa6";
import {GiFruitTree, GiPineTree, GiTreehouse} from "react-icons/gi";
import Bounce from "../../Motion/Bounce";
import Image from "next/image";


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
            icon: GiTreehouse,
            label: 'Home',
            className:'text-blue-500',
            active: pathname !== '/',
            href: '/',
        }, {
            icon: GiPineTree,
            className:'text-green-500',
            label: 'Analyze',
            active: pathname === '/analyze',
            href: '/analyze',
        }, {
            icon: FaPeopleGroup,
            className:'text-yellow-500',
            label: 'About Us',
            active: pathname === '/aboutUs',
            href: '/about',
        }
    ], [pathname]);

    return (
        <div className={className}>
            <div className={` flex justify-between  items-center`}>
                {/*<span className={`*/}
                {/*font-black dark:text-black  */}
                {/* bg-gradient-to-l from-green-200 to-green-500 text-transparent bg-clip-text*/}
                {/* `}>TT</span>*/}
                <Image src={'/images/logo.png'} alt={''} width={32} height={32}/>
                <div className={'flex gap-8 '}>
                    {}
                    {routes.map((item) => (
                        <NavbarItem key={item.label} {...item}/>
                    ))}
                </div>
                <button className={`bg-black dark:bg-white mr-5 rounded-full  `} onClick={handleThemeSwitch}>
                    <FcNightLandscape
                        size={24}/>
                </button>
            </div>
            {children}
        </div>


    )
}
export default Navbar
