import type {Metadata} from "next";
import {CssBaseline} from "@mui/material";

export const metadata: Metadata = {
    title: "sparrow zoo",
    description: "sparrow zoo ",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
        <CssBaseline />
        {children}</body>
        </html>
    );
}
