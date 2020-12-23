import {Breadcrumb, Button} from 'antd';
import React from "react";
import "../home.css";
import jindaishi from '../img/jindaishi.jpg';
import cyuyan from '../img/cyuyan.jpg';
import makesi from '../img/makesi.jpg';
import gaoshu from '../img/gaodengshuxue.jpg'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import login from "../function/qiehuan";
import LoginModal from "../components/LoginModal";
import {setLoginModalVisible} from "../actions";

const Home = (props) => {

    let{setLoginModal,userName}=props

    return (
        <div className="home">
            <div className="container">
                <div className="nav">
                    <Breadcrumb>
                        <Breadcrumb.Item style={{fontSize: 20}}>Home</Breadcrumb.Item>
                        {/*<a href="">Application Center</a>*/}
                    </Breadcrumb>
                    <div id="change1">
                        <Button type="link" onClick={()=>setLoginModal(true)}>登陆</Button>
                        <Button type="link">注册</Button>
                    </div>
                    <div id="change2">
                        <Button type="link">用户名：{userName}</Button>
                    </div>
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
                                <li>第10条</li>
                                <li>第11条</li>
                                <li>第12条</li>
                                <li>第13条</li>
                                <li>第14条</li>
                                <li>第15条</li>
                                <li>第16条</li>
                                <li>第17条</li>
                                <li>第18条</li>
                            </ul>
                            <ul id="comment2"></ul>
                        </div>

                    </div>
                </div>
                <LoginModal/>
            </div>
        </div>
    )
}

const stateToProps = (state) => {
    return {
        ifLogin: state.ifLogin,
        userName:state.userName
    }
}

const dispatchToProps = (dispatch) => {
    return {
        setLoginModal(){
            console.log("setLoginModal");
            dispatch(setLoginModalVisible(true))
        }
    }
}


export default connect(stateToProps,dispatchToProps)(Home);
