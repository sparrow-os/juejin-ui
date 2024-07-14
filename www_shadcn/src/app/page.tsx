import Header from '@/components/header'
import { ArticleItem } from '@/components/article-item'
import React from 'react'

export default function Page() {
    return (
        <>
            <Header />
            <div className="container mt-4 flex min-h-screen w-full flex-col gap-2 xl:flex-row">
                <aside className="justify-left flex h-16 w-full flex-row items-center gap-4 rounded-lg border text-center xl:sticky xl:min-h-screen xl:w-44 xl:flex-col">
                    <nav className="m-2">menu1</nav>
                    <nav className="m-2">menu 2</nav>
                </aside>
                <div className="flex flex-1 flex-col gap-2 rounded-lg border p-4">
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                </div>
                <div className="sticky top-20 z-10 hidden h-fit w-[20rem] rounded-lg border bg-background p-4 lg:flex">
                    right right right right right right right right right right
                    right right right right right right right right right right
                    right right right right right right right right
                </div>
            </div>
        </>
    )
}
