import React from "react";


    export interface ContentItemProp {
        id: number,
        title: string;
        abstracts: string;
        viewCount: number;
        likeCount: number;
        coverImage: string;
    }

    export interface ContentItemPropWrap {
        item: ContentItemProp;
    }

    export default function ContentItem({item}: ContentItemPropWrap) {
        return (
            <div key={item.id} className="flex overflow-hidden p-4 border-gray-200 border-b-[1px]">
                <div className="flex flex-row justify-between w-[100%]">
                    <div className="flex flex-col flex-1">
                        <a className="font-bold">{item.title}</a>
                        <div className="flex flex-col justify-between h-[100%]">
                            <div className="flex  flex-1 text-sm text-gray-400">{item.abstracts}</div>
                            <div className="flex flex-row justify-between">
                                <ul className="flex flex-row flex-1 divide-x divide-gray-400">
                                    <li className="flex flex-row mr-3 items-center content-center">
                                        <a className="text-sm text-gray-400">作者</a>
                                    </li>
                                    <li className="flex flex-row px-3  items-center content-center">
                                        <span className="show"></span>
                                        <span className="text-sm text-gray-400">{item.viewCount}</span>
                                    </li>
                                    <li className="flex flex-row pl-3  items-center content-center">
                                        <span className="like"></span>
                                        <span className="text-sm text-gray-400">{item.likeCount}</span>
                                    </li>
                                </ul>
                                <ul className="flex flex-row w-auto  divide-gray-400">
                                    <li><a
                                        className="px-2 mx-1 text-sm bg-gray-200 cursor-pointer text-gray-400 rounded-md">标签1</a>
                                    </li>
                                    <li><a
                                        className="px-2  mx-1 text-sm bg-gray-200 cursor-pointer text-gray-400 rounded-md">标签1</a>
                                    </li>
                                    <li><a
                                        className="px-2 mx-1 text-sm bg-gray-200 cursor-pointer text-gray-400 rounded-md">标签1</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <img className="rounded-md w-[150px] h-[100px]"
                         src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93839ef3cd0d47f7b0f9609bd8391bcb~tplv-k3u1fbpfcp-jj:108:72:0:0:q75.avis"/>
                </div>
            </div>
        );
    }
