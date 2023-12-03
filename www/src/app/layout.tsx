import type {Metadata} from "next";
import React from "react";

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
        <body>{children}</body>
        </html>
    );
}
