import { React } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Custom404() {
    const { t, i18n } = useTranslation('common', { keyPrefix: 'error' });
    return (
      <main>
        {t('content')}<br/>
        <Link href="/">{t('return')}</Link>
      </main>
    )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})