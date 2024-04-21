import type {Metadata} from "next";
import React from "react";
import "../style/global.css"

export const metadata: Metadata = {
    title: "掘土",
    description: "axtlive zhanglizhi",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    // 不加body 标签 formik yup 及mui 显示不正常
    return (
        <html>
        {children}
        </html>
    );
}
