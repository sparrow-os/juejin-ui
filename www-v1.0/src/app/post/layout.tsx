import React from "react";
import Header from "../../components/Header";
import {Footer} from "../../components/Footer";
import DetailNavigation from "../../components/DetailNavigation";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <body>
        <Header/>
        <div className="container mx-auto mt-[16px]">
            <div className="flex flex-row h-auto w-auto">
                <DetailNavigation/>
                {children}
            </div>
        </div>
        <Footer/>
        </body>
    );
}
