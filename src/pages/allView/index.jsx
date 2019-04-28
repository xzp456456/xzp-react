import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
import 'three';
import $ from 'jquery'
import PhotoSphereViewer from 'photo-sphere-viewer'
import './index.less'
import { postAjax,getAjax } from '../../fetch'
import * as api from '../../api'

class Synopsis extends Component{
    state={
        set:'',
        info:''
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
        this.getAlo(0);
        var width = $(width).width();
        var height = $(window).height();
        var that = this;
        $(document).on('click','#psv-marker-image',function(){
            $('#viewer').empty();
            var vid = parseInt(localStorage.getItem('vid'))+1;
            if(vid>that.state.info.length-1){
                vid = 0;
            }
            that.getAlo(vid);

          
        })
        $(document).on('click','#psv-marker-image1',function(){
            $('#viewer').empty();
            var vid = parseInt(localStorage.getItem('vid'))-1;
            if(vid<0){
                vid = 0;
            }
            if(vid>0){
                vid = 0;
            }
            that.getAlo(vid);

          
        })
    }
    render(){
       
        return(
            <div>
              <div id="viewer"></div>
            </div>
        )
    }
}

export default Synopsis;