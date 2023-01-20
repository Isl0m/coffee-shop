import Link from "next/link"
import { FC } from "react"
import { MenuItemProps } from "./layout.types"
import s from './Layout.module.scss'

const MenuItem: FC<MenuItemProps> = ({ name, link }) => {
  return (
    <li>
      <Link href={link} className={s.menuItem}>
        {name}
      </Link>
    </li>
  )
}

export default MenuItem
