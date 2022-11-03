import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';

export const Product = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let mountedComponent = true;
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products")
            if (mountedComponent) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                mountedComponent = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }
    
    const ShowProducts = () => {
        return (
            <>
                {filter.map((products) => {
                    return (
                        <div key={products.id}>
                            <div className='flex flex-col items-center shadow-lg md:h-[400px] xs:h-[400px] xs:py-10 md:w-64 xs:w-60 bg-white rounded-xl font-quicksand font-bold overflow-hidden px-4 text-center border-b-4 border-r-2 border-black-400 justify-center'>
                                <div>
                                    <img className='overflow-hidden bg-contain h-[200px] bg-no-repeat py-2 hover:scale-110 hover:ease-in-out delay-200 hover:transition-all' src={products.image} alt={products.title} />
                                </div>
                                <h3 className=''>{(products.title).slice(0,28).concat("...")}</h3>
                                <h4>&#8377;{Math.ceil(products.price * 79.97)}</h4>
                                <Link to={`/products/${products.id}`} className='rounded-xl px-6 xs:px-4 py-2 bg-white text-black hover:bg-black hover:text-white transition-all shadow-lg'>Buy Now</Link>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    const filterProd = (category) => {
        const listUpdated = data.filter((x)=> x.category === category);
        setFilter(listUpdated);
    }
    return (
        <div className='font-quicksand'>
            <p className='bg-black grid grid-cols-1 text-white md:px-1 xs:px-0 md:py-2 xs:py-0 sm:text-2xl font-nunito xs:text-xl justify-items-center'>Categories
            </p>
            <div className='grid md:grid-cols-5 xs:grid-cols-3 font-semibold sm:text-2xl xs:text-sm gap-y-3 md:py-2 xs:py-5 place-content-center'>
                <button className='text-black' onClick={()=> setFilter(data)}>All</button>
                <button className='text-black'onClick={()=> filterProd("men's clothing")}>Men's</button>
                <button className='text-black' onClick={()=> filterProd("women's clothing")}>Women's</button>
                <button className='text-black'onClick={()=> filterProd("jewelery")}>Jewellery</button>
                <button className='text-black'onClick={()=> filterProd("electronics")}>Electronics</button>
            </div>
            <div className='grid w-full'>
                <div>
                    <h1 className='text-4xl font-bold bg-black text-white uppercase font-sans text-center md:text-2xl p-2 xs:text-sm'>Trending Items</h1>
                    <hr />
                </div>
            </div>
            <div className='grid md:grid-cols-4 xs:grid-cols-1 gap-y-10 justify-items-center'>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}
