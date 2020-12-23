import "../book.css";
import {Breadcrumb, Button} from "antd";
import React from "react";
import {Link} from "react-router-dom";
import jindaishi from "../img/jindaishi.jpg";
import {Descriptions} from "antd";
import QuestionBrief from "../components/QuestionBrief";

const Book = () => (
    <div className="book">
        <div className="containerB">
            <Breadcrumb>
                <Link to="/">
                    <Breadcrumb.Item style={{fontSize: 20}}>Home</Breadcrumb.Item>
                </Link>
                <Breadcrumb.Item style={{fontSize: 20}}>book</Breadcrumb.Item>
                {/*<a href="">Application Center</a>*/}
            </Breadcrumb>
            <div className="describe">
                <img src={jindaishi} alt="近代史" style={{width: 210, height: 300}}/>
                <div className="describeRight">
                    <Descriptions column={1}>
                        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                                           label="课本名称">中国近代史纲要</Descriptions.Item>
                        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                                           label="作者">《中国近现代史纲要》编写组</Descriptions.Item>
                        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                                           label="出版社">高等教育出版社</Descriptions.Item>
                        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                                           label="出版时间">2015年8月</Descriptions.Item>
                        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                                           label="学科">历史</Descriptions.Item>
                        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                                           label="ISBN">978-7-04-049483-9</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
            <div className="questionsList">
                <QuestionBrief/>
            </div>
        </div>
    </div>
)
export default Book;
