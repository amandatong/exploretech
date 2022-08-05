import { CubeIcon } from "@heroicons/react/outline"
import ColoredCube from '../public/assets/nav/colored_cube.svg';
import Link from "next/link"

export default function TopicMenu({active}) {
    return(
      <div className="page-jumper">
        {['ai', 'metaverse', 'digital-twin'].map((key, index) => {
            return(
                <Link key={`${key}_topic`} href={`/${key}`}>{index == active ? <ColoredCube className="active"/> : <CubeIcon/>}</Link>
            )
        })}
      </div>
    )
}