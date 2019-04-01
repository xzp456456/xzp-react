import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import './index.less'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
import 'three';
import $ from 'jquery'
import PhotoSphereViewer from 'photo-sphere-viewer'

import { postAjax } from '../../fetch';
import * as api from '../../api'
class Produce extends Component{
    state = {
        hide:"block",
        info:[],
        video:''
    }
    constructor(){
        super()
      document.title="产品展示"
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
        postAjax(api.content,{content_type:4,lang:lang})
        .then(res=>{
            this.setState({
                info:res.data.item
            })
        })
    }
    getVideo(){
        postAjax(api.setting,{})
        .then(res=>{
           let video = res.data.list[6].value;
           this.setState({
               video:video
           })
        })
    }
    componentDidMount(){
        this.getVideo();
        this.linePlay();
        this.getContent('zh')
        for(var i=0;i<4,i++;){
            var viewer = new PhotoSphereViewer({
                container: 'viewer'+i,
                panorama: require('../../img/timg.jpg'),
                size:{
                    width:1200,
                    height:580
                },
                markers:[
                    {
                        id:'image',
                        image:require('../../img/e.png'),
                        width:35,
                        height:35,
                        longitude: 0,
                        latitude: 50,
                        anchor:'bottom center',
                        tooltip:'雕像',
                    },
                ],
            })
        }
        viewer.on('ready',function(){
            viewer.stopAutorotate()
        })
       $(document).on('click','#psv-marker-image',function(){

           
       })
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
                <Header bindProduce = {this.getContent.bind(this)} />
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
                <div id="viewer0"></div>
                <div id="viewer1"></div>
                <div id="viewer2"></div>
                <div id="viewer3"></div>
                <Bottom />
            </div>
            
        )
    }
}

export default Produce;