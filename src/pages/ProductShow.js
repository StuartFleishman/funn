import React from 'react'
import ProductItems from './ProductItems'

function ProductShow() {
  
  return (
    <>
    <div className="bg-black w-full h-0.5">
 
    </div>

    <div>
 
    </div>

    <div className="">
    <div className="h-screen flex flex-row">
      <div className="flex flex-col h-screen bg-white">
      <div className="cursor-pointer border-black border-r-2 w- h-screen">
        <div className="m-2 text-xl flex justify-center underline">T-Shirts</div>
        <div className="m-2 flex hover:text-red-500 px-8">Men's</div>
        <div className="m-2 flex px-8">Women's</div>
        <div className="m-2 flex px-8">Kids</div>

        <div className="m-2 py-2 text-xl flex justify-center underline">Soap</div>
        <div className="m-2 flex px-8">Men's</div>
        <div className="m-2 flex px-8">Women's</div>
        <div className="m-2 flex px-8">Kids</div>

        <div className="m-2 py-2 text-xl flex justify-center underline">Tapestry</div>
        <div className="m-2 flex px-8">Men's</div>
        <div className="m-2 flex px-8">Women's</div>
        <div className="m-2 flex px-8">Kids</div>

        
        </div>
      </div>

      <div className="my-6">
        <h1 className="flex text-xl justify-center">Men's Collection</h1>
      <ProductItems />
      </div>
 
      </div>

  
      
    </div>
    </>
  )
}

export default ProductShow
