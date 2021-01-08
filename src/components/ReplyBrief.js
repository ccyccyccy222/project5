import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {setReplyModalVisible} from "../actions";
import {connect} from "react-redux";
import store from "../store";
import axios from "axios";


class ReplyBrief extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    render() {
        return(
            <List
                className="comment-list"
                header={`${this.state.replyData.length} replies`}
                itemLayout="horizontal"
                dataSource={this.state.replyData}
                renderItem={item => (
                    <li>
                        <Comment
                            actions={item.actions}
                            author={item.answer}
                            avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            content={item.detail}
                        />
                    </li>
                )}
            />
        )
    }

    hideModal() {
        store.dispatch(setReplyModalVisible(false))
    }

    componentDidMount(){
        console.log("In componentDidMount ReplyBrief");
        let _this=this;
        axios.get("http://localhost:8080/webapp5/info/comment-get?pid=5")
            .then(function (response) {
                let a=response.data;
                console.log("replyBrief:");
                console.log(a);
                _this.setState(
                    {
                        replyData: a
                    }
                )
            })
            .catch(function (error) {
                console.log(error);
            })
    }


}

export default ReplyBrief;
