import Head from 'next/head'
import HomePage from '../../components/template/HomePage'


export default function Home() {
  return (
    <>
        <Head>
        <title>Food Land</title>
        <meta name='description' content="Food order site createing by next.js" />
        <link rel="icon" href=".//favicon.ico" /> 
        </Head>
        <HomePage />
    </>
  )
}
