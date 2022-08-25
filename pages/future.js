import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { motion, useScroll, useAnimationControls, useInView  } from "framer-motion";
import { useEffect, useState, useRef } from 'react';
import { ArrowSmDownIcon, ArrowRightIcon } from '@heroicons/react/outline';
import dynamic from 'next/dynamic';
const DynamicLordIcon = dynamic(() => import('../components/LordIcon'), {
    ssr: false
});
import { Gradient } from '../components/Gradient';

// Create your instance
const gradient = new Gradient()

const icons_width = {width:'16vw', height:'16vw'};

export default function Future() {
    const { t, i18n } = useTranslation(['future']);
    
    const ref = useRef(null)
    const isInView = useInView(ref)

    const controls = useAnimationControls();
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

    useEffect(() => {
        // Call `initGradient` with the selector to your canvas
        gradient.initGradient('#gradient-canvas')
    }, []);

    useEffect(() => {
        if(!isInView){
            controls.start({width:'100vw',height:'100vh',padding:'0', borderWidth:'0'})
        }
    }, [isInView])

    return(
        <>
        <main id="future" onScroll={handleScroll}>
            <div style={{display:'none'}}><DynamicLordIcon /></div>
            <div className="intro-wrap">
                <motion.div className="intro-canvas" 
                initial={{width:'90vw',height:'85vw',padding:'3rem', borderWidth:'0.5rem'}} 
                animate={controls}
                >
                    <motion.div className="page-title" ref={ref}>Looking Ahead to the Future</motion.div>
                    <canvas id="gradient-canvas" data-transition-in></canvas>
                </motion.div>
            </div>
            {/* <div className="about-wrap">
                <div className="page-title">{t('title')}</div>
                <div className="subtitle">Hyundai Motor Group Innovation Center in Singapore</div>
            </div> */}
            {/* <Link href="/" passHref>
                <div className={`reveal_next ${showBottom ? 'show' : 'hide'}`}>Back to Start <ArrowRightIcon/></div>
            </Link> */}
        </main>
        </>
    )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'future']))
  }
})