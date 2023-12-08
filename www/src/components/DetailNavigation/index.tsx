'use client'
import React from "react";

export default function DetailNavigation() {
    return (
        <div className="flex flex-col gap-2 w-[120px]">
            <div className="indicator  h-16 rounded-full bg-white items-center">
                <span className="indicator-item badge label-text badge-ghost">99+</span>
                <div className="w-16 text-center"><span className="like-big"></span></div>
            </div>
            <div className="indicator  h-16 rounded-full bg-white items-center">
                <span className="indicator-item badge label-text badge-ghost">99+</span>
                <div className="w-16  text-center"><span className="comment"></span></div>
            </div>
            <div className="indicator  h-16 rounded-full bg-white items-center">
                <span className="indicator-item badge label-text badge-ghost">99+</span>
                <div className="w-16  text-center"><span className="favorite"></span></div>
            </div>
            <div className="indicator  h-16 rounded-full bg-white items-center">
                <div className="w-16  text-center"><span className="share"></span> </div>
            </div>
        </div>
    );
}
