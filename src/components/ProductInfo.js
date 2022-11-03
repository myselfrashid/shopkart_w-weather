import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/cartContext';



export default function ProductInfo() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const globalState = useContext(CartContext);
    const dispatch = globalState.dispatch;
    

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
        // eslint-disable-next-line
    }, [])

    const Loading = () => {
        return (
            <>
                Loading......
            </>
        )
    }
    const ShowProduct = () => {
        product.quantity = 1;
        return (
            <div className='md:grid md:grid-cols-2 xs:flex xs:flex-col'>
                <div className='md:py-20 xs:pb-4 xs:pt-20'>
                    <img className='h-auto bg-no-repeat px-20 mx-auto' src={product.image} alt={product.title} />
                </div>
                <div className='w-auto h-auto xs:p-5 md:p-20  border-l-2 border-gray-400'>
                    <h1 className='text-2xl font-bold font-quicksand py-2 border-b-2 border-gray-100 border-double bg-black text-white text-center uppercase'>{(product.category)}</h1>
                    <h2 className='text-2xl font-bold font-nunito text-left py-2'>{product.title}</h2>
                    <h2 className='font-bold text-xl'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>Rating {product.rating && product.rating.rate}
                        <p className='text-xl font-bold font-quicksand md:py-2'>&#8377;{Math.ceil(product.price) * 79.97}</p>
                    </h2>
                    <h3 className='text-xl font-light font-quicksand md:py-5 xs:pb-5 xs:pt-1 text-justify'>{product.description}</h3>
                    <div className='mx-auto text-center'>
                    <button onClick={()=>dispatch({type:'ADD', payload: product})} className='rounded-lg px-6 xs:px-4 py-2 bg-black text-white hover:bg-white hover:text-black text-center font-bold font-quicksand transition-all shadow-lg w-36 hover:border hover:border-black'>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className=''>
                <div className=''>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}
