import Image from 'next/image'
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { motion } from "framer-motion";
import CubeFloat from '../components/cube-float';

export default function Home() {
  const { t, i18n } = useTranslation('common', { keyPrefix: 'home' });

  return (
    <main id="home">
      <CubeFloat/>
      <div className="container">
        <div className="hero">
          <motion.div exit={{opacity:0}} className="title">{t('title')}</motion.div>
          <motion.div exit={{opacity:0}} className="subtitle">{t('subtitle')}</motion.div>
          <Link href="/explore"><div className="button lh">{t('button')}</div></Link>
        </div>
      </div>
    </main>
  )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})