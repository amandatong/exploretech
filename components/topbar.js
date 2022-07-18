import { useTranslation } from 'next-i18next';

export default function Topbar() {
    const { t, i18n } = useTranslation('common', { keyPrefix: 'topbar' });

    return(
        <>
        {t('light')}
        {t('lang')}
        {t('menu')}
        </>
    )
}