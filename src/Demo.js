import React, {Component} from 'react';
import './Demo.css';
class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            items:["item1","item2"],
            txtContent:""
        };
    }
    txtChange=(e)=>{
       this.setState({txtContent:e.target.value}) 
    }
 

render(){
    return(
        <div>
            <input type="text" onChange={this.txtChange} />
            <button>Add</button>
            <ul>
                <li>Item 1<button>Delete</button></li>
                {this.state.items.map((itm,k)=>{
                    return(
                    <li>{itm}<button>Delete</button></li>
                    )
                })}
            </ul>
            <p>{this.state.txtContent}</p>
        </div>
    );
}
}


export default Demo;


