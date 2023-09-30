import { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
//import {Alert} from react-alert;
import {app,storage} from '../firebase'; //firebase instance for the purpose of storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // functions for storage
export const Register =() =>
{
    const [data,setdata]=useState(""); // for image url setting
    const [user,setUser]=useState(false);
    useEffect(()=>
    {
      const user=localStorage.getItem("user");
    if(user)
    setUser(true);
    else
    setUser(false);
    },[]);
    const storageRef=ref(storage,`images/${data.name}`); //reference to the storage instance that maps to our request.
    //const uploadTask = uploadBytesResumable(storageRef,data);
   // const [Imurl,setImUrl]=useState("");
    const [Loading,setLoading]=useState(false);
   const navigate = useNavigate();

   const [userDetails,setUserDetails]=useState({
    name:'',
    email:'',
    phone:'',
    country:'',
    city:'',
    password:'',
    gender:'',
   });
   const handleSubmit = async () => {
    try {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

      const uploadTask =   uploadBytesResumable(storageRef, data);

      // Wait for the upload to complete and get the download URL
      const snapshot = await uploadTask; //get the snapshot of the upload ...
      const downloadURL = await getDownloadURL(snapshot.ref);
     
  
      // Upload completed successfully, now we can get the download UR 
      return downloadURL;
    } catch (error) {
      console.log(error);
    }
  }
  
   const RegUser=async(event)=>
   {
     event.preventDefault();
      setLoading(true);
      const ans = await handleSubmit();
      console.log("ans" ,ans);
      setLoading(false);
      const senderob={...userDetails,Imurl:ans};
      console.log(senderob);
      try{
      const response=await axios.post('http://localhost:5000/register',senderob);
      console.log(response.data.state);
      if(response.data.state=="success")
      {
        navigate('/signup');
      }
      else if(response.data.state=="duplicate")
      {
        alert("Email already exists");
      }
      else{
        alert("Check all fields");
      }
      }
      catch(err)
      {
        console.log(err);
       }
   }

   const setter=(event)=>
   {
    const { name, value } = event.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]:value,
    }));

   }
   
   if(user)
   {
    return(<div id="overlay" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 ">
    <h1  className="text-white text-center position-absolute top [50%]">Already Logged In log out for new Registeration</h1>
    <Link to="/"> <h1 className="text-white text-center">Back to home </h1></Link>
  </div>
  )
   }
    return(
        <div class=" box-border w-screen bg-gradient-to-r from-gray-800 to-blue-200 p-10 min-h-screen flex justify-center items-center ">
{/* start of the form section */}

{
Loading?(
<div id="overlay" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ">
  <h1>Loding....</h1>
  <img src="/a.gif" alt="Loading" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
</div>
) : (
  /* ...your other app content... */
  console.log("jj")
)
}
<div class=" box-border w-full mt-4  max-w-60 p-5 lg:px-80 bg-white border border-gray-200 rounded-lg  shadow sm:p-6 md:p-8 dark:bg-gray-600 dark:border-gray-700">
    <form class="space-y-6 border border-sky-500  px-10 rounded-md p-5">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Register for the NGO</h5>
        <div>
            <label for="file" class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">UPLOAD IMAGE</label>
            <input type="file" onChange={(event) => setdata(event.target.files[0])}></input>
         {/*<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full " onClick={handleSubmit}>upload</button> */}
        </div>
        <div>
            <label for="email" class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" 
            required onChange={(event)=>{
                setter(event);
            }} />
        </div>
        <div>
            <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
            <input type="text" name="name" id="name" placeholder="Name...." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(event)=>{
                setter(event);
            }}/>
        </div>
        <div>
            <label for="PhNo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input type="text" name="phone" id="phone" placeholder="phone...." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(event)=>{
                setter(event);
            }}/>
        </div>
        <div>
            <label for="City" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
            <input type="text" name="city" id="city" placeholder="City...." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(event)=>{
                setter(event);
            }}/>
        </div>
        <div>
            <label for="Country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
            <input type="text" name="country" id="country" placeholder="Country...." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(event)=>{
                setter(event);
            }}/>
        </div>

        <div>
            <label for="Gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
            <input type="text" name="gender" id="gender" placeholder="Gender...." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(event)=>{
                setter(event);
            }}/>
        </div>
        <div>
            <label for="PhNo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="password...." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(event)=>{
                setter(event);
            }}/>
        </div>
         {/* button section */}
        <button type="submit" class="w-full  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:px-5" onClick={(event)=>RegUser(event)}>Register for the NGO</button>
        <a href="/signup" class="text-blue-500">Sign in</a>
    </form>
</div>
        </div>
    )
};