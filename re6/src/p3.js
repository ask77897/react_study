import React, {useState, useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';


function Productlist({data}){
    const location = useLocation();
    const queryParmas = new URLSearchParams(location.search);
    const searchQuery = queryParmas.get('id')
    const [searchList, setSearchList] = useState([]);

    useEffect(() => {
        if(searchQuery){
            const filtered = data.filter((product) => product.name.includes(searchQuery));
            setSearchList(filtered);
        }else{
            setSearchList(data);
        }
    }, [data, searchQuery]);
    
    return(
        <>
            <h2>prduct list</h2>
            <ul>
                {searchList.map((product) =>(
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>name : {product.name}</Link>
                        <p>price : {product.price}</p>
                    </li>
                ))}
            </ul>
        </>
    );


}

export default Productlist;