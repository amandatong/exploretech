import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Second() {
    const { t, i18n } = useTranslation('common', { keyPrefix: 'home' });
    return (
        <>
        <Link href="" locale="en">English</Link> <Link href="" locale="ko">Korean</Link>
          {t('subtitle')}
        </>
      )

}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  })