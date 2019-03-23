import React,{Component} from 'react';
import './index.less'
import Bottom from '../../components/Bottom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { postAjax } from '../../fetch'
import * as api from '../../api'
class Develop extends Component {
  constructor(){
    super()
  document.title="发展历程"
}
state={
  list:[]
}
  getContent(lang){
    postAjax(api.content,{cate_id:7,lang:lang})
    .then(res=>{
      this.setState({
          list:res.data.item
      })
    })
  }
  componentWillMount(){
      this.getContent('zh')
  }
  render() {
    
    const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
    let item = this.state.list.map((item,index)=>{
      return (
        <div className="kuai-mb" key={index}><div className="xian"></div>
          <div className="msds-time">
                <img className="sl" src={require('../../img/sl.png')} alt=""/>
                <div className="time-text-md">{item.create_time}</div>
                </div>
                <div className="left">
                  <img className="mb-wid" src={item.file_url} alt=""/>
                </div>
                <div className="left mb-desc-de">
                  {item.desc1}
                </div>
                </div>
      )
    })
    return (
      <div className="Home" >
          <Header bindDevelop={this.getContent.bind(this)} />
          <Banner children={IMG}></Banner>
              <div>
                <div className="mb-gc row">共创精彩未来</div>
                {item}
                
                {/* <div className="kuai-mb"><div className="xian"></div>
                <img className="sl" src={require('../../img/sl.png')} alt=""/>
                <div className="left">
                  <img className="mb-wid" src={require('../../img/66.png')} alt=""/>
                </div>
                <div className="left mb-desc-de">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ae
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ae
                </div>
                </div> */}
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