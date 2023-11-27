import React from "react";
import Link from "next/link";

function Header() {
    return (
        <header className="flex flex-row justify-between w-[100%] bg-[#fff] h-[60px] mt-4 px-20">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl">掘土</a>
            </div>
            <div className="flex flex-row justify-end">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">首页</Link>
                    </li>
                    <li>
                        <Link href="/post/1111">沸点</Link>
                    </li>
                    <li>
                        <Link href="/editor" target="__blank">写文章</Link>
                    </li>
                </ul>
                <div className="flex flext-row w-96 gap-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-32 md:w-auto"
                    />
                    <a href="/register" className="btn btn-neutral ">注册</a>
                    <a href="/login" className="btn btn-primary ">登录</a>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default React.memo(Header)
