import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd';


class Header extends React.Component {
    render() {
        const path = this.props.location.pathname.match(/(\/\w*)/)[0];
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
                    <Menu.Item  key="/addBlog">
                        <Link to="/addBlog">写文章</Link>
                    </Menu.Item>
                    <Menu.Item key="/aboutUs">
                        <Link to="/aboutUs">关于我们</Link>
                    </Menu.Item>
                    <Menu.Item key="/user">
                        <Link to="/user/login">登录</Link>
                    </Menu.Item>
                </Menu>
        );
    }
}

export default withRouter(Header)
