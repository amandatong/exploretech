import { useState, useRef, useEffect } from 'react';
import TopicMenu from '../components/topic-menu';
import { useTranslation } from 'next-i18next';
import Blob from '../public/assets/digital-twin/blob_1.svg';
import dynamic from 'next/dynamic';
const DynamicLordIcon = dynamic(() => import('../components/LordIcon'), {
    ssr: false
});

const delay = 3100;
const leftConnect = ["/assets/lotties/bluetooth.json", "/assets/lotties/wireless.json"]
const icons_width = {width:'16vw', height:'16vw'};

export default function DigitalTwin() {
    const { t, i18n } = useTranslation('digital-twin');
    const [connectIndex, setConnectIndex] = useState(0);
    const [blobIndex, setBlobIndex] = useState(1);
    const timeoutRef = useRef(null);

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
                    <img className="blob" src="/assets/digital-twin/blob_1.svg"/>
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
                <div className="connect">
                    <div className="connect-wrap">
                        <div className="connect-icon">
                            <lord-icon trigger="loop" speed="0.3" src="/assets/lotties/wireless.json" style={icons_width}/>
                            {/* <lord-icon trigger="loop"
                                key={connectIndex}
                                src={leftConnect[connectIndex]}
                                speed="0.5"
                                style={icons_width}
                            /> */}
                        </div>
                        <div className="desc desktop">
                            <div className="subsection-title">{t('iot.connect.title')}</div>
                            <div className="subsection-desc">{t('iot.connect.desc')}</div>
                        </div>
                        <div className="connect-icon">
                            {/* <lord-icon trigger="loop" speed="0.3" src="/assets/lotties/cloud.json" style={icons_width}/> */}
                            <lord-icon trigger="loop" speed="0.3" src="/assets/lotties/server.json" style={icons_width}/>
                        </div>
                    </div>
                    <div className="desc mobile">
                        <div className="subsection-title">{t('iot.connect.title')}</div>
                        <div className="subsection-desc">{t('iot.connect.desc')}</div>
                    </div>
                </div>
                <img src="/assets/digital-twin/connect_line.svg" className="input-lines connect"/>
                <div className="analyze">
                    <div onClick={() => changeBlob()} className="digital">
                        <img className="blob" src={`/assets/digital-twin/blob_${blobIndex}.svg`}/>
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