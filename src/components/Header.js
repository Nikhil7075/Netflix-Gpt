import React from 'react'
import {auth} from '../utils/firebase';
import {signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
const Header = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const user=useSelector(store=>store.user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  return (
    <div className='px-6 py-4 w-screen bg-gradient-to-b from-black absolute z-10 flex justify-between'>
   <img className='w-32 '
   src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-27/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="logo"/>
   {user?.uid && (
   <div className='flex'>
    <img className='w-12 rounded-full mr-2 p-2 bg-red-500' src={user.photoURL} alt="profile"/>
    <button className='text-white font-bold text-lg bg-black rounded-md p-2 ' onClick={handleSignOut}>SignOut</button>
    </div>
    )}
    </div>
  )
}

export default Header
