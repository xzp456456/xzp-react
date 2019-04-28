import React, { Component } from 'react';
import './index.less'

import { Link } from 'react-router'
import { postAjax } from '../../fetch'
import * as api from '../../api'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsData from '../../store/actions' 
class Header extends Component {
    state = {
        lang: 'zh',
        list: [],
        index:'',
        nav_or:'',
        indexor:''
    }
    constructor(){
        super()
        this.setState({
            indexor:""
        })
    }
    changLang(type) {
        localStorage.setItem('type',type)
        this.setState({
            lang: type
        }, () => {
            
            this.getNav();
            let uri= browserHistory.getCurrentLocation().pathname;
            switch(uri){
                case '/': 
                this.props.bindAction(this.state.lang);
                this.props.bindcp(4,this.state.lang);
                this.props.binddt(10,this.state.lang);
                this.props.bindname()
            break;
                case '/Classdesc':
                this.props.bindLang(this.state.lang)
                break;
                case '/Culture':
               this.props.bindCulture(this.state.lang)
               break;
               case '/Develop':
               this.props.bindDevelop(this.state.lang)
               break;
               case '/Information':
               this.props.bindInfo(this.state.lang)
               break;
               case '/NewDesc':
               this.props.bindNewDesc(this.state.lang)
               break;
               case '/Patent':
               this.props.bindPatent(this.state.lang)
               break;
               case '/Produce':
               this.props.bindProduce(this.state.lang)
               break;
               case '/Qhse':
               this.props.bindQhse(this.state.lang)
               break;
               case '/Services':
               this.props.bindService(this.state.lang)
               break;
               case '/Trends':
               this.props.bindTrends(this.state.lang)
               break;
               case '/Messages':
               this.props.bindMessage(this.state.lang)
               this.props.bindMame()
               break;
               case '/Classics':
               this.props.bindCul(this.state.lang)
               break;
               case '/Synopsis':
               this.props.bindSysno(this.state.lang)
               this.props.bindsame()
               break;
            }
            
            
        });

    }
    getNav() {
        postAjax(api.category, { lang:localStorage.getItem('type') })
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
    componentDidMount(){
        this.setState({
            indexor:''
        })
    }
    componentWillMount() {
        
        this.changLang(localStorage.getItem('type'))
        this.getNav();
        this.changTab(localStorage.getItem('index'))
    }
    changTab(index){
        localStorage.setItem('index',index)
        this.setState({
            index:localStorage.getItem('index'),
            indexor:index
        })
    }
    mBchangeTab(index){
        this.setState({
            nav_or:index
        })
    }
    hide(){
        this.setState({
            indexor:"",
            nav_or:""
        })
    }
    render() {
        var list = this.state.list
        //var list = [{pid:0,cate_name:'qqq',ch:[{cate_name:'qqqs'},{cate_name:'牛逼'}]},{pid:0,cate_name:'人',ch:[{cate_name:'牛是'},{cate_name:'qqqs'}]},{pid:0,cate_name:'qqq',ch:[{cate_name:'qqqs'},{cate_name:'qqqs'}]},{pid:0,cate_name:'qqq',ch:[{cate_name:'qqqs'},{cate_name:'qqqs'}]},{pid:0,cate_name:'bbb',ch:[{cate_name:'qqqsqqq'}]}];
        let items = list.map((item, index) => {
            if (item.pid === 0) {
                return <div className="left" key={index}><Link className={index==this.state.index?"active":""}  to={item.cate_url} onClick={this.changTab.bind(this,index)}>{item.cate_name}</Link>
                        <div key={index+1} className={index==this.state.indexor?"show":"li-item"}>
                            {  item.ch.map((li,i)=>{
                                    return <Link key={i}  className="li-mr" to={li.cate_url} onClick={this.hide.bind(this)}>{li.cate_name}</Link>
                            }) }
                        </div>
                        </div>
            }
            
        });
        let mb_items = list.map((item, index) => {
            if (item.pid === 0) {
                return <div className="mb-nav-an" onClick={this.mBchangeTab.bind(this,index)} key={index}>
                <Link className="left m-dd" to={item.cate_url}><img src={require('../../img/cd.png')} alt=""/>{item.cate_name}</Link>
                <div className="xuanfu">
                </div>
                
            </div>
            }
            
        });
        let mb_items_c = list.map((item, index) => {
            if (item.pid === 0) {
                return <div className={this.state.nav_or===index?'mb-nav-an-b':'mb-nav-an-b hide-mb'} key={index}>
                <div className="xuanfu">
                    {  item.ch.map((li,i)=>{
                        return <Link className="mb-xuanfu" key={i} to={li.cate_url} onClick={this.hide.bind(this)}>{li.cate_name}</Link>
                        })
                    }
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
                            {this.state.lang=='zh'?
                            <div className="right" onClick={this.changLang.bind(this, 'en')}><img className="qk-m" src={require('../../img/mwm.png')} alt="" />{this.state.lang=="zh"?'英文':'中文'}</div>:
                            <div className="right" onClick={this.changLang.bind(this, 'zh')}><img className="qk-m" src={require('../../img/mwm.png')} alt="" />{this.state.lang=="zh"?'英文':'中文'}</div>}
                        </div>
                    </div>
                    <div className="m-nav">
                    <div className="mw-mban-scroll">
                        {mb_items}
                    </div>
                   
                    </div>
                    <div>
                        {mb_items_c}
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