import React from 'react'

function Product() {
  return (
    <div className="my-20">
    <div className="flex flex-row justify-between">
      <h2 className="text-3xl">Men's Collection</h2>
      <a className="text-xl flex flex-row">
        View All
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
    </div>
  )
}

export default Product
