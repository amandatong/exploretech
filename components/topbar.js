import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useDarkMode } from 'next-dark-mode';
import { MoonIcon, SunIcon, GlobeAltIcon, MenuIcon } from '@heroicons/react/outline';
import { Dropdown, Menu, Tooltip, Drawer } from 'antd';
import NavMenu from './nav-menu';

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
  const { t, i18n } = useTranslation('common', { keyPrefix: 'topbar' });
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

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
      
  useEffect( () => { document.body.className = i18n.language } );

  return(
    <div id="topbar">
      <div className="settings">
        <Tooltip placement="bottomLeft" title={darkModeActive ? `${t('dark')}` : `${t('light')}`}>
          <div className="mode-switch" onClick={() => toggleMode()}>
            {darkModeActive ? <MoonIcon/> : <SunIcon/>}
          </div>
        </Tooltip>

        <Tooltip placement="bottomLeft" title={`${t('lang')}`}>
          <Dropdown overlay={langs} trigger={['click']}><a onClick={e => e.preventDefault()}><GlobeAltIcon/></a></Dropdown>
        </Tooltip>
      </div>
            
      <div className="menu" onClick={showDrawer}>
        <Tooltip placement="bottomRight" title={`${t('menu')}`}>
          <MenuIcon/>
        </Tooltip>
      </div>

      <NavMenu onClose={onClose} visible={visible}/>
    </div>
  )
}