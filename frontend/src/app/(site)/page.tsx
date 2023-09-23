'use client';
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import React from "react";

export default function Home() {
    return (
        <div className={`transition duration-300 flex flex-col h-screen bg-black dark:bg-white`}>
            <Navbar className={'transition duration-300  bg-black dark:bg-white p-4'}>
                <Header/>
            </Navbar>
        </div>
    )
}
