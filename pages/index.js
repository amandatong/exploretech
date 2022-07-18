import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image'
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t, i18n } = useTranslation('common', { keyPrefix: 'home' });

  return (
    <>
      <main>
      <div className="hero korean">
      <Link href="" locale="en">English</Link> <Link href="" locale="ko">Korean</Link>
      {t('title')}
      </div>
      </main>
    </>
  )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})