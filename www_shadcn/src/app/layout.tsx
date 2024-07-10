import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import React from "react";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>麻雀窝技术社区</title>
            </head>
            <body>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
            </body>
            </html>
        </>
    );
}
