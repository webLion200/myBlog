import React from 'react'
import {connect} from 'react-redux'
import {Form, Input, Button} from 'antd';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {register} from '../../redux/user_redux'
const FormItem = Form.Item;

class RegisterForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let {userName, password, email, phone} = values;
                this.props.register({userName, password, email, phone});
            }
        })
    };
    checkUserName = (rule, userName, callback) => {
        axios.post('/user/check_username',{userName})
            .then(res => {
                const data = res.data;
                if(data.code == '1') {
                    callback(data.msg);
                } else {
                    callback();
                }
            });
    };
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码不一致!');
        } else {
            callback();
        }
    };
    checkPhone = (rule, value, callback) => {
        const rgb = /^1[3|4|5|7|8]\d{9}$/;
        if (value && !rgb.test(value)) {
            callback('请输入正确的手机号')
        } else {
            callback();
        }
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        return (
            <div>
                {this.props.userName? <Redirect to="/blog" />:null}
                <Form layout="horizontal" onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="用户名"
                    >
                        {getFieldDecorator('userName', {
                            rules: [{
                                required: true, message: '请输入用户名'
                            },{
                                validator: this.checkUserName,
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="密码"
                    >
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码'}],
                        })(
                            <Input type="password"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="确认密码"
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: '请确认密码',
                            }, {
                                validator: this.compareToFirstPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur}/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="E-mail"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '邮箱格式不正确!',
                            }, {
                                required: true, message: '请输入你的E-mail!',
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="手机号"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{
                                required: true, message: '请输入你的手机号!'
                            }, {
                                validator: this.checkPhone
                            }],
                        })(
                            <Input style={{width: '100%'}}/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button">
                            注 册
                        </Button>
                    </FormItem>
                </Form>
            </div>

        )
    }
}

const Register = Form.create()(RegisterForm);
const mapStateToProps = state => {
    return {
        userName: state.userReducer.user
    }
};
export default connect(mapStateToProps, {register})(Register);