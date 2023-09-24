'use client';
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import React from "react";

export default function Home() {
    return (
        <div className={`transition duration-300 flex flex-col bg-black dark:bg-white`}>
            <Landing/>
        </div>
    )
}
