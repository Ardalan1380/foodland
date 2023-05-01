import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './toast.module.css'

// const notify = () => toast('لطفا اطلاعات را به درستی وارد نمایید')

export const notify = (text , type) => {
    // const style;
    if(type==='success') {
        toast.success(text);
    }else{
        toast.error(text)
    }
}
