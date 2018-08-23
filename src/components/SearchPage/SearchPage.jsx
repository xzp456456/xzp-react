import React, { Component } from 'react';
import './SearchPage.css'
class SearchPage extends Component{
    render(){
        return(
            <div className="SearchPage">
                <input type="text"  placeholder="搜索" />
            </div>
        )
    }
}

export default SearchPage;