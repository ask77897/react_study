import React from "react";

class Lotto extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};
        this.handleClick = this.handleClick.bind(this);
    };
    
    handleClick(){
        let lotArr = Array(6).fill();
        for(var i = 0; i<6; i++){
            let ranNum = Math.round(Math.random()*45+1);
            if(this.lotArr[i] === this.lotArr[i-1]){
                this.lotArr.push(ranNum);
            }else{
                i--;
            }
        }
    };
    render(){
        return(
            <>
                <p>{this.lotArr}</p>
                <button onClick={this.handleClick}>
                    lotto
                </button>
            </>
            
        )
    }
}

export default Lotto;