import Stickman from "./stickman/stickman"
import styles from './page.module.css'

export const metadata = {
    title: 'Home',
  }

export default function Page() {
    return (
        <div className={styles.mainSection}>
            <div className={styles.textComponent}>
                <p className={styles.textBubble}><span>Welcome!</span> Click on one of the menu items to view Max's portfolio!</p>
                <div className={styles.textArrow}></div>
            </div>
            <Stickman />
        </div>
    )
}