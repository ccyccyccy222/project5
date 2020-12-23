import React from "react";

const initialState = {
    replyMVisible:true,
    replyInputValue:'',
    replyData:[
        {
            // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            // content: (
            //     <p>
            //         除了后边新中国成立等等没学过的知识外，其他全考，加油吧！
            //     </p>
            // )
            content: "除了后边新中国成立等等没学过的知识外，其他全考，加油吧！\n"
        },
        {
            // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            // content: (
            //     <p>
            //         好好看老师的ppt，上面都有的，考试范围也有
            //     </p>
            // )
            content: "好好看老师的ppt，上面都有的，考试范围也有\n"
        }
    ],
    userName:"abc"
}


export default (state = initialState, action) => {

    let newState = JSON.parse(JSON.stringify(state))

    if (action.type === 'REPLY_MODAL_VISIBLE') {
        newState.replyMVisible = action.replyMVisible
        console.log("newState.replyMVisible:")
        console.log(newState.replyMVisible)
    }
    if (action.type === 'CHANGE_REPLY_INPUT') {
        newState.replyInputValue = action.inputValue
        console.log("newState. replyInputValue:")
        console.log(newState.replyInputValue)
    }
    if (action.type === 'ADD_REPLY') {
        let replyItem={
                // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                // content: (
                //     <p>
                //         除了后边新中国成立等等没学过的知识外，其他全考，加油吧！
                //     </p>
                // )
                content: ''
            };
        replyItem.content=state.replyInputValue;
        newState.replyData.push(replyItem);
        newState.replyInputValue=''
        console.log("newState. replyInputValue:")
        console.log(newState.replyInputValue)
    }

    return newState
}
