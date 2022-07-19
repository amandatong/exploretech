import '../scss/styles.scss';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layout';
import withDarkMode, { MODE } from 'next-dark-mode'


function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Explore New Technologies</title>
        <meta name="description" content="an exploration of new technologies" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="../public/scripts/font.js"/>
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  )
}

export default appWithTranslation(withDarkMode(App,{ defaultMode: MODE.DARK }));
