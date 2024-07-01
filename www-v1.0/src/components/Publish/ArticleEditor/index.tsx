import gfm from '@bytemd/plugin-gfm'
import 'bytemd/dist/index.css'
import {Editor} from '@bytemd/react'
import React, {ChangeEvent, forwardRef, memo, useEffect, useImperativeHandle, useRef, useState} from "react";
import frontmatter from "@bytemd/plugin-frontmatter";
import highlight from "@bytemd/plugin-highlight-ssr";
import gemoji from "@bytemd/plugin-gemoji";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import breaks from "@bytemd/plugin-breaks";
import math from "@bytemd/plugin-math-ssr";
import mermaid from "@bytemd/plugin-mermaid";
// 官方配置参考 https://github.com/bytedance/bytemd/blob/main/playground/src/app.svelte
import 'bytemd/dist/index.css'
import 'github-markdown-css'
import 'highlight.js/styles/vs.css'
// placed after highlight styles to override `code` padding
import 'katex/dist/katex.css'
import zh_Hans from "bytemd/locales/zh_Hans.json";
export  interface ArticleEditorRef{
    getContent:()=>string;
}

const ArticleEditor = forwardRef((props, ref) => {
    const [contentValue, setContentValue] = useState("");
    // 暴露方法给父组件，以便获取子组件内的状态
    useImperativeHandle(ref, () => ({
        getContent: () => {
            return contentValue;
        },
    }));

    // https://bytemd.js.org/playground/
    //在线演示
    const plugins = [
        frontmatter(),
        /**
         * GitHub Flavored Markdown，通常缩写为GFM，
         * 是目前在GitHub.com和GitHub Enterprise
         * 上支持用户内容的Markdown方言。
         * 这个基于CommonMark Spec的正式规范定义了这种方言的语法和语义。
         * GFM是CommonMark的严格超集。所有在GitHub用户内容中支持的、
         * 原始CommonMark Spec中没有指定的功能因此被称为扩展，并突出显示。
         *
         * Support GFM
         * (autolink literals, strikethrough, tables, tasklists)
         */
        gfm(),
        /**
         * 代码高亮
         * https://github.com/bytedance/bytemd/tree/main/packages/plugin-highlight
         * import highlight from '@bytemd/plugin-highlight'
         * import { Editor } from 'bytemd'
         * import 'highlight.js/styles/default.css'
         */
        highlight(),
        /**
         * 表情
         */
        gemoji(),
        mediumZoom(),
        breaks(),
        math(),
        mermaid()
        // Add more plugins here
    ];
    return (
        <div
            className="editor-content-wrapper">
            <Editor
                value={contentValue}
                plugins={plugins}
                onChange={(v) => {
                    setContentValue(v);
                }}
                uploadImages={async (files) => {
                    // upload images here
                    return [
                        {
                            url: 'https://picsum.photos/200/300',
                        },
                    ]
                }}
                locale={zh_Hans}
            />
        </div>
    );
});

export default memo(ArticleEditor)
