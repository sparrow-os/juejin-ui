import React from "react";
import ContentList from "../ContentList";
import ContentAside from "../ContentAside";

export default function TimeLineContent() {
    return (
        <div className="flex flex-1">
            <ContentList/>
            <ContentAside/>
        </div>
    );
}
