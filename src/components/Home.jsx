import React from 'react';
import { Card1 } from '../utility/Card1';
import {Carousel} from '../utility/Carousel';
import { testimonial } from '../content/test';
import { motion } from 'framer-motion';
import { InitiativesCard } from '../utility/IntitiativeCard';
import { initiatives } from '../content/initiatives';
import { collaborator } from '../content/collaborator';
import {CollaborationCard} from '../utility/CollaborationCard';
const Home=()=>
{
    return(
        <div className="">
   <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
          {/* top section */}
  <section class="bg-gray-100 py-20"> 
  
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-4 text-center">Vankhandi Sewa Sansthan</h2>
      <p class="max-w-2xl mx-auto mb-8 text-center text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem ac mi aliquam mattis non non augue. Sed luctus neque a turpis sollicitudin, sit amet faucibus quam placerat.</p>
      <div class="flex justify-center">
        <img src="https://via.placeholder.com/500x250" alt="About Us" class="w-full max-w-md rounded-lg shadow-md"></img>
      </div>
    </div>
  </section>

  <section class="bg-white py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-4 text-center">Our Initiatives</h2>
      <div class="flex flex-wrap justify-center">
        {initiatives.map((content)=>(<InitiativesCard title={content.title} description={content.description}/>))}
          </div>
          </div>
          
            </section>
            <section class="bg-gray-800 py-10">
              <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold mb-4 text-white text-center">Testimonials</h2>
                <div class="flex flex-wrap justify-center">
                 {testimonial.map((content)=>(<Card1 content={content.data} author={content.author}/>) )
                 }
                  </div>
                </div>
            </section>
            <div class="relative">
  <div class="absolute inset-0 bg-gradient-to-r from-zinc-900 to-zinc-500"></div>
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mt-10 py-10">
    <h2 class="text-3xl text-white font-bold mb-4 text-center">Our Partners</h2>
      <div class="flex flex-wrap -mx-4">
     
        {
          collaborator.map((content)=>(<CollaborationCard title={content.title} description={content.description} url={content.url}/>))
        }
                 </div>
                 </div>
                 
                   </div>
                 </div>
                 <div class="py-10">
                 <h2 class="text-3xl font-bold mb-4 text-center">Recent Events</h2>
            <Carousel/>
            </div>
            <footer class="bg-gray-900 py-10">
              <div class="container mx-auto px-4">
                <p class="text-center text-gray-500">&copy; 2023 NGO Name. All Rights Reserved.</p>
              </div>
            </footer>
          
          ```
          </motion.div>
        </div>
    )
}

export default Home;
