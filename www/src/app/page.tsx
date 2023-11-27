'use client'
import React from "react";
import TechnicalClassify from "../components/Home/TechnicalClassify";
import TimeLineContent from "../components/Home/TimeLineContent";

import Header from "../components/Header";
import {Footer} from "../components/Footer";
import axios from 'axios'

export default class Page extends React.Component {
        render() {
        return (
            <body>
            <Header/>
            <div className="container mx-auto mt-[16px]">
                <div className="flex h-auto w-auto">
                    <TechnicalClassify/>
                    <TimeLineContent/>
                </div>
                <Footer/>
            </div>
            </body>
        )
    }
}
