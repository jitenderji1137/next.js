import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <html lang="en"> */}
          <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Piedra&display=swap"/>
            <link rel="icon" href="/logo.png" />
          </Head>
          <Navbar />
          <Component {...pageProps} />
          <Footer/>
          <Script async="async" data-cfasync="false" src="//toothbrushlimbperformance.com/0ad2289ea9e1e73bd2b5439c23a4fc36/invoke.js"></Script>
      {/* </html> */}
    </>
  )
}
