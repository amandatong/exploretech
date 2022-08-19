import { CubeIcon } from "@heroicons/react/outline"
import ColoredCube from '../public/assets/nav/colored_cube.svg';
import Link from "next/link";
import Tooltip from 'antd/lib/tooltip';
import { useTranslation } from 'next-i18next';

export default function TopicMenu({active}) {
  const { t, i18n } = useTranslation('common', { keyPrefix: 'explore' });
    return(
      <div className="page-jumper">
        {['ai', 'metaverse', 'digital-twin'].map((key, index) => {
            return(
                <Link key={`${key}_topic`} href={`/${key}`}>
                <Tooltip placement="bottom" title={t(`${key}`)}>
                  {index == active ? <ColoredCube className="active"/> : <CubeIcon/>}
              </Tooltip></Link>
            )
        })}
      </div>
    )
}