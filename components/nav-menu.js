import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Drawer } from 'antd';

export default function NavMenu({onClose, visible}) {
  const { t, i18n } = useTranslation('common', { keyPrefix: 'nav' });

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = (key) => setIsHovered(key);
  const onMouseLeave = () => setIsHovered(false);

  const bg = "'/assets/nav/home.svg'"

  return(
    <Drawer placement="right" onClose={onClose} visible={visible} width="100vw" mask={false} 
      drawerStyle={{
        backgroundImage: `url("${isHovering ? `/assets/nav/${isHovering}.svg` : ''}")`
      }}>
        <div className="menu-container" >
          <div className="links">
          {['home', 'explore', 'future'].map((key) =>{
            return(
              <div id={key} class="link" onMouseEnter={() => onMouseEnter(key)} onMouseLeave={onMouseLeave} onClick={onClose}><Link href={`/${key === 'home' ? '' : key}`}>{t(key)}</Link></div>
            )
          })}
            {/* <div id="home" onMouseEnter={() => onMouseEnter('home')} onMouseLeave={onMouseLeave} onClick={onClose}><Link href="/">{t('home')}</Link></div>
            <div id="explore" onMouseEnter={() => onMouseEnter('explore')} onMouseLeave={onMouseLeave} onClick={onClose}><Link href="/explore">{t('explore')}</Link></div>
            <div id="future" onMouseEnter={() => onMouseEnter('future')} onMouseLeave={onMouseLeave} onClick={onClose}><Link href="/future">{t('future')}</Link></div> */}
          </div>

          
        </div>
    </Drawer>
  )
}