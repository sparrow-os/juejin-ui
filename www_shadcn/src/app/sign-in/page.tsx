'use client'
import Image from 'next/image'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {SubmitHandler, useForm} from "react-hook-form";
import {FormData, SignInFormSchema} from "@/schema/sign-in";
import {valibotResolver} from "@hookform/resolvers/valibot";
import * as React from "react";
import {useEffect, useRef} from "react";
import signIn from "@/api/signin";
import toast, {Toaster} from "react-hot-toast";
import {Icons} from "@/components/ui/icons";
import CAPTCHA_URL from "@/utils/constant";
import {ErrorMessage} from "@hookform/error-message";
import {Checkbox} from "@/components/ui/checkbox";

export default function Page() {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const captchaRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        const captcha = captchaRef.current;
        if (captcha) {
            captcha.addEventListener("click", () => {
                captcha.src = `${CAPTCHA_URL}?${Math.random()}`;
            });
        }
    }, []);
    const {
        register,
        setValue,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        mode: "onChange",
        //相当于v.parse
        resolver: valibotResolver(
            SignInFormSchema,
            //https://valibot.dev/guides/parse-data/
            {abortEarly: false}
        ), // Useful to check TypeScript regressions
    });

    function onRmemberMeChange(value:any) {
        debugger
        setValue("rememberMe", value);
    }

    const onSubmit: SubmitHandler<FormData> = (data: FormData, event: React.BaseSyntheticEvent | undefined) => {
        setIsLoading(true);
        signIn(data).then(() => {
            setIsLoading(false);
            toast.success('恭喜！登录成功，欢迎回来！志哥欢迎您！！！')
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        }).catch((error) => {
            toast.error(error)
            setIsLoading(false);
        });
    };

    return (
        <div className="w-full text-left">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <p className="text-balance text-muted-foreground">
                                输入邮箱和密码
                            </p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input  defaultValue="zh_harry@163.com"  {...register('email')}
                                           id="email"
                                           type="text"
                                           placeholder="****@163.com"
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="email"
                                        render={({message}) => <p className="text-red-700 text-sm">{message}</p>}/>
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                        <Link
                                            href="/forgot-password"
                                            className="ml-auto inline-block text-sm underline"
                                        >
                                            忘记密码?
                                        </Link>
                                    </div>
                                    <Input defaultValue="abcABC123!" {...register('password')} id="password" type="password"/>
                                    <ErrorMessage
                                        errors={errors}
                                        name="password"
                                        render={({message}) => <p className="text-red-700 text-sm">{message}</p>}/>
                                </div>

                                <div className="flex-col items-left ">
                                    <Label className="w-32" htmlFor="captcha">验证码</Label>
                                    <div className="flex flex-row items-left">
                                        <Input placeholder="1111"  {...register("captcha")} className="w-32" id="captcha" type="text"/>
                                        <img ref={captchaRef} src={CAPTCHA_URL} alt="captcha" className="w-16 h-8 cursor-pointer"/>
                                    </div>
                                    <ErrorMessage
                                        errors={errors}
                                        name="captcha"
                                        render={({message}) => <p className="text-red-700 text-sm">{message}</p>}/>
                                </div>
                                <div className="flex flex-row-reverse gap-2">
                                    {/*<Input value={"true"} type="checkbox" {...register('rememberMe')} id="rememberMe" className="mr-2" />*/}
                                    {/*<input {...register('rememberMe')} type="checkbox"  name="rememberMe" value="on"/>*/}
                                    {/*<Checkbox onCheckedChange={onRmemberMeChange}  id="rememberMe"/>*/}
                                    <Checkbox {...register('rememberMe')}  id="rememberMe"/>

                                    {/*<label*/}
                                    {/*    htmlFor="rememberMe"*/}
                                    {/*    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"*/}
                                    {/*>*/}
                                    {/*    Remember me*/}
                                    {/*</label>*/}
                                    <ErrorMessage
                                        errors={errors}
                                        name="rememberMe"
                                        render={({message}) => <p className="text-red-700 text-sm">{message}</p>}/>
                                </div>
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading && (
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>
                                    )}
                                    Sign In with Email
                                </Button>
                                <Button variant="outline" className="w-full">
                                    Login with wechat
                                </Button>
                            </div>
                        </form>
                        <div className="mt-4 text-center text-sm">
                            还没有帐号?{' '}
                            <Link href="/sign-up" className="underline">
                                注册
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden min-h-screen bg-muted lg:block">
                    <Image
                        src="/brand/sparrow2.jpg"
                        alt="Image"
                        width="1920"
                        height="1080"
                        className="h-full w-full object-cover dark:brightness-[0.8] dark:grayscale"
                    />
                </div>
            </div>
        </div>
    )
}
