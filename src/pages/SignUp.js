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
    
    // <div className="h-screen flex flex-col justify-center items-center">
    //   <label className="font-bold select-none">Full Name</label>
    //     <input className="placeholder-indigo-300 cursor-pointer px-3 py-2 focus:bg-blue-100 mt-2 shadow border rounded-lg w-4/6" placeholder="Enter you full name" />
    //     <button className="shadow mt-2 rounded-lg border-2 px-3 py-2 bg-blue-900 text-white">Save</button>
    // </div>

    <div className="h-screen bg-gray-600 flex flex-col justify-center items-center">

      <div className="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-200 text-gray-700 px-6 py-4">Title</div>

        <div className="flex px-6 py-4 justify-between items-center">
          <div className="font-bold bg-yellow-500 text-xs uppercase px-2 py-1 rounded-full border-gray-200 ">Under Reivew</div>
          <div className="text-sm">May 14, 1988</div>
        </div>

      <div className="px-6 py-4 border-t border-gray-200">
       <div className="border rounded-lg p-4 bg-gray-200">
         Short Comment
         </div> 
      </div>

      <div className="bg-gray-200 px-6 py-4">
        <div className="uppercase text-sm text-gray-600 font-bold">Employee</div>

        <div className="flex items-center pt-3">
          <div className="uppercase font-bold text-white bg-blue-700 w-12 h-12 rounded-full flex justify-center items-center">VG</div>
          <div className="ml-4">
            <p className="font-bold">Victor Gonzalex</p>
            <p className="text-sm text-gray-700 mt-1">Instructor</p>
          </div>
        </div>
        
        
      </div>  

      </div>
   

    </div>
    
 
  
  )
}

export default SignUp
