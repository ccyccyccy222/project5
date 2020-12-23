export const setReplyModalVisible = (replyMVisible) => ({
    type: 'REPLY_MODAL_VISIBLE',
    replyMVisible
});

export const changeReplyInput = (inputValue) => ({
    type: 'CHANGE_REPLY_INPUT',
    inputValue
});

export const addRelyItem = () => ({
    type: 'ADD_REPLY'
});

export const setLoginModalVisible = (loginMVisible) => ({
    type: 'LOGIN_MODAL_VISIBLE',
    loginMVisible
});

export const submitLoginValue = (loginValue) => ({
    type: 'SUB_LOGIN_FORM',
    loginValue
});
