'use client';
import styles from './stickman.module.css'
import StickmanHead from './stickman-head'
import { animate, motion } from "framer-motion"


export default function() {

    function onTap(event, info) {
        console.log(info)
        console.log(info.point.x, info.point.y)
    }

    return (
        <motion.div  className={styles.stickman}>
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
        </motion.div>
    )  
}