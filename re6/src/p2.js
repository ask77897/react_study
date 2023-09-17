import React from 'react';
import { useLocation } from 'react-router-dom';

function Query(){
    const location = useLocation();
    const queryParmas = new URLSearchParams(location.search);

    const name = queryParmas.get('name');
    const age = queryParmas.get('age');
    
    return(
        <>
            <h3>name: {name}</h3>
            <h3>age : {age}</h3>
        </>
    );


}

export default Query;