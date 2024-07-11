'use client'
import {useEffect} from "react";
import renderMathInElement from "katex/contrib/auto-render";
//@ts-ignore
import sparrow from './sparrow.html';
//@ts-ignore
import bytemd from './bytemd.html';

import 'katex/dist/katex.css'
import 'highlight.js/styles/vs.css'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import 'bytemd/dist/index.css'
import mermaid from 'mermaid'

const HtmlContent = ({html}: { html: string }) => (
    <div dangerouslySetInnerHTML={{__html: html}}/>
);
export default function Page() {
    useEffect( () => {
        renderMathInElement(document.body, {
            // customised options
            // • auto-render specific keys, e.g.:
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: true},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ],
            // • rendering keys, e.g.:
            throwOnError: false
        });
        hljs.highlightAll();
        mermaid.run({
            querySelector: '.language-mermaid',
        }).then(r =>{
            mermaid.initialize({startOnLoad: false});
        });
    }, []);

    return (
        <>
            <HtmlContent html={sparrow}>
            </HtmlContent>
            <HtmlContent html={bytemd}>
            </HtmlContent>
        </>
    )
}
