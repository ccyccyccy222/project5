import {Breadcrumb, PageHeader, Typography, Row, Button, Modal} from "antd";
import {Link} from "react-router-dom";
import React from "react";
import "../book.css";
import ReplyBrief from "../components/ReplyBrief";
import {connect} from "react-redux";
import {setReplyModalVisible} from "../actions";
import ReplyModal from "../components/ReplyModal";


const {Paragraph} = Typography;


// const showModal = () => {
//     setIsModalVisible(true);
// };
//
// const handleOk = () => {
//     setIsModalVisible(false);
// };
//
// const handleCancel = () => {
//     setIsModalVisible(false);
// };


const Question = ({dispatch}) => {

    const content = (
        <>
            <Paragraph>
                呜呜呜孩子上课没好好听，希望大神帮忙画重点，考前突击复习一下
            </Paragraph>
            <div className="questionButton">
                <Button type="link" onClick={() => {
                    dispatch(setReplyModalVisible(true));
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
                    title="近代史怎么考呀？考哪里呀？"
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
    // {/*<div>*/
    // }
    // {/*</div>*/
    // }
)
}


export default connect()(Question);
