import React, { Component } from 'react';
import ReactSwipe from 'react-swipe'
import './HeadPage.css'
import  SearchPage from '../SearchPage/SearchPage.jsx';
class HeadPage extends Component {
    constructor(props){
        super(props);
        this.state={
            itemImg:[
                {
                    url:"https://img1.360buyimg.com/da/s750x366_jfs/t24379/52/1903452892/199422/e046bfb0/5b6d029fN5b3ba3ed.jpg!cr_1125x549_0_72.dpg"
                },
                {
                    url: "https://img1.360buyimg.com/da/s750x366_jfs/t24175/323/2047983240/84402/caa0186f/5b72a23bNe507f02f.jpg!cr_1125x549_0_72.dpg"
                },
                {
                    url: "https://m.360buyimg.com/mobilecms/s750x366_jfs/t23371/284/171026514/210466/d9c726b6/5b27a225N6d03bea2.jpg!cr_1125x549_0_72!q70.jpg.dpg"
                }
            ]
        }
    }
    render() {
        var items=[];
        for(var i=0;i<this.state.itemImg.length;i++){
            items.push(<div className="item"><img key="0" src={this.state.itemImg[i].url} alt="" /></div>)
        }
        return (
            <div className="HeadPage" >
                <SearchPage />
                <ReactSwipe className="carousel" swipeOptions={{ continuous: false }}>
                    {items}
                </ReactSwipe>
            </div>
        );
    }

}
export default HeadPage;