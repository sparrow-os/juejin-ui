import React from "react";
import "daisyui"
import PassportHeader from "../../components/PassportHeader";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <body>
            <div className="container mx-auto ">
                <PassportHeader/>
                <div className="flex justify-center content-center">{children}</div>
            </div>
        </body>
    );
}
