import '../scss/styles.scss';
import React, { useEffect, useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layout';
import withDarkMode, { useDarkMode, MODE } from 'next-dark-mode';


function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Explore New Technologies</title>
        <meta name="description" content="an exploration of new technologies" />
        <link rel="icon" href="/favicon.ico"/>
        
      <Script>
        {`(function(d) {
            var config = {
              kitId: 'gnh3taq',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);`}
      </Script>
        
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  )
}

export default appWithTranslation(withDarkMode(App,{ defaultMode: MODE.DARK }));
