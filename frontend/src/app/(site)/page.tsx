'use client';
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Page from "@/app/analyze/page";
import React from "react";

export default function Home() {
    return (
        <div className={`flex flex-col`}>
            <Navbar/>
            <Header/>
        </div>
    )
}
