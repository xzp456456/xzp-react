import React,{Component} from 'react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import './index.less'

class Details extends Component{
    render(){
        const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
        return(
            <div>
                <Header />
                <Banner children={IMG}></Banner>
                <div className="s-title">
                    企业宣传视频
                </div>
                <div className="bom"></div>
                <Bottom />
            </div>
        )
    }
}

export default Details;