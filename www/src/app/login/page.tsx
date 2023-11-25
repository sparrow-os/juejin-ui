import React from "react";

export default function Page() {
    return (<div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-40 card bg-base-300 rounded-box place-items-center">
            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
            <input type="password" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
        </div>
        <div className="divider">或者</div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">

        </div>
    </div>)
}
