import React, { Component } from 'react'
import asyncComponent from './AsyncComponent'
import 'react-flexible';
import { Router, Route, IndexRoute, hashHistory,browserHistory } from 'react-router';
import App from '../App.jsx';
//const App = asyncComponent(() => import('../App.jsx'))
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


// const NewDesc = asyncComponent(() => import('../pages/NewDesc'))
// const Patent = asyncComponent(() => import('../pages/Patent'))
// const Classics = asyncComponent(() => import('../pages/Classics'))
// const Classdesc = asyncComponent(() => import('../pages/Classdesc'))
// const Home = asyncComponent(() => import('../pages/Home/index.jsx'))
// const Synopsis = asyncComponent(() => import('../pages/Synopsis'))
// const Develop = asyncComponent(() => import('../pages/Develop'))
// const Culture = asyncComponent(() => import('../pages/Culture'))
// const Qhse = asyncComponent(() => import('../pages/Qhse'))
// const Service = asyncComponent(() => import('../pages/Service'))
// const Message = asyncComponent(() => import('../pages/Message'))
// const Information = asyncComponent(() => import('../pages/Information'))
// const Details = asyncComponent(() => import('../pages/Details'))
// const Produce = asyncComponent(() => import('../pages/Produce'))
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
                    <Route path="NewDesc" component={NewDesc} />
                    <Route path="Patent" component={Patent} />
                    <Route path="Classics" component={Classics} />
                    <Route path="ClassDesc" component={Classdesc} />
                </Route>    
            </Router>
        )
    }
}
export default RouterConfig;