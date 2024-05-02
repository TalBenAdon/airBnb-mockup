import React from 'react'
import styles from './styles.module.scss'
import HeaderNavbar from '../../componnents/HeaderNavbar'
import { LiaAirbnb } from "react-icons/lia";
import { Outlet } from 'react-router-dom';
export default function Header() {
    return (
        <>
            <div className={styles.screenWidth}>
                <header className={styles.header}>
                    <div>
                        <div className={styles.logoDiv}> <LiaAirbnb className={styles.icon} />airbnb</div>
                    </div>
                    <HeaderNavbar />

                </header>
            </div>
            <Outlet />
        </>

    )
}
