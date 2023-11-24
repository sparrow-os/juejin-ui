import React from "react";
import CommonLayout from "../components/CommonLayout";
import TechnicalClassify from "../components/Home/TechnicalClassify";
import TimeLineContent from "../components/Home/TimeLineContent";

export default function Page() {
  return (
    <CommonLayout>
      <div className="flex">
        <div className="index-nav mr-[20px] sticky top-[80px] rounded-[4px] overflow-hidden h-fit flex-shrink-0">
          <TechnicalClassify />
        </div>
        <TimeLineContent />
      </div>
    </CommonLayout>
  );
}
