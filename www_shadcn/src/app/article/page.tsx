'use client'
import Header from '@/components/header'
// @ts-ignore
import sparrow from '@/app/article/sparrow.html'
import React, { useEffect } from 'react'
import renderMathInElement from 'katex/contrib/auto-render'
import 'katex/dist/katex.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
// import 'bytemd/dist/index.css'
import 'github-markdown-css'
import mermaid from 'mermaid'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    ChevronDownIcon,
    CircleIcon,
    HeartIcon,
    PlusIcon,
    StarIcon,
} from '@radix-ui/react-icons'
import { EyeIcon } from 'lucide-react'
import ArticleNav from '@/components/article-nav'

const HtmlContent = ({ html }: { html: string }) => (
    <article
        className={'md:prose-lg lg:prose-xl'}
        dangerouslySetInnerHTML={{ __html: html }}
    ></article>
)
export default function Page() {
    useEffect(() => {
        renderMathInElement(document.body, {
            // customised options
            // • auto-render specific keys, e.g.:
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: true },
                { left: '\\(', right: '\\)', display: false },
                { left: '\\[', right: '\\]', display: true },
            ],
            // • rendering keys, e.g.:
            throwOnError: false,
        })
        hljs.highlightAll()
        mermaid
            .run({
                querySelector: '.language-mermaid',
            })
            .then((r) => {
                mermaid.initialize({ startOnLoad: false })
            })
    }, [])
    return (
        <>
            <Header />
            <div className="container mt-4 flex min-h-screen w-full gap-2">
                <aside className="sticky top-20 hidden h-fit w-14 flex-col gap-4 rounded-lg border text-center sm:flex">
                    <ArticleNav count={100}>
                        <StarIcon className={'h-fit w-10'} />
                    </ArticleNav>
                    <ArticleNav count={100}>
                        <EyeIcon className={'h-fit w-10'} />
                    </ArticleNav>
                    <ArticleNav count={0}>
                        <HeartIcon className={'h-fit w-10'} />
                    </ArticleNav>
                </aside>
                <Card className="flex flex-1 flex-col rounded-lg border">
                    <CardHeader className="flex flex-col gap-2 space-y-0">
                        <CardTitle>
                            工作7年了，才明白技术的本质不过是工具而已，那么未来的方向在哪里？
                        </CardTitle>
                        <div className="flex flex-col flex-wrap justify-between gap-2 space-x-4 text-sm text-muted-foreground xl:flex-row">
                            <div className="flex flex-wrap items-center space-x-4">
                                <div className="bg-outline flex items-center space-x-1 rounded-md border text-secondary-foreground">
                                    <Button
                                        variant="outline"
                                        className="gap-2 border-none px-3 shadow-none"
                                    >
                                        <div
                                            className={
                                                "h-8 w-8 rounded-full bg-[url('/brand/sparrow2.jpg')] bg-cover"
                                            }
                                        ></div>
                                        年轻的大疯子
                                    </Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="border-none px-2 shadow-none"
                                            >
                                                <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            alignOffset={-5}
                                            className="w-[200px]"
                                            forceMount
                                        >
                                            <DropdownMenuLabel>
                                                Suggested Lists
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuCheckboxItem checked>
                                                Future Ideas
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem>
                                                My Stack
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem>
                                                Inspiration
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <PlusIcon className="mr-2 h-4 w-4" />{' '}
                                                Create List
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div className="flex items-center">
                                    <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                                    TypeScript
                                </div>
                                <div className="flex items-center">
                                    <EyeIcon className="mr-1 h-4 w-4" />
                                    20k
                                </div>
                                <div className="flex items-center">
                                    <HeartIcon className="mr-1 h-4 w-4 fill-red-700 text-red-700" />
                                    20k
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span>标签</span>
                                <span>标签</span>
                                <div className="flex flex-col text-right">
                                    Updated April 2023
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className={'break-all'}>
                        <HtmlContent html={sparrow}></HtmlContent>
                    </CardContent>
                </Card>
                <div className="sticky top-20 z-10 hidden h-fit w-[20rem] rounded-lg border bg-background p-4 lg:flex">
                    right right right right right right right right right right
                    right right right right right right right right right right
                </div>
            </div>
        </>
    )
}
