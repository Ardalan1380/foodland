import '@/styles/globals.css'
import Layout from '../../components/layout/Layout';
import CartContextProvider from '../../context/CartContextProvider';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
export default function App({ Component, pageProps } ) {

    useEffect(() => {
      window.addEventListener('beforeunload', alertUser)
      return () => {
        window.removeEventListener('beforeunload', alertUser)
      }
    }, [])
    
    const alertUser = e => {
      e.preventDefault()
      e.returnValue = ""
    }
  
  return (
  <CartContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CartContextProvider>
  )
}
