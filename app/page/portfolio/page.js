"use client"
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import assignment1thumb from '../../../public/assignment1-thumbnail.png'
import assignment2thumb from '../../../public/assignment2-thumbnail.png'
import assignment3thumb from '../../../public/assignment3-thumbnail.png'
import assignment4thumb from '../../../public/assignment4-thumbnail.png'
import { motion } from 'framer-motion'

// Using 'use client' and 'export const metadata' together is unfortunately not allowed

/*
export const metadata = {
    title: 'Portfolio',
  }
*/

export default function Portfolio() {

    const assignments = [
        {projectName: 'Assignment 1', repoLink: 'https://github.com/maxhaggmancmedu/assignment-1-react', siteLink: './page/portfolio', thumb: {img: assignment1thumb, alt: 'Assignment 1 thumbnail'}}, 
        {projectName: 'Assignment 2', repoLink: 'https://github.com/maxhaggmancmedu/assignment-2-react', siteLink: './page/portfolio', thumb: {img: assignment2thumb, alt: 'Assignment 2 thumbnail'}}, 
        {projectName: 'Assignment 3', repoLink: 'https://github.com/maxhaggmancmedu/assignment-3-react', siteLink: 'https://assignment-3-react.vercel.app/', thumb: {img: assignment3thumb, alt: 'Assignment 3 thumbnail'}},
        {projectName: 'Assignment 4', repoLink: 'https://github.com/maxhaggmancmedu/Assignment-4-react', siteLink: 'https://assignment-4-react.vercel.app/', thumb: {img: assignment4thumb, alt: 'Assignment 4 thumbnail'}}, 
        /*{projectName: 'Assignment 5', repoLink: 'https://github.com/maxhaggmancmedu/Assignment-4-react', siteLink: 'https://assignment-3-react.vercel.app/', thumb: assignment5thumb}*/
    ]

    

    return (
        <main className={styles.main}>
            
            {assignments.map((assignment) => {
                return (
                    <div key={assignment.projectName} className={styles.assignmentContainer}>
                        <Image src={assignment.thumb.img} alt={assignment.thumb.alt} className={styles.thumbnail}></Image>
                        <div className={styles.assignmentContent}>
                            <h3 className={styles.name}>{assignment.projectName}</h3>
                            <motion.div className={styles.contentWrapper} whileHover={{scale: 1.1}}>
                                <Link className={styles.repoLink} href={assignment.repoLink}>Github repo</Link>
                            </motion.div>
                            <motion.div className={styles.contentWrapper} whileHover={{scale: 1.1}}>
                                <Link className={styles.siteLink} href={assignment.siteLink}>Website</Link>
                            </motion.div>
                            
                        </div>
                        
                    </div>
                )
                
            })}
        </main>
    )
}