'use client'
import React, {useEffect} from "react";
import "../../style/global.css"
import "./login.css"
import {Alert, Button} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {valibotResolver} from "@hookform/resolvers/valibot";
import httpClient from "../../utils/HttpClient";
import Snackbar, {SnackbarOrigin} from '@mui/material/Snackbar';
import {FormData, FormSchema} from "./schema";
import {saveToken} from "../../utils/token";

export default function Page() {
    // useEffect里面的这个函数会在第一次渲染之后和更新完成后执行
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        console.log("componentDidMount + componentDidUpdate")
    });

    //import {SubmitHandler, useForm} from "react-hook-form";
    const {
        register,
        handleSubmit,
        formState: {errors},
        setError
    } = useForm<FormData>({
        //import {valibotResolver} from "@hookform/resolvers/valibot";
        resolver: valibotResolver(FormSchema), // Useful to check TypeScript regressions
        defaultValues: {
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            captcha: ""
        }
    });

    //当前组件的状态
    interface RegisterState extends SnackbarOrigin {
        successOpen: boolean,
        failOpen: boolean;
        errorMessage: string;
        captchaUrl: string;
    }

    const initCaptchaUrl = process.env.NEXT_PUBLIC_API + "captcha";
    //hook
    //https://react.dev/reference/react/useState
    const [state, setStatus] = React.useState<RegisterState>({
        successOpen: false,
        failOpen: false,
        vertical: 'top',
        horizontal: 'center',
        errorMessage: '',
        captchaUrl: initCaptchaUrl
    });

    const getCaptcha = () => {
        setStatus({...state, captchaUrl: initCaptchaUrl + "?r=" + Math.random()});
    }

    const onRegister: SubmitHandler<FormData> = async (data) => {
        await httpClient.post('/register/email', data)
            .then(function (responseData) {
                debugger;
                setStatus({...state, successOpen: true});
                saveToken(responseData);
                console.log(responseData);
            })
            .catch(function (error) {
                setStatus({...state, failOpen: true, errorMessage: error});
            });
    }

    const {vertical, horizontal, successOpen, failOpen, errorMessage} = state;

    const handleClose = (success: boolean) => {
        if (!success) {
            setStatus({...state, failOpen: false});
            return;
        }
        setStatus({...state, successOpen: false});
    };

    return (<div className="flex flex-col w-96 ">
        <Snackbar
            anchorOrigin={{vertical, horizontal}}
            open={successOpen}
            onClose={() => {
                handleClose(true);
            }}
            key={'success' + vertical + horizontal}>
            <Alert severity="success">登录成功</Alert>
        </Snackbar>
        <Snackbar
            anchorOrigin={{vertical, horizontal}}
            open={failOpen}
            onClose={() => {
                handleClose(false);
            }}
            key={'false' + vertical + horizontal}>
            <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
        <form className="w-[100%] " onSubmit={handleSubmit(onRegister)}>
            <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
            <div className="grid grid-cols-1 gap-1 ">
                <input {...register('userName')} type="text" placeholder="请输入用户名"
                       className="input  input-bordered input-info"/>
                {errors.userName &&
                    <span className="text-red-700 text-sm" role="alert">{errors.userName.message}</span>}
                <input {...register('email')} type="text" placeholder="请输入邮箱"
                       className="input  input-bordered input-info"/>
                {errors.email &&
                    <span className="text-red-700 text-sm" role="alert">{errors.email.message}</span>}
                <input {...register('password')} type="password" placeholder="请输入密码"
                       className="input  input-bordered input-info"/>

                {errors.password &&
                    <span className="text-red-700 text-sm" role="alert">{errors.password.message}</span>}

                <input {...register('confirmPassword')} type="password" placeholder="请输入确认密码"
                       className="input  input-bordered input-info"/>

                {errors.confirmPassword &&
                    <span className="text-red-700 text-sm" role="alert">{errors.confirmPassword.message}</span>}

                <div className="flex flex-row justify-between">
                    <input {...register("captcha")} type="text" placeholder="验证码"
                           className="input flex-1 input-bordered input-info"/>

                    <div className="flex flex-row text-center h-auto justify-center items-center">
                        <img className="w-16 inline-block cursor-pointer" onClick={getCaptcha}
                             src={state.captchaUrl}/><a
                        onClick={getCaptcha}
                        className="label-text inline-block w-32 content-center cursor-pointer">看不清，换一张</a>
                    </div>
                </div>

                <div className="flex flex-row justify-center">
                    <Button color="primary" className="btn btn-accent" variant="contained" fullWidth type="submit">
                        注册
                    </Button>
                    {/*<button className="btn w-24 btn-accent">注册</button>*/}
                </div>
                <div className="flex flex-row justify-end">
                    已有帐号？ <a href="login" className="btn w-24 btn-ghost">登录</a>
                </div>
            </div>
        </form>
    </div>)
}
