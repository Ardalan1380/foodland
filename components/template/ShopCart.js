import React , {useContext} from 'react';
import Image from 'next/image';
import styles from './ShopCart.module.css';

//Contex
import { CardContext } from '../../context/CartContextProvider';

const ShopCart = (props) => {

    const {dispatch} = useContext(CardContext);

    const {name, price, quantity , id} = props.data
    return (
        <div className={styles.container}>
            <Image src={`/image/${id}.jpg`} className={styles.productImage} alt='food' width={90} height={90} />
            <div className={styles.data}>
                <h3>{name}</h3>
                <p>هزار تومان{price}</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type:"DECREASE" , payload: props.data})}>-</button>:
                    <button onClick={() => dispatch({type:"REMOVE_ITEM" , payload: props.data})}><Image src="/image/trashIcon.svg" width={20} height={20} style={{background:"#d39b00"}}/></button>
                }
                <button onClick={() => dispatch({type:'INCREASE', payload: props.data})}>+</button>
            </div>
            
        </div>
    );
};

export default ShopCart;