import React from 'react'
import {withRouter} from 'react-router-dom'

class AuthRoute extends React.Component {
    componentDidMount() {
        const publicpath = ['/user/login','/user/register'];
        const pathname = this.props.location.pathname;
        if (publicpath.indexOf(pathname)>-1) {
            return null
        }
    }
    render() {
        return null
    }
}

export default withRouter(AuthRoute)