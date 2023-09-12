import React, {Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count : 0};
    }
    render(){
        return(
            <div>
                <h3>[THIS IS COUNT APP]</h3>
                <p>{this.state.count} 번 클릭 했습니다.</p>
                <button onClick={() => this.setState({count : this.state.count + 1})}>
                    Plus Clcik!
                </button>
                <button onClick={() => this.setState({count : this.state.count - 1})}>
                    Minus Clcik!
                </button>
            </div>
        )
    }
}

export default Counter;