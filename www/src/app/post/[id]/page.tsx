import React from "react";

// export function generateStaticParams() {
//     return [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}]
// }

export default function Page({params}:{params:any}) {

    return (
        <div>内容{params.id}</div>
    );
}
