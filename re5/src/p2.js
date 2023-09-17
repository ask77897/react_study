import React, {useState, useEffect} from 'react';

function Timer() {
    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
        let intervalID;
        if(isRunning){
            setStartTime(performance.now() - elapsedTime*1000);

            intervalID = setInterval(() => {
                const currentTime = performance.now();
                setElapsedTime(Math.floor((currentTime - startTime)/1000))
            }, 1000);
        }
        return () =>{
            clearInterval(intervalID);
        }
    }, [isRunning]);

    const handlePlay = () => {
        if(!isRunning){
            setIsRunning(true);
            setStartTime(performance.now() - elapsedTime*1000)
        }
    }
    const handlePause = () => {
        if(isRunning){
            setIsRunning(false);
        }
    }
    const handleReset = () => {
        setIsRunning(false);
        setStartTime(0);
        setElapsedTime(0);
    }

    return(
        <>
            <h1>Timer</h1>
            <div>time : {elapsedTime}sec</div>

            <button onClick={handlePlay}>
                <img src='https://cdn-icons-png.flaticon.com/512/6398/6398883.png' width={50} height={50}/>
            </button>
            <button onClick={handlePause}>
                <img src='https://cdn-icons-png.flaticon.com/128/6398/6398887.png' width={50} height={50}/>
            </button>
            <button onClick={handleReset}>
                <img src='https://cdn-icons-png.flaticon.com/512/6398/6398895.png' width={50} height={50}/>
            </button>
        </>
    )
}

export default Timer;