import { useParams } from "react-router-dom";

function Product({data}){
    const {id} = useParams();
    const product = data.find((product) => product.id === parseInt(id));

    return (
        <>
            <div>Product : {product.name}</div>
            <div>Price : {product.price}</div>
        </>
    );
}
export default Product;
