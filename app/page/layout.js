'use client'

import Link from "next/link"
import styles from './navbar.module.css'
import pageStyles from './page.module.css'
import { usePathname } from 'next/navigation';
import StickmanHead from "./stickmanhead/stickman-head";
import { animate, motion } from "framer-motion";

export default function Nav({ children }) {
    const currentRoute = usePathname();
    
    console.log(currentRoute);

    let clicks = 0;

    const handleClick = () => {
        
      
      clicks++
      window.setTimeout(() => {
        if (clicks === 1) {
          
          console.log('1 click')
        } else {
          
          console.log('dbl click')
        }
      }, 500);

    }

    return (
        <div className={pageStyles.main}>
            <nav className={styles.navbar}>
              <motion.div initial={{y: -500}} animate={{y: 0}} transition={{duration: 2, type: 'spring', stiffness:100}}>
                  <Link onClick={() => handleClick()} className={`${styles.navItem} `} href='/'>
                    <StickmanHead />
                </Link>
              </motion.div>
              <motion.div initial={{y: -500}} animate={{y: 0}} transition={{delay: .2, duration: 2, type: 'spring', stiffness:100}}>
                <Link className={`${styles.navItem} ${currentRoute === '/page' ? styles.active : ''}`} href='/page'>Home</Link>
              </motion.div>
              <motion.div initial={{y: -500}} animate={{y: 0}} transition={{delay: .4, duration: 2, type: 'spring', stiffness:100}}>
                <Link className={`${styles.navItem} ${currentRoute === '/page/about' ? styles.active : ''}`} href='/page/about'>About</Link>
              </motion.div>  
              <motion.div initial={{y: -500}} animate={{y: 0}} transition={{delay: .6, duration: 2, type: 'spring', stiffness:100}}>
                <Link className={`${styles.navItem} ${currentRoute === '/page/portfolio' ? styles.active : ''}`} href='/page/portfolio'>Portfolio</Link>
              </motion.div>
            </nav>
            {children}
        </div>
            
        
        
    )
}

