import React from "react";

const initialState = {
    userName: "abc",
    loginMVisible: false,
    ifLogin: false,
    replyMVisible: false,
    replyInputValue: '',
    replyData: [
        {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: "除了后边新中国成立等等没学过的知识外，其他全考，加油吧！\n"
        },
        {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: "好好看老师的ppt，上面都有的，考试范围也有\n"
        }
    ],
    questionMVisible:false,
    question:'',
    questionDes:'',
    quesData: [
        {
            // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: '近代史怎么考呀？考哪里呀？\n'
        },
        {
            // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: '为什么说辛亥革命的果实被袁世凯窃取了？\n'
        }
    ]
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
        let replyItem = {
            // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: newState.userName,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: ''
        };
        replyItem.content = state.replyInputValue;
        newState.replyData.push(replyItem);
        newState.replyInputValue = ''
        console.log("newState. replyInputValue:")
        console.log(newState.replyInputValue)
    }
    if (action.type === 'LOGIN_MODAL_VISIBLE') {
        newState.loginMVisible = action.loginMVisible
        console.log("newState.loginMVisible:")
        console.log(newState.loginMVisible)
    }
    if (action.type === 'SUB_LOGIN_FORM') {
        newState.userName = action.loginValue.username
        newState.ifLogin=true
        console.log("newState.userName:")
        console.log(newState.userName)
    }
    if (action.type === 'QUES_MODAL_VISIBLE') {
        newState.questionMVisible = action.questionMVisible
        console.log("newState.questionMVisible:")
        console.log(newState.questionMVisible)
    }
    if (action.type === 'SUB_QUES_FORM') {
        newState.question = action.quesValue.question
        newState.questionDes = action.quesValue.questionDes
        console.log("newState.question:")
        console.log(newState.question)
        console.log("newState.questionDes:")
        console.log(newState.questionDes)
        let quesItem = {
            // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: newState.userName,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: newState.question
        };
        newState.quesData.push(quesItem);

    }



    return newState
}
