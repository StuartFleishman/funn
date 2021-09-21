import React from 'react'
import Product from './Product'

function Hero() {
  return (
    <div className="md:flex md:flex-row mt-20">
      <div className="md:w-2/5 flex flex-col justify-center mb-5 items-center">
        <h2 className="font-serif text-5xl  mb-4 text-center md:self-start md:text-left">Hey now</h2>
        <p className="uppercase tracking-tracking wide text-center md:self-start md:text-left">let's buy stuff</p>
        <p className="my-5 md:self-start uppercase text-xl text-gray-50 bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8">Shop!</p>
      </div>

      <div className="md:w-3/5">
        <img src="https://images.unsplash.com/photo-1632050815340-83f334858938?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
        className="w-full"
        />
      </div>

     
    </div>
  )
}

export default Hero
