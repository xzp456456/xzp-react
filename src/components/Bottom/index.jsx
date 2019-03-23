import React,{Component} from 'react';
import { Map,Marker } from 'react-amap';
import './index.less'
import { postAjax } from '../../fetch'
import * as api from '../../api'
class Bottom extends Component {
  state = {
      list:[],
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
       for(var i=0;i<4;i++){
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
      
           <div className="pd"><img src={require("../../img/sa.png")} alt=""/></div>
           <div className="line">
             {item}
           </div>
          </div>
     
      <div>
        <div className="map left">
      <Map amapkey={"5d36d977b287953b8e7037325b1085bf"} center={this.mapCenter}  >
        < Marker center></Marker>
      </Map>
      <div className="company">陕西天元石化建设工程有限公司 XXXXXXXXXXXXXXXXXXXXXXXXX</div>
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
              <img className="left inds-mb" src={require('../../img/sa.png')} alt=""/>
              <div className="mb-line">
                {mb_item}
              </div>
            </div>
            <div className="bom-mb"></div>
            <div className="mbcompany">陕西天元石化建设工程有限公司</div>
            <div className="mbcompany">XXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
      </div>
    );
  }
}

export default Bottom;