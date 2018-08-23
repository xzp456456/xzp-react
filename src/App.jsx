import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsData from './store/actions' 
import HeadPage from './components/HeadPage/HeadPage.jsx';
import ListPage from './components/ListPage/ListPage.jsx';
class App extends Component {

  render() {
    return (
      <div className="App" >
        <HeadPage />
        <ListPage />
      </div>
    );
  }

}

function mapStateToProps(state){
  return{
    userInfo:state.counter
  }
}
function mapDispatchToProps(dispatch){
  return{
    userAction:bindActionCreators(ActionsData,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
