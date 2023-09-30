import React, { useEffect, useState } from 'react';
import {
    Link, useNavigate
} from 'react-router-dom';

const Navbar= ()=>
{
   const [isuser,setUser]=useState(false);
   const navigate=useNavigate();
   useEffect(()=>{ 
    setter();
 },[]);
//   useEffect(()=>{ 
//     Navbar();
//   },[isuser]);
   const setter=async ()=>
   {
    const user=await localStorage.getItem("user");
    if(user)
    setUser(true);
    else
    setUser(false);
   }
   const logout=async()=>
   {
    console.log("clearing");
    localStorage.clear();
      setUser(false);
      navigate('/');
   }
    return(
        
            <div className="nav">

                <ul className="flex md:flex-row  flex-col items-center  md:inline-flex w-full md:items-center md:justify-end justify-center gap-6 p-x-5 space-x-5 justify-end p-5  text-2xl bg-gradient-to-r from-zinc-700 to-black text-white hover:cursor-pointer top-[100%] md:visible">
                    <li className="hover:border-b-2 border-indigo-500 md:block ${show}">
                       <Link to="/"> Home </Link>
                    </li>
                    <li className="hover:border-b-2 border-indigo-500 md:block ">
                    <Link to="/about"> About </Link>
                    </li>
                    <li className="hover:border-b-2 border-indigo-500 md:block ">
                    <Link to="/contact"> Contact </Link>
                    </li>
                    <li className="hover:border-b-2 border-indigo-500 md: block">
                    <Link to="/event"> Event </Link>
                    </li>
                    <li className="hover:border-b-2 border-indigo-500 md: block">
                    <Link to="/blog"> Blogs</Link>
                    </li>
                    {
                        isuser?(
                            <>
                            <li className="hover:border-b-2 border-indigo-500 md:block">
                            <Link to="/profile"> Profile </Link>
                             </li>
                    <li className="hover:border-b-2 border-indigo-500 md: block">
                    < Link onClick={logout} to="/signup" > Logout </Link>
                    </li>
                       </>
                        ):(
                    <li className="hover:border-b-2 border-indigo-500 md: block">
                    <Link to="/register"> Register </Link>
                    </li>
                        )
                    }
                
                </ul>
            </div>

        
    );
}
export default Navbar;