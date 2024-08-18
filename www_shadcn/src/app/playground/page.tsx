'use client'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import SparrowEditor from '@/components/editor'
import SparrowDrawer from "@/components/drawer";
import CategoryTree from "@/components/select-tree/category";

export default function page() {
    return (
        <>
            {/*<Toaster position="top-center" reverseOrder={true} />*/}

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
                        <div className={
                                'flex flex-row items-center justify-between gap-4'
                            }>
                            <SparrowDrawer />
                        </div>
                    </div>
                    <SparrowEditor />
                </form>
            </div>
        </>
    )
}
