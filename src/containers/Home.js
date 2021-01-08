import {Breadcrumb, Button} from 'antd';
import React, {Component} from "react";
import "../home.css";
import lisan from '../img/lisan.jpg';
import gailvlun from '../img/gailvlun.jpg';
import jizu from '../img/jizu.jpg';
import shuju from '../img/shuju.jpg'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import login from "../function/qiehuan";
import LoginModal from "../components/LoginModal";
import {setLoginModalVisible} from "../actions";
import axios from "axios";
import store from "../store";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.setLoginModal = this.setLoginModal.bind(this);
        // axios.get('http://localhost:8080/webapp5/info/book-list')
        //     .then(function (response) {
        //         // _this.setState({
        //         //     users:response.data,
        //         //     isLoaded:true
        //         // });
        //         // let a = Object.values(response.data);
        //         let a=response.data;
        //         console.log("Home Array:");
        //         console.log(a);
        //         this.setState({
        //                 homeBook:a
        //             }
        //             // isLoaded:true
        //         );
        //         console.log("Home Array:a[0]");
        //         console.log(a[0]);
        //         console.log("Home Array:a[0].picture");
        //         console.log(a[0].picture);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //         // _this.setState({
        //         //     isLoaded:false,
        //         //     error:error
        //         // })
        //     })
    }

    // let{setLoginModal,userName}=props

    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="nav">
                        <Breadcrumb>
                            <Breadcrumb.Item style={{fontSize: 20}}>Home</Breadcrumb.Item>
                            {/*<a href="">Application Center</a>*/}
                        </Breadcrumb>
                        <div id="change1">
                            <Button type="link" onClick={() => this.setLoginModal(true)}>登陆</Button>
                            <Button type="link">注册</Button>
                        </div>
                        <div id="change2">
                            <Button type="link">用户名：{this.state.userName}</Button>
                        </div>
                    </div>

                    <div className="content">
                        <div className="card">
                            <div className="flex-item">
                                <Link to="./book">
                                    {/*<a href="Book.js">*/}
                                    <img src={lisan} alt={this.state.homeBook[0].name}/>
                                    <p>{this.state.homeBook[0].name}</p>
                                    {/*</a>*/}
                                </Link>
                            </div>
                            <div className="flex-item">
                                <Link to="./book">
                                    <img src={gailvlun} alt={this.state.homeBook[1].name}/>
                                    <p>{this.state.homeBook[1].name}</p>
                                </Link>
                            </div>
                            <div className="flex-item">
                                <Link to="./book">
                                    <img src={jizu} alt={this.state.homeBook[2].name}/>
                                    <p>{this.state.homeBook[2].name}</p>
                                </Link>
                            </div>
                            <div className="flex-item">
                                <Link to="./book">
                                    <img src={shuju} alt={this.state.homeBook[3].name}/>
                                    <p>{this.state.homeBook[3].name}</p>
                                </Link>
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
                    <LoginModal/>
                </div>
            </div>
        )
    }

//当组件输出到 DOM 后会执行 componentDidMount()
    componentDidMount() {
        console.log("In componentDidMount");
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://localhost:8080/webapp5/info/book-list')
            .then(function (response) {
                // _this.setState({
                //     users:response.data,
                //     isLoaded:true
                // });
                // let a = Object.values(response.data);
                let a = response.data;
                console.log("Home Array:");
                console.log(a);
                _this.setState({
                        homeBook: a
                    }
                    // isLoaded:true
                );
                console.log("Home Array:a[0]");
                console.log(a[0]);
            })
            .catch(function (error) {
                console.log(error);
                // _this.setState({
                //     isLoaded:false,
                //     error:error
                // })
            })
    }

    setLoginModal() {
        console.log("setLoginModal");
        store.dispatch(setLoginModalVisible(true))
    }
}


export default Home;

