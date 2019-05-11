import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import './index.less'
import { postAjax } from '../../fetch'
import * as api from '../../api'
class Service extends Component{
    state={
        content:[]
      }
      constructor(){
        super()
      document.title="服务介绍"
    }
        getCulture(lang){
          postAjax(api.content,{cate_id:13,lang:localStorage.getItem('type')})
          .then(res=>{
              console.log(res);
            this.setState({
              content:res.data.item
            })
          })
        }
        componentWillMount(){
          this.getCulture(localStorage.getItem('type'))
        }
    render(){
        const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
        let list = this.state.content;
        let item = list.map((item,index)=>{
            return(
                <div className="li" key={index}>
                <div className="left"><img src={item.file_url} alt=""/></div>
                <div>
                  <div className="left all alse">
                  <div className="biaoti">{item.title}</div>
                  <div className="desc">
                    {item.desc1}
                  </div>
                  </div>
                  
                </div>
            </div>
            )
        })
        return(
            <div>
                <Header bindService = {this.getCulture.bind(this)} />
                
                {/* <Banner children={IMG}></Banner> */}
                <div className="mb-bdo"></div>
                <div className="sach">
                
                        {item}
                </div>
                <div className="bom"></div>
                <Bottom />
            </div>
            
        )
    }
}

export default Service;