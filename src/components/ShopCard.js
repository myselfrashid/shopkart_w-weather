import React from 'react'

function ShopCard(props) {
  return (
    <>
      <div className='flex flex-col items-center shadow-lg md:h-96 xs:h-80 md:w-64 xs:w-60 bg-white rounded-xl font-bold overflow-hidden'>
        <div>
          <img className='md:h-60 xs:h-48 w-56 xs:w-36 overflow-hidden bg-contain bg-no-repeat py-2' src={props.Image} alt={props.Title} />
        </div>
        <h3>{props.Heading}</h3>
        <h4>&#8377;{props.Price}</h4>
        <button className='rounded-xl px-6 xs:px-4 py-2 bg-indigo-600 hover:bg-white text-white hover:text-indigo-900 hover:border-2 hover:border-indigo-800 transition-all shadow-lg'>Buy Now</button>
      </div>   
    </>
  )
}



export default ShopCard