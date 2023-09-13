import React, { useState } from "react";

const Lotto = () => {
    const [mode, setMode] = useState('auto');
    const [nums, setNums] = useState([]);
    const [isDuplicate, setIsDuplicate] = useState(false);

    const handleChange = (event, index) => {
        const newNums = [...nums];
        const inputValue = Number(event.target.value);

        if(inputValue >= 1 && inputValue <= 45){
            newNums[index] = inputValue;
            setNums(newNums);
        }else{
            alert('숫자는 1부터 45까지 입니다.')
        }
    }

    const handleModeChange = (event) => {
        setMode(event.target.value);
        setNums([]);
        setIsDuplicate(false);
    };
    

    const handleSubmitLotto = () => {
        //중복, 빈값 검사 set : 같은 값을 저장할 수 없다.
        if(nums.length === new Set(nums).size){
            setIsDuplicate(false);

            const sortedNums = nums.sort((a,b) => a-b);

            if(sortedNums.some(nums => !nums)){//어떤 값이 0 또는 false인지 확인
                alert('숫자를 모두 입력해주세요.');
            }else{
                alert('수동으로 선택한 번호:' + sortedNums.join(", "));
            }

        }else{
            setIsDuplicate(true);
            alert('중복된 숫자가 있습니다. 다시 입력해주세요.');
        }
    };

    const createRandomNumber = () => {
        const randomNums = [];
        while(randomNums.length < 6){
            const number = Math.floor(Math.random()*45)+1;
            if(!randomNums.includes(number)){
                randomNums.push(number); //데이터가 해당 부분에서만 사용된다.
            }
        }
        const sortedNumbers = randomNums.sort((a,b) => a-b);
        setNums(sortedNumbers);
    }
    
    return (
        <>
        <div>
            <label><input type="radio" value='auto' checked={mode === "auto"} onChange={handleModeChange}/>자동</label>
            <label><input type="radio" value='manual' checked={mode === "manual"} onChange={handleModeChange}/>수동</label>
        </div>
        <div>
            {mode === 'manual' && (
            <>
                <p>숫자를 입력하세요</p>
                {[0,1,2,3,4,5].map((index) =>(
                    <input key={index} type="number" min='1' max='45' value={nums[index]||""}
                    onChange={(event) => handleChange(event, index)}/>
                ))}
                <button onClick={handleSubmitLotto}>제출</button>

                {isDuplicate && (
                    <p>중복된 숫자가 있습니다. 다시 입력해주세요.</p>
                )}
            </>
            )}
                {mode === 'auto' && (
                    <>
                    <button onClick={createRandomNumber}>랜덤 생성</button>
                    {nums.length > 0 && (
                    <>
                        <p>생성된 숫자:</p>
                        {nums.map((number) => (
                            <span key={number}>{number} </span>
                        ))}
                    </>
                )}
            </>
            )}
        </div>
        </>
    )
}





// class Lotto extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {count:0};
//         this.handleClick = this.handleClick.bind(this);
//     };
    
//     handleClick(){
//         let lotArr = Array(6).fill();
//         for(var i = 0; i<6; i++){
//             let ranNum = Math.round(Math.random()*45+1);
//             if(this.lotArr[i] === this.lotArr[i-1]){
//                 this.lotArr.push(ranNum);
//             }else{
//                 i--;
//             }
//         }
//     };
//     render(){
//         return(
//             <>
//                 <p>{this.lotArr}</p>
//                 <button onClick={this.handleClick}>
//                     lotto
//                 </button>
//             </>
            
//         )
//     }
// }

export default Lotto;