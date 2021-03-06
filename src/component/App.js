import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Body from './body'
import AuthRoute from './authroute/authroute'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <AuthRoute></AuthRoute>
                    <Header/>
                    <Body/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App