import {connect} from 'react-redux';
import React from 'react';
import {Form, Input, Checkbox,Modal} from "antd";
import 'antd/dist/antd.css'
import {setLoginModalVisible, submitLoginValue} from "../actions";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import login from "../function/qiehuan";


const LoginModal = (props) => {

    let {loginMVisible, hideModal, onFinish} = props
    const [form] = Form.useForm();


    return (
        <Modal title="登陆"
               visible={loginMVisible}
               width={350}
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
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入您的密码' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>
            </Form>
        </Modal>
    );
}

const stateToProps = (state) => {
    return {
        loginMVisible: state.loginMVisible,
        inputValue: state.inputValue,
    }
}

const dispatchToProps = (dispatch) => {
    return {
        hideModal() {
            dispatch(setLoginModalVisible(false))
        },
        onFinish(value){
            dispatch(submitLoginValue(value))
            // this.props.formForm.resetFields();
            Modal.success({
                content: '登陆成功！',
            });
            dispatch(setLoginModalVisible(false))
            login(true);
        }
        //


        }
}

export default connect(stateToProps, dispatchToProps)(LoginModal);

