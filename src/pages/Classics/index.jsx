import React,{Component} from 'react';
import './index.less'
import Bottom from '../../components/Bottom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import {browserHistory} from 'react-router'
import { postAjax } from '../../fetch'
import * as api from '../../api'
class Classics extends Component {

  state={
    content:[],
    lang:'zh'
  }
  constructor(){
      super()
    document.title="经典案例"
}
    getCulture(){
      postAjax(api.content,{content_type:6,lang:localStorage.getItem('type')})
      .then(res=>{
        console.log(res)
        this.setState({
          content:res.data.item
        })
      })
    }
    navgateTo(id){
      localStorage.setItem('content_id',id);
      browserHistory.push('/Classdesc');
    }
    componentWillMount(){
      this.getCulture()
    }
  render() {
    const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
    let list = this.state.content;
    let item = list.map((item,index)=>{
      return (
            <div className="list-li-md diskplay" key={index} onClick={this.navgateTo.bind(this,item.content_id)}>
                    <img src={item.file_url} alt=""/>
                    <div className="title-name">{item.title}</div>
                </div>
      )
    })
    return (
      <div className="Home" >
          <Header  bindCul={this.getCulture.bind(this)} />
          {/* <Banner children={IMG}></Banner> */}
            <div className="item-pic-list">
                {item}
            </div>
          <div className="bom"></div>
          <Bottom />
      </div>
    );
  }

}

export default Classics;