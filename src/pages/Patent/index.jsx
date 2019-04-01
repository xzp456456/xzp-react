import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import './index.less'
import { postAjax } from '../../fetch';
import * as api from '../../api'
class Patent extends Component{
    state = {
        hide:"block",
        info:[],
        video:''
    }
    constructor(){
        super()
      document.title="专利"
    }
    playVideo(){
        var playBtn = document.getElementById('video');
        playBtn.play();
        this.setState({
            hide:"none"
        })
    }
    endVideo(){
        var playBtn = document.getElementById('video');
        playBtn.pause();
        this.setState({
            hide:"block"
        })
    }
    linePlay(){
        var that = this;
        var playBtn = document.getElementById('video');
        playBtn.addEventListener('play',function(){  
            that.setState({
                hide:"none"
            })     
        });  
        playBtn.addEventListener('pause',function(){  
            that.setState({
                hide:"block"
            })  
        })  
    }
    getContent(lang){
        postAjax(api.content,{content_type:5,lang:lang})
        .then(res=>{
            console.log(res);
            this.setState({
                info:res.data.item
            })
        })
    }
    getVideo(){
        postAjax(api.setting,{})
        .then(res=>{
            this.setState({
                video:res.data.list[6].value
            })
        })
    }
    componentDidMount(){
        this.linePlay();
        this.getVideo()
        this.getContent('zh')
    }
    render(){
        const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
        let item = this.state.info.map((item,index)=>{
            return (
                <div className="li" key={index}>
                <div className="left ww"><img src={item.file_url} className="wds" alt=""/></div>
                <div>
                <div className="left all">
                <div className="biaoti">{item.title}</div>
                <div className="desc" dangerouslySetInnerHTML={{__html:item.content}}>
                </div>
                </div>
                
                </div>
            </div>
            )
        })
        return(
            <div>
                <Header bindPatent = {this.getContent.bind(this)} />
                <Banner children={IMG}></Banner>
                    <div className="video">
                        <video id="video" onClick={this.endVideo.bind(this)}  src={this.state.video}>
                        </video>
                        <div className="play" onClick={this.playVideo.bind(this)} style={{display:this.state.hide}}><img src={require("../../img/tw.png")} alt=""/></div>
                    </div>
                    <div className="row">
                        {item}
                    </div>
                <div className="bom"></div>
                <Bottom />
            </div>
            
        )
    }
}

export default Patent;