import React, { useEffect, useState } from "react";
import axios from 'axios';
//require('dotenv').config();
export  const Profile = () => {

  // const  props={
  //       name:"Shivansh",
  //       email:"shivansh.sahai03@gmail.com",
  //       phone:"7380667734",
  //       city:"Lucknow",
  //       country:"India",
  //       image:"../src/content/img/a.jpg",
  //       date:"12/08/22",
  //       events:{}
  //   };
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || "https://ngo-backend-zv1a.onrender.com";
  const [props,setProps]=useState({});
  const [Event,setEvent]=useState({});
  //var  name, email, phone, city, country,date;
  useEffect(()=>{
     getEvents();
     getProfile();
     
  },[]);
   const getEvents=async()=>
   {
    const id=localStorage.getItem("user");
    console.log(id +" "+typeof(id));
    const ans=await axios.post(`${apiBaseUrl}/GeteventRegister`,{id:id}); 
    console.log(ans.data);
    setEvent(ans.data);
    console.log(Event);
   }
   const getProfile=async()=>
   {
    const id=localStorage.getItem("user");
    console.log(id +" "+typeof(id));
    const ans=await axios.post(`${apiBaseUrl}/user`,{id:id}); // fetched the data from the backend
    console.log(ans.data);
    
     await setProps(ans.data);//set the props for the frontend...
    //console.log(props);
   }
   const prop="kk";
    return (
    
    <div className="max-w-5xl mx-auto px-8 py-8 bg-slate-800 rounded-md mt-5">
    <div className="max-w-4xl mx-auto mt-5 py-8 px-8 bg-slate-500 rounded-md">
      <div className="flex flex-col items-center justify-center">
        <img
          className="rounded-full w-32 h-32 object-cover"
          src={props.Imurl}
          alt="User Profile Image"
        />
        <h1 className="text-3xl font-medium mt-4">{props.name}</h1>
        <p className="text-gray-600 mt-2">{props.email}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-medium">Profile Information</h2>
        <div className="flex flex-col md:flex-row justify-between mt-4">
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 mb-2">Phone Number</p>
            <p>{props.phone}</p>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <p className="text-gray-600 mb-2">Location</p>
            <p>{props.city}, {props.country}</p>
          </div>

          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <p className="text-gray-600 mb-2">Joined On</p>
            <p>{props.date}</p>
          </div>
          
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-medium">Events Registered For</h2>
        <ul className="list-disc list-inside mt-4">
          {
            Event.length?(
            Event.map((item)=><li>{item.name}   {item.date}</li>)):
            (<li>Loading...</li>)
          }
        
        </ul>
      </div>
      </div>
    </div>
  );
};


