import React from 'react'

function Hero() {
  return (
    <div className="flex flex-row mt-20">
      <div className="w-2/5">
        <h2>Hey now</h2>
        <p></p>
      </div>

      <div className="w-3/5">
        <img src="https://images.unsplash.com/photo-1632050815340-83f334858938?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
        className="w-full"
        />
      </div>
    </div>
  )
}

export default Hero
