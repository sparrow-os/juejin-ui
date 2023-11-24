"use client";

import React, {
  memo,
  useState,
  ChangeEvent,
  useEffect,
  useRef,
  useMemo,
} from "react";
import "bytemd/dist/index.css";
import gfm from "@bytemd/plugin-gfm";
import gemoji from "@bytemd/plugin-gemoji";
import highlight from "@bytemd/plugin-highlight-ssr";
import frontmatter from "@bytemd/plugin-frontmatter";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import breaks from "@bytemd/plugin-breaks";
import math from "@bytemd/plugin-math-ssr";
import { Editor } from "@bytemd/react";
import EditorPlugin from '../../plugins/EditorPlugin'
import zh_Hans from "bytemd/locales/zh_Hans.json";

const ArticleEditor = () => {
  const articleTitleRef = useRef<HTMLInputElement | null>(null);
  const [contentValue, setContentValue] = useState("");
  const [articleTitle, setArticleTitle] = useState<string>();

  const plugins = useMemo(
    () => [
      frontmatter(),
      gfm(),
      highlight(),
      gemoji(),
      mediumZoom(),
      breaks(),
      math(),
      EditorPlugin(),
      // Add more plugins here
    ],
    []
  );

  useEffect(() => {
    if (articleTitleRef.current) {
      articleTitleRef.current.focus();
    }
  }, []);

  const handleArticleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 50) return;
    setArticleTitle(e.target.value);
  };

  const handlePublish = () => {
    const val = encodeURIComponent(contentValue);
    console.log("contentValue to be publish");
    console.log(val);
  };

  return (
    <div className="editor-container">
      <div className="editor-header h-[60px] flex justify-between items-center px-4 bg-[#fff]">
        <input
          ref={articleTitleRef}
          className="outline-none border-none text-2xl font-bold"
          placeholder="请输入文章标题..."
          value={articleTitle}
          onChange={handleArticleTitleChange}
        />
        <div className="actions">
          <button className="common-button" onClick={handlePublish}>
            发布
          </button>
        </div>
      </div>
      <div className="editor-content-wrapper">
        <Editor
          value={contentValue}
          plugins={plugins}
          onChange={(v) => {
            setContentValue(v);
          }}
          locale={zh_Hans}
        />
      </div>
    </div>
  );
};

export default memo(ArticleEditor)
