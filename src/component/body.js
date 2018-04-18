import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from '../container/home'
import Blog from './blog/blog'
import Download from '../container/download'
import AboutUs from '../container/aboutUs'
import Login from '../container/login/login'
import Register from '../container/register/register'
import BlogDetail from '../container/blog_detail'

class Body extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/index" component={Home}/>
                    <Route path="/blog" exact component={Blog}/>
                    <Route path="/blog/detail/" component={BlogDetail}/>
                    <Route path="/download" component={Download}/>
                    <Route path="/aboutUs" component={AboutUs}/>
                    <Route path="/user/login" component={Login}/>
                    <Route path="/user/register" component={Register}/>
                </Switch>
            </div>

        )
    }
}

export default Body