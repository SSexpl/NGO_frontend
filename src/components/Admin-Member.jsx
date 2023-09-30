import React from "react";
import { useEffect,useState } from "react";
import { RegForm } from "./RegForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const  Members=()=>
{
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || "https://ngo-backend-zv1a.onrender.com";
    const [members,setMembers]=useState([]);
    const [loading,setLoading]=useState(true);
    const defaultImageUrl="https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png";
    const getDetails=async()=>
    {
      const response=await fetch(`${apiBaseUrl}/admin/get-users`);
      console.log(response);
      let  Mem_list=await response.json(); 
      console.log(Mem_list);
      setMembers(Mem_list);
      setLoading(false);
    }
    useEffect(()=>{
        getDetails()},[]);

        if(loading)
        {
            return(<h1>Loading..........</h1>);
        }

    const MemberCard = ({ image,name,email,phone,city,country}) => {
          return (
            
            <div className="relative rounded-lg shadow-lg bg-opacity-30 backdrop-filter backdrop-blur-lg bg-slate-500  transition-transform duration-300 transform hover:scale-105">
                <div className="flex justify-center pt-2">
                {image?(<img
                  src={image}
                  alt="Blog Thumbnail"
                  onError={(e) => {
                    e.target.src = defaultImageUrl;
                  }}
                  className="object-cover w-48 h-48  rounded-full"
                />)
            :(
                <img
                src={defaultImageUrl}
                alt="Blog Thumbnail"
                className="object-cover w-48 h-48  rounded-full"
              /> 
            )}
              </div>
              <div className="p-4">
                <h2 className="text-xl text-white font-semibold mb-2">{name}</h2>
                <div className="flex justify-between">
                <p className="text-sm text-white">{email}</p>
                <p className="text-sm text-white">{phone}</p>
                </div>
                <div className="flex justify-between">
                <p className="text-sm text-white">{city}</p>
                <p className="text-sm text-white">{country}</p>
                </div>
              </div>
            </div>
          
          )
        };
        return(

            <>

            <h1 className="text-gray-400">All members</h1>
            
        <div className="w-full h-full bg-slate-900">
        <div className="container mx-auto px-4 py-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            
          {members.map((member) => (
            <MemberCard
              key={member._id}
              image={member.Imurl}
              name={member.name}
              email={member.email}
              phone={member.phone}
              city={member.city}
              country={member.country}
            />
            
          ))
          }
          </div>
        </div> 
        </>

        )
}