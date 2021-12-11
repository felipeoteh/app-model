import React, {useEffect, useState } from 'react'
import Style from './perfil.module.css'
import Head from 'next/head'

import Header from '../components/header'

import { signOut, useSession } from 'next-auth/client'

import { useUser } from '../utils/providers/userBanco'
import BoxAvatar from '../components/boxAvatar'

export default function Home() { 

  const [ session, loading  ] = useSession() 
  const { userBanco, setUserBanco } = useUser() 

  /* console.log(userBanco?.theProducts) */
  
  const tenant = userBanco?.email  
  const siteData = userBanco?.theProducts
  const UserEmailAuth = session?.user.email.includes(tenant) 
  /* console.log('PRODUCTS: ', userBanco?.theProducts[0].company.products) */

    return (    
      
        <div id="pageDash">
          <Head>
              <title>Painel Modelo SaaS</title>
          </Head>

          <div className="SideBar">
            <Header/>
          </div>
       
          { !UserEmailAuth ? (
            <div className="bodyDash"> 
            <BoxAvatar/>

              <div className="ContendDash">
                { loading ? (<h1>carregando...</h1>) : null}
                <h1 className={Style.Title}>
                  Faça login!
                </h1>
              </div> 

            </div>
          ) : (  
            <div className="bodyDash editorConteudo">
            <BoxAvatar/>
            { loading ? (<h1>carregando...</h1>) : null}
            <div className="ContendDash PerfilPage">
              <h1 className={Style.Title}>Ambiente protegido</h1>
              

            </div> 
          </div>
        )
        }
        
        </div>  

    )
  
}

