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
            <script type='text/javascript' src='//playgroundordinarilymess.com/60/22/8a/60228a9740be2554dce96d52daee6feb.js'></script>
          </Head>
          <Navbar />
          <Component {...pageProps} />
          <Footer/>
          <script type='text/javascript' src='//playgroundordinarilymess.com/4e/81/7e/4e817e7917be4440e132a30f4cb75ef2.js'></script>
    </>
  )
}
