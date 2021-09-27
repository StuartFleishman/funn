import React from 'react'

function ProductShow() {
  return (
    <div className="font-sans text-gray-900">

      <main className="pt-10 pb-12 pl-20">
        <button>
        buy some stuff 
        </button>
        <div className="flex">
          <div className="flex flex-col w-1/2">
            <div className="max-w-md">
              <div className="flex items-center text-sm pt-9">
                <span className="text-gray-900/40">T-shirt&nbsp;</span>
                <span>/ Men's Collection</span>
              </div>
              <div className="pt-10">
                <h1 className="text-4xl font-bold tracking-wide">Men's T-shirt</h1>
              </div>
              <div className="flex items-center justify-between pt-4">
                <span className="text-3xl">$19.99</span>
                <div className="flex items-center">
                  <div className="flex space-x-px">
                  
                  </div>
                  <div className="pl-2 leading-none">
                    <span className="text-gray-900/40"> </span>
                  </div>
                </div>
              </div>
              <p className="pt-8 leading-relaxed">
                Be kind to your body
                and pleasant to look at. Also, you're beautiful.
              </p>
              <div className="flex pt-8 space-x-4">
                what
                <button
                  className="w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20"
                />
                <button
                  className="w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20"
                />
                <button
                  className="w-5 h-5 rounded-full bg-[#545454] hover:ring-4 hover:ring-gray-900/20"
                />
                <button
                  className="w-5 h-5 rounded-full bg-[#CBA5A5] hover:ring-4 hover:ring-gray-900/20"
                />
              </div>
              <div className="flex space-x-6 pt-9">
                <div className="flex items-center border rounded-sm border-gray-900/30">
                  <button className="p-4" >
              
                  </button>
                  <input
                    type="text"
                    className="w-16 h-full text-center outline-none"
                  />
                  <button className="p-4" >
               
                  </button>
                </div>
                <button
                  className="py-4 text-sm font-bold text-black uppercase bg-teal-500 rounded-sm px-14 hover:bg-teal-600"
                >
                  Add to cart
                </button>
              </div>
              <div className="pt-8">
                Free 2-5 day shipping • Free returns • Funn
              </div>
              <div className="flex items-center justify-between pt-12">
                <button
                  className="flex items-center px-4 py-2 space-x-2 text-teal-500 hover:text-teal-600"
                >
              
                  <span></span>
                </button>
                <div className="flex items-center space-x-6">
           
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-end w-1/2">
            <div className="flex items-start pr-20 space-x-2">
              <span className="text-3xl font-bold leading-tight"></span>
              <span className="text-xl"></span>
            </div>
            <div className="flex pr-10 space-x-16">
              <button className="p-3"></button>
              <button className="p-3"></button>
            </div>
            <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" />
   
          </div>
        </div>
      </main>
    </div>
  
  )
}

export default ProductShow
