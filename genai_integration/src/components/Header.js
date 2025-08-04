import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from 'react-router-dom';
import {useSelector} from  "react-redux"

function Header() {
  const navigate = useNavigate(); 
  const user = useSelector((store)=>store.user)
  const handleSignOut = ()=>{
    console.log("sign out clicked")
    signOut(auth).then(() => {
      console.log("it should sign out")
       navigate("/");
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});


  }
  return (
    <div className='w-screen absolute z-20 flex justify-between '>
      <img  className='w-44 px-8 py-2 bg-gradient-to-b from-black '
            src = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
           alt="Logo"
            />
            {user && (<div className='flex '>
            <img className='w-15 p-2'
            alt='userIcon' 
           src ="https://occ-0-4346-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
           />
       <button className='w-20 bg-red-300 rounded-xl' onClick={handleSignOut}>Hi ,{user.displayName} Sign Out</button>  
       </div>)}
        
    </div>
  )
}

export default Header
