import React from 'react';
import styles from './Instruction.module.css'

const Instruction = () => {
    return (
        <div className={styles.container}>
            <h3>نحوه سفارش از فودلند</h3>
            <ul>
                <li>اگر حساب کاربری در فودلند ندارید، باید در قسمت ورود و ثبت نام حساب کاربری برای خود ایجاد کنید و اگر حساب کاربری دارید، وارد حساب کاربری خود شوید</li>
                <li>
                    در قسمت محصولات وارد منوی فودلند خواهید شد و با کلیک بروی محصول مود نظر، آنرا به سبد خرید خود اضافه کنید.
                </li>
                <li>
                    شما می‌توانید با کلیک بروی جزِئیات محصول، اطلاعات آنرا مشاهده کنید.
                </li>
                <li>
                    با کلید بروی سبد خرید جهت تسویه حساب به صحفه صورتحساب محصول ارجاع پیدا خواهید کرد.
                </li>
                <li>
                    در حین سفارش سعی کنید، صفحه را ریلود نکنید!
                </li>
            </ul>
        </div>
    );
};

export default Instruction;