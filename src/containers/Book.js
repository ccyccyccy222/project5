import "../book.css";
import {Breadcrumb, Button} from "antd";
import React, {Component} from "react";
import {Link} from "react-router-dom";
import jindaishi from "../img/jindaishi.jpg";
import {Descriptions} from "antd";
import QuestionBrief from "../components/QuestionBrief";
import QuestionModal from "../components/QuestionModal";
import {connect} from 'react-redux';
import {setQuestionModalVisible} from "../actions";
import store from "../store";
import axios from "axios";
import lisan from '../img/lisan.jpg';




class Book extends Component{

    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    render() {
        return(
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
                        <img src={lisan} alt={this.state.desBook.name} style={{width: 210, height: 300}}/>
                        <div className="describeRight">
                            <Descriptions column={1}>
                                <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                                                   label="课本名称">{this.state.desBook.name}</Descriptions.Item>
                                <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                                                   label="作者">{this.state.desBook.author}</Descriptions.Item>
                                <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                                                   label="出版社">{this.state.desBook.press}</Descriptions.Item>
                                <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                                                   label="出版时间">{this.state.desBook.time}</Descriptions.Item>
                                <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                                                   label="学科">{this.state.desBook.subject}</Descriptions.Item>
                                <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                                                   label="ISBN">{this.state.desBook.ISBN}</Descriptions.Item>
                            </Descriptions>
                            <Button type="primary" onClick={
                                ()=>{
                                    store.dispatch(setQuestionModalVisible(true));
                                }
                            }>我要提问</Button>
                        </div>
                        <QuestionModal/>
                    </div>
                    <div className="questionsList">
                        <QuestionBrief/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        console.log("In componentDidMount Book");
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://localhost:8080/webapp5/info/book-get?bid=29347398')
            .then(function (response) {
                // _this.setState({
                //     users:response.data,
                //     isLoaded:true
                // });
                // let a = Object.values(response.data);
                let a=response.data;
                console.log("desBook:");
                console.log(a);
                _this.setState({
                        desBook:a
                    }
                    // isLoaded:true
                );
            })
            .catch(function (error) {
                console.log(error);
                // _this.setState({
                //     isLoaded:false,
                //     error:error
                // })
            })
        axios.get("http://localhost:8080/webapp5/info/problem-list?bid=29347398")
            .then(function (response) {
                let a=response.data;
                console.log("questionBrief:");
                console.log(a);
                _this.setState({
                        quesData:a
                    }
                    // isLoaded:true
                );
            })
            .catch(function (error) {
                console.log(error);
                // _this.setState({
                //     isLoaded:false,
                //     error:error
                // })
            })
    }



}


export default Book;
