import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { IndexContext } from './IndexContext'
import { burgerNavLinksVariants } from '../animations/Variants'
import menuItems from '../routes/MenuItems'

import './Navbar.css'

export default function Navbar() {

  const { selectedIndex } = useContext(IndexContext)
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  const [burgerVisible, setBurgerVisible] = useState(false)
  const [burgerExpanded, setBurgerExpanded] = useState(false)

  const updateScreenSize = () => setScreenSize(window.innerWidth)

  useEffect(() => {
      window.addEventListener("resize", updateScreenSize);

      if(screenSize > 500) {
        setBurgerVisible(false)
        setBurgerExpanded(false)
      } else {
        setBurgerVisible(true)
      }

      return () => window.removeEventListener("resize", updateScreenSize);
  }, [setBurgerVisible, screenSize]);

  return (
    <nav className='navbar'>
      <h1>Website</h1>

      {!burgerVisible &&
        <ul className='nav-links'>
          {menuItems.map(({ title, path }, index) => 
            <Link className='link' key={index} to={path} onClick={() => setBurgerExpanded(false)}
            style={{borderBottom: index === selectedIndex && '1px #333 solid'}}>
              <li>{title}</li>
            </Link>
          )}
        </ul>
      }

      {burgerVisible &&
        <div className='nav-burger' onClick={() => setBurgerExpanded(!burgerExpanded)}>
          <div className='nav-burger-line'></div>
          <div className='nav-burger-line'></div>
          <div className='nav-burger-line'></div>
        </div>
      }

      <AnimatePresence exitBeforeEnter>
        {burgerExpanded && 
          <motion.ul className='nav-burger-links' initial='initial' animate='animate' exit='exit' variants={burgerNavLinksVariants}>
            {menuItems.map(({ title, path }, index) => 
              <Link className='link' key={index} to={path} onClick={() => setBurgerExpanded(false)}
              style={{borderBottom: index === selectedIndex && '1px #333 solid'}}>
                <li>{title}</li>
              </Link>
            )}
          </motion.ul>
        }
      </AnimatePresence>
      
    </nav>
  )
}
