const initialState = {
    replyMVisible:false
}


export default (state = initialState, action) => {

    let newState = JSON.parse(JSON.stringify(state))

    if (action.type === 'REPLY_MODAL_VISIBLE') {
        newState. replyMVisible = action.replyMVisible
        console.log("newState.replyMVisible:")
        console.log(newState.replyMVisible)
    }

    return newState
}
