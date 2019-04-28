import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import './index.less'
import { postAjax } from '../../fetch'
import * as api from '../../api'
class NewDesc extends Component{
    state={
        info:''
    }
    constructor(){
        super()
      document.title="资讯详情"
    }
    getContent(lang){
        postAjax(api.view,{content_id:localStorage.getItem('content_id'),})
        .then(res=>{
            console.log(res);
            this.setState({
                info:res.data.content
            })
        })
    }
    componentWillMount(){
        this.getContent('zh')
    }
    render(){
        const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
        return(
            <div>
                <Header bindNewDesc={this.getContent.bind(this)} />
                {/* <Banner children={IMG}></Banner> */}
                <div className="desc row" dangerouslySetInnerHTML={{__html:this.state.info}}>
                    
                </div>
                <div className="bom"></div>
                <Bottom />
            </div>
        )
    }
}

export default NewDesc;