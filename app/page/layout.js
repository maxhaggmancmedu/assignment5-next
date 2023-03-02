'use client'

import Link from "next/link"
import styles from './navbar.module.css'
import pageStyles from './page.module.css'
import { useRouter } from 'next/navigation';

export default function Nav({ children }) {
    const router = useRouter();
    const currentRoute = router.pathname;

    console.log(currentRoute);

    return (
        <div className={pageStyles.main}>
            <nav className={styles.navbar}>
                <Link className={`${styles.navItem} ${currentRoute === '/' ? styles.active : styles.nonActive}`} href='/'>Home</Link>
                <Link className={`${styles.navItem} ${currentRoute === '/page/about' ? styles.active : styles.nonActive}`} href='/page/about'>About</Link>
                <Link className={`${styles.navItem} ${currentRoute === '/page/portfolio' ? styles.active : styles.nonActive}`} href='/page/portfolio'>Portfolio</Link>
            </nav>
            {children}
        </div>
            
        
        
    )
}

