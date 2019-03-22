import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import './index.less'

class Synopsis extends Component{
    render(){
        const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
        return(
            <div>
                <Header />
                <Banner children={IMG}></Banner>
                <div className="pc">
                <div className="s-title">
                    企业宣传视频
                </div>
                </div>
                <div className="mobile">
                <div className="mb-bom"></div>
                <div className="prow">
                        <div className="m-sl"></div><div className="mb-text">宣传视频</div>
                  </div>
                  <div className="">
                  <div className="mb-video">
                        <video id="mb-video"  src="http://ips.ifeng.com/video19.ifeng.com/video09/2019/02/13/p10044616-102-009-151925.mp4?vid=bf723287-50fe-4733-b60d-c6025ad8cf11&uid=1YMvjn&from=v_Free&pver=vHTML5Player_v2.0.0&sver=&se=农权律师&cat=55-56&ptype=55&platform=pc&sourceType=h5&dt=1550042333000&gid=kUwt0WlHwf0y&sign=bfdaba846a3a750a57795d01723dbce4&tm=1551687089461">
                        </video>
                        <div className="mb-play" ><img src={require("../../img/tw.png")} alt=""/></div>
                    </div>
                  </div>
                </div>
                <Bottom />  
            </div>
        )
    }
}

export default Synopsis;