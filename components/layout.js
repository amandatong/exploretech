import React, { useEffect } from 'react';
import Topbar from './topbar';
import { useTranslation } from 'next-i18next';

export default function Layout({ children }) {
  const { t, i18n } = useTranslation();

  return (
    <div className={`${i18n.language}`}>
        <Topbar/>
        <main>{children}</main>
    </div>
  )
}