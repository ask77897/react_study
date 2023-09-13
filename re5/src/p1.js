import React, {useState, useEffect} from 'react';

// 1.장바구니
// 입력 창에 장바구니에 넣을 것을 적어서 장바구니에 추가할 수 있다.
// 완료된 항목을 체크할 수 있는 체크박스
//<label style = {textDecoration:'line-through', 'none'}></label>

// const Cartitem = ({id, text}) => {
//     return (
//         <li style={{listStyle:'none'}}>
//             <input type='checkbox' checked={items.completed} key={id} onChange={() => handleChecked(id)}/>
//             {items.text}<br></br>
//         </li>
//     )
        
// };

// const CartSet = ({data}) => {
//     return(
//         <label>
//             {data.map((item) => (
//                 <li style={{listStyle:'none'}}>
//                 <input type='checkbox' checked={items.completed} key={id} onChange={() => handleChecked(id)}/>
//                 {items.text}<br></br>
//             </li>
//             ))}
//         </label>
//     );
// };

const Cart = () => {
    const [items, setItem] = useState([]);
    const [input, inputValue] = useState('');
    
    const handleChange = (event) =>{
        inputValue(event.target.value);
    };
    const handleAdd = () => {
        const newItem = {text : input, completed: false};
        setItem([...items, newItem]);
        inputValue("");
    };

    const handleChecked = (index) => {
        const checkList = [...items];
        checkList[index].completed = !checkList[index].completed;
        setItem(checkList);
    };
    const deleteItem = () => {
        const deleteitem = items.filter((item) => !item.completed);
        setItem(deleteitem);
    }
    const resetItem = () => {
        const resetitem = [];
        setItem(resetitem)
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleChange}/>
            <button onClick={handleAdd}>add</button><br></br>
            <label>
            <ul style={{listStyle:'none'}}>
                {items.map((item, index) => (
                <li key={index}>
                    <label style={{textDecoration: item.completed ? 'line-through' : 'none'}}>
                        <input type='checkbox' checked={item.completed} onChange={() => handleChecked(index)}/>
                        {item.text}
                    </label>
                </li>
                ))}
            </ul>
            </label>
            <button onClick={deleteItem}>delete</button>
            <button onClick={resetItem}>reset</button>
        </div>
    )
}

export default Cart;