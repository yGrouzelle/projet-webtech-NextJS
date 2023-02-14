import { useState,useContext } from 'react';
import { useSupabaseClient,useUser } from '@supabase/auth-helpers-react';
import Head from 'next/head';
import Layout from '../../Components/Layout';
import { useRouter } from "next/router";
import { Context } from "../../Components/UserContext";
import { v4 as uuidv4 } from 'uuid';

export default function Contact() {

  const { user, username_contexte } = useContext(Context);
  const supabase = useSupabaseClient()
  //const user=useUser()
 
  const [message, setMessage] = useState(null)
  const [newContenu, setNewContent] = useState('')
  const [newTitle, setNewTitle] = useState('')

  const [newFile, setNewFile] = useState('')
  const router = useRouter()

  async function uploadImageUrl(path,id_post){
    
    const {error}= await supabase.from('post').update({url_img:path }).eq('id',id_post).single()
    if(error){
      console.log("erreur dans post url")
    }
  }
 
  async function uploadImage(newFile) {

    const { data, error } = await supabase
      .storage
      .from('publications')
      .upload( user.id+ "/" + uuidv4(), newFile) 

    if(data) {
  return data.path
    } else {
      console.log(error);
    }
  }
  
  const addfield = async (newContenu,newTitle,NewFile) => {
   console.log(newFile)
    const {data,error } = await supabase
      .from('post')
      .insert({ titre: newTitle,auteur_username:username_contexte,contenu: newContenu,id_auth:user.id }).single().select()
      console.log("data field")
      const id_post=data.id
     
     
    
      if (error) {
        setMessage('Sorry, an unexpected error occured.')
      } else {
     
   const paths =await uploadImage(NewFile)
uploadImageUrl(paths,id_post)
      
        setMessage(
          <div>
            <h2 class="text-center mt-3">Confirmation</h2>
            <p>Votre poste a bien était ajouté</p>
            <button onClick={()=>{ router.push('/articles')}}>Retour a la page articles</button>
          </div>
        )
      }
  
  }
  return (
    <Layout>
      <Head>
        <title>Création de poste</title>
       
     
      </Head>
      <h1 class='wt-title'>
        Publication
      </h1>
      <div class="[&_span]:block grid gap-3">
        <label><span>
          Titre</span>
        <input
          type='text'
          placeholder='Titre de la publication'
          
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
</label>
<label><span>
          Descriptipon</span>
        <input
          type='text'
          placeholder='Description'
         
          onChange={(e) => {
            setNewContent(e.target.value);
          }}
        />
</label>
<label><span>
          Image</span>
        <input
          type='file'
          placeholder='Ficher png/jpg'
          accept='image/png,image/jpeg'
        
          onChange={(e) => {
           //uploadImage(e)
           setNewFile(e.target.files[0])
          }}
        />
</label>
        <button
          class="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
          onClick={() => addfield(newContenu, newTitle,newFile)}>
          Send
        </button>
      </div>

      {message && (
        <div
          aria-label="Overlow below the drawer dialog"
          class="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setMessage(null)}
          role="dialog"
        >
          <div
            aria-label="Alert pane"
            class="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
          >
            {message}
          </div>
        </div>
      )}
    </Layout>
  );
}
