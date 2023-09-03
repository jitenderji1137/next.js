import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
export default function App({ Component, pageProps }) {
  return (
    <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:image" content="<generated>" />
            <meta property="og:image:alt" content="About Acme" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Piedra&display=swap"/>
            <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
          </Head>
          <Navbar />
          <Component {...pageProps} />
          <Footer/>
    </>
  )
}
