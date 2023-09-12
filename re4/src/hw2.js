import React, {useState} from "react";

const Arrayitem = ({id, text}) => {
    return <li key={id}>{text}</li>
};

const ArraySet = ({data}) => {
    return(
        <ul>
            {data.map((item) => (
                <Arrayitem key={item.id} id={item.id} text={item.text}/>
            ))}
        </ul>
    );
};


const Array = () =>{
    const [items, setItem] = useState([
        {id:1, text:'hello'},
        {id:2, text:'byebye'},
    ]);
    const [input, inputValue] = useState('');
    const handleChange = (event) =>{
        inputValue(event.target.value);
    };
    const handleAdd = () => {
        const newItem = {id : items.length+1 , text : input};
        setItem([...items, newItem]);
        inputValue("");
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleChange}/>
            <button onClick={handleAdd}>add</button>
            <ArraySet data={items}/>
        </div>
    )
}

export default Array;