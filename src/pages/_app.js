import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '@/components/navbar/navbar'
export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Piedra&display=swap"/>
          <link rel="icon" href="/logo.png" />
          <Script type='text/javascript' src='//toothbrushlimbperformance.com/e3/84/8c/e3848cc2ba52f8c8c8a0c97335996bea.js'/>
        </Head>
        <Navbar/>
        <Component {...pageProps} />
        <Script type='text/javascript' src='//toothbrushlimbperformance.com/8c/89/a3/8c89a37d7a271d17f9442787e948475f.js'/>
    </>
  )
}
