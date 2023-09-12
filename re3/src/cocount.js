import React, {useState} from 'react';

export function Coounter(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>{count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count +1)}>
                Plus Click!
            </button>
            <button onClick={() => setCount(count -1)}>
                Minus Click!
            </button>
        </div>
    )
}