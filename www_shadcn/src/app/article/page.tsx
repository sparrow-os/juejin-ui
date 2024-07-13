'use client'
import Header from "@/components/header";
// @ts-ignore
import sparrow from "@/app/article/sparrow.html";
import React, {useEffect} from "react";
import renderMathInElement from "katex/contrib/auto-render";
import 'katex/dist/katex.css'
import 'highlight.js/styles/vs.css'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import 'bytemd/dist/index.css'
import mermaid from 'mermaid'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu, DropdownMenuCheckboxItem,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {ChevronDownIcon, CircleIcon, HeartIcon, PlusIcon, StarIcon} from "@radix-ui/react-icons";
import {EyeIcon, ViewIcon} from "lucide-react";
import ArticleNav from "@/components/article-nav";

const HtmlContent = ({html}: { html: string }) => (
    <div dangerouslySetInnerHTML={{__html: html}}/>
);
export default function Page() {
    useEffect(() => {
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
        }).then(r => {
            mermaid.initialize({startOnLoad: false});
        });
    }, []);
    return (
        <>
            <Header/>
            <div className="container flex flex-row min-h-screen w-full gap-2 mt-4">
                <aside
                    className="sm:flex fixed hidden flex-col w-14 min-h-screen gap-4 h-fit border rounded-lg text-center justify-left items-center">
                    <ArticleNav count={100}>
                        <StarIcon className={"w-10 h-fit"}/>
                    </ArticleNav>
                    <ArticleNav count={100}>
                        <EyeIcon className={"w-10 h-fit"}/>
                    </ArticleNav>
                    <ArticleNav count={0}>
                        <HeartIcon className={"w-10 h-fit"}/>
                    </ArticleNav>
                </aside>
                <div  className="lg:mr-[20rem] flex flex-1 sm:ml-20 border rounded-lg">
                <Card className="lg:mr-[20rem] flex flex-col flex-1 sm:ml-20 border rounded-lg">
                    <CardHeader className="flex flex-col gap-2 space-y-0">
                        <CardTitle>工作7年了，才明白技术的本质不过是工具而已，那么未来的方向在哪里？</CardTitle>
                        <div className="flex justify-between xl:flex-row flex-col space-x-4 text-sm text-muted-foreground gap-2">
                            <div className="flex items-center space-x-4">
                                <div
                                    className="flex items-center space-x-1 border rounded-md bg-outline text-secondary-foreground">
                                    <Button variant="outline" className="px-3 border-none shadow-none gap-2">
                                        <div
                                            className={"rounded-full bg-[url('/brand/sparrow2.jpg')] bg-cover w-8 h-8"}></div>
                                        年轻的大疯子
                                    </Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" className="px-2 border-none shadow-none">
                                                <ChevronDownIcon className="h-4 w-4 text-secondary-foreground"/>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            alignOffset={-5}
                                            className="w-[200px]"
                                            forceMount
                                        >
                                            <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
                                            <DropdownMenuSeparator/>
                                            <DropdownMenuCheckboxItem checked>
                                                Future Ideas
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
                                            <DropdownMenuSeparator/>
                                            <DropdownMenuItem>
                                                <PlusIcon className="mr-2 h-4 w-4"/> Create List
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div className="flex items-center">
                                    <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400"/>
                                    TypeScript
                                </div>
                                <div className="flex items-center">
                                    <EyeIcon className="mr-1 h-4 w-4 "/>
                                    20k
                                </div>
                                <div className="flex items-center">
                                    <HeartIcon className="mr-1 h-4 w-4 fill-red-700 text-red-700"/>
                                    20k
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span>标签</span>
                                <span>标签</span>
                                <div className="flex text-right    flex-col

                                     ">Updated April 2023</div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <HtmlContent html={sparrow}>
                        </HtmlContent>
                    </CardContent>
                </Card>
                <div className="lg:flex fixed  right-0 w-[20rem] z-10 bg-background min-h-screen hidden  border rounded-lg p-4">
                    right
                </div>
                </div>
            </div>
        </>
    )
}
