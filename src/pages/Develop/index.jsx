import React,{Component} from 'react';
import './index.less'
import Bottom from '../../components/Bottom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
class Develop extends Component {
  constructor(){
    super()
  document.title="发展历程"
}
  render() {
    const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
    return (
      <div className="Home" >
          <Header />
          <Banner children={IMG}></Banner>
              <div>
                <div className="mb-gc row">共创精彩未来</div>
                <div className="kuai-mb"><div className="xian"></div>
                <img className="sl" src={require('../../img/sl.png')} alt=""/>
                <div className="left">
                  <img className="mb-wid" src={require('../../img/66.png')} alt=""/>
                </div>
                <div className="left mb-desc-de">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ae
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ae
                </div>
                </div>
                <div className="kuai-mb"><div className="xian"></div>
                <img className="sl" src={require('../../img/sl.png')} alt=""/>
                <div className="left">
                  <img className="mb-wid" src={require('../../img/66.png')} alt=""/>
                </div>
                <div className="left mb-desc-de">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ae
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ae
                </div>
                </div>
                <div className="kuai-mb"><div className="xian"></div>
                <img className="sl" src={require('../../img/sl.png')} alt=""/>
                <div className="left">
                  <img className="mb-wid" src={require('../../img/66.png')} alt=""/>
                </div>
                <div className="left mb-desc-de">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ae
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ae
                </div>
                </div>
              </div>
            <div>
            </div>
          <div className="bom"></div>
          <Bottom />
      </div>
    );
  }

}

export default Develop;