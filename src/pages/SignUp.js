import React from 'react'

function SignUp() {
  return (
    <div className="container flex mx-auto max-w-screen-md h-screen">
      <div className="mt-4 bg-blue-100 flex w-full h-screen ">
        <h1 className="text-xl p-20 underline text-center">Sign Up!</h1>
        <form className="text-xl flex flex-col p-20">
          <label className="m-2 text-center" id="name">Name</label>
          <input type="text" for="name"></input>
          <label className="m-2 text-center" id="email">Email</label>
          <input type="email" for="email"></input>
          <label className="m-2 text-center" id="password">Password</label>
          <input type="password" for="password"></input>
        </form>

      </div>
    </div>
  )
}

export default SignUp
