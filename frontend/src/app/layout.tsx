import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'SIH 2023',
    description: 'SIH frontend using NextJS and TailwindCSS',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar className={'transition duration-300 flex flex-col gap-5 h-screen bg-black dark:bg-white p-4'}>
            <div>
                <div className={`border-t-2`}></div>
                {children}
            </div>
        </Navbar>
        </body>
        </html>
    )
}
