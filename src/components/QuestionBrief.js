import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

// const data = [
//     {
//         // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
//         author: 'Han Solo',
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         content: (
//             <p>
//                 近代史怎么考呀？考哪里呀？
//             </p>
//         )
//     },
//     {
//         // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
//         author: 'Han Solo',
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         content: (
//             <p>
//                 为什么说辛亥革命的果实被袁世凯窃取了？
//             </p>
//         )
//     },
// ];

const QuestionBrief=(props)=>{
    let{quesData}=props
    return(
        <List
            className="comment-list"
            header={`${quesData.length} questions`}
            itemLayout="horizontal"
            dataSource={quesData}
            renderItem={item => (
                <Link to="/question">
                    <li>
                        <Comment
                            actions={item.actions}
                            author={item.asker}
                            avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            content={item.title}
                        />
                    </li>
                </Link>
            )}
        />
    )
}

const stateToProps = (state) => {
    return {
        quesData: state.quesData
    }
}


export default connect(stateToProps)(QuestionBrief);
