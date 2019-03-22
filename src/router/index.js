import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory,browserHistory } from 'react-router';
import App from '../App.jsx';
import Home from '../pages/Home/index.jsx'
import Synopsis from '../pages/Synopsis'
import Culture from '../pages/Culture'
import Develop from '../pages/Develop';
import Qhse from '../pages/Qhse';
import Service from '../pages/Service'
import Message from '../pages/Message'
import Information from '../pages/Information'
import Details from '../pages/Details'
import Produce from '../pages/Produce'
import NewDesc from '../pages/NewDesc'
import Patent from '../pages/Patent'
import Classics from '../pages/Classics'
import Classdesc from '../pages/Classdesc'
class RouterConfig extends Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route  path="/" component={App} >
                    <IndexRoute  component={Home} />
                    <Route path="/"  component={Home} />
                    <Route path="synopsis" component={Synopsis} />
                    <Route path="Culture" component={Culture} />
                    <Route path="Develop" component={Develop} />
                    <Route path="Qhse" component={Qhse} />
                    <Route path="Service" component={Service} />
                    <Route path="Message" component={Message} />
                    <Route path="Information" component={Information} />
                    <Route path="Details" component={Details} />
                    <Route path="Produce" component={Produce} />
                    <Route path="NewList" component={NewDesc} />
                    <Route path="Patent" component={Patent} />
                    <Route path="Classics" component={Classics} />
                    <Route path="ClassDesc" component={Classdesc} />
                </Route>    
            </Router>
        )
    }
}
export default RouterConfig;