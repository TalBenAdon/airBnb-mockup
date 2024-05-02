import React from 'react'
import styles from './styles.module.scss'
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';
export default function HouseList({ data = [] }) {
    return (
        <div className={styles.listContainer}>
            {data.map(element => {
                return (
                    <Link key={element.id} to={`House/${element.id}`} className={styles.element}>
                        <img src={element.images} alt="itemImage" />
                        <div className={styles.locationRating}>
                            <h2>{element.location}</h2>
                            <div className={styles.rating}><IoIosStar />{element.rating}</div>
                        </div>

                        <p title={element.title} className={styles.title}>{element.title}</p>


                        <p className={styles.price}>${element.price}</p>
                    </Link>
                )

            })}
        </div>
    )
}
