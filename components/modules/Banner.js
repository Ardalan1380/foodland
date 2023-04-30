import React from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <h2>فود لند
                </h2>
                    <p>سفارش یک وعده غذایی کامل تنها با چند کلیک ...</p>
                    <span>فود لند یکی رستوران آنلاین که شما می‌توانید انواع غذا های ایرانی، فست فود، نوشیدنی، سالاد، دسر و هر چیزی که مد نظر دارید برای وعده غذاییتان از طریق پیک در کمترین زمان برای شما ارسال می‌شود.</span>
                    <Link href="/products">سفارش</Link>
            </div>
            <div className={styles.left}>
                <Image src="/image/pizza.png" alt='pizza' width={400} height={400} />
            </div>
        </div>
    );
};

export default Banner;