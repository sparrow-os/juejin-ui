import React from "react";
import "daisyui"
import PassportHeader from "../../components/PassportHeader";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="container mx-auto ">
            <PassportHeader/>
            <div className="flex justify-center content-center">{children}</div>
        </div>
    );
}
