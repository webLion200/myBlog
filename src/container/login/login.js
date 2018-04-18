import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {login} from '../../redux/user_redux'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleLogin() {
        this.props.login({
            userName: this.state.userName,
            password: this.state.password
        })
    }

    handleRegister() {
        this.props.history.push('/user/register')
    }

    handleChange(event)　{
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        const user = this.props.user;
        const code = user.code;
        const msg = user.msg;
        const FormItem = Form.Item;
        return (
            <div>
                {code === 0 ? <Redirect to="/blog" />:null}
                <Form>
                    <FormItem>
                        <Input name="userName" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="用户名" onChange={this.handleChange}/>
                    </FormItem>
                    <FormItem>
                        <Input name="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" onChange={this.handleChange}/>
                    </FormItem>
                    {code === 1 ? <h3 className="red">{msg}</h3>:null}
                    <FormItem>
                        <Checkbox>记住用户名</Checkbox>
                        <a className="login-form-forgot" href="">忘记密码</a>
                        <Button type="primary" onClick={this.handleLogin} className="login-form-button">
                            登 录
                        </Button>
                        Or <a href="javascript:void(0)" onClick={this.handleRegister}>注 册</a>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer
    }
};

export default connect(mapStateToProps, {login})(Login)