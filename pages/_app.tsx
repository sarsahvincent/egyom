import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <title>Egyom</title>
    <meta name="viewport" content="minimum-scale=1,initial-scale=1, width=device-width" />
  </Head>

  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
