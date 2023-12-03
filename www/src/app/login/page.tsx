import React from "react";
import "../../style/global.css"
import "./login.css"

export default function Page() {
    return (<div className="flex flex-col w-96 ">
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
        <div className="grid grid-cols-1 gap-1 ">
            <input type="text" placeholder="请输入用户名" className="input  input-bordered input-info"/>
            <input type="password" placeholder="请输入密码"
                   className="input  input-bordered input-info"/>
            <div className="flex flex-row justify-between">
                <input type="text" placeholder="验证码"
                       className="input flex-1 input-bordered input-info"/>
                <div className="flex flex-row text-center h-auto justify-center items-center">
                    <img className="w-16 inline-block" src="http://www.sparrowzoo.com/validate-code"/><a
                    className="inline-block label-text w-32 content-center">看不清，换一张</a>
                </div>
            </div>
            <div className="flex flex-col  justify-end">
                <a className="label-text  cursor-pointer text-right" href="">忘记密码</a>
                <div className="flex flex-row justify-end ">
                    <input id="rememberMe" type="checkbox" className="checkbox checkbox-secondary"/>
                    <label htmlFor="rememberMe" className="label-text  cursor-pointer">Remember me</label>
                </div>
            </div>

            <div className="flex flex-row justify-center">

                <button className="btn w-24 btn-accent">登录</button>
            </div>
            <div className="flex flex-row justify-end">
                还没有帐号？ <a href="register" className="btn w-24 btn-ghost">注册</a>
            </div>
        </div>

        <div className="divider">或者</div>
        <div className="flex flex-row w-96 justify-center">
            <span className="wechat"></span>
            <span className="alipay"></span>
        </div>
    </div>)
}
