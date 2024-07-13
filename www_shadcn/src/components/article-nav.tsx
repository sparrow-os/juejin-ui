import {Badge} from "@/components/ui/badge"
import {StarIcon} from "@radix-ui/react-icons";
import React from "react";

interface Prop {
    count: number,
}

export default function ArticleNav({count,children}: {count:number, children: React.ReactNode; }) {
    return (<>
        <Badge className={"rounded-full w-12 h-12 relative dark:bg-stone-700 dark:hover:bg-stone-900 dark:hover:text-stone-50 bg-stone-300 hover:bg-stone-50 hover:cursor-pointer hover:text-stone-900"}>
            {count > 0 && <div
                className={"absolute text-center w-12 h-fit left-8 top-0 text-secondary-foreground bg-background rounded-xl"}>{count}</div>}
            {children}
        </Badge></>)
}
