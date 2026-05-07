import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
const [isSignIn,setIsSignIn]=useState(true);

  const toggleSignInForm=()=>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div >
     <Header/>
     <div className='absolute'  >
      <img className='w-full '
       src="https://assets.nflxext.com/ffe/siteui/vlv3/76c5a455-c62c-46d4-8653-3924728113e3/web/IN-en-20260504-TRIFECTA-perspective_596176fe-3b1e-48ec-8a00-a0acb34e68f1_small.jpg" alt="background" />
           </div>
       
       <form className='absolute bg-black  py-10 w-3/12 my-36 mx-auto right-0 left-0 px-8 text-white bg-opacity-90'>
       <h1 className='text-2xl font-bold mb-4'>{isSignIn?"Sign In":"Sign Up"}</h1>
       {!isSignIn && <input type="text" placeholder="Full Name" className='w-full p-2 my-2 bg-gray-600 rounded-md'/>}
         
        <input type="text" placeholder="Email" className='w-full p-2 my-2 bg-gray-600 rounded-md'/>
        <input type="password" placeholder="Password" className='w-full p-2 my-2 bg-gray-600 rounded-md'/>
       
<button className='bg-red-800 w-full p-2 my-8 rounded-md'>{isSignIn?"Sign In":"Sign Up"}</button>
<p onClick={toggleSignInForm} className='cursor-pointer'>{isSignIn?"Don't have an account? Sign Up":"Already have an account? Sign In"}</p>
       </form>
 
    </div>
  )
}

export default Login
