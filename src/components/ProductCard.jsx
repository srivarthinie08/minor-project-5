import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({product}){

const dispatch=useDispatch();

return(

<div className="card">

<img src={product.image}/>

<h3>{product.title}</h3>

<p>${product.price}</p>

<button
onClick={()=>
dispatch(addToCart(product))
}
>

Add To Cart

</button>

</div>

)

}

export default ProductCard;