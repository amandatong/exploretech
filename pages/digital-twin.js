import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import TopicMenu from '../components/topic-menu';
import LinesTop from '../components/lines-top';
import LinesBottom from '../components/lines-bottom';
import ConnectLine from '../components/connect-line';

import { ArrowRightIcon } from '@heroicons/react/outline';
import Blob from '../public/assets/digital-twin/blob_1.svg';

import dynamic from 'next/dynamic';
import { motion, useMotionValue, useTransform } from 'framer-motion';
const DynamicLordIcon = dynamic(() => import('../components/LordIcon'), {
    ssr: false
});

const delay = 3100;
const leftConnect = ["/assets/lotties/bluetooth.json", "/assets/lotties/wireless.json"];
const icons_width = {width:'16vw', height:'16vw'};

export default function DigitalTwin() {
    const { t, i18n } = useTranslation(['digital-twin']);
    const [connectIndex, setConnectIndex] = useState(0);
    const [blobIndex, setBlobIndex] = useState(1);
    const [showBottom, setShowBottom] = useState(false);
    const timeoutRef = useRef(null);
    
    const [blobColor, setBlobColor] = useState("cyan");

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

    let default_blob = "/assets/digital-twin/blob_1.svg";

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }

    function changeBlob() {
        console.log(blobIndex)
        let new_blob = blobIndex + 1;
        if (new_blob > 4) {
            new_blob = 1
        }
        setBlobIndex(new_blob)
    }

    function changeColor(color) {
        setBlobColor(color);
    }

    const color_variants = {
        red: { width: "55%"},
        red2: { width: "35%"},
        orange: { width: "15%"},
        orange2: { width: "85%"},
        yellow: { width: "25%"},
        yellow2: { width: "95%"},
        green: { width: "40%"},
        green2: { width: "5%"},
        cyan: { width: "62%"},
        cyan2: { width: "54%"},
        blue: { width: "90%"},
        blue2: { width: "40%"},
        purple: { width: "33%"},
        purple2: { width: "81%"},
    }
    // const x = useMotionValue(200);
    // const y = useMotionValue(200);

    // const rotateX = useTransform(x, [0, 400], [25, -25]);
    // const rotateY = useTransform(y, [0, 400], [25, -25]);

    // function handleMouse(event) {
    //     const rect = event.currentTarget.getBoundingClientRect();

    //     x.set(event.clientX - rect.left);
    //     y.set(event.clientY - rect.top);
    // }

    // useEffect(() => {
    //     resetTimeout();
    //     timeoutRef.current = setTimeout(
    //       () =>
    //       setConnectIndex((prevIndex) =>
    //           prevIndex === leftConnect.length - 1 ? 0 : prevIndex + 1
    //         ),
    //       delay
    //     );
    
    //     return () => {
    //       resetTimeout();
    //     };
    //   }, [connectIndex]);

    const intro_info = <><div className="page-title">{t('title')}</div><div className="desc">{t('desc')}</div></>;
    const fadeVariants = {
        fadeIn: i => ({
            opacity:1,
            transition: {
                delay: i * 0.1,
                duration: 0.7
            }
        }),
        hidden: { 
            opacity: 0,
            transition: {
              when: "afterChildren"
            }
        },
        show: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3
          }
        },
        itemShow: { opacity: 1}
    }
    
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

    return(
        <>
        <TopicMenu active="2"/>
        <main id="digital-twin" onScroll={handleScroll}>
            <div style={{display:'none'}}><DynamicLordIcon /></div>
            <motion.div className="dt_intro" initial={{opacity:0}} animate={{opacity:1, transition: {duration:0.7}}}>
                <motion.div className="dt_intro-text desktop" initial={{x:-50}} whileInView={{x:0, transition: {duration:0.7}}}>
                    {intro_info}
                </motion.div>
                <div className="blobs">
                    <motion.div className="physical blob-contain" initial={{y:50}} whileInView={{y:0, transition: {duration:0.7}}}>
                        <motion.div initial={{y:-50}} whileInView={{y:0, transition: {duration:1}}}><Blob className="blob"/></motion.div>
                    </motion.div>
                    <div className="dt_intro-text mobile">
                        {intro_info}
                    </div>
                    <div className="digital blob-contain" initial={{y:-50}} whileInView={{y:0, transition: {duration:0.7}}}>
                        <motion.div initial={{y:50}} whileInView={{y:0, transition: {duration:1}}}><Blob className="blob"/></motion.div>
                    </div>
                </div>
            </motion.div>
            <div className="iot">
                <motion.div className="section-title" initial="hidden" custom={3} whileInView="fadeIn" variants={fadeVariants}>{t('iot.title')}</motion.div>
                <motion.div className="iot-desc"  initial="hidden" custom={5} whileInView="fadeIn" variants={fadeVariants}>{t('iot.desc')}</motion.div>
                <motion.div className="physical"  initial="hidden" custom={7} whileInView="fadeIn" variants={fadeVariants}>
                    <img className="blob" src="/assets/digital-twin/blob_1.svg"/>
                </motion.div>
                <LinesTop/>
                {/* <motion.img src="/assets/digital-twin/input_lines_top.svg" className="input-lines"
                    initial="hidden" custom={5} whileInView="fadeIn" variants={fadeVariants}/> */}
                <div className="inputs">
                    <div className="input desc mobile">
                        <div className="subsection-title">{t('iot.input.title')}</div>
                        <div className="subsection-desc">{t('iot.input.desc')}</div>
                    </div>
                    <motion.div className="inputs-wrap" initial="hidden" whileInView="show" variants={fadeVariants}>
                        <motion.div className="input" variants={item}>
                            <lord-icon trigger="morph" src="/assets/lotties/bar_chart.json" style={icons_width}></lord-icon>
                            {/* monitor energy, temperature, pressure levels in real time*/}
                        </motion.div>
                        <motion.div className="input" variants={item}>
                            <lord-icon trigger="morph" src="/assets/lotties/location.json" style={icons_width}></lord-icon>
                            {/* track location of products as it moves through the factory */}
                        </motion.div>
                        <motion.div className="input desc desktop" variants={item}>
                            <div className="subsection-title">{t('iot.input.title')}</div>
                            <div className="subsection-desc">{t('iot.input.desc')}</div>
                        </motion.div>
                        <motion.div className="input" variants={item}>
                            <lord-icon trigger="morph" src="/assets/lotties/film.json" style={icons_width}></lord-icon>
                            {/* use computer vision to inform the status and efficiency of the system, or track output quantity */}
                        </motion.div>
                        <motion.div className="input" variants={item}>
                            <lord-icon trigger="morph" src="/assets/lotties/tool.json" style={icons_width}></lord-icon>
                            {/* detect errors and bugs in a system's operations so the DT can find how to fix it */}
                        </motion.div>
                    </motion.div>
                </div>
                {/* <img src="/assets/digital-twin/input_lines_bottom.svg" className="input-lines bottom"/> */}
                <LinesBottom/>
                <div className="connect">
                    <motion.div className="connect-wrap" initial="hidden" whileInView="show" variants={fadeVariants} transition={{delay:0.6}}>
                        <motion.div className="connect-icon" variants={item}>
                            <lord-icon trigger="loop" speed="0.3" src="/assets/lotties/wireless.json" style={icons_width}/>
                            {/* <lord-icon trigger="loop"
                                key={connectIndex}
                                src={leftConnect[connectIndex]}
                                speed="0.5"
                                style={icons_width}
                            /> */}
                        </motion.div>
                        <motion.div className="desc desktop" variants={item}>
                            <div className="subsection-title">{t('iot.connect.title')}</div>
                            <div className="subsection-desc">{t('iot.connect.desc')}</div>
                        </motion.div>
                        <motion.div className="connect-icon" variants={item}>
                            {/* <lord-icon trigger="loop" speed="0.3" src="/assets/lotties/cloud.json" style={icons_width}/> */}
                            <lord-icon trigger="loop" speed="0.3" src="/assets/lotties/server.json" style={icons_width}/>
                        </motion.div>
                    </motion.div>
                    <div className="desc mobile">
                        <div className="subsection-title">{t('iot.connect.title')}</div>
                        <div className="subsection-desc">{t('iot.connect.desc')}</div>
                    </div>
                </div>
                {/* <img src="/assets/digital-twin/connect_line.svg" className="input-lines connect"/> */}
                <ConnectLine/> 
                <div className="analyze">
                    {/* <div onClick={() => changeBlob()} className="digital">
                        <img className="blob" src={`/assets/digital-twin/blob_${blobIndex}.svg`}/>
                    </div> */}
                    <motion.div className="digital" 
                        // onMouseMove={handleMouse} style={{perspective:400}}
                    >
                        <motion.img className="blob" src={`/assets/digital-twin/blob_1_${blobColor}.svg`} 
                                    animate={{y:10, transition:{from: -10, repeat: Infinity, repeatType: "mirror", duration: 1.5}}}
                                    // style={{translateX: rotateX, translateY: rotateY}}
                                    drag dragConstraints={{left:-10,right:10,top:-10,bottom:10}} dragElastic={0.1} dragSnapToOrigin={true}
                                    whileTap={{ scale: 0.8 }}
                        />
                        <div className="faux-stats">
                            <div className="stat-block">
                                <motion.div className={`${blobColor} progress`} animate={blobColor} variants={color_variants} transition={{duration:0.7}}/>
                            </div>
                            <div className="stat-block">
                                <motion.div className={`${blobColor} progress`} animate={`${blobColor}2`} variants={color_variants} transition={{duration:0.7}}/>
                            </div>
                        </div>
                    </motion.div>
                    <div className="color-select">
                        {['red', 'orange', 'yellow', 'green', 'cyan','blue', 'purple'].map(color => {
                            return(
                                <motion.div key={color} className={`color-option lh ${color} ${color == blobColor ? 'active' : null}`} onClick={() => changeColor(color)}
                                />
                            )
                        })}
                    </div>
                    <div className="desc">
                        <div className="subsection-title">{t('iot.analyze.title')}</div>
                        <div className="subsection-desc">{t('iot.analyze.desc')}</div>
                    </div>
                </div>
                <img src="/assets/digital-twin/analyze_line.svg" className="input-lines connect"/>
                <div className="conclusion">
                    {t('iot.output')}
                </div>
                <div className="manufacturing">
                    <div className="role-blobs">
                        <div className="physical">
                            <img className="blob" src="/assets/digital-twin/blob_1.svg"/>
                        </div>
                        <div className="digital">
                            <img className="blob" src={`/assets/digital-twin/blob_1_${blobColor}.svg`}/>
                        </div>
                    </div>
                    <div className="desc">
                        <div className="section-title">{t('role')}</div>
                        <div className="section-desc">{t('role_desc')}</div>
                    </div>
                </div>
            </div>
            <Link href="/future" passHref>
                <div className={`reveal_next ${showBottom ? 'show' : 'hide'}`}>{t('next')} <ArrowRightIcon/></div>
            </Link>
        </main>
        </>
        
    )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common','digital-twin','ai','metaverse']))
  }
})