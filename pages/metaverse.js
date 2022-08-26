import React, { useRef, useCallback, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Mountains from '../public/assets/metaverse/mountains.svg';
import Waves from '../public/assets/metaverse/waves.svg';
import Waves2 from '../public/assets/metaverse/waves2.svg';
import Meta from '../public/assets/metaverse/meta.svg';
import Clipboard from '../public/assets/metaverse/clipboard.svg';
import { ArrowRightIcon, XIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Modal from 'antd/lib/modal';

import dynamic from 'next/dynamic';
const DynamicLordIcon = dynamic(() => import('../components/LordIcon'), {
    ssr: false
});

const NUM_FACES = 17;

export default function Metaverse() {
    const { t, i18n } = useTranslation('metaverse');
    const containerRef = useRef();
    const onWheel = useCallback(e => {
        const containerScrollPosition = containerRef.current.scrollLeft;
        containerRef.current.scrollTo({
        top: 0,
        left: containerScrollPosition + e.deltaY,
        behaviour: "smooth"
        });
    }, []);

    const [isModalVisible, setIsModalVisible] = useState('');
    const [showScreen, setShowScreen] = useState(false);
    const [avatarFace, setAvatarFace] = useState(1);
    const [showBottom, setShowBottom] = useState(false);

    function avatarFwd() {
        let newFace = avatarFace + 1;
        if(avatarFace >= NUM_FACES){
            newFace = 1;
        }
        setAvatarFace(newFace);
    }

    function avatarBck() {
        let newFace = avatarFace - 1;
        if(avatarFace <= 1){
            newFace = NUM_FACES;
        }
        setAvatarFace(newFace);
    }

    const showBottomNav = () => {
        setShowBottom(true);
    }
    const hideBottomNav = () => {
        setShowBottom(false);
    }

    const handleScroll = (e) => {
        const bottom = Math.abs(e.target.scrollWidth - (e.target.scrollLeft + e.target.clientWidth)) <= 1;
        if (bottom) { 
            showBottomNav();
            console.log('got to bottom')
        } else {
            if(showBottom){
                hideBottomNav();
            }
        }
    }

    const staggerIn = {opacity:1, transition: {duration:0.7, staggerChildren:0.3}};

    return (
      <>
      <TopicMenu active="1"/>
      <main id="metaverse" ref={containerRef} onWheel={onWheel} onScroll={handleScroll}>
        <div style={{display:'none'}}><DynamicLordIcon /></div>
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {duration:0.7}}}
          className="intro-wrapper">
            <div className="intro">
                <div className="center-container">
                    <div className="page-title">{t('title')}</div>
                    <div className="desc">
                        {t('intro')}
                    </div>
                </div>
                <motion.a initial={{opacity:0}} animate={{opacity:1, transition: {duration:1.3}}} href="#xr"><div className="next-button"><ArrowRightIcon/></div></motion.a>
                <motion.div initial={{bottom:-400}} animate={{bottom:0, transition: {delay: 0.7, duration:1}}} style={{position:'absolute',bottom:0,right:0}}>
                    <Mountains className="mountains"/>
                </motion.div>
            </div>
        </motion.div>
        <div id="xr" className="section">
            <div className="xr_wrapper">
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}}>
                    <div className="xr_intro">
                        <div className="section-title">{t('xr.title')}</div>
                        <div className="xr_desc">{t('xr.desc')}</div>
                    </div>
                </motion.div>
                {['ar','vr','mr'].map(key => {
                    return(
                        <>
                        <motion.div initial={{opacity:0,y:-200}} whileInView={{opacity:1,y:0, transition: {type:'spring',duration: 2,delay:0.2}}} 
                          className="xr_device" key={key} id={key}>
                            <div onClick={() => setIsModalVisible(key)} className="lh">
                                <div className="xr_device_img"><Image src={`/assets/metaverse/${key}.svg`} width='400' height='400'/></div>
                                <div className="xr_device_title">{key}</div>
                            </div>
                        </motion.div>
                        
                        <Modal key={key} centered visible={isModalVisible === key} onCancel={() => setIsModalVisible('')} footer={null} closeIcon={<div className="modal-close lh"><XIcon/></div>}>
                            <div className="modal-wrap">
                                <div className="xr_modal_left">
                                    <img src={`/assets/metaverse/${key}.svg`} id={`${key}_img`}/>
                                </div>
                                <div className="xr_modal_right">
                                    <div className="modal-title">{t(`xr.${key}`)} </div>
                                    <div className="xr_modal_desc">
                                        <p>{t(`xr.${key}_desc`)}</p>
                                        <p>{t(`xr.${key}_how`)}</p>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                        </>
                    )
                })}
            </div>
        </div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition: {delay: 0.5}}} className="divider">
            <Waves className="waves-divider"/>
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition: {duration:0.7}}} 
          id="avatars" className="section">
            <div className="avatars_wrapper">
                <div className="customize_wrap">
                    <div className="customize-box-wrap">
                        <div className="arrow" onClick={() => avatarBck()}><ChevronLeftIcon/></div>
                        <div className="customize_box">
                            <img src={`/assets/metaverse/avatars/avatar_${avatarFace}.svg`}/>
                        </div>
                        <div className="arrow" onClick={() => avatarFwd()}><ChevronRightIcon/></div>
                    </div>
                    <div className="instructions">{t('avatars.instructions')}</div>
                </div>
                <div className="avatars_intro">
                    <div className="section-title">{t('avatars.title')}</div>
                    <div className="avatars_desc">{t('avatars.desc')}</div>
                </div>
            </div>
        </motion.div>
        <div  id="coins-divider" className="section">
            <motion.div initial={{opacity:0,scale:0.3,y:130}} whileInView={{scale:1,y:0,opacity:1, transition: {duration:1.2,delay: 0.1}}} id="coin1"/>
            <motion.div initial={{scale:0.3}} whileInView={{scale:1, transition: {duration:1,delay: 0.7}}} id="coin2"/>
            <motion.div initial={{scale:0.3}} whileInView={{scale:1, transition: {duration:1,delay: 0.3}}} id="coin3"/>
            <motion.div initial={{opacity:0,scale:0,y:-100}} whileInView={{y:0,opacity:1,scale:1, transition: {duration:0.8}}} id="coin4"/>
            <motion.div initial={{opacity:0,scale:0,x:-100}} whileInView={{x:0,opacity:1,scale:1, transition: {duration:0.6,delay: 0.3}}} id="coin5"/>
        </div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition: {delay:0.1,duration:0.7}}}
          id="ownership" className="section">
            <div className="ownership_intro">
                <div className="section-title">{t('ownership.title')}</div>
                <div className="ownership_desc">{t('ownership.desc')}</div>
            </div>
            <div className="blockchain-desktop">
                <div className={`text ${showScreen ? "hide" : "show"} lh`} onClick={() => setShowScreen(true)}>
                    <lord-icon trigger="hover" speed="0.4" src={`/assets/lotties/coins.json`} style={{margin:'-4vw 0 -1vw 0',width:'14vw', height:'14vw'}}/>
                    {t('ownership.blockchain')}
                </div>
                <div className={`text2 ${showScreen ? "show" : "hide"}`}> 
                    <XIcon className="closer lh" width="40px" onClick={() => setShowScreen(false)}/>
                    {t('ownership.blockchain_desc')}
                </div>
            </div>
        </motion.div>
        <motion.div id="manufacturing" className="section">
            <div className="section-title">{t('role.title')}</div>
            <div className="desc">{t('role.desc')}</div>
            <Waves2 className="waves-graphic"/>
            <div className="icons-wrap">
                <Meta/> <Clipboard/>
            </div>
        </motion.div>
        
        <Link href="/digital-twin" passHref>
            <div className={`reveal_next ${showBottom ? 'show' : 'hide'}`}>{t('next')} <ArrowRightIcon/></div>
        </Link>
        {/* <div id="enter_metaverse" className="section">
            <div className="section-title">enter the metaverse</div>
        </div> */}
      </main>
      </>
    )

}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import TopicMenu from '../components/topic-menu';
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common','metaverse']))
  }
})