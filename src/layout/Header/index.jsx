import React from 'react'
import styles from './styles.module.scss'
import HeaderNavbar from '../../componnents/HeaderNavbar'
import { LiaAirbnb } from "react-icons/lia";
import { Outlet, useLocation } from 'react-router-dom';
export default function Header() {
    const location = useLocation()
    console.log(location.pathname);
    return (
        <>
            <div className={styles.screenWidth}>
                <header className={location.pathname === '/' ? styles.mainHeader : styles.header}>
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
