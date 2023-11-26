import React from "react";
import "../../style/global.css"
import "./login.css"

export default function Page() {
    return (<div className="flex flex-col w-96 ">
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
        <div className="grid grid-cols-1 gap-1 ">
            <input type="text" placeholder="请输入用户名" className="input  input-bordered input-info"/>
            <input type="text" placeholder="请输入邮箱"
                   className="input  input-bordered input-info"/>
            <input type="password" placeholder="请输入密码"
                   className="input  input-bordered input-info"/>

            <input type="password" placeholder="请输入确认密码"
                   className="input  input-bordered input-info"/>

            <div className="flex flex-row justify-between">
                <input type="text" placeholder="验证码"
                       className="input flex-1 input-bordered input-info"/>

                <div className="flex flex-row text-center h-auto justify-center items-center">
                    <img className="w-16 inline-block" src="javascript:void();"/><a
                    className=" label-text inline-block w-32 content-center">看不清，换一张</a>
                </div>
            </div>


            <div className="flex flex-row justify-center">
                <button className="btn w-24 btn-accent">注册</button>
            </div>
            <div className="flex flex-row justify-end">
                已有帐号？ <a href="login" className="btn w-24 btn-ghost">登录</a>
            </div>
        </div>
    </div>)
}
