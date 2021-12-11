import React, {useEffect, useState } from 'react'
import Style from './perfil.module.css'
import Head from 'next/head'

import Header from '../components/header'

import { signOut, useSession } from 'next-auth/client'

import { useUser } from '../utils/providers/userBanco'
import BoxAvatar from '../components/boxAvatar'

import axios from "axios"

export default function Home() { 

  const [ session, loading  ] = useSession() 
  const { userBanco, setUserBanco } = useUser({}) 
  const [tutorial, setTutorial] = useState({})

  
  const tenant = userBanco?.email  
  const UserEmailAuth = session?.user.email.includes(tenant) 
 
  async function handTutorial(){

        let config = {
            headers: {
            Authorization: `bearer fc2edde3654171af1dfe6fd98fb16396`
            }
        }

        const tutorial = await axios.get(`https://api.vimeo.com/tutorial`, config)
        const vimeoRes = await tutorial.data

        setTutorial(vimeoRes)

    }

    console.log(tutorial)

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
              
              <p onClick={() => handTutorial()}>click vimeo</p>


            </div> 
          </div>
        )
        }
        
        </div>  

    )
  
}

