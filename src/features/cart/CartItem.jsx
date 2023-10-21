import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import { getCurrentCartQuantityById } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";
import {useSelector} from "react-redux"
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity=useSelector(getCurrentCartQuantityById(pizzaId))
  return (
    <li key={pizzaId} className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1  sm:mb-0 ">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p>{formatCurrency(totalPrice)}</p>
      <UpdateItemQuantity pizzaId={pizzaId } currentQuantity={currentQuantity}/>
      <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
