import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function Cart(){

const items = useSelector(
(state)=>state.cart.items
);

const total = items.reduce(
(sum,item)=>sum+item.price,
0
);

return(

<>
<Navbar/>

<div>

<h1>Shopping Cart</h1>

<p>Total Items: {items.length}</p>

<h2>Total Price: ${total.toFixed(2)}</h2>

{
items.map(item=>(

<div key={item.id}>

<img src={item.image} width="100"/>

<h3>{item.title}</h3>

<p>${item.price}</p>

</div>

))
}

</div>
</>

)

}

export default Cart;