'use client'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import SparrowEditor from '@/components/editor'
import { ModeToggle } from '@/components/mode-toggle'
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";

export default function page() {
    return (
        <>
            <Toaster position="top-center" reverseOrder={true} />
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
                            <Drawer direction={"right"}>
                                <DrawerTrigger asChild>
                                    <Button variant="outline">发布文章</Button>
                                </DrawerTrigger>
                                <DrawerContent draggable={false}
                                    className="bg-white inset-[unset] flex flex-col h-full w-[400px] mt-14 fixed top-[1px] right-0">
                                    <div>

                                    </div>
                                </DrawerContent>
                            </Drawer>

                        </div>
                    </div>
                    <SparrowEditor />
                </form>
            </div>
        </>
    )
}
