import TopicMenu from '../components/topic-menu';
import { useTranslation } from 'next-i18next';
import Blob from '../public/assets/digital-twin/blob.svg';
// import { loadAnimation } from "lottie-web";
// import { defineLordIconElement } from "lord-icon-element";
import dynamic from 'next/dynamic';
const DynamicLordIcon = dynamic(() => import('../components/LordIcon'), {
    ssr: false
});

// defineLordIconElement(loadAnimation);

export default function DigitalTwin() {
    const { t, i18n } = useTranslation('digital-twin');

    const intro_info = <><div className="page-title">{t('title')}</div><div className="desc">{t('desc')}</div></>;
    const icons_width = {width:'250px', height:'250px'};

    return(
        <>
        <TopicMenu active="2"/>
        <main id="digital-twin">
            <div style={{display:'none'}}><DynamicLordIcon /></div>
            <div className="dt_intro">
                <div className="dt_intro-text desktop">
                    {intro_info}
                </div>
                <div className="blobs">
                    <div className="physical blob-contain">
                        <Blob className="blob"/>
                    </div>
                    <div className="dt_intro-text mobile">
                        {intro_info}
                    </div>
                    <div className="digital blob-contain">
                        <Blob className="blob"/>
                    </div>
                </div>
            </div>
            <div className="iot">
                <div className="section-title">{t('iot.title')}</div>
                <div className="iot-desc">{t('iot.desc')}</div>
                <div className="physical">
                    <img className="blob" src="/assets/digital-twin/blob.svg"/>
                </div>
                <img src="/assets/digital-twin/input_lines_top.svg" className="input-lines"/>
                <div className="inputs">
                    <div className="input desc mobile">
                        <div className="subsection-title">{t('iot.input.title')}</div>
                        <div className="subsection-desc">{t('iot.input.desc')}</div>
                    </div>
                    <div className="inputs-wrap">
                        <div className="input">
                            <lord-icon trigger="morph" src="/assets/lotties/bar_chart.json" style={icons_width}></lord-icon>
                            {/* monitor energy, temperature, pressure levels in real time*/}
                        </div>
                        <div className="input">
                            <lord-icon trigger="morph" src="/assets/lotties/location.json" style={icons_width}></lord-icon>
                            {/* track location of products as it moves through the factory */}
                        </div>
                        <div className="input desc desktop">
                            <div className="subsection-title">{t('iot.input.title')}</div>
                            <div className="subsection-desc">{t('iot.input.desc')}</div>
                        </div>
                        <div className="input">
                            <lord-icon trigger="morph" src="/assets/lotties/film.json" style={icons_width}></lord-icon>
                            {/* use computer vision to inform the status and efficiency of the system, or track output quantity */}
                        </div>
                        <div className="input">
                            <lord-icon trigger="morph" src="/assets/lotties/tool.json" style={icons_width}></lord-icon>
                            {/* detect errors and bugs in a system's operations so the DT can find how to fix it */}
                        </div>
                    </div>
                </div>
                <img src="/assets/digital-twin/input_lines_bottom.svg" className="input-lines bottom"/>

            </div>
        </main>
        </>
        
    )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common','digital-twin']))
  }
})