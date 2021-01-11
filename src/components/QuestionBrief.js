import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import store from "../store";
import axios from "axios";

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

class QuestionBrief extends Component{

    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    render() {
        console.log("In QuestionBrief");
        return(
            <List
                className="comment-list"
                header={`${this.state.quesData.length} questions`}
                itemLayout="horizontal"
                dataSource={this.state.quesData}
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

    componentDidMount(){
        console.log("In componentDidMount QuestionBrief");
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get("http://localhost:8080/webapp5/info/problem-list?bid=29347398")
            .then(function (response) {
                let a=response.data;
                console.log("questionBrief:");
                console.log(a);
                _this.setState({
                        quesData:a
                    }
                    // isLoaded:true
                );
            })
            .catch(function (error) {
                console.log(error);
                // _this.setState({
                //     isLoaded:false,
                //     error:error
                // })
            })
    }
}

// const stateToProps = (state) => {
//     return {
//         quesData: state.quesData
//     }
// }


export default QuestionBrief;
