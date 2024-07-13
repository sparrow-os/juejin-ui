import Header from "@/components/header";
import {ArticleItem} from "@/components/article-item";

export default function Page() {
    return (
        <>
            <Header/>
            <div className="container flex flex-col xl:flex-row min-h-screen w-full gap-2 mt-4">
                <aside className="flex xl:flex-col xl:w-44 xl:min-h-screen flex-row gap-4 h-16 w-full border rounded-lg text-center justify-left items-center">
                    <nav className="m-2">
                        menu1
                    </nav>
                    <nav className="m-2">
menu 2
                    </nav>
                </aside>
                <div className="flex flex-1 flex-row gap-2">
                    <div className="md:flex flex-col md:w-[78%] w-full   border rounded-lg p-4">
                        <ArticleItem/>
                        <ArticleItem/>
                        <ArticleItem/>
                    </div>
                    <div className="md:flex flex-1 hidden  border rounded-lg p-4">
                        right
                    </div>
                </div>
            </div>
        </>
    )
}
