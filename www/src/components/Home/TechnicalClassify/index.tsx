'use client'
import React from "react";
import {it} from "node:test";

interface IClassification {
    value: string;
    label: string;
    order: number;
}

interface IClassifyItemProps {
    item: IClassification;
    // activeItem: string;
    onClick: (item: IClassification) => void;
}

const initClassification: IClassification[] = [
    {
        value: "Follow",
        label: "关注",
        order: 0,
    },
    {
        value: "Comprehensive",
        label: "综合",
        order: 10,
    },
    {
        value: "BackEnd",
        label: "后端",
        order: 20,
    },
    {
        value: "FrontEnd",
        label: "前端",
        order: 30,
    },
    {
        value: "Android",
        label: "Android",
        order: 40,
    },
    {
        value: "IOS",
        label: "iOS",
        order: 50,
    },
    {
        value: "AI",
        label: "人工智能",
        order: 60,
    },
    {
        value: "IED",
        label: "开发工具",
        order: 70,
    },
    {
        value: "CodeLife",
        label: "代码人生",
        order: 80,
    },
    {
        value: "Reading",
        label: "阅读",
        order: 90,
    },
    {
        value: "RankList",
        label: "排行榜",
        order: 100,
    },
];

function ClassifyItem({item, onClick}: IClassifyItemProps) {
    return (
        <div
            key={item.value}>
            <button  onClick={() => onClick(item)}>Delete</button>;
            <span>{item.label}</span>
        </div>
    );
}

export default function TechnicalClassify() {
    // const [activeItem, setActiveItem] = useState("Follow");
    // const [classification, setClassification] = useState(initClassification);

    const handleClick = (item: IClassification) => {
        alert(item.label)
        // setActiveItem(item.value);
    };

    return (
        <div className="index-nav w-[180px] bg-[#fff] p-[8px] mr-4">
            {initClassification.map((item) => (
                <ClassifyItem
                    item={item}
                    // activeItem={activeItem}
                    onClick={handleClick}
                />
            ))}
        </div>
    );
}
