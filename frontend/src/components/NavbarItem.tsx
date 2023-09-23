'use client';

import React from "react";
import {IconType} from "react-icons";
import Link from "next/link";
import {twMerge} from "tailwind-merge";
import {useRouter} from "next/navigation";

interface NavabarItemProps {
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
                                                }) => {
    const router=useRouter()
    return (
        <Link onClick={onClick} href={href} className={twMerge(`
        flex flex-row h-auto items-center w-full gap-x-1 text-md font-medium cursor-pointer 
        transition text-neutral-500 dark:text-neutral-700 py-1
        `, active && "text-green-500 dark:text-green-500 ")}>
            <Icon size={24}/>
            <p className={"truncate w-full"}>{label}</p>
        </Link>
    )
}
export default NavbarItem;
