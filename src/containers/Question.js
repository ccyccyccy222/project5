import {Breadcrumb, PageHeader, Typography, Row, Button, Modal} from "antd";
import {Link} from "react-router-dom";
import React, {Component} from "react";
// import "../book.css";
import ReplyBrief from "../components/ReplyBrief";
import {connect} from "react-redux";
import {setReplyModalVisible} from "../actions";
import ReplyModal from "../components/ReplyModal";
import store from "../store";
import axios from "axios";


const {Paragraph} = Typography;


class Question extends Component{

    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    render() {
        const content = (
            <>
                <Paragraph>
                    {this.state.quesOne.detail}
                </Paragraph>
                <div className="questionButton">
                    <Button type="link" onClick={() => {
                        store.dispatch(setReplyModalVisible(true));
                    }}>我要回答</Button>
                </div>
            </>
        );
        const Content = ({children}) => (
            <Row>
                <div style={{flex: 1}}>{children}</div>
            </Row>
        );

        return (
            <div>
                <div className="book">
                    <div className="containerB">
                        <Breadcrumb>
                            <Link to="/">
                                <Breadcrumb.Item style={{fontSize: 20}}>Home</Breadcrumb.Item>
                            </Link>
                            <Link to="/book">
                                <Breadcrumb.Item style={{fontSize: 20}}>book</Breadcrumb.Item>
                            </Link>
                            <Breadcrumb.Item style={{fontSize: 20}}>question</Breadcrumb.Item>
                            {/*<a href="">Application Center</a>*/}
                        </Breadcrumb>
                        <PageHeader
                            style={{width: 900}}
                            className="site-page-header"
                            title={this.state.quesOne.title}
                            avatar={{src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}}
                        >
                            <Content>
                                {content}
                            </Content>
                        </PageHeader>
                        <div className="questionsList">
                            <ReplyBrief/>
                        </div>
                    </div>
                </div>
                <ReplyModal/>
            </div>
        )
    }

    componentDidMount(){
        console.log("In componentDidMount Question");
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get("http://localhost:8080/webapp5/info/problem-get?pid=5")
            .then(function (response) {
                let a=response.data;
                console.log("Question:");
                console.log(a);
                _this.setState({
                        quesOne:a
                    }
                    // isLoaded:true
                );
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}


export default Question;
