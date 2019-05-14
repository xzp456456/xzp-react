import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import './index.less'
import { postAjax } from '../../fetch';
import * as api from '../../api'
import chinese from '../../json/chinese.json'
import english from '../../json/english.json'

class Message extends Component{
state={
        realname:'',
        phone:'',
        email:'',
        content:'',
        list:[],
        title:'',
        json:''
    }
    constructor(){
        super()
      document.title="留言板";
      
    }
    getcolumnName(){
        if(localStorage.getItem('type')=="en"){
            this.setState({
              json:english
            })
          }else{
            this.setState({
              json:chinese
            })
          }
        postAjax(api.columnName,{lang:localStorage.getItem('type')})
        .then(res=>{
            this.setState({
                title:res.data
            })
        })
    }
    getMessage(){
        if(this.state.realname==""){
            alert('姓名不能为空');
            return false;
        }
        if(this.state.phone==""){
            alert('手机号不能为空');
            return false;
        }
        if(this.state.email==""){
            alert('邮箱不能为空');
            return false;
        }
        if(this.state.content==""){
            alert('内容不能为空');
            return false;
        }
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
    changelang(id){
        if(id=='en'){
            this.setState({
                list:['name','email','phone','content']
            })
        }else{
            
            this.setState({
                list:['姓名','邮箱', '电话','留言内容']
               
            })
        }
        
    }
    componentWillMount(){
        this.getcolumnName();
        this.changelang(localStorage.getItem('type'));
    }
    render(){
        const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
        return(
            <div>
                <Header bindMessage={this.changelang.bind(this)} bindMame={this.getcolumnName.bind(this)} />
                {/* <Banner children={IMG}></Banner> */}
                <div className="s-title pc">
                    {this.state.title.message}
                </div>
                <div className="mobile">
        <div className="list-mb">
                    <div className="prow">
                        <div className="m-sl"></div><div className="mb-text">{this.state.title.message}</div>
                  </div>
                  <div className="mb-bom-d"></div>
            </div>
            </div>
                <div className="v-main" >
                <div className="v-all">
                    <div className="input">
                        <span className="pc">{this.state.list[0]}：</span>
                        <input placeholder={this.state.json.name} onChange={this.getInfo.bind(this,'realname')} type="text"/>
                    </div>
                    <div className="input">
                        <span className="pc">{this.state.list[1]}：</span>
                        <input placeholder={this.state.json.email} onChange={this.getInfo.bind(this,'email')} type="text"/>
                    </div>
                    <div className="input">
                        <span className="pc">{this.state.list[2]}：</span>
                        <input placeholder={this.state.json.mobile}     onChange={this.getInfo.bind(this,'phone')} type="text"/>
                    </div>
                </div>
                <div className="liuyanban">
                    <div className="left pc">{this.state.list[3]}：</div>
                    <div className="left pas">
                    <textarea className="v-test" cols="30" rows="10" onChange={this.getInfo.bind(this,'content')} ></textarea>
                    <span className="poster">0/500</span>
                    </div>
                </div>
                </div>
                <div className="btn" onClick={this.getMessage.bind(this)}><button >{this.state.json.submit}</button></div>
                <div className="bom"></div>
                <Bottom />
            </div>
            
        )
    }
}

export default Message;