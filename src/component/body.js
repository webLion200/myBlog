import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './home'
import Blog from './blog'
import Download from './download'
import AboutUs from './aboutUs'
import RegisterLogin from './registerLogin'

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