import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import assignment1thumb from '../../../public/assignment1-thumbnail.png'
import assignment2thumb from '../../../public/assignment2-thumbnail.png'
import assignment3thumb from '../../../public/assignment3-thumbnail.png'
import assignment4thumb from '../../../public/assignment4-thumbnail.png'


export const metadata = {
    title: 'Portfolio',
  }

export default function Portfolio() {

    const assignments = [
        {projectName: 'Assignment 1', repoLink: 'https://github.com/maxhaggmancmedu/assignment-1-react', siteLink: '', thumb: assignment1thumb}, 
        {projectName: 'Assignment 2', repoLink: 'https://github.com/maxhaggmancmedu/assignment-2-react', siteLink: '', thumb: assignment2thumb}, 
        {projectName: 'Assignment 3', repoLink: 'https://github.com/maxhaggmancmedu/assignment-3-react', siteLink: 'https://assignment-3-react.vercel.app/', thumb: assignment3thumb},
        {projectName: 'Assignment 4', repoLink: 'https://github.com/maxhaggmancmedu/Assignment-4-react', siteLink: 'https://assignment-4-react.vercel.app/', thumb: assignment4thumb}, 
        /*{projectName: 'Assignment 5', repoLink: 'https://github.com/maxhaggmancmedu/Assignment-4-react', siteLink: 'https://assignment-3-react.vercel.app/', thumb: assignment5thumb}*/
    ]

    return (
        <main className={styles.main}>
            
            {assignments.map((assignment) => {
                return (
                    <div key={assignment.projectName} className={styles.assignmentContainer}>
                        <Image src={assignment.thumb} className={styles.thumbnail}></Image>
                        <div className={styles.assignmentContent}>
                            <h3 className={styles.name}>{assignment.projectName}</h3>
                            
                            <Link className={styles.repoLink} href={assignment.repoLink}>Github repo</Link>
                            <Link className={styles.siteLink} href={assignment.siteLink}>Website</Link>
                        </div>
                        
                    </div>
                )
                
            })}
        </main>
    )
}