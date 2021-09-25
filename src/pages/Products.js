import React from 'react'
import Hero from './Hero'



function Products() {
  return (
<div className="container mx-auto p-5 font-serif">
  <div className="md:flex md:flex-row md:justify-between text-center bg-blue-200">
    <div className="flex flex-row justify-center">
      <div className="bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg"></div>
      <h1 className="text-3xl text-black-600 ml-2 px-96">Funn</h1>
    </div>
    <div className="mt-2">
      <a href="#" className="text-gray-600 hover:text-yellow-600 p-4">Home</a>
      <a href="#" className="text-gray-600 hover:text-purple-600 p-4">Shop</a>
      <a href="#" className="text-gray-600 hover:text-purple-600 p-4">Till</a>
      <a href="#" className="h-4 bg-blue-100 text-gray-50 hover:bg-purple-700 p-4 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
        Cart (0)
        </a>
    </div>
</div>



<Hero />

<div className="my-20">
  <div className="flex flex-row justify-between my-5">
      <h2 className="text-3xl"> Collection</h2>
      <a className="text-xl flex flex-row">
        View All
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>

      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <div className="shadow-lg rounded-lg">
          <a href="showpage" >
          <img className="rounded-tl-lg rounded-tr-lg" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" />
          </a>
          <div className="p-5">
            <h3>Men's Shirts!</h3>
          <div className="flex flex-row">
            <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
            <div className="bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
            <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
            <div className="bg-red-800 h-5 w-5 rounded-full shadow-md mr-2"></div>
            <div className="bg-green-700 h-5 w-5 rounded-full shadow-md mr-2"></div>
          </div>
          <div className="flex flex-row my-3">
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs- px-2 py-1 mr-2">XXL</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs- px-2 py-1 mr-2">XL</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs- px-2 py-1 mr-2">L</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs- px-2 py-1 mr-2">M</div>
              <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs- px-2 py-1 mr-2">S</div>
          </div>

          <div className="flex flex-col xl:flex-row justify-between">
            <a href="#" className=" justify-center my-2 text-sm bg-gradient-to-r from-red-600 to-pink-500 rounded-full text-gray-50 py-2 px-4 flex flex-row hover:from-pink-600 hover:to-pink-600">
              Add to cart
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>
            <a href="#" className="justify-center my-2 bg-purple-600 rounded-full py-2 px-4 text-gray-50 flex flex-row hover:bg-purple-700 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              View Details
            </a>
          </div>
          </div>
      </div>
  </div>

  <div className="rounded-lg shadow-lg my-20 flex flex-row">
            <div className="lg:w-3/5 w-full bg-gradient-to-r from-black to-purple-900 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-12">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-extrabold mb-4">Subscribe to the offers dude</h3>
                <p className="mb-4 leading-relaxed">Sign up!!! for new offers</p>
              </div>
              <div>
                <input type="email" placeholder="Enter your email" className="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4"/>
                <button type="submit" className="bg-red-600 py-3 rounded-lg w-full">Subscribe</button>              
                </div>
            </div>
            <div className="lg:w-2/5 w-full lg:flex lg:flex-row hidden">
              <img 
              className="h-96"
              src="https://media.istockphoto.com/photos/attractive-smiling-young-woman-picture-id1263934565?b=1&k=20&m=1263934565&s=170667a&w=0&h=SC28e7XKKPU4k2jbz2Pfsz20PH24xnH1lIBhtRQhVoY=" 
              />
            </div>

          </div>
        </div>

        <div className="border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between py-5 text-center text-sm">
          <div className="mb-4">
            <a href="#" className="mx-2.5">About</a>
            <a href="#" className="mx-2.5">Contact</a>
            <a href="#" className="mx-2.5">Hey there</a>
          </div>
          <p>&copy; Copyright Reserved 3000</p>
        </div>
</div>
  )
}

export default Products
