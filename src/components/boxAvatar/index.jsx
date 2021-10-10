import { signIn, signOut, useSession } from 'next-auth/client'

import style from './boxAvatar.module.css'

import { AiOutlineGoogle } from 'react-icons/ai'
import { FiSettings, FiBell } from 'react-icons/fi'

export default function BoxAvatar(){
    const [ session  ] = useSession() 
    return(
        <>
        <div className={style.BoxAvatar}>
            { !session ? (
                <div className={style.boxLogin}>
                    <h4>Faça Login para continuar!</h4>
                    <div className="BtLogIn" onClick={ () => signIn('google') }>
                        <AiOutlineGoogle/> |  
                        Login com <strong>Google</strong>
                    </div>
                </div>
            ) : (       
                <>
                <FiBell/>
                <FiSettings/>
                <div className={style.Logado}>
                    <img src={session?.user?.image}></img>
                    <p>
                        Olá, {session?.user?.name}
                        <div className="BtLogOut" onClick={ () => signOut() } ><strong>Sair</strong></div>
                    </p>
                </div>
                </> 
            )
            }
        </div>
        </>
    )
}