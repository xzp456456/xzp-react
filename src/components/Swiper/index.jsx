import React, { Component } from 'react';
import ReactSwiper from 'reactjs-swiper';
import './index.less'
import { postAjax } from '../../fetch'
import * as api from '../../api'
const swiperOptions = {
  preloadImages: true,
  autoplay: 4000,
  autoplayDisableOnInteraction: false,
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
  showPagination:true
};

//var items = [{}];


class Swiper extends Component {
  state = {
    items:[]
  }
  getBanner() {
      
    let data = { position_id: 1 }
    postAjax(api.banner, data)
      .then(res => {
        console.log(res);
        let info = res.data;
        var items = [];
         info.forEach((item,index)=>{
           
          items.push({image:item.thumb})

        })
        this.setState({
          items:items
        })
      })
  }
  componentWillMount() {
    this.getBanner()
  }
  render() {

    return (
      <div>
      <div className="banner" >
        <ReactSwiper swiperOptions={swiperOptions} items={this.state.items}
         showPagination={true} className="swiper-example" />
          <div className="swiper-pagination"></div>
      </div>
      {/* <div className="m-banner">
      <ReactSwiper swiperOptions={swiperOptions} items={this.state.items}
          className="swiper-example" />
       </div> */}
      </div>
    );
  }

}

export default Swiper;