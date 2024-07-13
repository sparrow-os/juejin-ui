import {ChevronDownIcon, CircleIcon, HeartIcon, PlusIcon, StarIcon,} from "@radix-ui/react-icons"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import React from "react";
import Image from "next/image";
import {EyeIcon, ViewIcon} from "lucide-react";


export function ArticleItem() {
    return (
        <Card>
            <CardHeader className="flex flex-row gap-2 space-y-0">
                <div className="flex-1 space-y-4">
                    <CardTitle><a href={"/article"} target={"_blank"}>工作7年了，才明白技术的本质不过是工具而已，那么未来的方向在哪里？</a></CardTitle>
                    <CardDescription>
                        我目前工作7年了，这几年来埋头苦干，学习了很多技术，做了不少系统，也解决过不少线上问题。自己虽然在探寻个人IP与副业，自己花了很多时间去思考技术之外的路该怎么走。但转念一想，我宁愿花这么多时间去探索技术之外的路线，但是却从没好好静下来想一下技术本身。
                        技术到底是什么，你我所处的技术行业为什么会存在，未来的机会在哪里。
                        因此，我结合自己的工作经历，希望和大家一起聊聊，技术的本质与未来的方向，到底在哪里，才疏学浅，如果内容有误还希望你在评论区指正。
                    </CardDescription>
                </div>
                <div className="lg:flex hidden aspect-square w-32 border rounded-md bg-[url('/brand/sparrow2.jpg')] bg-cover">
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4 flex-wrap">
                        <div
                            className="flex items-center space-x-1 border rounded-md bg-outline text-secondary-foreground">
                            <Button variant="outline" className="px-3 border-none shadow-none gap-2">
                                <div className={"rounded-full bg-[url('/brand/sparrow2.jpg')] bg-cover w-8 h-8"}></div>
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
                    <div className="md:flex hidden items-center space-x-4">
                        <span>标签</span>
                        <span>标签</span>
                        <div className="lg:flex hidden text-right items-center">Updated April 2023</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
