import React,{Component} from 'react';
import './index.less'

class Banner extends Component{
    
    render(){
        const { children } = this.props;
        return(
            <div className="banner-swiper" >
                {children}
            </div>
        )
    }
}

export default Banner;