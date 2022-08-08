import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import TopicMenu from '../components/topic-menu';
import { ArrowRightIcon } from '@heroicons/react/outline';
import NeuralNet from '../public/assets/ai/neural_net.svg';

import dynamic from 'next/dynamic';
const DynamicLordIcon = dynamic(() => import('../components/LordIcon'), {
    ssr: false
});
const icons_width = {width:'16vw', height:'16vw'};

export default function AI() {
    const { t, i18n } = useTranslation(['ai']);
    const [showBottom, setShowBottom] = useState(false);

    const showBottomNav = () => {
        setShowBottom(true);
    }
    const hideBottomNav = () => {
        setShowBottom(false);
    }

    const handleScroll = (e) => {
        const bottom = Math.abs(e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight)) <= 1;
        if (bottom) { 
            showBottomNav();
        } else {
            if(showBottom){
                hideBottomNav();
            }
        }
    }

    return(
        <>
        <TopicMenu active="0"/>
        <main id="ai" onScroll={handleScroll}>
            <div style={{display:'none'}}><DynamicLordIcon /></div>
            <div className="ai_intro">
                {/* <img src="/assets/ai/neural_net.svg" className="nn"/> */}
                <div className="intro-right">
                    <div className="intro-wrap">
                        <div className="page-title">{t('title')}</div>
                        <div className="desc">
                            <p>{t('desc.ai')}</p>
                            <p>{t('desc.big_data')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml_intro_wrap">
                <div className="ml_intro">
                    <div className="section-title">{t('ml.title')}</div>
                    <div className="desc">
                        <p>{t('ml.desc')}</p>
                    </div>
                    <div className="ex-button">how it works <ArrowRightIcon/></div>
                </div>
                <div className="ml_cards">
                    <div className="cards one">
                        <div className="card one">
                            <div className="animal-contain">
                                <lord-icon trigger="loop" speed="0.3" src="/assets/lotties/horse.json" style={icons_width}/>
                            </div>
                        </div>
                        <div className="card two"></div>
                        <div className="card three"></div>
                    </div>
                    <div className="cards two">
                        <div className="card one">
                            <div className="animal-contain">
                                <lord-icon trigger="loop" speed="0.4" src="/assets/lotties/horse_2.json" style={icons_width}/>
                            </div>
                        </div>
                        <div className="card two"></div>
                        <div className="card three"></div>
                    </div>
                </div>
            </div>
            <div className="machine-learning">
                hello
            </div>
            <Link href="/metaverse" passHref>
                <div className={`reveal_next ${showBottom ? 'show' : 'hide'}`}>{t('next')} <ArrowRightIcon/></div>
            </Link>
        </main>
        </>
    )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common','ai']))
  }
})