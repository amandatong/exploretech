import React, { useEffect } from 'react';
import Topbar from './topbar';
import { useTranslation } from 'next-i18next';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Cursor from './Cursor';

export default function Layout({ children, router }) {
  const { t, i18n } = useTranslation();

  return (
    <AnimatePresence exitBeforeEnter>
      <LayoutGroup>
        <motion.div 
        key={router.asPath}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
          <Cursor targets={['a', '.lh', '.ant-tooltip', '.mode-switch', '.ant-dropdown-trigger', '.ant-dropdown-menu-item', '.reveal_next','.next-button','.arrow','.input']}/>
          <Topbar/>
          {children}
        </motion.div>
      </LayoutGroup>
    </AnimatePresence>
  )
}