import React from "react";
import myStyle from './button.module.css';


const Button = () => {
    return(
        <button className={myStyle.button}>
            클릭
        </button>
    )
}

export default Button;