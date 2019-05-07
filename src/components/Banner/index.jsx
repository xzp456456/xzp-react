import React,{Component} from 'react';
import './index.less'
import { postAjax } from '../../fetch'
import * as api from '../../api'
import { browserHistory } from 'react-router'
class Banner extends Component{
    state = {
        image:''
    }
    getBanner(id){
        postAjax(api.banner,{position_id:id})
        .then(res=>{
            console.log(res)
            if(res.data[0]!=undefined){
                this.setState({
                    image:res.data[0].thumb
                })
            }
           
        
        })
    }
    componentWillMount(){
        let uri= browserHistory.getCurrentLocation().pathname;
        
        switch(uri){
            case '/Synopsis':
            this.getBanner(2)
            break;
            case '/Culture':
            this.getBanner(3)
            break;
            case '/Develop':
            this.getBanner(4)
            break;
            case '/Qhse':
            this.getBanner(5)
            break;
            case '/Trends':
            this.getBanner(6)
            break;
            case '/Information':
            this.getBanner(7)
            break;
            case '/Produce':
            this.getBanner(8)
            break;
            case '/Patent':
            this.getBanner(9)
            break;
        }
    }
    render(){
      
        return(
            <div className="banner-swiper" >
                <img className="banner-img-s" src={this.state.image} alt=""/>
            </div>
        )
    }
}

export default Banner;