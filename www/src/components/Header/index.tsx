import React from 'react';

function Header() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Sparrow</a>
            </div>
            <ul className="menu menu-horizontal px-1">
                <li><a>Index</a></li>
                {/*<li tabIndex={0}>*/}
                {/*    <details>*/}
                {/*        <summary>Parent</summary>*/}
                {/*        <ul className="p-2">*/}
                {/*            <li><a>Submenu 1</a></li>*/}
                {/*            <li><a>Submenu 2</a></li>*/}
                {/*        </ul>*/}
                {/*    </details>*/}
                {/*</li>*/}
                <li><a>圈子</a></li>
                <li><a>IM</a></li>
                <li><a>商城</a></li>
            </ul>
            <div className="flex-none gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
                <button className="btn btn-neutral ">注册</button>
                <button className="btn btn-primary ">登录</button>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component"
                             src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                    </div>
                </label>
                <ul tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    );
}

export {Header}

