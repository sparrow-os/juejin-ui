"use client";
import React, { useState } from "react";

export default function SignIn() {
  const [hasSignIn, setHasSignIn] = useState(false);

  return (
    <div className="w-[100%] bg-[#fff] rounded-[4px] p-[20px] flex justify-between">
      <div className="flex flex-col">
        <span>{hasSignIn ? "连续签到 99 天" : "快来签到吧"}</span>
        <span className="text-[#8a919f] mt-[2px] text-[12px]">
          点亮在社区的每一天
        </span>
      </div>
      <div
        className={`w-[74px] h-[36px] rounded-[4px] flex items-center justify-center border-solid border-[rgba(30,128,255,.3)] border-[1px] cursor-pointer select-none ${
          hasSignIn
            ? "bg-[rgba(30,128,255,.05)] text-[#abcdff]"
            : "bg-[#007fff] text-[#fff]"
        }`}
        onClick={() => setHasSignIn(true)}
      >
        签到
      </div>
    </div>
  );
}
