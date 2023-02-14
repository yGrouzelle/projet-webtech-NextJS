import { createContext, useState, useEffect } from 'react'
import { useSupabaseClient, useUser} from '@supabase/auth-helpers-react'

//creer l'objet conctext et l'exporter
export const Context = createContext(null)

//exporter la fonction qui va englober nos page
export const ContextProvider = ({children}) => { 
const [user, setUser] = useState()
const supabaseClient = useSupabaseClient()
const supabaseUser = useUser()
const [loading, setLoading] = useState(true)
const [username_contexte,setUsername_contexte]=useState()
const CDNURL= "https://kumngtmxbqawskffdsnj.supabase.co/storage/v1/object/public/publications/";
useEffect(function (){

    if (supabaseUser) {
      
      setUser(supabaseUser)
    
      setLoading(false)
    } 
  }, [supabaseUser]) 


async function logout() {
  await supabaseClient.auth.signOut()
  setUser(null)

}

return (<Context.Provider value={{user,logout,username_contexte,setUsername_contexte,CDNURL,setUser}}>
      {children}
    </Context.Provider>
  )
}