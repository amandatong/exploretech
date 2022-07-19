import Image from 'next/image'
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t, i18n } = useTranslation('common', { keyPrefix: 'home' });

  return (
    <main id="home" >
      <div className="container">
        <div className="hero">
          <div className="title">{t('title')}</div>
          <div className="subtitle">{t('subtitle')}</div>
          <Link href="/second"><div className="button">{t('button')}</div></Link>
        </div>
      </div>
    </main>
  )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})