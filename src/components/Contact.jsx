import React from "react";
import { useState } from "react";
import {motion} from "framer-motion";
const Contact =()=>
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Here, you can implement your logic to handle the form submission,
      // such as sending the data to a server or displaying a success message.
  
      // Reset the form fields
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
  
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 border-r-2 border-gray-700">
            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
            <p>Address: 123 Main Street</p>
            <p>City: Example City</p>
            <p>Country: Example Country</p>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
  
          <div className="w-full md:w-1/2 lg:w-2/3 p-4">
            <h2 className="text-lg font-semibold mb-2">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="message" className="block font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      </motion.div>
    );
}
export default Contact;