"use client";
import React from "react";
import "bytemd/dist/index.css";
import "../../style/global.css"

export default function Page() {
    return (
        <div dangerouslySetInnerHTML={{
            __html:
                '<h2 class="font-bold text-xl" th:text="${article.title}">标题</h2>' +
                '<div class="flex flex-row">' +
                '<div class="mr-2"><img class="h-12 w-12" src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dafcebf7c91d402abd52f072a32deba8~tplv-k3u1fbpfcp-watermark.image?"/> </div>' +
                '<div class="flex flex-col">' +
                '<h2>Name</h2>' +
                '<div><span class="mr-4">2023-11-11</span><span class="show"></span><span class="text-sm text-gray-400">200</span></div>' +
                '</div>' +
                '</div>' +
                '<div th:text="${article.content}">内容内容内容内容内容内容内容内容内容内容内容' +
                '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>'
        }}
        ></div>
    );
}
