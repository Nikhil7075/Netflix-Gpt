import React from 'react'
import Header from './Header'
import { useState ,useRef} from 'react'
import { validate } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
const [isSignIn,setIsSignIn]=useState(true);
const [message,setMessage]=useState("");
   const email=useRef(null);
              const password=useRef(null);
              const full_name=useRef(null);
  const toggleSignInForm=()=>{
    setIsSignIn(!isSignIn);
  }

          const handleSubmit=()=>{
           
              const emailv=email.current.value;
              const passwordv=password.current.value;
        let full_namev = "";

    if (!isSignIn) {
        full_namev = full_name.current.value;
    }
              const message=validate(emailv,passwordv,full_namev,isSignIn);
              setMessage(message);
              if(message) return;
              if(!isSignIn){
                  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                      // Signed up 
                      const user = userCredential.user;
                      // ...
                      updateProfile(auth.currentUser, {
                            displayName: "full_name.current.value",
                            photoURL: "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-27/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                          }).then(() => {
                               navigate('/browse');
                          }).catch((error) => {
                            // An error occurred
                            // ...
                            setMessage(error.message);
                          });
               
                    })
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      // ..
                      setMessage(errorMessage+"-"+errorCode);
                    });
              }else{
                                signInWithEmailAndPassword(auth, email.current.value, password.current.value )
                  .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                   navigate('/browse');
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorMessage+"-"+errorCode);
                  });
              }
              //console.log(message);
          }

  return (
    <div >
        <Header/>
              <div className='absolute'  >
                          <img className='w-full '
                          src="https://assets.nflxext.com/ffe/siteui/vlv3/76c5a455-c62c-46d4-8653-3924728113e3/web/IN-en-20260504-TRIFECTA-perspective_596176fe-3b1e-48ec-8a00-a0acb34e68f1_small.jpg" alt="background" />
                </div>
          
          <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black  py-10 w-3/12 my-36 mx-auto right-0 left-0 px-8 text-white bg-opacity-90'>
                  <h1 className='text-2xl font-bold mb-4'>{isSignIn?"Sign In":"Sign Up"}</h1>
                  {!isSignIn && <input type="text" ref={full_name} placeholder="Full Name" className='w-full p-2 my-2 bg-gray-600 rounded-md'/>}
                    
                    <input type="text" placeholder="Email" ref={email}  className='w-full p-2 my-2 bg-gray-600 rounded-md'/>
                    <input type="password" placeholder="Password" ref={password} className='w-full p-2 my-2 bg-gray-600 rounded-md'/>
                  {message && <p className='text-red-500 font-bold p-2'>{message}</p>}
                        <button className='bg-red-800 w-full p-2 my-6 rounded-md' onClick={handleSubmit}>{isSignIn?"Sign In":"Sign Up"}</button>
                      <p onClick={toggleSignInForm} className='cursor-pointer'>{isSignIn?"Don't have an account? Sign Up":"Already have an account? Sign In"}</p>
          </form>
 
    </div>
  )
}

export default Login
