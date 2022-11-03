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
    <div className="flex flex-col w-full justify-center m-auto md:p-10 xs:p-2 box-border">
      {state.map((product, index) => {
        return (
          <div key={index} className='flex flex-row w-100% justify-center mx-auto my-2 px-5 py-5 items-center rounded-lg shadow-lg'>
            <img className='md:h-36 xs:h-[80px] bg-no-repeat' src={product.image} alt={product.title} />
            <h3 className="md:text-xl xs:text-sm font-bold">{product.title.slice(0,10).concat("...")}</h3>
            <div className="flex flex-row justify-evenly md:w-48 sm:w-24 bg-slate-100 md:mx-2 rounded-lg">
              <button className="bg-white md:hover:bg-black text-black md:hover:text-white md:w-6 xs:w-2 md:mx-4 xs:mx-2 rounded-lg md:h-8 xs:h-4"
                onClick={() => dispatch({ type: 'INCREASE', payload: product })}>
                +
              </button>
              <p className="md:text-2xl xs:text-sm">{product.quantity}</p>
              <button className="bg-white md:hover:bg-black text-black md:hover:text-white md:w-6 xs:w-2 md:mx-4 xs:mx-2 rounded-lg md:h-8 xs:h-4"
                onClick={() => dispatch({ type: 'DECREASE', payload: product })}>
                -
              </button>
            </div>
            <button className="bg-white md:hover:bg-black text-black md:hover:text-white md:w-36 xs:w-18 rounded-lg md:h-8 xs:h-4" onClick={() => dispatch({ type: 'REMOVE', payload: product })}>Delete</button>
            <h4 className="md:text-xl xs:text-sm font-bold mx-2">&#8377;{product.quantity * Math.ceil(product.price) * 79.97.toFixed()}</h4>
          </div>
        )
      })}
      <div><h2 className="flex justify-end text-3xl"><p>Total</p> : {`₹${total}`}</h2></div>
      <Link className="text-2xl text-center underline cursor-pointer font-semibold text-indigo-900" to='/'>Continue Shopping</Link>
    </div>
  )
}
export default Cart;