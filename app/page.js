import styles from './page.module.css'
import Link from 'next/link'
import './typography.css'




export default function Home() {
    return (
      <main className={styles.main}>
      <h1 className={styles.myName}>Max Häggman</h1>
        <Link href="./page/">
          <button className={styles.button}>My Portfolio</button>
        </Link>
        <section>
            <h3 className={styles.intro}>Hi! I'm Max and I am a Front-end / App developer!</h3>
        </section>
    </main>
    )
  }