import Layout from "../Components/Layout";
import Head from "next/head";

import { supabase } from "@supabase/supabase-js";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Button from "../Components/DarkMode";
import { Context } from "../Components/UserContext";
import Link from "next/link";
export default function articles() {
  const [post, setPost] = useState([]);
  const supabase = useSupabaseClient();
  const { user } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("post")
        .select(`id, publication_date, contenu, titre, auteur_username`);
      setPost(data);
      console.log(data);
    })();
  }, [supabase]);

  return (
    <Layout>
      <div class="space-y-10 bg-slate-100 dark:bg-slate-800">
        <p></p>
        <div>
          <h1 class="text-3xl font-bold">Articles</h1>
        </div>
        <div>
          <table class="min-w-full divide-y divide-slate-300">
            <thead class="bg-slate-50">
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6"
                >
                  publication_date
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                >
                  contenu
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                >
                  titre
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                >
                  auteur
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 bg-white">
              {post.map((posts) => (
                <tr key={posts.id}>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    <Link href={`/articles/${posts.id}`}>
                      {posts.publication_date}
                    </Link>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    <Link href={`/articles/${posts.id}`}>{posts.contenu}</Link>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    <Link href={`/articles/${posts.id}`}>{posts.titre}</Link>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    <Link href={`/articles/${posts.id}`}>
                      {posts.auteur_username}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          {user && (
            <Button
              class="rounded-md bg-green-600 "
              onClick={() => router.push("/creation/article")}
            >
              Add
            </Button>
          )}
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </Layout>
  );
}
