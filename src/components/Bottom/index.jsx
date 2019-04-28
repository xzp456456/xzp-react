import React,{Component} from 'react';
import { Map,Marker } from 'react-amap';
import './index.less'
import { postAjax } from '../../fetch'
import * as api from '../../api'
class Bottom extends Component {
  state = {
      list:[{},{},{},{},{},{},{},{}],
      listName:[ '地址','电话','网址','邮箱']
  }
  constructor(){
    super();
    this.mapCenter = { longitude: 120, latitude: 30 };
  }
  getList(){
    postAjax(api.setting,{})
    .then(res=>{
        let data =[];
       for(var i=0;i<res.data.list.length;i++){
        data.push(res.data.list[i]);
       }
       this.setState({
        list:data
      })
    })
    
  }
  componentWillMount(){
    this.getList();
  }
  render() {
    let list = this.state.list;
      let item = list.map((item,index)=>{
        return (
          <p key={index}>{this.state.listName[index]}：{item.value}</p>
        )
      })
   
      let mb_item = list.map((item,index)=>{
        return (
          <div key={index}>{this.state.listName[index]}：{item.value}</div>
        )
      })
    return (
      <div>
      <div className="footer">
      <div className="row">
      <div className="left">
      
           <div className="pd"><img src={this.state.list[1].value} alt=""/></div>
           <div className="line">
           <p >{this.state.listName[0]}：{this.state.list[3].value}</p>
           <p >{this.state.listName[1]}：{this.state.list[4].value}</p>
           <p >{this.state.listName[2]}：{this.state.list[2].value}</p>
           <p >{this.state.listName[3]}：{this.state.list[5].value}</p>
           </div>
          </div>
     
      <div>
        <div className="map left">
      <Map amapkey={"5d36d977b287953b8e7037325b1085bf"} center={this.mapCenter}  >
        < Marker center></Marker>
      </Map>
      <div className="company">{this.state.list[0].value}</div>
      </div>
      </div>
      </div>

      </div>
          <div className="mb-footer">
            <div className="mb-map">
            <Map amapkey={"5d36d977b287953b8e7037325b1085bf"} center={this.mapCenter}  >
                < Marker center></Marker>
              </Map>
            </div>
            <div className="mkdes">
              <img className="left inds-mb" src={this.state.list[1].value} alt=""/>
              <div className="mb-line">
              <div>{this.state.listName[0]}：{this.state.list[3].value}</div>
           <div >{this.state.listName[1]}：{this.state.list[4].value}</div>
           <div >{this.state.listName[2]}：{this.state.list[2].value}</div>
          <div>{this.state.listName[3]}：{this.state.list[5].value}</div>
              </div>
            </div>
            <div className="bom-mb"></div>
            <div className="mbcompany">{this.state.list[0].value}</div>
        
          </div>
      </div>
    );
  }
}

export default Bottom;