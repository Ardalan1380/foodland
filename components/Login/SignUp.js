import React, { use, useEffect, useState } from 'react';
import styles from "./SignUp.module.css"
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {validate} from './Validate.js'
import { notify } from './toast';
import Image from 'next/image';
import { useRouter } from 'next/router';


const SignUp = () => {

    const style = {
        width: "250px",
        height : "auto",
        "@media(max-width:496px)": {
            color : "red",
            width: "20px"
        } 
    }
    
    const router = useRouter();
    
    const [data , setData] =useState({
        name:'',
        email : '',
        password: '',
        confirmPassword : '',
        isAccepted : false
    })
    
    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});

    useEffect(() =>{
        setErrors(validate(data, "signUp" ))
        console.log(errors)
    } , [data])

    const channgeHandler = e => {
        // console.log(e.target.checked);
        if(e.target.name === "isAccepted") {
            setData({...data , [e.target.name] : e.target.checked})
        }else {
            setData({...data , [e.target.name] : e.target.value})
        }
        console.log(data)
    }


    const focusHandler = (e) => {
        setTouched({...data , [e.target.name] : true})
    }

    const submitHandler =  (e) =>  {
        e.preventDefault();
        if(!Object.keys(errors).length) {
            // console.log(data);
            notify("ثبت نام شما با موفقیت انجام شد", 'success');
            setTimeout(() => {
                router.push("/")
            } , 4000)
        }else {
            notify("لطفا اطلاعات را به درستی وارد نمایید" , "error")
            setTouched({
                name : true,
                email : true,
                password : true,
                confirmPassword : true,
                isAccepted : true
            })
        }

    }


    return (
        <div className={styles.container}>
            <div className={styles.logo}>
            <Image src='/logo.png' width={200} height={100} alt='logo' />
            </div>
           <form onSubmit={submitHandler} className={styles.formContainer}>
            <h2 className={styles.header}>ثبت نام کاربران</h2>
            <div className={styles.formField}>
                <label>نام کاربری</label>
                <input className={(errors.name && touched.name) ? styles.unCompleted : styles.formInput} type='text' name='name' value={data.name} onChange={channgeHandler} onFocus={focusHandler} />
                {errors.name && touched.name && <span>{errors.name}</span>}
            </div>

            <div className = {styles.formField}>
                <label>ایمیل</label>
                <input className={(errors.email && touched.email) ? styles.unCompleted : styles.formInput } type='text' name='email' value={data.email} onChange={channgeHandler} onFocus={focusHandler}/>
                {errors.email &&  touched.email &&<span>{errors.email}</span>}
            </div>
            
            <div className={styles.formField}>
                <label>رمز عبور</label>
                <input className={(errors.password && touched.password) ? styles.unCompleted : styles.formInput} type='password' name='password' value={data.password} onChange={channgeHandler} onFocus={focusHandler}/>
                {errors.password &&  touched.password && <span>{errors.password}</span>}
            </div>
            
            <div className={styles.formField}>
                <label>تکرار رمز عبور</label>
                <input className={(errors.confirmPassword && touched.confirmPassword) ? styles.unCompleted : styles.formInput} type='password' name='confirmPassword' value={data.confirmPassword} onChange={channgeHandler} onFocus={focusHandler}/>
                {errors.confirmPassword &&  touched.confirmPassword &&<span>{errors.confirmPassword}</span>}
            </div>
            
            <div className={styles.formField}>
                <div className={styles.checkBoxContainer}>
                <label>قوانین فودلند را قبول دارم</label>
                <input className={(errors)} type='checkbox' name='isAccepted' value={data.isAccepted} onChange={channgeHandler} onFocus={focusHandler}/>
                </div>
                {errors.isAccepted &&  touched.isAccepted && <span>{errors.isAccepted}</span>}
            </div>
            <div className={styles.formButtons}>
                 <button type='submit'>ثبت نام</button>
                <Link href='/Login'>ورود</Link>
            </div>
           </form>
           <div className={styles.toast}> 
           <ToastContainer 
           autoClose = {3000} 
           style={style}
            />
           </div>
        </div>
    );
};

export default SignUp;