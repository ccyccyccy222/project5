import {connect} from 'react-redux';
import {Modal} from 'antd';
import {changeReplyInput, setReplyModalVisible,addRelyItem} from "../actions";
import {Input} from 'antd';
import React from "react";

const {TextArea} = Input;

const ReplyModal = (props) => {
    let {replyMVisible, hideModal,inputValue,changeInputValue,addReply} = props

    return (
        <div>
            <Modal title="我的回答"
                   visible={replyMVisible}
                   onOk={addReply}
                   okText="确定"
                   cancelText="取消"
                   onCancel={hideModal}
                   style={{width: 100}}>
                <TextArea
                    placeholder={inputValue}
                    onChange={changeInputValue}
                    value={inputValue}
                    rows={2}/>
            </Modal>
        </div>

    )
}

const stateToProps = (state) => {
    return {
        replyMVisible: state.replyMVisible,
        inputValue:state.replyInputValue,
    }
}

const dispatchToProps = (dispatch) => {
    return {
        hideModal() {
            dispatch(setReplyModalVisible(false))
        },
        changeInputValue(e) {
            dispatch(changeReplyInput(e.target.value))
        },
        addReply(){
            console.log("In addReply");
            dispatch(addRelyItem())
        }
    }
}


export default connect(stateToProps, dispatchToProps)(ReplyModal);


