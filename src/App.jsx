import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsData from './store/actions' 
class App extends Component {
  
  render() {
    return (
      <div className="App" >
        {this.props.children}
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
