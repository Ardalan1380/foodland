import React, { useEffect, useState } from 'react';
import styles from "./Login.module.css"
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {validate} from './Validate.js'
import { notify } from './toast';
import Image from 'next/image';
import { useRouter } from 'next/router';


const SignUp = () => {
    const router = useRouter();
    
    const [data , setData] =useState({  
        email : '',
        password: '',

    })
    
    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});

    useEffect(() =>{
        setErrors(validate(data , "login"))
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
            notify("ورود شما با موفقیت انجام شد" , "success");
            setTimeout(() => {
                router.push("/")
            } , 4000)
        }else {
            notify("لطفا اطلاعات را به درستی وارد نمایید" )
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
            <h2 className={styles.header}>ورود کاربران</h2>
            
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
            </div>
            <div className={styles.formButtons}>
                 <button type='submit'>ورود</button>
                <Link href='/SignUp'>ثبت نام</Link>
            </div>
           </form>
           <ToastContainer autoClose={3000} />
        </div>
    );
};

export default SignUp;