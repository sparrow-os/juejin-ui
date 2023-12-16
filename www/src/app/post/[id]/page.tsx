import React from "react";

export function generateStaticParams() {
    debugger;
    console.log("generate static params")
    return [{id: '1'}]
}

export default function Page({params}: { params: { id: string } }) {
    return (
        <div>内容{params.id}</div>
    );
}
