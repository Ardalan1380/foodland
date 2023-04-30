import React from 'react';
import styles from './Attributes.module.css';
import Fast from '../icon/Fast';
import Food from '../icon/Food';
import Choice from '../icon/Choice';
import Clock from '../icon/Clock';


const Attributes = () => {
    return (
        <div className={styles.container}>
            <h3>چرا فودلند</h3>
            <div className={styles.subContainer}>
                <div>
                    <Fast />
                    <p>دریافت سریع</p>
                </div>
                <div>
                    <Food />
                    <p>کیفیت بالای محصول</p>
                </div>
                <div>
                    <Choice />
                    <p>تعدد در انتخاب</p>
                </div>
                <div>
                    <Clock />
                    <p>24-7</p>
                </div>
            </div>
        </div>
    );
};

export default Attributes;