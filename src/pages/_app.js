import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
export default function App({ Component, pageProps }) {
  return (
    <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Piedra&display=swap"/>
            <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9040616366543275" crossorigin="anonymous"></script>
          </Head>
          <Navbar />
          <Component {...pageProps} />
          <Footer/>
    </>
  )
}
