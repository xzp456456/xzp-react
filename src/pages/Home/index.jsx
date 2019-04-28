import React, { Component } from 'react';
import './index.less'
import Swiper from '../../components/Swiper'
import Bottom from '../../components/Bottom'
import Header from '../../components/Header'
import { postAjax } from '../../fetch'
import * as api from '../../api'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsData from '../../store/actions'
import { browserHistory } from 'react-router'
import chinese from '../../json/chinese.json'
import english from '../../json/english.json'
class Home extends Component {
  state = {
    list: [],
    li4: [],
    li6: [],
    lis10: [],
    title: '',
    json:''
  }
  constructor() {
    super()
    document.title = "首页"
  }
  getcolumnName() {
   
    if(localStorage.getItem('type')=="en"){
      this.setState({
        json:english
      })
    }else{
      this.setState({
        json:chinese
      })
    }
    postAjax(api.columnName, { lang: localStorage.getItem('type') })
      .then(res => {
        this.setState({
          title: res.data
        })
      })
  }
  getContent(type, lang, cate_id) {
    
    postAjax(api.content, { content_type: type, lang: lang, cate_id: cate_id })
      .then(res => {
        console.log(res);
        this.setState({
          ['li' + type]: res.data.item
        })
      })
  }
  getnum() {
    postAjax(api.getPvByIp, {})
      .then(res => {
        console.log(res)
      })
  }
  getContentId(cate_id, lang) {
    postAjax(api.content, { lang: lang, cate_id: cate_id })
      .then(res => {
        console.log(res);
        this.setState({
          ['lis' + cate_id]: res.data.item
        })
      })
  }
  getStrength(lang) {
    postAjax(api.strength, { page: 1, page_size: 4, lang: lang })
      .then(res => {
        this.setState({
          list: res.data.item
        })
      })
  }
  navgateTo(id) {
    localStorage.setItem('content_id', id);
    browserHistory.push('/NewDesc')
  }
  navgateTozd(id) {
    localStorage.setItem('content_id', id);
    browserHistory.push('/Classdesc')
  }
  componentWillMount() {
    this.getcolumnName()
    this.getStrength('zh');
    this.getContent(4, 'zh');
    this.getContent(6, 'zh');
    this.getContentId(10, 'zh');
    this.getnum();
  }
  render() {
    //实力展示
    let list = this.state.list;
    let item = list.map((item, index) => {
      return (
        <div className="list" key={index}>
          <img src={item.thumb} alt="" />
          <div className="text">{item.title}</div>
        </div>
      )
    })
    let mb_item = list.map((item, index) => {
      return (
        <div className="sl-list" key={index}>
          <img src={item.thumb} alt="" />
          <div className="m-li-test">{item.title}</div>
        </div>
      )
    })
    //产品介绍
    let li = this.state.li4;
    let lis = li.map((item, index) => {
      return (
        <div className="li" key={index}>
          <div className="left modes"><img src={item.file_url} alt="" /></div>
          <div>
            <div className="left alls">
              <div className="biaoti">{item.title}</div>
              <div className="desc" dangerouslySetInnerHTML={{ __html: item.content }}>
              </div>
            </div>

          </div>
        </div>
      )
    })
    let mb_lis = li.map((item, index) => {
      return (
        <div className="mb-list" key={index}>
          <img src={item.file_url} alt="" />
          <div className="mb-mds">
            <div className="mb-title">{item.title}</div>
            <div className="mb-desc" dangerouslySetInnerHTML={{ __html: item.content }}>
            </div>
          </div>
        </div>
      )
    })
    //经典案例
    let li6 = this.state.li6;
    let lit = li6.map((item, index) => {
      return (
        <div className="typeList" key={index} onClick={this.navgateTozd.bind(this, item.content_id)}>
          <img src={item.file_url} alt="" />
        </div>
      )
    })
    let mb_lit = li6.map((item, index) => {
      return (
        <div className="mb-lst-md" key={index} onClick={this.navgateTozd.bind(this, item.content_id)}>
          <img src={item.file_url} alt="" />
        </div>
      )
    })
    //企业动态
    let li10 = this.state.lis10;
    let lik = li10.map((item, index) => {
      return (
        <div className="trendsChild" key={index} >
          <div className="dist">
            <img src={item.file_url} alt="" />
          </div>
          <div>
            <div className="trendsTitle">{item.title}</div>
            <div className="trendsDest">
              {item.desc1}
            </div>
            <div className="time">
              <span className="left">{item.create_time}</span>
              <span className="right"><a href="javascript:void(0)" onClick={this.navgateTo.bind(this, item.content_id)}>{this.state.json.read}></a></span>
            </div>
          </div>

        </div>
      )
    })
    let mb_lik = li10.map((item, index) => {
      return (
        <div className="mb-andms" key={index} onClick={this.navgateTo.bind(this, item.content_id)}>
          <img src={item.file_url} alt="" />
          <div className="mb-li-desc">
            {item.desc1}
          </div>
          <div className="mb-time-li">
            {item.create_time}
          </div>
        </div>
      )
    })
    return (
      <div className="Home" >
        <Header bindAction={this.getStrength.bind(this)} bindcp={this.getContent.bind(this)}
          binddt={this.getContentId.bind(this)} bindname={this.getcolumnName.bind(this)}
        />
        <Swiper />
        <div className="pc">
          <div className="title">{this.state.title.strength}</div>
          <div className="item">
            {item}
          </div>
          <div className="main">
            <div className="thing">
              <span className="chanping">{this.state.title.product}</span>
              {/* <span className="jieshao">介绍</span> */}
            </div>
            <div className="sach">
              {lis}
            </div>


          </div>
          <div className="title">{this.state.title.case}</div>
          <div className="attion">
            {lit}
          </div>
          <div className="title">{this.state.title.company}</div>
          <div className="trends">
            {lik}
          </div>
          <div className="bom"></div>
          <Bottom />
        </div>

        <div className="mobile">
          <div className="list-mb">

            <div className="prow">
              <div className="m-sl"></div><div className="mb-text">{this.state.title.strength}</div>
            </div>

          </div>
          <div className="m-sl-list">
            {mb_item}
          </div>
          <div className="chanping">
            <div className="mb-item">
              <div className="ml-title">{this.state.title.product}</div>
              {mb_lis}
            </div>
          </div>
          <div className="list-mb">
            <div className="prow">
              <div className="m-sl"></div><div className="mb-text">{this.state.title.case}</div>
            </div>
            <div className="img-list-mb">
              {mb_lit}

            </div>
          </div>
          <div className="mode-li-make">
            <div className="prow">
              <div className="m-sl"></div><div className="mb-text">{this.state.title.company}</div>
            </div>
            <div className="mode-li-lid">
              {mb_lik}
            </div>
          </div>
          <Bottom />
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    userInfo: state.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    userAction: bindActionCreators(ActionsData, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
