import React from "react";

class Lotto extends React.Component{
    constructor(props){
        super(props);
        this.state = {count1:0, count2:0, i:0};
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        
    };

    handleClick(){
        
        this.setState({count1: (Math.floor(Math.random()*45+1))});
    };
    handleClick2(){
        this.setState({count2: (Math.floor(Math.random()*45+1))});
    };
    handleClick3(){
        for(var i = 0; i<6; i++){
            i = Math.round(Math.random()*45+1)
        }
    };
    render(){
        return(
            <>
            <p>{this.state.count1}, {this.state.count2}</p>
            <button onClick={this.handleClick}>
                1
            </button>
            <button onClick={this.handleClick2}>
                2
            </button>
            <p>{this.i}</p>
            <button onClick={this.handleClick3}>
                lotto
            </button>
            </>
            
        )
    }
}

export default Lotto;