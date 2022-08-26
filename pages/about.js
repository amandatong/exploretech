import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { ArrowSmDownIcon, ArrowRightIcon } from '@heroicons/react/outline';
import dynamic from 'next/dynamic';
const DynamicLordIcon = dynamic(() => import('../components/LordIcon'), {
    ssr: false
});

const icons_width = {width:'16vw', height:'16vw'};

export default function About() {
    const { t, i18n } = useTranslation(['about']);
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
        <main id="about" onScroll={handleScroll}>
            <div style={{display:'none'}}><DynamicLordIcon /></div>
            <div className="about-wrap">
                <div className="page-title">{t('title')}</div>
                <div className="subtitle">Hyundai Motor Group Innovation Center in Singapore</div>
                <img src="/assets/about/wave.svg" className="bottom-wave"/>
                <a href="#more"><div className="scroll-arrow-wrap lh"><ArrowSmDownIcon/></div></a>
            </div>
            {/* Credits: <a href="https://lordicon.com/">Animated icons by Lordicon.com</a> */}
            <div id="more" className="moreinfo">
                <div className="more-wrap">
                <div className="section-title">Introduction</div>
                <div className="desc">
                    <p>HMGICS is a global open innovation hub and smart factory, focused on human-centered innovation, digital transformation, and 
                        open collaboration to enter a new era of mobility. The center will use the technology of Industry 4.0 to focus 
                        on research, customer journeys, and the production of future mobility solutions.</p>
                    <p>HMGICS will provide these innovative solutions to the people and communities in Singapore, with the aim of enriching their lives.</p>
                    <p>Hyundai Motor Company, Kia Corporation, Hyundai Mobis and Hyundai AutoEver, who are part of Hyundai Motor Group, are 
                        working together as the primary collaborators to fully realize the creation of HMGICS.</p>
                </div>
                <div className="i-wrap">
                    <div className="vision">
                        {/* <lord-icon trigger="morph" src="/assets/lotties/eye.json" style={icons_width}></lord-icon> */}
                        <div className="subsection-title">Vision</div>
                        <div className="desc">
                            HMGICS aims to push forward to grow in the future by providing human-centred future mobility paradigm as a game changer.
                            <div className="quote">
                                "We are here to do the right thing for humanity."
                            </div>
                        </div>
                    </div>
                    <div className="mission">
                        {/* <lord-icon trigger="morph" src="/assets/lotties/globe.json" style={icons_width}></lord-icon> */}
                        <div className="subsection-title">Mission</div>
                        <div className="desc">
                            <ul>
                            <li>Develop the cutting-edge smart manufacturing innovation platform through Industry 4.0 technologies such as AI, ICT, Big Data, and Robotics</li>
                            <li>Provide multiple innovative products and services for better mobility lifestyle in customer and eco-friendly way</li>
                            <li>Grow together with customer and society through open innovation in strong collaboration with government</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Link href="/explore" passHref>
                <div className={`reveal_next ${showBottom ? 'show' : 'hide'}`}>Back to Explore <ArrowRightIcon/></div>
            </Link>
        </main>
    )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about']))
  }
})