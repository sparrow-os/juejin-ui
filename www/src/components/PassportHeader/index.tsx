import React from "react";
import Link from "next/link";

function PassportHeader() {
    return (
        <header className="flex flex-row">
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
                    <Link href="/editor" target="__blank">写文章</Link>
                </li>
                {/* <li>
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
            </li> */}
                {/*<li tabIndex={0}>*/}
                {/*    <details>*/}
                {/*        <summary>Parent</summary>*/}
                {/*        <ul className="p-2">*/}
                {/*            <li><a>Submenu 1</a></li>*/}
                {/*            <li><a>Submenu 2</a></li>*/}
                {/*        </ul>*/}
                {/*    </details>*/}
                {/*</li>*/}
                {/* <li>
              <a>圈子</a>
            </li>
            <li>
              <a>IM</a>
            </li>
            <li>
              <a>商城</a>
            </li> */}
            </ul>
        </header>
    );
}

export default React.memo(PassportHeader)
