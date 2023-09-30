import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Event from './components/Event';
import Home from './components/Home';
import { Register } from './components/Register';
import { Profile } from './components/Profile';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog';
import {Members}from './components/Admin-Member';
import { All_Events } from './components/Admin-Events';
import EventForm from './components/Admin_Create_Event';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar />
            <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/event" element={<Event/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/admin/all-users" element={<Members/>} />
      <Route path="/admin/all-events" element={<All_Events/>} />
      <Route path="/admin" element={<EventForm/>} />
      </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
