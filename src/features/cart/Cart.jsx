import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux/es/hooks/useSelector";
import CartItem from './CartItem';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';
function Cart() {
  const cart = useSelector(getCart);
  const username=useSelector(state=>state.user.username);
  const dispatch=useDispatch()
  if(!cart.length) return <EmptyCart/>
  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu" >&larr; Back to menu</LinkButton>
      <h2 className='mt-2 text-xl font-semibold'>Your cart, {username}</h2>
    <ul className='divide-y divide-stone-200 border-b mt-3'>
      {cart.map(item=><CartItem item={item} key={item.pizzaId}/>)}
    </ul>
      <div className='mt-6 space-x-2'>
        <Button to="/order/new" type="primary">Order pizzas</Button>
        <Button type="secondary" onClick={()=>dispatch(clearCart())}>Clear</Button>
      </div>
    </div>
  );
}

export default Cart;
