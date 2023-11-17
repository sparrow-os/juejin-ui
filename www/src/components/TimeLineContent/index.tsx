import React from "react";
import ContentList from "./ContentList/index";
import ContentAside from "./ContentAside/index";

export default function TimeLineContent() {
  return (
    <div className="flex-1 flex relative">
      <ContentList />
      <ContentAside />
    </div>
  );
}
