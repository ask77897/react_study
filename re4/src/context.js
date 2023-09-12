import React, {createContext, useContext} from "react";

const ThemeContext = createContext('light');

function ThemeButton(){
    const theme = useContext(ThemeContext);

    return <button>{theme === 'light' ? '밝음':'어두움'}</button>
}


function Context(){
    return(
        //provider를 이용하여 현재 선택된 테마 값이 하위 컴포넌트에게 전달된다.
        <ThemeContext.Provider value="dark">
            <ThemeButton/>
        </ThemeContext.Provider>
    )
}

export default Context;