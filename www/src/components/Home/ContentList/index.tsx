import React from "react";
import ContentItem from "../ContentItem";

export default function ContentList() {
    return (
        <div className="grid grid-rows-1 flex-1 bg-[#fff]">
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
        </div>
    );
}
