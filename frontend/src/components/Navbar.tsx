'use client';
import NavbarItem from "@/components/NavbarItem";
import {AiOutlineHome} from "react-icons/ai";
import {FcAbout, FcNightLandscape} from "react-icons/fc";
import {BiAnalyse} from "react-icons/bi";
import {useEffect, useMemo, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
const Navbar =()=>{
    const pathname = usePathname()
    const router =useRouter()
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
            href: '/search',
        },{
            icon: FcAbout,
            label: 'Search',
            active: pathname === '/aboutUs',
            href: '/search',
        }
    ], [pathname]);

    return (
        <div className={`flex justify-between items-center`}>
            <span className={`font-b`}>TreeTally</span>
            <div className={'flex gap-5 '}>
                {}
                {routes.map((item)=>(
                    <NavbarItem key={item.label} {...item}/>
                ))}
            {/*<NavbarItem label={`Home`} icon={AiOutlineHome} href={'/home'}/>*/}
            {/*<NavbarItem label={'Page'} icon={BiAnalyse} href={'/analyze'}/>*/}
            {/*<NavbarItem label={`About Us`} icon={FcAbout} href={'/aboutus'}/>*/}

            </div>
            <button  className={`bg-white mr-5 rounded-full dark:bg-black`} onClick={handleThemeSwitch}>
                <FcNightLandscape
                    size={20}/>
            </button>
        </div>

    )
}
export default Navbar
