import React, { useContext } from 'react';
import styles from "./Others.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { isInCart , quantityCount} from "../helper/function";
import { CardContext } from '../../context/CartContextProvider';

const Others = (props) => {
    const {id, name, price, discount} = props;
    const {state , dispatch} = useContext(CardContext)


    return (
        <div className={styles.container}>
        <div>
        <Image src={`/image/${id}.jpg`} alt={name} width={200} height={200} />
        </div>
        <div className={styles.food}>
            {name}
        </div>
        <div className={styles.price}>
            {
                discount ? (
                    <span className={styles.discount}>
                        {
                            (price * (100 - discount) / 100)
                        } هزار تومان
                    </span>
                ) : <span>{price} هزار تومان</span>
            }
            {
                discount ? <div className={styles.badge}>
                    {discount} %
                </div> : null
            }
        </div>  
        <div className={styles.details}>
                <Link href={`/products/${id}`}>جزئیات</Link>

                {
                    isInCart(state, props.id) ? 
                    <button onClick={() => dispatch({type:"INCREASE" , payload : props})}>+</button> : 
                        <button onClick={() => dispatch({type: "ADD_ITEM" , payload : props})}>انتخاب محصول</button>
                    }
                                        {
                        quantityCount(state , props.id) > 0 && <span>{quantityCount(state , props.id)}</span>
                    }
                    {
                        quantityCount (state , props.id) > 1 && <button onClick={() => dispatch({type:"DECREASE" , payload:props})}>
                            --
                            </button>
                    }
                    {
                        quantityCount (state , props.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM" , payload: props})}><Image src="/image/trashIcon.svg" alt='trash' width={20} height={20} /></button>
                    }
            </div>
    </div>
    );
};

export default Others;