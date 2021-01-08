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
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get("http://localhost:8080/webapp5/info/comment-get?pid=5")
            .then(function (response) {
                let a=response.data;
                console.log("replyBrief:");
                console.log(a);
                console.log("JSON.parse(a)");
                console.log(JSON.parse(a));
                // _this.setState({
                //         quesData:a
                //     }
                //     // isLoaded:true
                // );
            })
            .catch(function (error) {
                console.log(error);
            })
    }


}

export default ReplyBrief;
