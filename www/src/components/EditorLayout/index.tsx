import React from "react";
import Header from "../Header";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1200px] mx-auto my-0">
      <Header />
      <div className="relative">{children}</div>
    </div>
  );
}
