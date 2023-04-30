import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const notify = () => toast('لطفا اطلاعات را به درستی وارد نمایید')

export const notify = (text , type) => {
    if(type==='success') {
        toast.success(text);
    }else{
        toast.error(text)
    }
}
