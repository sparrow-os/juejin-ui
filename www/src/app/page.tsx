import React from "react";
import Link from "next/link";
import TechnicalClassify from "../components/Home/TechnicalClassify";
import TimeLineContent from "../components/Home/TimeLineContent";

export default function Page() {
  return (
    <div className="flex">
      <div className="index-nav mr-[20px] sticky top-[80px] rounded-[4px] overflow-hidden h-fit flex-shrink-0">
        <TechnicalClassify></TechnicalClassify>
      </div>
      <TimeLineContent />
    </div>
  );
}
