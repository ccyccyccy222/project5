import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import React from "react";
import {Link} from "react-router-dom";

const data = [
    {
        // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
            <p>
                除了后边新中国成立等等没学过的知识外，其他全考，加油吧！
            </p>
        )
    },
    {
        // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
            <p>
                好好看老师的ppt，上面都有的，考试范围也有
            </p>
        )
    },
];

const ReplyBrief=()=>(
    <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
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

export default ReplyBrief;
