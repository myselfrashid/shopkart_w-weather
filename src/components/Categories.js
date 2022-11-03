import React from 'react'

export default function Categories() {
  return (
    <>
      <div className='flex bg-indigo-300 justify-center overflow-hidden shadow-2xl'>
        <ul className='grid grid-cols-3 sm:grid-cols-6 font-bold sm:text-xl xs:text-sm text-center'>
              <p className='bg-indigo-500 sm:px-1 xs:px-2  py-4 border-b-2 sm:border-b-0 border-indigo-200 border-r-2 uppercase sm:text-base'>Categories:</p> 
              <button className='sm:px-5 xs:px-2 py-4 hover:bg-indigo-400 border-b-2 sm:border-b-0 border-indigo-200 border-r-2'><a className='' href='/all'>All</a></button>
              <button className='sm:px-5 xs:px-2 py-4 hover:bg-indigo-400 border-b-2 sm:border-b-0 border-indigo-200 sm:border-r-2'><a className='' href='/mens'>Men's</a></button>
              <button className='sm:px-5 xs:px-2 py-4 hover:bg-indigo-400 border-indigo-200 border-r-2'><a className='' href='/womens'>Women's</a></button>
              <button className='sm:px-5 xs:px-2 py-4 hover:bg-indigo-400 border-indigo-200 border-r-2'><a className='' href='/jewellery'>Jewellery</a></button>
              <button className='sm:px-5 xs:px-2 py-4 hover:bg-indigo-400'><a className='' href='/electronics'>Electronics</a></button>
        </ul>
      </div>
    </>
  )
}
