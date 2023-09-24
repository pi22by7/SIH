'use client';

import React from "react";
import {IconType} from "react-icons";
import Link from "next/link";
import {twMerge} from "tailwind-merge";
import {useRouter} from "next/navigation";
import Bounce from "../../Motion/Bounce";

interface NavabarItemProps {
    className?: string;
    label: string;
    icon: IconType
    onClick?: () => void;
    active?: boolean;
    href: string;
}

const NavbarItem: React.FC<NavabarItemProps> = ({
                                                    onClick,
                                                    label,
                                                    icon: Icon,
                                                    active,
                                                    href,
                                                    className
                                                }) => {
    const router = useRouter()
    return (
        <Bounce>
            <Link onClick={onClick} href={href} className={twMerge(`
        flex flex-row h-auto items-center w-full gap-x-1 text-md font-medium cursor-pointer 
        transition text-neutral-500 py-1
        `, active && "  ", className)}>
                <Icon className={``} size={24}/>
                <p className={"truncate w-full hidden md:flex"}>{label}</p>
            </Link>
        </Bounce>
    )
}
export default NavbarItem;
