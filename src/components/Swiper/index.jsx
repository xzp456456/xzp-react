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
  observeSlideChildren:true
};

const items = [{
  image: require('../../img/banner.png'),
  title: '图片1',
  link: ''
}];


class Swiper extends Component {
  getBanner() {
      
    let data = { banner_id: 1 }
    postAjax(api.banner, data)
      .then(res => {

        console.log(res);
      })
  }
  componentWillMount() {
    this.getBanner()
  }
  render() {

    return (
      <div>
      <div className="banner" >
        <ReactSwiper swiperOptions={swiperOptions} items={items}
          className="swiper-example" />
      </div>
      <div className="m-banner">
              <img src={require('../../img/banner.png')} alt=""/>
       </div>
      </div>
    );
  }

}

export default Swiper;