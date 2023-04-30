import React from 'react';
import Products from '../../../components/template/Products';
import Head from 'next/head';

const index = ({data}) => {
    console.log(data)
    return (
        <div>
        <Head>
        <title>محصولات</title>
        <meta name='description' content="Food order site createing by next.js" />
        <link rel="icon" href=".//favicon.ico" /> 
        </Head>
            <Products data={data} />
        </div>
    );
};

export default index;


export async function getStaticProps () {

    const res = await fetch("https://api-foodland.vercel.app/data");
    const data = await res.json()

    return {
        props : {data},
        revalidate : 10 * 60 * 60
    }
}