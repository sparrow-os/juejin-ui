'use client'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import SparrowEditor from '@/components/editor'
import { ModeToggle } from '@/components/mode-toggle'

export default function page() {
    return (
        <>
            <Toaster position="top-center" reverseOrder={true} />
            {/*<ArticleForm/>*/}
            <div className="container">
                <form className="w-[100%]">
                    <div className="flex h-[60px] flex-row items-center justify-between gap-4 px-4">
                        <input
                            className="w-[80%] border-none font-bold outline-none"
                            placeholder="请输入文章标题..."
                            maxLength={100}
                        />
                        <span
                            className="text-sm text-red-700"
                            role="alert"
                        ></span>
                        <div
                            className={
                                'flex flex-row items-center justify-between gap-4'
                            }
                        >
                            <button type="submit">发布</button>
                            <ModeToggle />
                        </div>
                    </div>
                    <SparrowEditor />
                </form>
            </div>
        </>
    )
}
