"use client"
import { motion } from 'framer-motion';

const Header = () => {
  var menu = {
    'about':"About",
    "experience":"Experience",
    "skills":"Skills",
    "education":"Education",
    "projects":"Projects"
  }

  return (



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
          <ul className='flex gap-5'>
            {Object.keys(menu).map(el=>{
             return (<div className='text-white'><a href="">{menu[el]}</a> </div>)
              })}
          </ul>
        </div>
      
      </div>
      
    </motion.header>
  )
} ;

export default Header;