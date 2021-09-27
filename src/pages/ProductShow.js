import React from 'react'

function ProductShow() {
  
  return (
    <>
    <div className="bg-black w-full h-2">

    </div>
    <div className="h-screen flex flex-col">
      <div className="border-black border-r-4  flex flex-col w-1/5 h-screen">
        <div className="m-2 text-xl flex justify-center underline">T-Shirts</div>
        <div className="m-2 flex px-8">Men's</div>
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
    </>
  )
}

export default ProductShow
