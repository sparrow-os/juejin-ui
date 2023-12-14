"use client";
import React from "react";
import "bytemd/dist/index.css";
import "../../style/global.css"

export default function Page() {
    return (
        <div dangerouslySetInnerHTML={{__html:
                '<div th:text="${article.title}"></div>' +
                '<div th:text="${article.content}"></div>'}}
        ></div>
    );
}
