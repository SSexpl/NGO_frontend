import React from "react";
import { useEffect,useState } from "react";
import { RegForm } from "./RegForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { blogs } from "../content/blog";
const Blog=()=> {
  const [showCard, setShowCard] = useState(false);

  const [currentBlog,setCurrent]=useState({});

  const handleButtonClick = ({title,content,image}) => {
    setCurrent({title,content,image});
    setShowCard(true);
    
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };
  const EachBlogCard = () => {
    console.log(currentBlog.title);
    return (
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-50 bg-black z-50">
  <div className="p-8 bg-white rounded-lg max-w-400 overflow-auto">
    <h2 className="text-xl font-semibold mb-4">{currentBlog.title}</h2>
    {currentBlog.image && (
      <img
        src={currentBlog.image}
        alt="Blog Thumbnail"
        className="object-cover w-full h-48 rounded-t-lg my-5"
      />
    )}
    <div className="overflow-auto max-h-80"> {/* Adjust max-h value as needed */}
      <p>{currentBlog.content}</p>
    </div>
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      onClick={handleCloseCard}
    >
      Close
    </button>
  </div>
</div>

    );
  };
    const BlogCard = ({ image, title, content }) => {
      const words = content.split(' '); //split the words by the spaces
      let limitedContent;
      if(words.length>50)//if word length is greater than 50 slice the array and join the element using joins.
       limitedContent = words.slice(0, 50).join(' '); //limit 
      else
        limitedContent=content;
        return (
          
          <div className="relative rounded-lg w-full shadow-lg bg-opacity-30 backdrop-filter backdrop-blur-lg bg-slate-800  transition-transform duration-300 transform hover:scale-105">
            {image && (
              <img
                src={image}
                alt="Blog Thumbnail"
                className="object-cover w-full h-48 rounded-t-lg"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl text-white font-semibold mb-2">{title}</h2>
              <p className="text-sm text-white">{limitedContent}</p>
              <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={()=>handleButtonClick({title,content,image})}
        >Read More</button>
            </div>
          </div>
        
        )
      };
      
    return (
        <>
        <h1 className="text-gray-400">Blogs Section</h1>
            
        <div className="w-full h-full bg-slate-900">
        <div className="container mx-auto px-4 py-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 transition duration-1000 ease-in-out ">
            
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              content={blog.content}
            />
          ))}
        </div>
        </div>
        {showCard&&(
        <EachBlogCard/>
      )}
        </>
      );
   

 
}
export default Blog;