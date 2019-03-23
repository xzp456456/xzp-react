import React,{Component} from 'react';
import './index.less'
import Bottom from '../../components/Bottom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { postAjax } from '../../fetch'
import * as api from '../../api'
class Classics extends Component {

  state={
    content:[],
    lang:'zh'
  }
  constructor(){
      super()
    document.title="经典案例"
}
    getCulture(){
      postAjax(api.content,{cate_id:8})
      .then(res=>{
        console.log(res)
        this.setState({
          content:res.data.item
        })
      })
    }
    componentWillMount(){
      this.getCulture()
    }
  render() {
    const IMG = <img className={"bannerImg"} src ={ require("../../img/banner2.png")}   alt="" />
    let list = this.state.content;
    let item = list.map((item,index)=>{
      return (
            <div className="list-li-md" key={index}>
                    <img src={item.file_url} alt=""/>
                </div>
      )
    })
    return (
      <div className="Home" >
          <Header   />
          <Banner children={IMG}></Banner>
            <div className="item-pic-list">
                {item}
            </div>
          <div className="bom"></div>
          <Bottom />
      </div>
    );
  }

}

export default Classics;