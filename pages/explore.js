import Link from 'next/link';
import AICube from '../public/assets/explore/ai.svg';
import MetaverseCube from '../public/assets/explore/metaverse.svg';
import DTCube from '../public/assets/explore/dt.svg';
import { useTranslation } from 'next-i18next';

export default function Explore() {
    const { t, i18n } = useTranslation('common', { keyPrefix: 'explore' });

    return (
      <main id="explore">
        <div className="page-title">{t('title')}</div>

        <div className="links-wrap">
          {[{key:'ai',cube:<AICube/>},{key:'metaverse', cube:<MetaverseCube/>},{key:'digital-twin',cube:<DTCube/>}].map((topic) => {
          return(
            <Link key={topic.key} href={`/${topic.key}`} passHref>
              <div id={topic.key} className="link">
                <div className="cube">{topic.cube}</div>
                <div className="link-title">{t(topic.key)}</div>
              </div>
            </Link>
          )
          })}
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