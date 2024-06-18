import React from "react";
import { useEffect,useState } from "react";
import { RegForm } from "./RegForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Event =()=>
{
    const apiBaseUrl = process.env.REACT_APP_API_KEY || "**";
    const [Event_list,setEvent]=useState([]);
    const [Warning,setWarning]=useState(false);
    const [Show,setShow]=useState(false);
    const [Current,setCurrent]=useState({});
    const [isregistered,setRegister]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
        getEvent();},[]);
    useEffect(()=>{
    getEvent();},[RegForm]);
    // //useEffect(()=> {
    //     window.location.reload(false);},[Event_list]);
    const checkFunction =async(id)=>
    {

        const user=localStorage.getItem("user");
        if(user){
        const uid=user.substring(1,user.length-1);
         const response=await axios.post(`${apiBaseUrl}/Checkevent`,{evid:id,uid:uid});
         console.log(response.data.state);
         if(response.data.state)
         {
            console.log("true calling");
            setRegister(true);
            return true;
         }
         else
         {
           console.log("false call");
         setRegister(false);
          return false;
         }
        }
        else
        {
            return false;
        }
    }
   function goToBottom() {
        window.scrollTo(0,document.body.scrollHeight);
     }
    const RegisterEvent=async (item)=>
    {
       // i need to get the uid of the item ..
       // i need to get the description and
       // i need to get the user to register...
       // for each event we need to make a registered databse holding :
       console.log("registered is clicked");
       console.log("item"+item.name);
      const user= localStorage.getItem("user");
       if(!user)
       {
        navigate('/signup');
       }
       setCurrent(item);
       setShow(!Show);
       const work=async()=>{goToBottom()};
       work();
       
    }
    const getEvent = async()=>
    {
        console.log("started getEvents");
        try{
      let Fetched= await fetch( `${apiBaseUrl}/events`);
      let  Event_result=await Fetched.json(); // convert the response send to a particular json type as data travels as string accros the network
      if(Event_result.length==0)
      console.log(Event_result.result);
      setWarning(false);
     const Result=await Event_result.map(async(item,index)=>{
           let Reg;
          const data= await checkFunction(item._id);
          console.log(data);
           //console.log(Reg);
           console.log(data);
           if(data)
           return({...item,isReg:true});
           else
           return({...item,isReg:false});
           setRegister(false);
         })
         const Ef = await Promise.all(Result);
      setEvent(Ef);
       console.log(Event_list);
      }
      catch (e) {
        console.log(e);
        setWarning(true);
    }
    }
    return(
        <div className=" flex flex-col justify-center align-middle space-y-10 p-10">
            <h1>Events</h1>
            
<div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 m-2">
            <tr>
                <th scope="col" class="py-3 px-6">
                S.no
                </th>
                <th scope="col" class="py-3 px-6">
                Event Name
                </th>
                <th scope="col" class="py-3 px-6 ">
                Date
                </th>
                <th scope="col" class="py-3 px-6 ">
                Location
                </th>
                <th scope="col" class="py-3 px-6 ">
                Participants
                </th>
                <th scope="col" class="py-3 px-6 ">
                Register
                </th>
            </tr>
        </thead>
        {
          // <h1>"There  is some error"</h1>
          Warning?<h1 class="text-red">There is some error</h1>:
         Event_list.map((item,index)=>
        <tbody>
            <tr class="bg-white dark:bg-gray-800 m-2 onClixk">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white m-2">
                    {index}
                </th>
                <td class="py-4 px-6">
                    {item.name}
                </td>
                <td class="py-4 px-6">
                {item.date}
                </td>
                <td class="py-4 px-6">
                {item.location}
                </td>
                <td class="py-4 px-6">
                {item.participants}
                </td>

                <td class="py-4 px-6">
                {
                (item.isReg)?(
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "disabled onClick={async()=>{await RegisterEvent(item)}} >Registered
                </button>):(
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={async()=>{await RegisterEvent(item)}} >Register
                </button>
                )
                }
                </td>
            </tr>
           
        </tbody>
         )}
           
        <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="py-3 px-6 text-base">Total</th>
                <td class="py-3 px-6">3</td>
                <td class="py-3 px-6">21,000</td>
            </tr>
            
        </tfoot>
    </table>
   
    
</div>

{ <div>
    {Show && <RegForm data={Current} />}
</div> }

           
        </div>
    )
}
export default Event;
