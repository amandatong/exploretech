import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Wave from '../public/assets/about/wave.svg';
import { motion } from 'framer-motion';
import { ArrowSmDownIcon } from '@heroicons/react/outline';


export default function About() {
    const { t, i18n } = useTranslation(['about']);
    return(
        <motion.main id="about" layout layoutId="aboutmotion">
            <div className="about-wrap">
                <div className="page-title">{t('title')}</div>
                <div className="subtitle">Hyundai Motor Group Innovation Center in Singapore</div>
                {/* <div className="desc">
                    <p>HMGICS is a global open innovation hub and smart factory, focused on human-centered innovation, digital transformation, and 
                        open collaboration to enter a new era of mobility. The center will use the technology of Industry 4.0 to focus 
                        on research, customer journeys, and the production of future mobility solutions.</p>
                    <p>HMGICS will provide these innovative solutions to the people and communities in Singapore, with the aim of enriching their lives.</p>
                    <p>Hyundai Motor Company, Kia Corporation, Hyundai Mobis and Hyundai AutoEver, who are part of Hyundai Motor Group, are 
                        working together as the primary collaborators to fully realize the creation of HMGICS.</p>
                </div> */}
            </div>
            <div className="scroll-arrow-wrap"><ArrowSmDownIcon/></div>
            <img src="/assets/about/wave.svg" className="bottom-wave"/>
            {/* <Wave className="bottom-wave"/> */}
            {/* Credits: <a href="https://lordicon.com/">Animated icons by Lordicon.com</a> */}
        </motion.main>
    )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about']))
  }
})