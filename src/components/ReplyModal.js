import {connect} from 'react-redux';
import { Modal, Button } from 'antd';
import {setReplyModalVisible} from "../actions";


const ReplyModal=(props)=>{
    let {replyMVisible,hideModal} = props

    return(
        <div>
            <Modal title="Basic Modal" visible={replyMVisible} onOk={hideModal} onCancel={hideModal}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>

)
}

const stateToProps = (state) => {
    return {
        replyMVisible: state.replyMVisible
    }
}

const dispatchToProps = (dispatch) => {
    return {
        hideModal() {
            dispatch(setReplyModalVisible (false))
        }
    }
}


export default connect(stateToProps,dispatchToProps)(ReplyModal);


