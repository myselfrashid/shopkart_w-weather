import React from 'react'
import { Product } from './Product'

function home() {
  return (
    <>
    <div className='p-0 m-0 flex justify-center lg:h-80 w-auto xs:h-40 bg-white'><img className='bg-cover bg-center shadow-sm' src="https://source.unsplash.com/1500x600/?shopping" alt="background" />
    </div>
    <Product />
    </>
  )
}

export default home