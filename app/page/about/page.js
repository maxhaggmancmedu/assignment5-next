"use client"
import { formatDistanceToNow } from 'date-fns'
import styles from './page.module.css'
import Stickman from './stickman/stickman';
import { motion } from 'framer-motion';

const timeSinceBeginStudy = formatDistanceToNow(
    new Date(2022, 9, 1)
  )

// Using 'use client' and 'export const metadata' together is unfortunately not allowed

/*
export const metadata = {
    title: 'About',
  }
*/

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>About me</h1>
            <div className={styles.mainContent}>
                <section className={styles.sectionAboutMe}>
                    <motion.div transition={{duration: 1}} initial={{scale: 0}} animate={{scale: 1 }}  className={styles.aboutMe}>My name is Max</motion.div>
                    <div className={styles.experience}>
                        <motion.p animate={{x: 0}} initial={{x: -2000}} transition={{duration: 2}}>I have studied front-end development for <span className={styles.timeStudied}>{timeSinceBeginStudy}</span></motion.p>
                        <div>
                            <motion.p animate={{x: 0}} initial={{x: -2000}} transition={{duration: 2, delay: .5}}>I am comfortable with html, css, vanilla JS and jquery!</motion.p>
                            <motion.p animate={{x: 0}} initial={{x: -2000}} transition={{duration: 2, delay: 1}}>I am currently learning different JS framworks such as react and next.js!</motion.p>
                        </div>
                    </div>
                </section>
                <Stickman />
            </div>
        </div>
    )
}