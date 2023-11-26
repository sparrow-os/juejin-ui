'use client'
import React from "react";
import TechnicalClassify from "../components/Home/TechnicalClassify";
import TimeLineContent from "../components/Home/TimeLineContent";

import Header from "../components/Header";
import {Footer} from "../components/Footer";
import axios from 'axios'

export default class Page extends React.Component {
    state = {
        studentsList: [],
        carsList: []
    }
    componentDidMount = async () => {
        try {
            const {data: studentsList} = await axios.get('http://localhost:3000/api1/students');  //请求地址加上api1
            const {data: carsList} = await axios.get('/api2/cars');
            // 当我们请求的地址的域名和端口和和自身的端口、域名相同时，可以省域名和端口，请求地址加上api2
            console.log(studentsList, carsList)
            this.setState({studentsList, carsList})
        } catch (error) {

        }
    }

    render() {
        const {studentsList, carsList} = this.state;
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
