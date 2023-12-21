'use client'
import React, {ChangeEvent, useEffect, useRef, useState} from "react";

import {Toaster} from "react-hot-toast";
import ArticleEditor, {ArticleEditorRef} from "../../components/Publish/ArticleEditor";
import ArticleForm from "../../components/Publish/ArticleForm";
import {useArticleForm} from "../../store/articleEditor";
import {SubmitHandler, useForm} from "react-hook-form";
import {valibotResolver} from "@hookform/resolvers/valibot";

export default function Page() {
    //故障保留ref 形式组件状态
    const articleEditorRef = React.useRef<ArticleEditorRef>();
    const articleTitleRef = useRef<HTMLInputElement | null>(null);
    const articleForm = useArticleForm((state) => state);
    const handleArticleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        articleForm.setTitle(e.target.value);
    };

    useEffect(() => {
        if (articleTitleRef.current) {
            articleTitleRef.current.focus();
        }
    }, []);

    const handlePublish = () => {
        //这里可以在editor 中实现，故意保留这种形式课程中使用...
        const articleRef = articleEditorRef.current!;
        const content = articleRef.getContent();
        articleForm.setContent(content);
        articleForm.openDialog();
    };

    return (
        <body>
        <Toaster
            position="top-center"
            reverseOrder={true}
        />
        <ArticleForm/>
        <div className="editor-container">
            <div className="editor-header h-[60px] flex justify-between items-center px-4 bg-[#fff]">
                <input value={articleForm.title}
                       className="outline-none border-none text-2xl font-bold w-[80%]"
                       placeholder="请输入文章标题..."
                       maxLength={100}
                       onChange={handleArticleTitleChange}/>

                <div className="actions">
                    <button className="common-button" onClick={handlePublish}>
                        发布
                    </button>
                </div>
            </div>
            <div className="editor-content-wrapper">
                <ArticleEditor ref={articleEditorRef}/>
            </div>
        </div>
        </body>
    )
}
