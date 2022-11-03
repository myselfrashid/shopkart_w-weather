import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

const Cart = () => {
  const globalState = useContext(CartContext);
  const state = globalState.state;
  const dispatch = globalState.dispatch;

  const total = state.reduce((total, product) => {
    return (total + Math.ceil(product.price) * 79.97.toFixed(1) * product.quantity);
  }, 0);
  return (
    <div className="flex flex-col w-full justify-center m-auto p-10">
      {state.map((product, index) => {
        return (
          <div key={index} className='flex flex-row w-full justify-center mx-auto my-2 px-5 py-5 items-center rounded-lg shadow-lg'>
            <img className='h-36 bg-no-repeat' src={product.image} alt={product.title} />
            <h3 className="text-[1.1rem] font-bold w-full">{product.title}</h3>
            <h4 className="text-xl font-bold mx-2">&#8377;{product.quantity * Math.ceil(product.price) * 79.97.toFixed()}</h4>
            <div className="flex flex-row justify-between w-48 bg-slate-100 mx-2 rounded-lg">
              <button className="bg-white hover:bg-black text-black hover:text-white w-6 rounded-lg h-8"
                onClick={() => dispatch({ type: 'INCREASE', payload: product })}>
                +
              </button>
              <p className="text-2xl">{product.quantity}</p>
              <button className="bg-white hover:bg-black text-black hover:text-white w-6 rounded-lg"
                onClick={() => dispatch({ type: 'DECREASE', payload: product })}>
                -
              </button>
            </div>
            <button className="bg-white hover:bg-black text-black hover:text-white w-36 rounded-lg h-8" onClick={() => dispatch({ type: 'REMOVE', payload: product })}>Delete</button>
          </div>
        )
      })}
      <div><h2 className="text-right text-3xl">{`₹${total}`}</h2></div>
      <Link className="text-2xl text-center underline cursor-pointer font-semibold text-indigo-900" to='/'>Continue Shopping</Link>
    </div>
  )
}
export default Cart;