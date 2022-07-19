import { useTranslation } from 'next-i18next';
import { MoonIcon, SunIcon, GlobeAltIcon, MenuIcon } from '@heroicons/react/outline';
import { Dropdown, Menu, Space } from 'antd';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDarkMode } from 'next-dark-mode'

const langs = (
    <Menu
      items={[
        {
          label: <Link href="" locale="en">English</Link>,
          key: '0',
        },
        {
            label: <Link href="" locale="ko">한국어</Link>,
          key: '1',
        },
      ]}
    />
  );

export default function Topbar() {
    // const { darkMode, setDarkMode } = useThemeContext();
    const { t, i18n } = useTranslation('common', { keyPrefix: 'topbar' });
    const {
        autoModeActive,    // boolean - whether the auto mode is active or not
        autoModeSupported, // boolean - whether the auto mode is supported on this browser
        darkModeActive,    // boolean - whether the dark mode is active or not
        switchToAutoMode,  // function - toggles the auto mode on
        switchToDarkMode,  // function - toggles the dark mode on
        switchToLightMode, // function - toggles the light mode on
      } = useDarkMode()

      const toggleMode = () => {
        if (darkModeActive){
          switchToLightMode();
        } else {
          switchToDarkMode();
        }
        let theme = darkModeActive ? 'dark' : 'light';
        document.body.id = theme;
      }
      
      useEffect(() => {
            let theme = darkModeActive ? 'light' : 'dark';
            document.body.id = theme;
        }, []);
      
    // useEffect(() => {
    //   // if(darkMode){
    //   //   switchToLightMode();
    //   // } else {
    //   //   switchToDarkMode();
    //   // }
    //     let theme = darkModeActive ? 'dark' : 'light';
    //     document.body.id = theme;
    // }, [darkModeActive]);

    return(
        <div id="topbar">
            <div className="settings">
                <div className="mode-switch" onClick={() => toggleMode()}>
                    {darkModeActive ? <><MoonIcon/> {t('dark')}</> : <><SunIcon/> {t('light')}</>}
                </div>
                
                <Dropdown overlay={langs} trigger={['click']}><a title={t('lang')} onClick={e => e.preventDefault()}><GlobeAltIcon/></a></Dropdown>
            </div>
            {/* {t('lang')} */}
            
            <div className="menu">
                {t('menu')}
                <MenuIcon/>
            </div>
        </div>
    )
}