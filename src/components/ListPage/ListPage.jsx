import React,{ Component }  from 'react'
import './ListPage.css'
class ListPage extends Component{
    constructor(props){
        super(props);
        this.state={
            lists:[
                {
                    url:"https://m.360buyimg.com/mobilecms/jfs/t20860/204/215345958/6866/139dc352/5b03b902N8cc08b40.png"
                },
                {
                    url: "https://m.360buyimg.com/mobilecms/jfs/t20860/204/215345958/6866/139dc352/5b03b902N8cc08b40.png"
                },
                {
                    url: "https://m.360buyimg.com/mobilecms/jfs/t20860/204/215345958/6866/139dc352/5b03b902N8cc08b40.png"
                },
                {
                    url: "https://m.360buyimg.com/mobilecms/jfs/t20860/204/215345958/6866/139dc352/5b03b902N8cc08b40.png"
                },
                {
                    url: "https://m.360buyimg.com/mobilecms/jfs/t20860/204/215345958/6866/139dc352/5b03b902N8cc08b40.png"
                },
                {
                    url: "https://m.360buyimg.com/mobilecms/jfs/t20860/204/215345958/6866/139dc352/5b03b902N8cc08b40.png"
                },
                {
                    url: "https://m.360buyimg.com/mobilecms/jfs/t20860/204/215345958/6866/139dc352/5b03b902N8cc08b40.png"
                },
                {
                    url: "https://m.360buyimg.com/mobilecms/jfs/t20860/204/215345958/6866/139dc352/5b03b902N8cc08b40.png"
                },
                {
                    url: "https://m.360buyimg.com/mobilecms/jfs/t20860/204/215345958/6866/139dc352/5b03b902N8cc08b40.png"
                },
                {
                    url: "https://m.360buyimg.com/mobilecms/jfs/t20860/204/215345958/6866/139dc352/5b03b902N8cc08b40.png"
                }
            ]
        }
    }
    render(){
        var lists = [];
        for(var i=0;i<this.state.lists.length;i++){
            lists.push(<li key={i} ><p><img src={this.state.lists[i].url} alt="" /></p>
                <p style={{textAlign:'center'}}>产品</p>    
            </li>)
        }
        return(
            <div className="list">
                <ul>    
                    {lists}
                </ul>
            </div>
        )
    }
}
export default ListPage;