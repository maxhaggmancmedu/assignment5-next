import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
    title: 'Portfolio',
  }

export default function Portfolio() {

    const assignments = [
        {projectName: 'Assignment 1', repoLink: 'https://github.com/maxhaggmancmedu/assignment-1-react'}, 
        {projectName: 'Assignment 2', repoLink: 'https://github.com/maxhaggmancmedu/assignment-2-react'}, 
        {projectName: 'Assignment 3', repoLink: 'https://github.com/maxhaggmancmedu/assignment-3-react', siteLink: 'https://assignment-3-react.vercel.app/'},
        {projectName: 'Assignment 4', repoLink: 'https://github.com/maxhaggmancmedu/Assignment-4-react', siteLink: 'https://assignment-4-react.vercel.app/'}, 
        {projectName: 'Assignment 5', repoLink: 'https://github.com/maxhaggmancmedu/Assignment-4-react', siteLink: 'https://assignment-3-react.vercel.app/'}
    ]

    return (
        <main className="main">
            {assignments[3].projectName}
            dads
            {assignments.map((assignment) => {
                <div>
                    <div className={styles.name}>{assignment.projectName}</div>
                    <Link href={assignment.repoLink}>Github repo</Link>
                </div>
            })}
        </main>
    )
}