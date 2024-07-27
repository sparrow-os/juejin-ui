"use client"

import * as React from "react"
import {cn} from "@/lib/utils"
import {Icons} from "@/components/ui/icons"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Link from "next/link";
import {SubmitHandler, useForm} from "react-hook-form";
import {FormData, OuterSchema} from "@/schema/sign-up";
import {valibotResolver} from "@hookform/resolvers/valibot";
import {ErrorMessage} from "@hookform/error-message";
import signUp from "@/api/signup";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function AuthForm({className, ...props}: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<FormData>({
        mode: "onChange",
        //相当于v.parse
        resolver: valibotResolver(
            OuterSchema,
            //https://valibot.dev/guides/parse-data/
            {abortEarly: false}
        ), // Useful to check TypeScript regressions
    });
    const onSubmit: SubmitHandler<FormData> = (data: FormData, event: React.BaseSyntheticEvent | undefined) => {
        setIsLoading(true);
        signUp(data);
    };

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            邮箱
                        </Label>

                        <Input
                            {...register("email")}
                            id="email"
                            type="email"
                            placeholder="Email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                        />
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({message}) => <p className="text-red-700 text-sm">{message}</p>}/>
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="userName">用户名</Label>
                        <Input
                            {...register("userName")}
                            id="userName"
                            type="text"
                            placeholder="user name"
                        />
                        <ErrorMessage
                            errors={errors}
                            name="userName"
                            render={({message}) => <p className="text-red-700 text-sm">{message}</p>}/>
                    </div>
                    <div className="grid gap-1">
                        <div className="flex items-center">
                            <Label htmlFor="password">密码</Label>
                            <Link href="#" className="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </Link>
                        </div>
                        <Input  {...register("password")} id="password" type="password"/>
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({message}) => <p className="text-red-700 text-sm">{message}</p>}/>
                    </div>
                    <div className="grid gap-1">
                        <Label htmlFor="confirmPassword">确认密码</Label>
                        <Input {...register("confirmPassword")} id="confirmPassword" type="password"/>
                        <ErrorMessage
                            errors={errors}
                            name="confirmPassword"
                            render={({message}) => <p className="text-red-700 text-sm">{message}</p>}/>
                    </div>

                    <div className="flex-col items-left ">
                        <Label className="w-32" htmlFor="captcha">验证码</Label>
                        <div className="flex flex-row items-left">
                            <Input {...register("captcha")} className="w-32" id="captcha" type="text"/>
                            <img src="/captcha" alt="captcha" className="w-16 h-16"/>
                        </div>
                        <ErrorMessage
                            errors={errors}
                            name="captcha"
                            render={({message}) => <p className="text-red-700 text-sm">{message}</p>}/>
                    </div>

                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>
                        )}
                        Sign In with Email
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"/>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
                </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
                {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>
                ) : (
                    <Icons.gitHub className="mr-2 h-4 w-4"/>
                )}{" "}
                GitHub
            </Button>
        </div>
    )
}
