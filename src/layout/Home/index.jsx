import React from 'react'
import styles from './styles.module.scss'
import HouseList from '../../componnents/HouseList'
import data from '../../data.json'
export default function Home() {

    return (
        <div className={styles.contentContainer}>
            <HouseList data={data} />
        </div>
    )
}
