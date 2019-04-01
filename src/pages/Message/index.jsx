import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import './index.less'
import { postAjax } from '../../fetch';
import * as api from '../../api'
class Message extends Component{
state={
        realname:'',
        phone:'',
        email:'',
        content:''
        
    }
    constructor(){
        super()
      document.title="留言板"
    }
    getMessage(){
        postAjax(api.feedback,{realname:this.state.realname,phone:this.state.phone,email:this.state.email,content:this.state.content})
        .then(res=>{
            if(res.status){
                alert(res.msg);
            }else{
                alert(res.msg);
            }
        })
    }
    getInfo(el,event){
        console.log(event.target.value)
        this.setState({ 
             [el]: event.target.value  
        })
    }
    render(){
        const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
        return(
            <div>
                <Header />
                {/* <Banner children={IMG}></Banner> */}
                <div className="s-title pc">
                    给我留言
                </div>
                <div className="mobile">
        <div className="list-mb">
                    <div className="prow">
                        <div className="m-sl"></div><div className="mb-text">实力展示</div>
                  </div>
                  <div className="mb-bom-d"></div>
            </div>
            </div>
                <div className="v-main" >
                <div className="v-all">
                    <div className="input">
                        <span className="pc">姓名：</span>
                        <input placeholder="请填写您的姓名" onChange={this.getInfo.bind(this,'realname')} type="text"/>
                    </div>
                    <div className="input">
                        <span className="pc">邮箱：</span>
                        <input placeholder="请填写您的邮箱" onChange={this.getInfo.bind(this,'email')} type="text"/>
                    </div>
                    <div className="input">
                        <span className="pc">电话：</span>
                        <input placeholder="请填写您的电话号码"     onChange={this.getInfo.bind(this,'phone')} type="text"/>
                    </div>
                </div>
                <div className="liuyanban">
                    <div className="left pc">留言内容：</div>
                    <div className="left pas">
                    <textarea className="v-test" cols="30" rows="10" onChange={this.getInfo.bind(this,'content')} ></textarea>
                    <span className="poster">0/500</span>
                    </div>
                </div>
                </div>
                <div className="btn" onClick={this.getMessage.bind(this)}><button >提交</button></div>
                <div className="bom"></div>
                <Bottom />
            </div>
            
        )
    }
}

export default Message;