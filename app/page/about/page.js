import { formatDistanceToNow } from 'date-fns'
import styles from './page.module.css'

const timeSinceBeginStudy = formatDistanceToNow(
    new Date(2022, 9, 1)
  )

  console.log(timeSinceBeginStudy);


export const metadata = {
    title: 'About',
  }

export default function About() {
    return (
        <div>
            <h1>About me</h1>

            <section>
                <div className={styles.aboutMe}>
                    My name is Max
                </div>
                <div className={styles.experience}>
                    <p>I have studied front-end development for <span className={styles.timeStudied}>{timeSinceBeginStudy}</span></p>
                    <div>
                        <p>I am comfortable with html, css, vanilla JS and jquery!</p>
                        <p>I am currently learning react and next.js!</p>
                    </div>
                </div>
            </section>
            
        </div>
    )
}