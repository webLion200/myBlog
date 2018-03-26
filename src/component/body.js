import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from '../container/home'
import Blog from '../container/blog'
import Download from '../container/download'
import AboutUs from '../container/aboutUs'
import RegisterLogin from '../container/registerLogin'

class Body extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/index" component={Home}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/download" component={Download}/>
                <Route path="/aboutUs" component={AboutUs}/>
                <Route path="/registerLogin" component={RegisterLogin}/>
            </Switch>
        )
    }
}

export default Body