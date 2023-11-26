import React from "react";
import ContentList from "../ContentList/index";
import ContentAside from "../ContentAside/index";

export default function TimeLineContent() {
    return (
        <div className="flex flex-1">
            <ContentList/>
            <ContentAside/>
        </div>
    );
}
