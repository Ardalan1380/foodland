export const validate = (data,type) => {

    const errors = {};

  
    if(!data.email) {
        errors.email = 'ایمیل اجباری می‌باشد'
    }else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'آدرس ایمیل نامعتبر است'
    }else {
        delete errors.email
    }
    if(!data.password) {
        errors.password = 'رمز عبور الزامی می‌باشد'
    }else if (data.password.length < 6) {
        errors.password = 'رمز عبور باید حداقل 6 کاراکتر باشد'
    }else {
        delete errors.email;
    }


    if(type==='signUp') {
        if(!data.name.trim())  {
            errors.name = 'نام کاربری الزامی می‌باشد'
        }else {
            delete errors.name;
        }
        if (!data.confirmPassword) {
            errors.confirmPassword = 'دوباره رمز عبور را وارد نمایید'
        }else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'رمز عبور مطابقت ندارد'
        }else {
            delete errors.confirmPassword;
        }
        if (!data.isAccepted) {
            errors.isAccepted = 'قوانین فودلند را می‌پذیرم'
        }else {
            delete errors.isAccepted;
        }
    }

    return errors; 
}