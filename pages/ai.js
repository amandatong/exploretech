import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import TopicMenu from '../components/topic-menu';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Robot from '../public/assets/ai/robot.svg';

import dynamic from 'next/dynamic';
const DynamicLordIcon = dynamic(() => import('../components/LordIcon'), {
    ssr: false
});

const icons_width = {width:'16vw', height:'16vw'};
const ML_STEPS = 7;
const ml_icons = [
    ['puzzle', 'system'],
    ['animals','cat'],
    ['pets','cat'],
    ['pets','cat'],
    ['pets','cat'],
    ['pets','cat'],
    ['pets','cat'],
]


export default function AI() {
    const { t, i18n } = useTranslation(['ai']);
    const [showBottom, setShowBottom] = useState(false);
    const [MLIndex, setMLIndex] = useState(0);
    const ml_cards = [];

    const nextSlide = () => { 
        let new_index = MLIndex + 1;
        if (new_index == ML_STEPS) {
            new_index = 0;
        }
        setMLIndex(new_index);
    }
    const prevSlide = () => { 
        let new_index = MLIndex - 1;
        if (new_index == -1) {
            new_index = ML_STEPS - 1;
        }
        setMLIndex(new_index);
    }

    for (let index = 0;index < ML_STEPS;index++){
        ml_cards.push(
            <div key={index} className={index === MLIndex ? 'show' : 'hide'}>
                <div className="section-title">{index !== 0 && `${index}.`} {t(`ml.steps.${index}.title`)}</div>
                <div className="desc">
                    <p>{t(`ml.steps.${index}.desc`)}</p>
                </div>
                <div className="button-wrap">
                    {index !== 0 && <div className="ex-button" onClick={() => prevSlide()}><ArrowLeftIcon/> {t('ml.prev')}</div>}
                    <div className="ex-button" onClick={() => nextSlide()}>{index === 0 ? t('ml.how') : (index === (ML_STEPS - 1) ? t('ml.finish') : t('ml.next'))} <ArrowRightIcon/></div>
                </div>
            </div>
        )
    }

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
                    {ml_cards}
                </div>

                <div className="ml_cards">
                    <div className="cards one">
                        <div className="card one">
                            <div className="animal-contain">
                                <lord-icon trigger="boomerang" speed="0.3" src={`/assets/lotties/${ml_icons[MLIndex][0]}.json`} style={icons_width}/>
                            </div>
                        </div>
                        <div className="card two"></div>
                        <div className="card three"></div>
                    </div>
                    <div className="cards two">
                        <div className="card one">
                            <div className="animal-contain">
                                <lord-icon trigger="loop" speed="0.4" src={`/assets/lotties/${ml_icons[MLIndex][1]}.json`} style={icons_width}/>
                            </div>
                        </div>
                        <div className="card two"></div>
                        <div className="card three"></div>
                    </div>
                </div>
            </div>
            <div className="application">
                <div className="center-wrap">
                    <div className="robot">
                        <Robot/>
                    </div>
                    <div className="info-wrap">
                        <div className="section-title">{t('role.title')}</div>
                        <div className="desc">
                            <p>{t('role.desc')}</p>
                        </div>
                    </div>
                </div>
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