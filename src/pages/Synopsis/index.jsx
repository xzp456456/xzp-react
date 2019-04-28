import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
import 'three';
import $ from 'jquery'
import PhotoSphereViewer from 'photo-sphere-viewer'
import './index.less'
import { postAjax } from '../../fetch'
import * as api from '../../api'
import {browserHistory} from 'react-router'
class Synopsis extends Component{
    state={
        set:'',
        info:[{},{}],
        desc:[{},{}],
        hide:"block",
        video:'',
        title:''
    }
    constructor(){
        super()
    }
    playVideo(){
        var playBtn = document.getElementById('video');
        var mplayBtn = document.getElementById('mb-video');
        playBtn.play();
        mplayBtn.play();
        this.setState({
            hide:"none"
        })
    }
    endVideo(){
        var playBtn = document.getElementById('video');
        var mplayBtn = document.getElementById('mb-video');
        playBtn.pause();
        mplayBtn.pause();
        this.setState({
            hide:"block"
        })
    }
    linePlay(){
        var that = this;
        var playBtn = document.getElementById('video');
        var mplayBtn = document.getElementById('mb-video');
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
        mplayBtn.addEventListener('play',function(){  
            that.setState({
                hide:"none"
            })     
        });  
        mplayBtn.addEventListener('pause',function(){  
            that.setState({
                hide:"block"
            })  
        })   
    }
    getVideo(){
        postAjax(api.setting,{})
        .then(res=>{
            
            this.setState({
                set:res.data.list[6].value
            })
        })
    }
    getConnent(lang){
        postAjax(api.content,{cate_id:9,})
        .then(res=>{
            
            this.setState({
                desc:res.data.item
            })
        })
    }
    componentWillMount(){
        this.getVideo()
        
    }
    getname(){
        postAjax(api.columnName,{lang:localStorage.getItem('type')})
        .then(res=>{
            this.setState({
                title:res.data
            })
        })
    }
      
  
    getAlo(id){
        var that = this;
        postAjax(api.Pano,{})
        .then(res=>{
            this.setState({
                info:res.data.data
            },()=>{
                if(id<0){
                    id=0
                }
               if(id>parseInt(res.data.data.total)-1){
                id = 0
               }
               console.log(id)
                var width = $(width).width();
                var height = $(window).height();
                var that = this;
                
                var url = that.state.info[id].file_url;
              
                var viewer = new PhotoSphereViewer({
                    container: 'viewer',
                    panorama:url,
                    autoload:false,
                    size:{
                        width:width,
                        height:height
                    },
                    navbar:false,
                    markers:[
                        {
                            id:'image',
                            image:require('../../img/e.png'),
                            width:35,
                            height:35,
                            longitude: that.state.info[id].go_coordinates.go_lon,
                            latitude: that.state.info[id].go_coordinates.go_lat,
                            anchor:'bottom center',
                            tooltip:'雕像',
                        },
                        {
                            id:'image1',
                            image:require('../../img/e.png'),
                            width:35,
                            height:35,
                            longitude: this.state.info[id].back_coordinates.back_lon,
                            latitude:this.state.info[id].back_coordinates.back_lat,
                            anchor:'bottom center',
                            tooltip:'雕像',
                        }
                    ],
                })
                localStorage.setItem('vid',id);
            })
        })
    }
   
    componentDidMount(){
        this.getname()
        this.linePlay()
        this.getConnent(localStorage.getItem('type'))
        var that = this;
        postAjax(api.Pano,{})
        .then(res=>{
            this.setState({
                info:res.data.data
            },()=>{
               
              
                var width = $(width).width();
                var height = $(window).height();
                var that = this;
                
                var url = that.state.info[0].file_url;
              
                var viewer = new PhotoSphereViewer({
                    container: 'viewer',
                    panorama:url,
                    autoload:false,
                    size:{
                        width:width,
                        height:600
                    },
                    navbar:false
                })
                var viewer1 = new PhotoSphereViewer({
                    container: 'viewer1',
                    panorama:url,
                    autoload:false,
                    size:{
                        width:width,
                        height:220
                    },
                    navbar:false
                  
                })
                viewer.on('click',function(){
                    browserHistory.push('/allView')
                })
                viewer1.on('click',function(){
                    browserHistory.push('/allView')
                })
            })
        })
        
        
                
    
    }
    render(){
        const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
        var list = this.state.desc;
        var content1 = '';
        var content2 = '';
        var title = ""
        list.forEach((item,index)=>{
            if(item.profile=='profile2'){
                content1 = item.content
            }
            if(item.profile=='profile1'){
                content2 = item.content;
                title = item.title
            }
        })
        return(
            <div>
                <Header bindSysno={this.getConnent.bind(this)} bindsame={this.getname.bind(this)} />
                <Banner children={IMG}></Banner>
                <div className="pc">
                <div className="video">
                        <video id="video" onClick={this.endVideo.bind(this)}  src={this.state.set}>
                        </video>
                        <div className="play" style={{display:this.state.hide}} onClick={this.playVideo.bind(this)}><img src={require("../../img/tw.png")} alt=""/></div>
                    </div>
                    <div className="pc-wdma">
                    <div className="pc-tuwm" dangerouslySetInnerHTML={{__html:content1}}>
                     
                    </div>
                    </div>
                    <div>
                        <div className="zhuanli">
                            {title}
                        </div>
                        <div className="zhuanli-desc" dangerouslySetInnerHTML={{__html:content2}}>
                       
                        </div>
                    </div>
                    <div>
                    <div className="zhuanli">
                    {this.state.title.panorama}
                        </div>
                        <div className="v-chanjing">
                        <div id="viewer"></div>
                        
                        </div>
                    </div>
                </div>
                <div className="mobile">
                <div className="mb-bom"></div>
                <div className="prow">
                        <div className="m-sl"></div><div className="mb-text">{this.state.title.video}</div>
                  </div>
                  <div className="">
                  <div className="mb-video">
                        <video id="mb-video" onClick={this.endVideo.bind(this)} src={this.state.set}>
                        </video>
                        <div className="mb-play" style={{display:this.state.hide}} onClick={this.playVideo.bind(this)}><img src={require("../../img/tw.png")} alt=""/></div>
                    </div>
                    <div className="mb-tuwen" dangerouslySetInnerHTML={{__html:content1}}>
                      
                    </div>
                    <div className="mb-bom"></div>
                    <div className="prow clear">
                        <div className="m-sl"></div><div className="mb-text">{title}</div>
                  </div>
                  <div className="m-s-dis" dangerouslySetInnerHTML={{__html:content2}}>
             
                  </div>
                  </div>
                  <div className="mb-bom"></div>
                    <div className="prow clear">
                        <div className="m-sl"></div><div className="mb-text">{this.state.title.panorama}</div>
                  </div>
                  <div className="mb-bom"></div>
                  <div className="quanjking">
                  <div id="viewer1"></div>
                  </div>
                </div>
                <div className="mb-bom"></div>
                <div className="mb-bom"></div>
                <Bottom />  
            </div>
        )
    }
}

export default Synopsis;