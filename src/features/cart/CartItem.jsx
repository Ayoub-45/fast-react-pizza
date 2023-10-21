import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  console.log(pizzaId)
  return (
    <li key={pizzaId} className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1  sm:mb-0 ">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p>{formatCurrency(totalPrice)}</p>
      <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
