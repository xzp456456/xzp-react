import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import './index.less'
import { postAjax } from '../../fetch'
import * as api from '../../api'
import {browserHistory} from 'react-router'
import chinese from '../../json/chinese.json'
import english from '../../json/english.json'
class Trends extends Component{
  state = {
    list:[],
    json:''
  }
  constructor(){
    super()
  document.title="企业动态"
}
    getContent(lang){
      if(localStorage.getItem('type')=="en"){
        this.setState({
          json:english
        })
      }else{
        this.setState({
          json:chinese
        })
      }
      postAjax(api.content,{cate_id:10,lang:lang})
      .then(res=>{
        this.setState({
          list:res.data.item
        })
      })
    }
    navgateTo(id){
      localStorage.setItem('content_id',id);
      browserHistory.push('/NewDesc');
    }
    componentWillMount(){
      this.getContent(localStorage.getItem('type'));
    }
    render(){
        const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
        let content = this.state.list.map((item,index)=>{
          return (
            <div className="trendsChild tchan" key={index} onClick={this.navgateTo.bind(this,item.content_id)}>
                <div className="dist">
                  <img src={item.file_url} alt=""/>
                </div>
                <div className="mif">
                  <div className="trendsTitle mmqu">{item.title}</div>
                  <div className="trendsDest ocen">
                  {item.desc1}
                    </div>
                    <div className="time moel">
                      <span className="left mb-time">{item.create_time.substr(0,10)}</span>
                      <span className="right pc"><a href="javascript:void(0)" onClick={this.navgateTo.bind(this,item.content_id)}>{this.state.json.read}></a></span>
                    </div>
                </div>
                
              </div>
          )
        })
        return(
            <div>
                <Header bindTrends={this.getContent.bind(this)} />
                <Banner children={IMG}></Banner>
                <div className="bom"></div>
                <div className="trends">
                {content}

             
              
             </div>
                <div className="bom"></div>
                <Bottom />
            </div>
            
        )
    }
}

export default Trends;