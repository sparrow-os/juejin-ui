import React from "react";
import CommonLayout from "../../components/CommonLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CommonLayout>
      <div className="flex flex-row h-max w-5/6  border-2">
        <div className="left-control">21321321</div>
        <div className="post-detail bg-[#fff] p-4">{children}</div>
        <div className="right-info">right-info</div>
      </div>
    </CommonLayout>
  );
}
