import React, { useState } from 'react'
import { auth } from "../firebase"

function SignUp() {

    
  const [userInput, setUserInput] = useState({
    name: "", email: "", password: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(userInput.email, userInput.password)
    .then((auth) => {
      if (auth) {
        debugger
        // loginUser(auth)
      }
    })
    .catch(error => alert(error.message))
  }





  return (
    <div className="container flex mx-auto max-w-screen-md h-screen">
      <div className="mt-4 bg-blue-100 flex w-full h-screen text-center border-8 border-black rounded-xl ">
        <form className="text-xl flex flex-col p-20 px-72" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="underline text-xl">Sign up!</h1>
          <label className="m-2 text-center" id="name">Name</label>
          <input value={userInput.name} onChange={(e) => setUserInput({...userInput, name: e.target.value})} type="text" />
          <label className="m-2 text-center" id="email">Email</label>
          <input value={userInput.email} onChange={(e) => setUserInput({...userInput, email: e.target.value})} type="email" />
          <label className="m-2 text-center" id="password">Password</label>
          <input value={userInput.password} onChange={(e) => setUserInput({...userInput, password: e.target.value})} type="password" />
          <input className="m-4 text-xl rounded-lg bg-blue-800 text-white p-4" type="submit" value="Signup"></input>
        </form>

      </div>
    </div>
  )
}

export default SignUp
