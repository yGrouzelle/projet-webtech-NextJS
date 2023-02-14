import Layout from "../Components/Layout";
import Image from "next/image";

export default function about() {
  return (
    <Layout>
      <div class="h-max flex flex-col space-y-40 bg-slate-100 dark:bg-slate-800">
        <div class="text-center">
          <h1 class="text-6xl font-extrabold">Contributors</h1>
        </div>
        <div class=" md:flex mx-auto px-4 columns-2 gap-80">
          <ul>
            <div class="space-x-20">
              <li class=" hover:bg-slate-100 w-fit">
                <img
                  class="w-20 h-20 rounded-full"
                  src="https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_960_720.jpg"
                  width="384"
                  height="512"
                />
                <div>
                  <a
                    href="https://github.com/gr3g0ry552"
                    class="text-blue-500 font-bold"
                  >
                    Grégory MONSORO
                  </a>
                  <p>gregory.monsoro@edu.ece.fr</p>
                </div>
              </li>
            </div>
          </ul>
          <ul>
            <div>
              <li class=" hover:bg-slate-100 w-fit">
                <img
                  class="w-20 h-20 rounded-full"
                  src="https://cdn.pixabay.com/photo/2016/05/28/08/32/elephant-1421167_960_720.jpg"
                  width="384"
                  height="512"
                />
                <div>
                  <a
                    href="https://github.com/yGrouzelle"
                    class="text-blue-500 font-bold"
                  >
                    Yan Grouzelle
                  </a>
                  <p>yan.grouzelle@edu.ece.fr</p>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div>
          <blockquote class="space-y-10">
            <h1 class="font-bold text-3xl ">Grégory MONSORO</h1>
            <p class="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              itaque quasi aliquid rem ab dolores, temporibus, suscipit officiis
              vitae, minima autem! Minima ducimus eum sed doloribus placeat
              error veritatis asperiores vel dolores perspiciatis aperiam labore
              alias nulla eius fuga recusandae laborum, numquam non tempora
              perferendis unde est, odit officiis. Voluptatibus, temporibus
              consequuntur blanditiis esse hic quo ea quam ipsa adipisci labore,
              illum dolores? Ab non a corrupti saepe delectus ipsum fuga vero
              quae animi laborum?
            </p>
          </blockquote>
        </div>
        <div>
          <blockquote class="space-y-10">
            <h1 class="font-bold text-3xl ">Yan Grouzelle</h1>

            <q class="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              itaque quasi aliquid rem ab dolores, temporibus, suscipit officiis
              vitae, minima autem! Minima ducimus eum sed doloribus placeat
              error veritatis asperiores vel dolores perspiciatis aperiam labore
              alias nulla eius fuga recusandae laborum, numquam non tempora
              perferendis unde est, odit officiis. Voluptatibus, temporibus
              consequuntur blanditiis esse hic quo ea quam ipsa adipisci labore,
              illum dolores? Ab non a corrupti saepe delectus ipsum fuga vero
              quae animi laborum?
            </q>
          </blockquote>
        </div>
        <div class="">
          <p></p>
          <p></p>
        </div>
      </div>
    </Layout>
  );
}
