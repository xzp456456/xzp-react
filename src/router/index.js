import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../App.jsx';

class RouterConfig extends Component{
    render(){
        return(
            <Router history={hashHistory}>
                <IndexRoute path="/" component={App} />
                <Route path="/" component={App}  />
            </Router>
        )
    }
}
export default RouterConfig;