import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import UserBancoProvider from '../utils/providers/userBanco'

import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {  

  return (
    <Provider session={pageProps.session}>    
      <UserBancoProvider> 
        <NextNprogress
          color="#00A6BA"
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          showOnShallow={true}
        />
        <Component {...pageProps} />  
      </UserBancoProvider> 
    </Provider>
  )
}

export default MyApp
