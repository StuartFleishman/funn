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
    
    <div className="h-screen flex flex-wrap">
  
-
    </div>
    
 
  
  )
}

export default SignUp
