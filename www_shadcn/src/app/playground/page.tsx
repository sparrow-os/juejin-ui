'use client'
import React from "react";
import toast, {Toaster} from "react-hot-toast";
import SparrowEditor from "@/components/editor";

export default function page() {
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
            {/*<ArticleForm/>*/}
            <div className="container">
                <form className="w-[100%]">
                    <div className=" flex justify-between items-center px-4 h-[60px]">
                        <input
                            className="outline-none border-none text-2xl font-bold w-[80%]"
                            placeholder="请输入文章标题..."
                            maxLength={100}
                        />
                        <span className="text-red-700 text-sm" role="alert"></span>
                        <div>
                            <button type="submit">
                                发布
                            </button>
                        </div>
                    </div>
                    <SparrowEditor/>
                </form>
            </div>
        </>
    )
}