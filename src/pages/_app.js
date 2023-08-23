import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
export default function App({ Component, pageProps }) {
  return (
    <>
          <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Piedra&display=swap"/>
            <link rel="icon" href="/logo.png" />
          </Head>
          <Navbar />
          <Component {...pageProps} />
          <Footer/>
    </>
  )
}
