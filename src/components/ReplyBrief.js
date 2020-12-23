import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import React from "react";
import {Link} from "react-router-dom";
import {setReplyModalVisible} from "../actions";
import {connect} from "react-redux";

const ReplyBrief=(props)=>{
    let{replyData}=props
    return(
            <List
                className="comment-list"
                header={`${replyData.length} replies`}
                itemLayout="horizontal"
                dataSource={replyData}
                renderItem={item => (
                    <li>
                        <Comment
                            actions={item.actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                        />
                    </li>
                )}
            />
        )

}

const stateToProps = (state) => {
    return {
        replyData: state.replyData
    }
}

const dispatchToProps = (dispatch) => {
    return {
        hideModal() {
            dispatch(setReplyModalVisible(false))
        }
    }
}


export default connect(stateToProps, dispatchToProps)(ReplyBrief);
