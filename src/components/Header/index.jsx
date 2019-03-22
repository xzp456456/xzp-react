import React, { Component } from 'react';
import './index.less'
import 'react-flexible';
import { Link } from 'react-router'
import { postAjax } from '../../fetch'
import * as api from '../../api'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsData from '../../store/actions' 
class Header extends Component {
    state = {
        lang: 'zh',
        list: [],
        index:''
    }
    changLang(type) {
        this.setState({
            lang: type
        }, () => {
            this.getNav();
            this.props.bindAction(this.state.lang);
        });

    }
    getNav() {
        postAjax(api.category, { lang: this.state.lang })
            .then(res => {
                let item = res.data.item;
               let main = item.filter(item => {
                    if(item.pid===0){
                        return item
                    }
                });
                    main.forEach((element,index) => {
                        main[index].ch = []; 
                        item.forEach(item=>{
                            if(element.cate_id===item.pid){
                                 
                                main[index].ch.push(item);
                            }
                        })
                    });
                   
                this.setState({
                    list: main
                })
               
            })
    }
    componentWillMount() {
        this.getNav();
    }
    changTab(index){
        this.setState({
            index:index
        })
    }
    render() {
        var list = this.state.list;
        let items = list.map((item, index) => {
            if (item.pid === 0) {
                return <div className="left" key={index}><a className={index==this.state.index?"active":""}  href="#" onClick={this.changTab.bind(this,index)}>{item.cate_name}</a>
                        <div key={index+1} className={index==this.state.index?"show":"li-item"}>
                            {  item.ch.map((li,i)=>{
                                    return <div key={i} className="li-mr">{li.cate_name}</div> 
                            }) }
                        </div>
                        </div>
            }
            
        });
        return (
            <div>
                <div className="pc_header">
                <div className="header">
                    <div className="row">
                        <div className="left log"><img className="logo" src={require("../../img/logos.png")} alt="" /></div>
                        <div className="right">
                            <span className={this.state.lang === 'zh' ? 'lang-active chinese' : 'chinese'} onClick={this.changLang.bind(this, 'zh')}>中文</span>|
                <span className={this.state.lang === 'en' ? 'lang-active English' : 'English'} onClick={this.changLang.bind(this, 'en')}>英文</span>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <div className="row">
                        {items}
                    </div>
                </div>
                </div>
                <div className="mobile_header">
                
                    <div className="m-header">
                    <div className="prow">
                        <img className="left" src={require("../../img/logos.png")} alt=""/>
                        <div className="right">中文</div>
                        </div>
                    </div>
                    <div className="m-nav">
                        <div className="left m-dd">首页</div>
                        <div className="left m-dd">企业文化</div>
                        <div className="left m-dd">新闻资讯 </div>
                    </div>
                
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
      userInfo:state.counter
    }
  }
  function mapDispatchToProps(dispatch){
    return{
      userAction:bindActionCreators(ActionsData,dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)