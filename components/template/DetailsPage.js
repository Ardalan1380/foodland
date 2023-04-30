import React from 'react';
import styles from "./DetailsPage.module.css"
import Image from 'next/image';
import Link from 'next/link';


const DetailsPage = (props) => {
    console.log(props)
    const {name, introduction, price, id } = props
    return (
        <div className={styles.container}>
            <h2>جزئیات</h2>
            <div className={styles.details}>
            <div className={styles.image}>
                <Image src={`/image/${id}.jpg`} width={400} height={400} />
            </div>
            <div className={styles.text}>
            <div className={styles.name}>
                {name}
            </div>
            <div className={styles.intro}>
                {introduction}
            </div>
            <div className={styles.price}>
                <p>
                قیمت: <span>{price}هزار تومان</span>
                </p>
                <div className={styles.product}>

            <Link href="/products">
                محصولات
            <Image src="/image/left-arrow.svg" alt={name} width={200} height={200} />
                </Link>
                </div>
            </div>
        </div>
     </div>
        </div>
    );
};

export default DetailsPage;