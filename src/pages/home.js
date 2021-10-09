import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/header'
import Footer from '../components/footer'

import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export default function Tenant() {

  const [ session, loading  ] = useSession() 
  const router = useRouter()
  const tenant = "lunnar.digital"
   
  const UserEmailAuth = session?.user.email.includes(tenant)  
  //console.log(UserEmailAuth)
  
    return (    
      
        <div id="pageDash">
          <Head>
              <title>Dashboard</title>
          </Head> 

          <div className="SideBar">
              <Header/>
              <Footer/>
          </div>         
       
          { !UserEmailAuth ? (
            <>            

            <div className="bodyDash"> 
                         
              <div className="ContendDash">
                <h1 className="Title">
                  Faça login para continuar!
                </h1>
              </div> 

            </div>

            </>
          ) : (  
          <div className="bodyDash">

            <div className="ContendDash bg-cultura-intro">
              <h1>Bem vindo ao <b>Dashboard</b> da lunnar.digital!</h1>
              <p>Aqui você pode gerir seus serviços contratados na lunnar.digital</p>

              <Link href="/culture-code">
                <a className="ctaCulture">Culture Code</a>
              </Link>
              
            </div>            

          </div>
        )
        }

        
        </div>  
        

    )
  
}
