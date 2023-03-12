import Link from 'next/link'
import styles from './not-found.module.css'
import StickmanHead from './stickman-head-error/stickman-head'


export default function NotFound() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <StickmanHead />
        <h1 className={styles.h1}>Page could not be found – 404!</h1>
        <div>
          <Link className={styles.link} href="/page">Go back to Home</Link>
        </div>
      </div>
    </div>
  )
}