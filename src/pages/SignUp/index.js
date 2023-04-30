import React from 'react';
import SignUp from '../../../components/Login/SignUp';
import Head from 'next/head';

const index = () => {
    return (
        <div>
        <Head>
        <title>ثبت نام</title>
        <meta name='description' content="Food order site createing by next.js" />
        <link rel="icon" href=".//favicon.ico" /> 
        </Head>
            <SignUp />
        </div>
    );
};

export default index;