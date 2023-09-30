import axios from "axios";
import { useState } from "react";
//require('dotenv').config();
export const RegForm =(props) =>
{
    const apiBaseUrl = process.env.REACT_APP_API_KEY || "https://ngo-backend-zv1a.onrender.com";
    const[status,setStatus]=useState("Confirm");
    const RegisterEventConfirm =async()=>
    {
        const evid=props.data._id;
        const user=localStorage.getItem("user");
       const uid=user.substring(1,user.length-1);
        console.log(evid);
        console.log(uid);
        const response=await axios.post(`${apiBaseUrl}/EventStore`,{evid:evid,event_name:props.data.name,event_date:props.data.date,uid:uid});
        console.log(response.data.state);
        setStatus("Confirmed");
        window.location.reload(false);
    }
    return(
        <div>
            
<div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{props.data.name}</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{props.data.details}</p>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
       <h2 class="text-white text-lg border-2 border-sky-500 p-4 rounded-md bg-black">Location : {props.data.location}</h2>
       <h2 class="text-white text-lg border-2 border-sky-500 p-4 rounded-md bg-black"> Date: {props.data.date}</h2>
    </div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 rounded" onClick={async()=>{await RegisterEventConfirm()}} >{status}
                </button>

</div>




        </div>
    )
};