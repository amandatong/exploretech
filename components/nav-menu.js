import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Drawer from 'antd/lib/drawer';
import { XIcon } from '@heroicons/react/outline';
import Cursor from './Cursor';

export default function NavMenu({onClose, visible}) {
  const { t, i18n } = useTranslation('common', { keyPrefix: 'nav' });

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = (key) => setIsHovered(key);
  const onMouseLeave = () => setIsHovered(false);

  // const bg = ""

  return(
    <Drawer placement="right" onClose={onClose} visible={visible} width="100vw" mask={false} 
    closable={false}
      drawerStyle={{
        backgroundImage: `url("${isHovering ? `/assets/nav/${isHovering}.svg` : '/assets/nav/blank.svg'}")`
      }}>
        {/* <Cursor targets={['.lh', '.link']}/> */}
        <div className="menu-wrap">
          <div className="closeBar">
              <div id="close" className="lh" onClick={onClose}><XIcon/></div>
          </div>
          <div className="menu-container">
            <div className="links">
              {['home', 'explore', 'future'].map((key) =>{
                return(
                  <div id={`${key}_drawer`} key={key} className="link lh" onMouseEnter={() => onMouseEnter(key)} onMouseLeave={onMouseLeave} onClick={onClose}><Link href={`/${key === 'home' ? '' : key}`}><a className={key}>{t(key)}</a></Link></div>
                )
              })}
            </div>

            
          </div>
        </div>
    </Drawer>
  )
}