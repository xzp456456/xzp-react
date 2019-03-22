import React,{Component} from 'react';
import './index.less'
import Bottom from '../../components/Bottom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { postAjax } from '../../fetch'
import * as api from '../../api'
class Classics extends Component {

  state={
    content:''
  }
  constructor(){
      super()
    document.title="经典案例"
}
    getCulture(){
      postAjax(api.content,{cate_id:8,lang:'zh'})
      .then(res=>{
        this.setState({
          content:res.data.item[0]
        })
      })
    }
    componentWillMount(){
      this.getCulture()
    }
  render() {
    const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
    return (
      <div className="Home" >
          <Header />
          <Banner children={IMG}></Banner>
            <div className="item-pic-list">
                <div className="list-li-md">
                    <img src={require('../../img/hf.png')} alt=""/>
                </div>
                <div className="list-li-md">
                    <img src={require('../../img/hf.png')} alt=""/>
                </div>
                <div className="list-li-md">
                    <img src={require('../../img/hf.png')} alt=""/>
                </div>
                <div className="list-li-md">
                    <img src={require('../../img/hf.png')} alt=""/>
                </div>
                <div className="list-li-md">
                    <img src={require('../../img/hf.png')} alt=""/>
                </div>
                <div className="list-li-md">
                    <img src={require('../../img/hf.png')} alt=""/>
                </div>
                <div className="list-li-md">
                    <img src={require('../../img/hf.png')} alt=""/>
                </div>
                <div className="list-li-md">
                    <img src={require('../../img/hf.png')} alt=""/>
                </div>
            </div>
          <div className="bom"></div>
          <Bottom />
      </div>
    );
  }

}

export default Classics;