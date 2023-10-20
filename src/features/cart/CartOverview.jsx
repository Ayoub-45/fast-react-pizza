import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity,getTotalCartPrice } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity=useSelector(getTotalCartQuantity)
  const totalCartPrice=useSelector(getTotalCartPrice)
  return (
    <div className="bg-stone-800 p-4 uppercase text-stone-200 px-4 py-4 sm:px-6 text-sm flex items-center justify-between">
      <p className=" space-x-4 sm:space-x-6 font-semibold text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
