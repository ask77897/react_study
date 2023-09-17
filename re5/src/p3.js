import React, {useState, useEffect} from "react";

function Page({data, itemPerPage}){
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(data.length);
    const[color, setColor] = useState('');

    useEffect(() => {
        if(data.length > 0){
            setLastPage(data.length);
        }
        setColor(randomColor());
    }, [data.length, currentPage])

    function randomColor(){
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    const handlePrevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    };
    const handleNextPAge = () =>{
        if(currentPage < lastPage){
            setCurrentPage(currentPage + 1);
        }
    }
    return (
        <>
            <div style={{backgroundColor: color, width:'200px', height:'200px', display:'flex', justifyContent: 'center', alignItems:'center'}}>
                {data[currentPage-1].text}
            </div>
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>이전</button>
                <span>{`페이지: ${currentPage}/${lastPage}`}</span>
                <button onClick={handleNextPAge} disabled={currentPage === lastPage}>다음</button>
            </div>
        </>
    )
}

export default Page;