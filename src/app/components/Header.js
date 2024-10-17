"use client"
import { motion } from 'framer-motion';

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='px-10 pt-4'
  >
    <div className=" flex flex-1 justify-between">
      <div>
      <h1 className='text-white font-bold text-3xl'>R Sai Sandeep</h1>
      </div>
      <div>
        {/* <h1 className='text-white'>
          Menu
        </h1> */}
      </div>
    
    </div>
    
  </motion.header>
);

export default Header;