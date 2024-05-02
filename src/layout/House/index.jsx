import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data.json'
import styles from './styles.module.scss'
export default function House() {
    const { houseId } = useParams()
    const myHouse = data.find(house => house.id == houseId)
    console.log(myHouse);
    return (
        <>
            <h1>
                {myHouse.title}
            </h1>
            <div className={styles.imgGridContainer}>
                <img src={myHouse.images} alt="House Images" />
                <img src={myHouse.images} alt="House Images" />
                <img src={myHouse.images} alt="House Images" />
                <img src={myHouse.images} alt="House Images" />
                <img src={myHouse.images} alt="House Images" />
            </div>
        </>
    )
}
