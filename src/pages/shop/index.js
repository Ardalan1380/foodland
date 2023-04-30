import React, { useContext } from 'react';
import { CardContext } from '../../../context/CartContextProvider';
import ShopCart from '../../../components/template/ShopCart';
import Link from 'next/link';
import styles from './index.module.css'
import Head from 'next/head';

const index = () => {
    const {state , dispatch} = useContext(CardContext)
    return (
        <>
        <Head>
        <title>سبد خرید</title>
        <meta name='description' content="Food order site createing by next.js" />
        <link rel="icon" href=".//favicon.ico" /> 
        </Head>
        <div className={styles.container}>
        <div className={styles.cardContainer}>
            {
                state.selectedItems.map(item => <ShopCart key={item.id} data={item} />)
            }
        </div>
            {
                state.itemsCounter > 0  && 
                <div className={styles.payments}>
                    <p><span>تعداد کل:</span>{state.itemsCounter}</p>
                    <p><span>قیمت کل:</span>{state.total}هزار تومان</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.checkout} onClick={() => dispatch({type:"CHECKOUT"})}>تسویه حساب</button>
                        <button className={styles.clear} onClick={() => dispatch({type:"CLEAR"})}>انصراف</button>
                    </div>
                </div>
            }

            {
                state.checkOut && 
                <div className={styles.complete}>
                    <h3>تسویه حساب با موفقیت انجام شد</h3>
                    <Link href='/products'>سفارش دیگر</Link>
                </div>
            }

            {
                    !state.checkOut && state.itemsCounter === 0 && <div className={styles.cancel}>
                        <h3>سبد خرید شما خالی است. مایلید سفارشی را انجام دهید؟!</h3>
                        <Link href='/products'>برو به سبد خرید</Link>
                    </div>
                }

        </div>
    </>
    );
};

export default index;