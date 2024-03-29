import Link from 'next/link';
import AICube from '../public/assets/explore/ai.svg';
import MetaverseCube from '../public/assets/explore/metaverse.svg';
import DTCube from '../public/assets/explore/dt.svg';
import { useTranslation } from 'next-i18next';
import CubeFloat from '../components/cube-float';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

export default function Explore() {
    const { t, i18n } = useTranslation('common', { keyPrefix: 'explore' });

    return (
      <main id="explore">
        <CubeFloat number={50} bigger={true}/>
        <div className="explore-wrap">
          <div className="page-title">{t('title')}</div>

          <div className="links-wrap">
            {[{key:'ai',cube:<AICube/>},{key:'metaverse', cube:<MetaverseCube/>},{key:'digital-twin',cube:<DTCube/>}].map((topic) => {
            return(
              <Link key={topic.key} href={`/${topic.key}`} passHref>
                <div id={`${topic.key}_link`} className="explore_link lh">
                  <div className="cube">{topic.cube}</div>
                  <div className="link-title">{t(topic.key)}</div>
                </div>
              </Link>
            )
            })}
          </div>

          <div className="about-button-wrap">
          <Link href="/about"><div className="about-button lh"><InformationCircleIcon/> {t('about')}</div></Link>
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