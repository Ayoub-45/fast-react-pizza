import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
function MenuItem({ pizza }) {
  const dispatch=useDispatch();
  const {  id,name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  function handleAddToCart(){
   const newItem={
    pizzaId:id,
    name,
    quantity:1,
    unitPrice,
    totalPrice:unitPrice*1,
   }
   dispatch(addItem(newItem))
  }
  return (
    <li className="flex py-2 gap-4">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut?"opacity-70 grayscale":""}`}/>
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
        {
          !soldOut &&
          <Button type="small" onClick={handleAddToCart}>Add to cart</Button>
        }
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
