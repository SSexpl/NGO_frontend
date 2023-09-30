import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//require('dotenv').config();
const EventForm = () => {
  const apiBaseUrl = process.env.REACT_APP_API_KEY ||"https://ngo-backend-zv1a.onrender.com" ;
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    location: "",
    date: "",
    participants: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    try{
    const res=await axios.post("${apiBaseUrl}/admin/create-event",formData);
    console.log(res);
    console.log(formData);
    if(res.data.valid){
    setFormData({name: "",
    details: "",
    location: "",
    date: "",
    participants: 0,});
    alert("event created succefully")
    }
    else
    {
        alert("please try again");
    }
}
    catch(err)
    {console.log(err);}
  };

  return (
    <>
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Admin-Panel</div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/admin/all-users"
              className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            >
             All-Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/all-events"
              className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            >
             All-Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="bg-gray-900 p-4 shadow-md rounded-md w-96 mx-auto mt-10 text-white">
      <h2 className="text-xl font-semibold mb-4">Create Event </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="details" className="block text-sm font-medium">
            Details:
          </label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows="4"
            className="w-full bg-gray-800 text-white border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium">
            Date:
          </label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="participants" className="block text-sm font-medium">
            Participants:
          </label>
          <input
            type="number"
            id="participants"
            name="participants"
            value={formData.participants}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default EventForm;
