import { useState, useEffect, useContext } from "react";
import md from "markdown-it";
import Head from "next/head";
import Layout from "../../Components/Layout.js";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Context } from "../../Components/UserContext";
import { Input } from "postcss";
let idtf;

export default function artices({ id }) {
  const router = useRouter();
  var md5 = require("md5");
  const date = new Date();
  const [post, setPost] = useState(null);
  const [message, setMessage] = useState(null);
  const { user, username_contexte, CDNURL } = useContext(Context);
  const [newComment, setNewComment] = useState(null);
  const [comments, setComment] = useState([]);
  const [modifCom, setModifCom] = useState();
  const supabase = useSupabaseClient();

  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("post")
        .select(`id, publication_date, contenu, titre, auteur_username,url_img`)
        .eq("id", id)
        .single();
      setPost(data);
      console.log(data);
    })();
  }, [id, supabase]);

  idtf = `${id}`;

  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("comments")
        .select(`id, username, publication_date, content,email`)
        .eq("article_id", idtf);
      setComment(data);
    })();
  }, [supabase]);

  const addfield = async (newComment) => {
    //setgravatar(md5(user.email.trim().toLowerCase))
    const l = md5(user.email.trim().toLowerCase());
    const { error } = await supabase
      .from("comments")
      .insert({
        content: newComment,
        username: username_contexte,
        publication_date: date,
        article_id: idtf,
        email: l,
      })
      .single();
    if (error) {
      setMessage("Un problème est survenu");
    } else {
      setMessage(
        <div>
          <h2 class="text-center mt-3">Confirmation</h2>
          <p>Votre commentaire a bien été ajouté</p>
          <button
            onClick={() => {
              router.push(`/articles/${post.id}`);
            }}
          >
            Retour a la page articles
          </button>
        </div>
      );
    }
  };

  const delCom = async (comUser, comId) => {
    console.log(comId);
    if (comUser == username_contexte) {
      const { error } = await supabase
        .from("comments")
        .delete()
        .eq("id", comId);
      console.log(username_contexte);
      if (error) {
        setMessage("Un problème est survenu");
        console.log(error.hint);
      } else {
        setMessage(
          <div>
            <h2 class="text-center mt-3">Confirmation</h2>
            <p>Votre commentaire a bien été supprimé</p>
            <button
              onClick={() => {
                router.push(`/articles/${post.id}`);
              }}
            >
              Retour a la page articles
            </button>
          </div>
        );
      }
    }
  };

  const updCom = async (modifCom, comUser, comId) => {
    console.log(comId, modifCom);
    if (comUser == username_contexte) {
      const { error } = await supabase
        .from("comments")
        .update({ content: modifCom })
        .eq("id", comId);
      console.log(username_contexte);
      if (error) {
        setMessage("Un problème est survenu");
        console.log(error.hint);
      } else {
        setMessage(
          <div>
            <h2 class="text-center mt-3">Confirmation</h2>
            <p>Votre commentaire a bien été mis à jour</p>
            <button
              onClick={() => {
                router.push(`/articles/${post.id}`);
              }}
            >
              Retour a la page articles
            </button>
          </div>
        );
      }
    }
  };

  return (
    <Layout>
      <div>
        <h1 class="text-2xl font-bold">Article detail</h1>
      </div>
      <div>
        {post && (
          <div class="overflow-hidden divide-y divide-slate-200 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <div class="bg-slate-50 dark:bg-slate-700">
              <dl class="grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:text-slate-500 [&_dt]:pr-3">
                <dt>Titre</dt>
                <dd>{post.titre}</dd>
                <dt>Publication Date</dt>
                <dd>{post.publication_date}</dd>
                <dt>Contenu</dt>
                <dd>{post.contenu}</dd>
                <dt>auteur_username</dt>
                <dd>{post.auteur_username}</dd>
                <dt>publication</dt>
                <dd>
                  {" "}
                  {post.url_img ? (
                    <img src={CDNURL + post.url_img}></img>
                  ) : (
                    <p>sans image</p>
                  )}
                </dd>
              </dl>
            </div>
          </div>
        )}
      </div>
      <div class="space-y-10">
        <p></p>
        <label class="grid col-auto">
          <span>New Comment</span>
          <input
            type="text"
            placeholder="Content"
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          />
        </label>
        <div>
          {user ? (
            <button
              class="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
              onClick={() => addfield(newComment)}
            >
              Send
            </button>
          ) : (
            <>Veuillez vous connecter pour ajouter des commentaires</>
          )}
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
        <div>
          <table class="min-w-full divide-y divide-slate-300">
            <thead clas="bg-slate-50">
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6"
                >
                  gravatar
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6"
                >
                  username
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                >
                  publication_date
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                >
                  Content
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                ></th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                ></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 bg-white">
              {comments?.map((com) => (
                <tr key={com.id}>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    <img
                      class="rounded-full"
                      src={
                        "https://www.gravatar.com/avatar/" + com.email + "?s=60"
                      }
                    />
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    {com.username}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    {com.publication_date}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    {com.content}
                    <p></p>
                    <input
                      type="text"
                      placeholder="Edit"
                      value={modifCom}
                      onChange={(e) => {
                        setModifCom(e.target.value);
                      }}
                    />
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    <button onClick={() => delCom(com.username, com.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                        viewBox="0 0 448 512"
                        width="0.75rem"
                      >
                        <path
                          fill="currentColor"
                          d="M32 464C32 490.5 53.5 512 80 512h288c26.5 0 48-21.5 48-48V128H32V464zM304 208C304 199.1 311.1 192 320 192s16 7.125 16 16v224c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM208 208C208 199.1 215.1 192 224 192s16 7.125 16 16v224c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM112 208C112 199.1 119.1 192 128 192s16 7.125 16 16v224C144 440.9 136.9 448 128 448s-16-7.125-16-16V208zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z"
                        />
                      </svg>
                    </button>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    <button
                      onClick={() => updCom(modifCom, com.username, com.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                        viewBox="0 0 448 512"
                        width="0.75rem"
                      >
                        <path
                          fill="currentColor"
                          d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  console.log("Sortie :");
  console.log(context.params);
  return {
    props: {
      id: context.params.id,
    },
  };
}
