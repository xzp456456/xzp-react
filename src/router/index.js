import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../App.jsx';
import Details from '../pages/details'
class RouterConfig extends Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route  path="/" component={App} >
                    <IndexRoute  component={Details} />
                    <Route path="details" component={Details} />
                </Route>    
            </Router>
        )
    }
}
export default RouterConfig;