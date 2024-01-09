import React, { useRef, useState } from 'react'
import { checkValidateData } from '../Utils/validate';

const Login = () => {

    const [isSignIn, setSignIn]= useState(true);
    const [errorMessage, setErrorMessage]= useState(null);
    const email= useRef(null);
    const password= useRef(null);

    const handleButtonClick= ()=>{

        const message= checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;
        }
    
    const toggleSignIn= ()=>{
        setSignIn(!isSignIn);
    }
  return (
    <div>
        <div className='absolute -top-32 -left-52'>
            <img src='https://www.lawgroup.com.au/wp-content/uploads/2019/02/Website-Design-Background-1.jpg' alt='img'/>
        </div>

        <div>
            <form onSubmit={(e)=> e.preventDefault()}   className='bg-gray-950 bg-opacity-70 rounded-lg absolute p-12 w-3/12 my-12 mx-auto text-white right-0 left-0'>

         <p className='text-3xl py-4 font-bold'> {isSignIn ? "Sign In" : "Sign Up"}</p>

          <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'
          ref= {email}></input>
          <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' 
          ref={password}></input>

          <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p> 
          
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
            {isSignIn ? "sign In" : "sign Up"}
          </button>

          <p className='py-4 cursor-pointer' onClick={toggleSignIn}> {isSignIn ? "New to Kettle?  sign up now" : "Already registered?  sign in now"}</p>


            </form>
        </div>
    </div>
  )
}

export default Login