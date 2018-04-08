import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd';


class Header extends React.Component {
    render() {
        const path = this.props.location.pathname.match(/(\/\w*)/)[0];
        console.log(path)
        return (
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={[path]}
                >
                    <Menu.Item key="/index">
                        <Link to="/index">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="/blog">
                        <Link to="/blog">博客</Link>
                    </Menu.Item>
                    <Menu.Item  key="/download">
                        <Link to="/download">资源下载</Link>
                    </Menu.Item>
                    <Menu.Item key="/aboutUs">
                        <Link to="/aboutUs">关于我们</Link>
                    </Menu.Item>
                    <Menu.Item key="/registerLogin">
                        <Link to="/registerLogin">注册/登录</Link>
                    </Menu.Item>
                </Menu>
        );
    }
}

export default withRouter(Header)
