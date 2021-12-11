import React, { useState, createContext, useContext, useEffect } from "react";
import { useSession } from 'next-auth/client'
import axios from 'axios'

const UserBancoContext = createContext()

export default function UserBancoProvider( {children} ) {

    const [ session, loading ]       = useSession() 
    const [ userBanco, setUserBanco] = useState([])  
    const pegaUserGoogle = session?.user.email
       
    useEffect( () => {

             
        async function PegarNoBanco(){  
            const res   = await axios.get(`/api/users?email=${pegaUserGoogle}`)
            const pegarUser = await res.data[0]
            setUserBanco(pegarUser) 
        } 
        PegarNoBanco()
            

    }, [session])


    return (
        <UserBancoContext.Provider value={{ userBanco, setUserBanco }}>
            {children}
        </UserBancoContext.Provider>
    )
}

export function useUser(){
    const context = useContext(UserBancoContext)
    const { userBanco, setUserBanco } = context
    return { userBanco, setUserBanco }
}