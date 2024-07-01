'use client'
import React from "react";
import "../../style/global.css"
import "./login.css"
import {FormSchema, FormData} from './schema'
import {SubmitHandler, useForm} from "react-hook-form";
import {valibotResolver} from "@hookform/resolvers/valibot";
import {Alert, Button} from "@mui/material";
import httpClient from "../../utils/HttpClient";
import Snackbar, {SnackbarOrigin} from '@mui/material/Snackbar';
import {saveToken} from "../../utils/token";


export default function Page() {
    //https://reacthookform.caitouyun.com/zh/api
    const {
        register,
        handleSubmit,
        formState: {errors},
        setError
    } = useForm<FormData>({
        resolver: valibotResolver(FormSchema), // Useful to check TypeScript regressions
        defaultValues: {
            userName: "",
            password: "",
            captcha: ""
        }
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        await httpClient.post('/login', data)
            .then(function (data) {
                debugger;
                setStatus({...state, successOpen: true});
                saveToken(data);
                console.log(data);
            })
            .catch(function (error) {
                setStatus({...state, failOpen: true, errorMessage: error});
            });
    }


    const initCaptchaUrl = process.env.NEXT_PUBLIC_API + "captcha";

    interface LoginState extends SnackbarOrigin {
        successOpen: boolean,
        failOpen: boolean;
        errorMessage: string;
        captchaUrl: string;
    }

    //hook
    //https://react.dev/reference/react/useState
    const [state, setStatus] = React.useState<LoginState>({
        successOpen: false,
        failOpen: false,
        vertical: 'top',
        horizontal: 'center',
        errorMessage: '',
        captchaUrl: initCaptchaUrl
    });
    //解构
    const {vertical, horizontal, successOpen, failOpen, errorMessage} = state;
    const handleClose = (success: boolean) => {
        if (!success) {
            setStatus({...state, failOpen: false});
            return;
        }
        setStatus({...state, successOpen: false});
    };

    const getCaptcha = () => {
        setStatus({...state, captchaUrl: initCaptchaUrl +"?r="+ Math.random()});
    }


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

        <form className="w-[100%] " onSubmit={handleSubmit(onSubmit)}>
            <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
            <div className="grid grid-cols-1 gap-1 ">
                <input {...register('userName')} type="text" placeholder="请输入用户名"
                       className="input  input-bordered input-info"/>
                {errors.userName &&
                    <span className="text-red-700 text-sm" role="alert">{errors.userName.message}</span>}


                <input {...register('password')} type="password" placeholder="请输入密码"
                       className="input  input-bordered input-info"/>
                {errors.password &&
                    <span className="text-red-700 text-sm" role="alert">{errors.password.message}</span>}

                <div className="flex flex-row justify-between">
                    <input {...register('captcha')} type="text" placeholder="验证码"
                           className="input flex-1 input-bordered input-info"/>

                    <div className="flex file-input-lg flex-row text-center h-auto justify-center items-center">
                        <img className="w-16 inline-block  cursor-pointer" onClick={getCaptcha} src={state.captchaUrl}/>
                        <a onClick={getCaptcha} className="inline-block label-text w-32 content-center cursor-pointer">看不清，换一张</a>
                    </div>
                </div>
                {errors.captcha &&
                    <span className="text-red-700 text-sm">{errors.captcha.message}</span>}

                <div className="flex flex-col  justify-end">
                    <a className="label-text  cursor-pointer text-right" href="">忘记密码</a>
                    <div className="flex flex-row justify-end ">
                        <input id="rememberMe" type="checkbox" className="checkbox checkbox-secondary"/>
                        <label htmlFor="rememberMe" className="label-text  cursor-pointer">Remember me</label>
                    </div>
                </div>

                <div className="flex flex-row justify-center">
                    <Button color="primary" className="btn btn-accent" variant="contained" fullWidth type="submit">
                        登录
                    </Button>
                </div>
                <div className="flex flex-row justify-end">
                    还没有帐号？ <a href="register" className="btn w-24 btn-ghost">注册</a>
                </div>
            </div>
        </form>

        <div className="divider">或者</div>
        <div className="flex flex-row w-96 justify-center">
            <span className="wechat"></span>
            <span className="alipay"></span>
        </div>
    </div>)
}
