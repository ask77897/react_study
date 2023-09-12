import React, {useState} from "react";

export function Sycle(){
    //count 현재값, setCount count업데이트 해주는 함수
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>{count} 번 클릭 했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                Clcik!
            </button>
        </div>
    )

}

