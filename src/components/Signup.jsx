import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Signup=()=>
{
  const apiBaseUrl = process.env.REACT_APP_API_KEY || "**";
    const [details,setDetails]=useState({
        email:'',
        password:''
    });
    const navigate=useNavigate();
    const Signin=async(event)=>
    {
      event.preventDefault();
      console.log(details);
      const ans=await axios.post(`${apiBaseUrl}/signup`,details);
      console.log(ans);
      if(ans.data.state=="success")
      {
        //local setting
        localStorage.setItem('user',JSON.stringify(ans.data.id));
        localStorage.setItem('token',JSON.stringify(ans.data.auth));
               navigate('/');
               window.location.reload(false);
      }
      else if(ans.data.state=="noemail")
      {
        alert("the email doesnot exist for account");
      }
      else
      {
        alert("there is some error wrong password");
      }
    }
    const handle=(event)=>
    {
        const {name,value}=event.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]:value,
          }));
    }
   return(
    <div class="w-screen p-10 bg-gray-800 box-border ">
    {/* start of the form section */}
    <div class=" w-full p-2 h-full lg:px-5 bg-white border border-gray-200 rounded-lg  shadow sm:p-6 md:p-8 dark:bg-gray-600 dark:border-gray-700 flex flex-wrap items-center justify-center box-border">
      
        <form class="space-y-6 w-1/2" action="#">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Signin</h5>
            <div>
                <label for="email" class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white " placeholder="name@company.com" required onChange = {(event)=>{
                    handle(event)} }/>
            </div>
            
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input type="password" name="password" id="password" placeholder="password...." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(event)=>{
                 handle(event) } }   />
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:px-5" onClick={(event)=>{Signin(event)}}>Sign In</button>
           
        </form>
        
    </div>
            </div>
   )
}
export default Signup;
