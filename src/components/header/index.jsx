import { signIn, signOut, useSession } from 'next-auth/client'
import MenuDash from '../menu'

import { CgHomeAlt } from 'react-icons/cg'

import style from './header.module.css'

import Link from 'next/link'

export default function Header() {
    const [ session  ] = useSession() 
    return (
    <header className={style.header}>  
        <div>   
            <Link href="/" >       
                <a className={style.logo}>
                    Logo <b>SaaS</b>
                </a>
            </Link>  
        </div>

        <div className="MenuDash">
            <MenuDash />
                <ul className={style.MenuDash}>
                    <li><Link href="/"><a><CgHomeAlt/> Home</a></Link></li>
                </ul>
            <MenuDash />
        </div>
    </header>
    )
}
