import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Form, Input, Checkbox,Modal} from "antd";
import 'antd/dist/antd.css'
import {setQuestionModalVisible, submitQuestionValue} from "../actions";
import axios from "axios";
import store from "../store";

const {TextArea} = Input;


const QuestionModal=(props)=>{

    const [form] = Form.useForm();

    let{questionMVisible,hideModal,onFinish}=props

        return (
            <Modal title="提问"
                   visible={questionMVisible}
                   width={450}
                   okText="确定"
                   cancelText="取消"
                   onOk={() => {
                       form.submit();
                   }}
                   onCancel={()=>{
                       form.resetFields();
                       hideModal();
                   }}
            >
                <Form
                    form={form}
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="question"
                        // rules={[{ required: true, message: '请输入您的问题!' }]}
                    >
                        <Input  placeholder="请输入您的问题"
                        />
                    </Form.Item>
                    <Form.Item
                        name="questionDes"
                        // rules={[{ required: true, message: '请输入您问题的描述' }]}
                    >
                        <TextArea
                            placeholder="请输入您问题的描述"
                            // onChange={changeInputValue}
                            // value={inputValue}
                            rows={4}/>
                    </Form.Item>
                </Form>
            </Modal>
        );





}

const stateToProps = (state) => {
    return {
        questionMVisible: state.questionMVisible,
        username: state.userName
    }
}

const dispatchToProps = (dispatch) => {
    return {
        hideModal() {
            dispatch(setQuestionModalVisible(false))
        },
        onFinish(value){
            dispatch(submitQuestionValue(value))
            let data={"title":value.question,"detail":value.questionDes,"username":this.store.getState().userName,"bid":"29347398"};
            console.log("Finish form data:");
            console.log(data);
            axios.post("http://localhost:8080/webapp5/info/problem-update", data)
                .then(function (response) {
                    let a = response.data;
                    console.log("Finish form:");
                    console.log(a);
                })
                .catch(function (error) {
                    console.log(error);
                })
            // this.props.formForm.resetFields();
            Modal.success({
                content: '提交成功！',
            });
            dispatch(setQuestionModalVisible(false))
        }
        //


    }
}

export default connect(stateToProps, dispatchToProps)(QuestionModal);

