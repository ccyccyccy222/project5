import {Breadcrumb, Button, Card, Space} from 'antd';
import React from "react";
import "../home.css";
import jindaishi from '../img/jindaishi.jpg';
import cyuyan from '../img/cyuyan.jpg';
import makesi from '../img/makesi.jpg';
import gaoshu from '../img/gaodengshuxue.jpg'
import roll from "../function/lunbo";
import {Link} from "react-router-dom";
import {Provider} from "react-redux";


const Home = () => {

    // roll(50);
    return (
        <div className="home">
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item style={{fontSize: 20}}>Home</Breadcrumb.Item>
                    {/*<a href="">Application Center</a>*/}
                </Breadcrumb>
                <div className="login">
                    <Space>
                        <Button type="link">登陆</Button>
                        <Button type="link">注册</Button>
                    </Space>
                </div>
                <div className="content">
                    <div className="card">
                        <div className="flex-item">
                            <Link to="./book">
                                {/*<a href="Book.js">*/}
                                <img src={jindaishi} alt="中国近代史纲要"/>
                                <p>中国近代史纲要</p>
                                {/*</a>*/}
                            </Link>
                        </div>
                        <div className="flex-item">
                            <img src={cyuyan} alt="c语言"/>
                            <p>c语言</p>
                        </div>
                        <div className="flex-item">
                            <img src={makesi} alt="马克思主义基本原理"/>
                            <p>马克思主义基本原理</p>
                        </div>
                        <div className="flex-item">
                            <img src={gaoshu} alt="高等数学"/>
                            <p>高等数学</p>
                        </div>

                    </div>
                    <div className="right">
                        <p>&nbsp;&nbsp;热门问题</p>
                        <hr/>
                        <div className="gundong">
                            <ul id="comment1">
                                <li>第一条</li>
                                <li>第二条</li>
                                <li>第三条</li>
                                <li>第四条</li>
                                <li>第五条</li>
                                <li>第六条</li>
                                <li>第七条</li>
                                <li>第八条</li>
                                <li>第九条</li>
                            </ul>
                            <ul id="comment2"></ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
