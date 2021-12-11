import Style from './perfil.module.css'
import Head from 'next/head'

import Header from '../../components/header'
import Footer from '../../components/footer'

import { signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import { AiOutlineMail } from 'react-icons/ai'

export default function Perfil() {

  const [ session, loading  ] = useSession() 
  const router = useRouter()
  const tenant = "lunnar.digital"  
  
  const UserEmailAuth = session?.user.email.includes(tenant)  
  //console.log(UserEmailAuth)
  
    return (    
      
        <div id="pageDash">
          <Head>
              <title>Meu Perfil</title>
          </Head>

          <div className="SideBar">
            <Header/>
            <Footer/>
          </div>
       
          { !UserEmailAuth ? (
            <div className="bodyDash"> 
                         
              <div className="ContendDash">
                <h1 className={Style.Title}>
                  Faça login!
                </h1>
              </div> 

            </div>
          ) : (  
          <div className="bodyDash">

            <div className="ContendDash PerfilPage">
              <h1 className={Style.Title}>Olá, {session?.user.name}!</h1>
              
              <ul className={Style.AvatarBox}>
                <li><img src={session?.user.image} /></li>                
                <li><AiOutlineMail/> | {session?.user.email}</li>
                <li>
                  <div className="BtLogOut" onClick={ () => signOut() } ><strong>Sair</strong></div>
                </li>
                
              </ul>                               

            </div>            

          </div>
        )
        }

        
        </div>  
        

    )
  
}
