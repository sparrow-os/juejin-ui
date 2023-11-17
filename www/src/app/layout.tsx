import React from "react";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import '../style/global.css';


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        <div className="container mx-auto">
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    )
}
