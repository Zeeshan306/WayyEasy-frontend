import { Link } from "react-router-dom"

import styles from "./searchCards.module.css"
import image from "../../../files/Images/test.jpg"

const SearchCard = ({ data }) => {
        return (
        <div className={styles.mainContainer}>
            <div className={styles.itemMain}>
                <img src={image} className={styles.itemImage} alt='search-item-image' />
                <div className={styles.mainDetails}>
                    <p>{data.name}</p>
                    <p>{data?.description}</p>
                </div></div>
            <p>{data?.specialityType} {data?.address}</p>
            <Link className={styles.detiailsBtn} to={{
                pathname: data.id,
                state: data
            }}>
                Check
            </Link>
        </div>
    )
}

export default SearchCard