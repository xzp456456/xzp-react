import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import './index.less'
import { postAjax } from '../../fetch'
import * as api from '../../api'
class Synopsis extends Component{
    state={
        set:''
    }
    getVideo(){
        postAjax(api.setting,{})
        .then(res=>{
            
            this.setState({
                set:res.data.list[6].value
            })
        })
    }
    componentWillMount(){
        this.getVideo()
    }
    render(){
        const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
        return(
            <div>
                <Header />
                <Banner children={IMG}></Banner>
                <div className="pc">
                <div className="video">
                        <video id="video"  src={this.state.set}>
                        </video>
                        <div className="play" ><img src={require("../../img/tw.png")} alt=""/></div>
                    </div>
                    <div className="pc-wdma">
                    <div className="pc-tuwm">
                        <img className="left" src={require('../../img/66.png')} alt=""/>
                        <div className="tuwm-desc">
                            <div className="cp-tuwen">企业图文介绍</div>
                            <div className="tuwen-chan">
                            111111111111111111111111111111111111111</div>
                        </div>
                    </div>
                    </div>
                    <div>
                        <div className="zhuanli">
                        资质、专利信息
                        </div>
                        <div className="zhuanli-desc">
                        资质：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin
                         gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo 
                        commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes
                        </div>
                    </div>
                    <div>
                    <div className="zhuanli">
                            全景图
                        </div>
                        <div className="v-chanjing">
                            <img className="quanji-pc" src={require('../../img/66.png')} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="mobile">
                <div className="mb-bom"></div>
                <div className="prow">
                        <div className="m-sl"></div><div className="mb-text">宣传视频</div>
                  </div>
                  <div className="">
                  <div className="mb-video">
                        <video id="mb-video"  src={this.state.set}>
                        </video>
                        <div className="mb-play" ><img src={require("../../img/tw.png")} alt=""/></div>
                    </div>
                    <div className="mb-tuwen">
                        <div className="cleye-mb">企业图文介绍</div>
                        <div className="mb-bom"></div>
                        <div className="mb-chanjing">
                            <img className="quanji-mb" src={require('../../img/66.png')} alt=""/>
                        </div>
                        <div className="mbs-desc">
                        tra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                        </div>
                    </div>
                    <div className="mb-bom"></div>
                    <div className="prow clear">
                        <div className="m-sl"></div><div className="mb-text">资质、专利信息</div>
                  </div>
                  <div className="m-s-dis">
                  s tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes
                  </div>
                  </div>
                  <div className="mb-bom"></div>
                    <div className="prow clear">
                        <div className="m-sl"></div><div className="mb-text">全景播放</div>
                  </div>
                  <div className="mb-bom"></div>
                  <div className="quanjking">
                    <img src={require('../../img/66.png')} alt=""/>
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