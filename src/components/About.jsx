import React from 'react';
import { motion } from 'framer-motion';
const About=()=>
{
    return (
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center justify-between"
          >
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida
                tincidunt nulla, eu dapibus nisl dapibus sed. Mauris dapibus consequat
                odio, at posuere turpis aliquam et. Donec ut est vitae sapien convallis
                gravida. Phasellus dignissim, mi sit amet interdum euismod, erat nibh
                viverra enim, sit amet mollis mauris tortor nec enim.
              </p>
              <p className="text-gray-600">
                Sed eleifend consequat felis, sit amet venenatis dolor mattis ac.
                Suspendisse eu dignissim dolor. Fusce rhoncus urna sed velit dapibus
                efficitur. Nullam eu malesuada nunc, nec cursus est. Nulla facilisi.
              </p>
            </div>
    
            <div className="lg:w-1/2">
              <img
                src="https://im.whatshot.in/img/2020/Jun/istock-1130655067-cropped-1591265020.jpg"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
    
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src="https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png"
                  alt="Team Member 1"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-gray-600">Co-Founder</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png"
                  alt="Team Member 2"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">Jane Smith</h3>
                  <p className="text-gray-600">Lead Designer</p>
                </div>
              </div>
              {/* Add more team members here */}
            </div>
          </motion.div>
          <div>
          <h2 className="mt-10 text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
          "Our NGO is dedicated to catalyzing positive change by 
          championing social justice, sustainable development,
           and the well-being of all. Through advocacy, education,
            and collaborative efforts, we strive to empower individuals and communities, 
            regardless of their circumstances, to address pressing issues, protect the environment, 
            and improve lives. Guided by our unwavering commitment to equality and compassion,
             we work to create a more just, equitable, and sustainable world where every individual and community can thrive."
              </p>
          </div>
        </div>
      );
}

export default About;
