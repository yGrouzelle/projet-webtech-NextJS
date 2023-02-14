import { useContext, useEffect, useState } from 'react'
import Link from 'next/link';
import { Context } from "./UserContext";
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { data } from "autoprefixer";

export default function UserInfo() {
  var md5 = require('md5')
  const { user, logout, setUsername_contexte, username_contexte} = useContext(Context)
  const supabase = useSupabaseClient()
  const [gravatar, setgravatar] = useState()


  if (user) {
    getUsername();
  }
  async function getUsername(){

    let { data, error, status } = await supabase
      .from('profiles')
      .select(`username`)
      .eq('id', user.id)
      .single()
    if (data) {
      setUsername_contexte(data.username)

      setgravatar(md5(user.email.trim().toLowerCase()))
      

    } else {
      setUsername_contexte("non defini")

    }
  }



  return (
    <div>
      <Link href="/user">
        <div><img class="rounded-full" src={'https://www.gravatar.com/avatar/' + gravatar + "?s=60"} />
          {username_contexte}
        </div>
        
      </Link>

      <button onClick={() => { logout() }}>se deconnecter</button>

    </div>

  )


}

