import styles from './stickman.module.css'
import StickmanHead from './stickman-head'

export default function() {
    return (
        <div className={styles.stickman}>
            <StickmanHead />
            <div className={styles.torso}></div>
            <div className={styles.leftarm}>
                <div className={styles.lefthand}></div>
            </div>
            <div className={styles.rightarm}>
            <div className={styles.righthand}></div>
            </div>
            <div className={styles.leftleg}></div>
            <div className={styles.leftfoot}></div>
            <div className={styles.rightleg}></div>
            <div className={styles.rightfoot}></div>
        </div>
    )
    
}