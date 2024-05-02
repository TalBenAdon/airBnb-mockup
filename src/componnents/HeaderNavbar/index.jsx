import React from 'react'
import styles from './styles.module.scss'
import { FiMenu } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FaUserLarge } from "react-icons/fa6";
export default function HeaderNavbar() {
    return (
        <div className={styles.navBar}>
            <ul>
                <li>Home</li>
                <li><TfiWorld /></li>
                <li>
                    <div className={styles.settings}>
                        <FiMenu />
                        <div className={styles.userIcon}>
                            <FaUserLarge />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
