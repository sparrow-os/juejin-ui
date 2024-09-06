'use client'
import React from 'react'
import SparrowEditor from '@/components/editor'
import SparrowDrawer from "@/components/drawer";
import {FormData} from "@/schema/play-ground";
import {useForm} from "react-hook-form";
import {valibotResolver} from "@hookform/resolvers/valibot";
import {SignInFormSchema} from "@/schema/sign-in";
import {UseFormReturn} from "react-hook-form/dist/types";
export default function Page() {

    const formReturn:UseFormReturn<FormData> = useForm<FormData>({
        mode: "onChange",
        //相当于v.parse
        resolver: valibotResolver(
            SignInFormSchema,
            //https://valibot.dev/guides/parse-data/
            {abortEarly: false}
        ), // Useful to check TypeScript regressions
    });
    return (
        <>
            <div className="container">
                <form className="w-[100%]">
                    <div className="flex h-[60px] flex-row items-center justify-between gap-4 px-4">
                        <input {...formReturn.register('title')}
                            className="w-[80%] border-none font-bold outline-none"
                            placeholder="请输入文章标题..."
                            maxLength={100}
                        />
                        <SparrowDrawer useForm={formReturn}/>
                    </div>
                    <SparrowEditor/>
                </form>
            </div>
        </>
    )
}
