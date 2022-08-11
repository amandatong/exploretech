import React, { useRef, useCallback, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Mountains from '../public/assets/metaverse/mountains.svg';
import Waves from '../public/assets/metaverse/waves.svg';
import Waves2 from '../public/assets/metaverse/waves2.svg';
import Coin1 from '../public/assets/metaverse/coin_1.svg';
import Coin2 from '../public/assets/metaverse/coin_2.svg';
import Coin3 from '../public/assets/metaverse/coin_3.svg';
import Coin4 from '../public/assets/metaverse/coin_4.svg';
import Coin5 from '../public/assets/metaverse/coin_5.svg';
import { ArrowRightIcon, XIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Modal from 'antd/lib/modal';

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

    return (
      <>
      <TopicMenu active="1"/>
      <main id="metaverse" ref={containerRef} onWheel={onWheel} onScroll={handleScroll}>
        <div className="intro-wrapper">
            <div className="intro">
                <div className="center-container">
                    <div className="page-title">{t('title')}</div>
                    <div className="desc">
                        {t('intro')}
                    </div>
                </div>
                <a href="#xr"><div className="next-button"><ArrowRightIcon/></div></a>
                <Mountains className="mountains"/>
            </div>
        </div>
        <div id="xr" className="section">
            <div className="xr_wrapper">
                <div className="xr_intro">
                    <div className="section-title">{t('xr.title')}</div>
                    <div className="xr_desc">{t('xr.desc')}</div>
                </div>
                {['ar','vr','mr'].map(key => {
                    return(
                        <div className="xr_device" key={key} id={key}>
                            <div onClick={() => setIsModalVisible(key)}>
                                <div className="xr_device_img"><Image src={`/assets/metaverse/${key}.svg`} width='400' height='400'/></div>
                                <div className="xr_device_title">{t(`xr.${key}`)}</div>
                            </div>
                            <Modal centered visible={isModalVisible === key} onCancel={() => setIsModalVisible('')} footer={null} closeIcon={<div className="modal-close"><XIcon/></div>}>
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
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="divider">
            <Waves className="waves-divider"/>
        </div>
        <div id="avatars" className="section">
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
        </div>
        <div id="coins-divider" className="section">
            <div id="coin1"/>
            <div id="coin2"/>
            <div id="coin3"/>
            <div id="coin4"/>
            <div id="coin5"/>
        </div>
        <div id="ownership" className="section">
            <div className="ownership_intro">
                <div className="section-title">{t('ownership.title')}</div>
                <div className="ownership_desc">{t('ownership.desc')}</div>
            </div>
            <div className="blockchain-desktop">
                <div className="text">{t('ownership.blockchain')}</div>
            </div>
        </div>
        <div id="manufacturing" className="section">
            <div className="section-title">{t('role.title')}</div>
            <div className="desc">{t('role.desc')}</div>
            <Waves2 className="waves-graphic"/>
        </div>
        <div id="enter_metaverse" className="section">
            <div className="section-title">enter the metaverse</div>
        </div>
        
        <Link href="/digital-twin" passHref>
            <div className={`reveal_next ${showBottom ? 'show' : 'hide'}`}>{t('next')} <ArrowRightIcon/></div>
        </Link>
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