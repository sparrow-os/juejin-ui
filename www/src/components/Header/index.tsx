import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="relative h-[5rem] w-[100%]">
      <header className="fixed top-0 left-0 right-0 h-[4rem] bg-[#fff] z-50">
        <div className="max-w-[1400px] m-auto flex items-center h-[4rem]">
          <div className="flex-1">
            <a className="btn btn-ghost text-2xl">掘土</a>
          </div>
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">首页</Link>
            </li>
            <li>
              <Link href="/post/1111">沸点</Link>
            </li>
            <li>
              <Link href="/list">课程</Link>
            </li>
            <li>
              <Link href="/list">直播</Link>
            </li>
            <li>
              <Link href="/list">活动</Link>
            </li>
            <li>
              <Link href="/list">竞赛</Link>
            </li>
            <li>
              <Link href="/list">商城</Link>
            </li>
            {/*<li tabIndex={0}>*/}
            {/*    <details>*/}
            {/*        <summary>Parent</summary>*/}
            {/*        <ul className="p-2">*/}
            {/*            <li><a>Submenu 1</a></li>*/}
            {/*            <li><a>Submenu 2</a></li>*/}
            {/*        </ul>*/}
            {/*    </details>*/}
            {/*</li>*/}
            <li>
              <a>圈子</a>
            </li>
            <li>
              <a>IM</a>
            </li>
            <li>
              <a>商城</a>
            </li>
          </ul>
          <div className="flex-none gap-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            <button className="btn btn-neutral ">注册</button>
            <button className="btn btn-primary ">登录</button>
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
    </div>
  );
}

export { Header };
