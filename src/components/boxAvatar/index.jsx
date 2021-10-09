import { signIn, signOut, useSession } from 'next-auth/client'

import style from './boxAvatar.module.css'

import { AiOutlineGoogle } from 'react-icons/ai'

export default function BoxAvatar(){
    const [ session  ] = useSession() 
    return(
        <>
        <div className="BoxAvatar">
            { !session ? (
                <div className="BtLogIn" onClick={ () => signIn('google') }>
                    <AiOutlineGoogle/> |  
                    Login com <strong>Google</strong>
                </div>
            ) : (         
                <div className={style.Logado}>
                    <img src={session?.user?.image}></img>
                    <p>
                        Olá, {session?.user?.name}
                        <div className="BtLogOut" onClick={ () => signOut() } ><strong>Sair</strong></div>
                    </p>
                </div>
            )
            }
        </div>
        </>
    )
}