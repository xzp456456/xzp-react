import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import { postAjax } from '../../fetch'
import * as api from '../../api'
import './index.less'

class QHSE extends Component{
    state={
        content:''
      }
      constructor(){
        super()
      document.title="QHSE"
    }
        getCulture(lang){
          postAjax(api.content,{cate_id:12,})
          .then(res=>{
            this.setState({
              content:res.data.item[0]
            })
          })
        }
        componentWillMount(){
          this.getCulture(localStorage.getItem('type'))
        }
    render(){
        const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
        return(
            <div>
                <Header bindQhse = {this.getCulture.bind(this)} />
                <Banner children={IMG}></Banner>
                <div className="row" dangerouslySetInnerHTML={{__html:this.state.content.content}}>
              
              </div>
                <div className="bom"></div>
                <Bottom />
            </div>
            
        )
    }
}

export default QHSE;