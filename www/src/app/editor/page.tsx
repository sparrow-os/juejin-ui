'use client'
import React, {ChangeEvent, useEffect, useRef, useState} from "react";

import toast, {Toaster} from "react-hot-toast";
import ArticleEditor, {ArticleEditorRef} from "../../components/Publish/ArticleEditor";

export default function Page() {
    const articleEditorRef = React.useRef<ArticleEditorRef>();
    const articleTitleRef = useRef<HTMLInputElement | null>(null);
    const [articleTitle, setArticleTitle] = useState<string>();
    const handleArticleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setArticleTitle(e.target.value);
    };
    const handlePublish = () => {
        //! 非空断言
        const articleRef = articleEditorRef.current!;
        const content = articleRef.getContent();
        toast.error(content as string);
        toast.success(articleTitle as string);
        //console.log(content);
    };
    useEffect(() => {
        if (articleTitleRef.current) {
            articleTitleRef.current.focus();
        }
    }, []);

    return (
        <body>
        <Toaster
            position="top-center"
            reverseOrder={true}
        />
        <div className="editor-container">
            <div className="editor-header h-[60px] flex justify-between items-center px-4 bg-[#fff]">
                <input ref={articleTitleRef}
                       className="outline-none border-none text-2xl font-bold"
                       placeholder="请输入文章标题..."
                       maxLength={100}
                       onChange={handleArticleTitleChange}
                />
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
