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

const icons_width = {width:'15rem', height:'15rem'};

export default function Future() {
    const { t, i18n } = useTranslation(['future']);
    
    const ref = useRef(null)

    const controls = useAnimationControls();
    const [expand, setExpand] = useState(false);
    const [showBottom, setShowBottom] = useState(false);
    // const [atTop, setAtTop] = useState(false);

    // const flagAtTop = (status) => {
    //     setShowBottom(status);
    // }

    const showBottomNav = () => {
        setShowBottom(true);
    }
    const hideBottomNav = () => {
        setShowBottom(false);
    }

    const doExpand =() => { 
        setExpand(true);
    }
    const dontExpand =() => { 
        setExpand(false)
    }

    const handleScroll = (e) => {
        // const top = e.target.scrollTop === 0;
        const bottom = Math.abs(e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight)) <= 1;
        const midpoint = e.target.scrollTop >= (e.target.clientHeight - e.target.scrollHeight)*0.5;
        // if (top){
        //     flagAtTop(true);
        // } else {
        //     if(top){
        //         flagAtTop(false);
        //     }
        // }
        if (bottom) { 
            showBottomNav();
        } else {
            if(showBottom){
                hideBottomNav();
            }
        }
        if (midpoint) { 
            doExpand();
        } else {
            if(midpoint){
                dontExpand();
            }
        }
    }

    useEffect(() => {
        // Call `initGradient` with the selector to your canvas
        gradient.initGradient('#gradient-canvas')
    }, []);

    useEffect(() => {
        if(expand){
            controls.start({width:'100vw',height:'100vh',padding:'0', borderWidth:'0', transition: { duration: 1 }});
        } else {
            controls.stop();
        }
    }, [expand])

    const variants = {
        // show: { opacity: 1, transition: { duration: 0.5 } },
        hide: { opacity: 0, transition: { duration: 0.5 } },
        show: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren",staggerChildren:0.3 } }
    }

    
    const item = {
        hide: { opacity: 0 },
        show: { opacity: 1 }
      }

    return(
        <>
        <main id="future" onScroll={handleScroll}>
            <div style={{display:'none'}}><DynamicLordIcon /></div>
            <div className="intro-wrap">
                <motion.div className="intro-canvas" 
                initial={{width:'90vw',height:'85vh',padding:'3rem', borderWidth:'0.5rem'}} 
                animate={controls}
                >
                    <motion.div className="page-title">{t('title')}</motion.div>
                    {/* <div style={{position:'absolute',bottom:'8rem',right:'8rem'}}
                    //  onClick={() => ref.current.scrollIntoView()}
                     >
                        <lord-icon trigger="loop" speed="0.3" src="/assets/lotties/mouse.json" style={icons_width}></lord-icon>
                    </div> */}
                    <motion.canvas id="gradient-canvas" 
                    animate={controls}
                    data-transition-in></motion.canvas>
                </motion.div>
            </div>
            <motion.div id="content" ref={ref} viewport={{amount: 0.4}}initial={{background:'hsla(102, 100%, 0%, 0)',transition:{delay:0.5,duration:1}}} whileInView={{background:"hsla(102, 100%, 0%, 0.35)",transition:{duration:1}}}>
                <motion.div className="next-wrap">
                    <motion.div className="next-desc" initial='hide' whileInView='show' variants={variants}>
                        <div className="section-title">{t('next')}</div>
                        <p>HMGICS will act as an open innovation hub for Hyundai Motor Group's research and development in mobility concepts, including autonomous vehicles and new forms of mobility products and services. It will develop innovative and intelligent manufacturing platform for future mobility, which will fulfill human-centered innovative products and services, by employing advanced technologies like AI, IoT, metaverse, and robotics. When realised, HMGICS’ new platform will help make the world safer and more efficient. HMGICS will provide eco- and worker-friendly environments. Customers will be able to purchase and customize their vehicles on their phones, or watch their car being assembled at the center. The Sky Track for test-driving will sit at top of the seven-story center. HMGICS will bring to the paradigm shift of future mobility through its prominent innovations and serve better future mobility lifestyle here in Singapore.</p>
                    </motion.div>
                    <motion.img src="/assets/future/cityscape.svg" className="city" initial={{bottom:-100, opacity:0}} whileInView={{bottom:0,opacity:1,transition:{duration:1}}}/>
                </motion.div>
                <motion.div className="next-wrap flexible">
                    <div className="next-desc">
                        <div className="section-title">M-CHORD</div>
                        <motion.div className="chord-wrap" initial='hide' whileInView='show' variants={variants}>
                            <motion.div className="chord-col" variants={item}>
                                <div className="img-hold"><lord-icon trigger="morph" speed="0.7" src="/assets/lotties/customer.json" style={icons_width}></lord-icon></div>
                                <div className="chord-title"><u>C</u>ustomer Focused</div>
                                <div className="chord-desc">Responding to the diverse needs of customers in a timely manner and Securing high flexibility and automation based on cell-based flexible production system and a robot-based autonomous logistic system.</div>
                            </motion.div>
                            <motion.div className="chord-col" variants={item}>
                                <div className="img-hold">
                                    <lord-icon trigger="morph" speed="0.7" src="/assets/lotties/human.json" style={icons_width}></lord-icon></div>
                                <div className="chord-title"><u>H</u>uman Centric</div>
                                <div className="chord-desc">Providing a safe and human-friendly work environment through an employee healthcare system (H-Care) and a smart work management system (S-Tutor).</div>
                            </motion.div>
                            <motion.div className="chord-col" variants={item}>
                                <div className="img-hold">
                                <lord-icon trigger="morph" speed="0.7" src="/assets/lotties/open.json" style={icons_width}></lord-icon>
                                </div>
                                <div className="chord-title"><u>O</u>pen Innovation</div>
                                <div className="chord-desc">Working and growing together with various stakeholders, including Singaporean government agencies, research institutes, and business partners to serve better future mobility lifestyle to Singapore.</div>
                            </motion.div>
                            <motion.div className="chord-col" variants={item}>
                                <div className="img-hold">
                                    <lord-icon trigger="morph" speed="0.7" src="/assets/lotties/resource.json" style={icons_width}/>
                                </div>
                                <div className="chord-title"><u>R</u>esource Circulation</div>
                                <div className="chord-desc">Realising eco-friendly mobility and production to protect the environment by enhancing battery performance and expanding use of CO2-free energy.</div>
                            </motion.div>
                            <motion.div className="chord-col" variants={item}>
                                <div className="img-hold">
                        <lord-icon trigger="morph" speed="0.7" src="/assets/lotties/cloud2.json" style={icons_width}/>
                                </div>
                                <div className="chord-title"><u>D</u>ata Governed</div>
                                <div className="chord-desc">Maximizing operational efficiency by using data, making connections between the digital twin and the physical factory via AI and big data.</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div className="next-wrap flexible" >
                    <motion.div className="next-desc updated-wrap"  initial='hide' whileInView='show' variants={variants}>
                        <div className="section-title">Stay Updated</div>
                        <div className="hyundai-links">
                            <div className="socials">
                                <div className="subsection-title">Hyundai Social Media</div>
                                <div className="icons-span">
                                    <div className="icon lh">
                                        <a href="https://www.linkedin.com/company/hmgics/" target="_blank"><img src="/assets/future/linkedin.svg"/></a>
                                    </div>
                                    <div className="icon lh">
                                        <a href="https://www.facebook.com/Hyundaiworldwide" target="_blank"><img src="/assets/future/facebook.svg"/></a>
                                    </div>
                                    <div className="icon lh">
                                        <a href="https://www.instagram.com/hyundai/" target="_blank"><img src="/assets/future/instagram.svg"/></a>
                                    </div>
                                    <div className="icon lh">
                                        <a href="http://www.youtube.com/user/hyundaiworldwide" target="_blank"><img src="/assets/future/youtube.svg"/></a>
                                    </div>
                                    <div className="icon lh">
                                        <a href="https://twitter.com/hyundai_global" target="_blank"><img src="/assets/future/twitter.svg"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="f_links">
                                <div className="subsection-title">Hyundai Links</div>
                                <div>
                                    <a href="https://hyundaisingapore.com/news/newsroom" target="_blank">Newsroom</a><br/>
                                    <a href="https://hyundaisingapore.com/contact-us" target="_blank">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="credits">
                            <div className="subsection-title">Credits</div>
                            <div>
                                Designed by Amanda Tong, 2022<br/>
                                <a href="https://lordicon.com/">Animated icons by Lordicon.com</a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
            
            <Link href="/" passHref>
                <div className={`reveal_next ${showBottom ? 'show' : 'hide'}`}>Back to Start <ArrowRightIcon/></div>
            </Link>
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