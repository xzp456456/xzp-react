import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import './index.less'
import { postAjax } from '../../fetch'
import * as api from '../../api'
import {browserHistory} from 'react-router'
class Information extends Component{
  state = {
    list:[]
  }
  constructor(){
    super()
  document.title="资讯"
}
    getContent(lang){
      postAjax(api.content,{cate_id:11,lang:lang})
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
            <div className="trendsChild" key={index} onClick={this.navgateTo.bind(this,item.content_id)}>
                <div className="dist">
                  <img src={item.file_url} alt=""/>
                </div>
                <div className="mif">
                  <div className="trendsTitle mwett">{item.title}</div>
                  <div className="trendsDest injke">
                  {item.desc1}
                    </div>
                    <div className="time pdm">
                      <span className="left mb-time">{item.create_time}</span>
                      <span className="right pc"><a href="javascript:void(0)">阅读更多></a></span>
                    </div>
                </div>
                
              </div>
          )
        })
        return(
            <div>
                <Header bindInfo={this.getContent.bind(this)} />
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

export default Information;