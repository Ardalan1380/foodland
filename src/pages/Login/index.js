import React from 'react';
import SignUp from '../../../components/Login/SignUp';
import Login from '../../../components/Login/Login';
import Head from 'next/head';

const index = () => {
    return (
        <div>
        <Head>
        <title>ورود</title>
        <meta name='description' content="Food order site createing by next.js" />
        <link rel="icon" href=".//favicon.ico" /> 
        </Head>
            <Login />
        </div>
    );
};

export default index;