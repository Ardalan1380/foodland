import Image from "next/image";
import styles from "./Layout.module.css";
import Link from "next/link";
import Head from "next/head";
import {FaBars , FaTimes} from "react-icons/fa"
import { useContext, useState } from "react";

//Context
import { CardContext } from "../../context/CartContextProvider";


const Layout = ({children}) => {
    const {state} = useContext(CardContext);
    const [ham , setHam] = useState(true);
    const navbar = !ham ? `${styles["open"]} ${styles.list}` : styles.list
    return (
        <div>

            <header className={styles.header}>
                <div className={navbar}>
                    <div className={styles.mobile} onClick={() => setHam(!ham)}>
                            {
                                ham ? <FaBars /> : <FaTimes /> 
                            } 
                    </div>
                    <ul>
                        <li>
                    <Link href="/">صفحه‌ اصلی</Link>
                        </li>
                        <li>
                    <Link href="/products">محصولات</Link>
                        </li>
                        <li>
                    <Link href="/SignUp">ورود/ثبت نام</Link>
                        </li>
                    </ul>
                </div>
                <h3 className={styles.brand}><Link href="/">Food Land</Link></h3>
                <div className={styles.shop}>
                    <Link href='/shop'>
                    <span>{state.itemsCounter}</span>
                    <Image src='/image/shop-cart2.svg' alt="shop" width={30} height={40} />
                    </Link>

                </div>
            </header>
            
            <div className={styles.container}>{children}</div>

            <footer className={styles.footer}>
                <div className={styles.rightfooter}>
                    <ul>
                        <Link href="/about-us">
                        <li>درباره ما</li>
                        </Link>
                        <Link href='FAQ'>
                        <li>سوالات متداول</li>
                        </Link>
                        <Link href='privacy'>
                        <li>حریم خصوصی</li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.copy}>
                    Food Land &copy;
                </div>
                <div className={styles.media}>
                    <ul>
                        <li>
                            <Link href='t.me/Ardalan_barzanji'><Image src='/image/telegram.svg' width={30} height={40} alt="telegram"/></Link>
                        </li>
                        <li>
                            <Link href='/'><Image src='/image/whatsapp.svg' width={30} height={40} alt="phone" /></Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/ardalan.barzanji/"><Image src='/image/instagram.svg' alt="instagram" width={30} height={40} /></Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Layout;