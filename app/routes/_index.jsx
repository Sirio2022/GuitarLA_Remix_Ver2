import { useLoaderData } from '@remix-run/react';
import { getGuitarras } from '~/models/guitarras.server';
import { getPosts } from '~/models/posts.server';
import { getCurso } from '../models/curso.server';
import Guitarra from '~/components/guitarra/guitarra';
import styles from '~/styles/tienda/styles.module.css';
import Post from '~/components/post/post';
import stylesBlog from '~/styles/blog/styles.module.css';
import Curso from '../components/curso/curso';


export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  return {
    posts: posts.data,
    guitarras: guitarras.data,
    curso: curso.data,
  };
}

export default function Index() {
  const { posts, guitarras, curso } = useLoaderData();


  return (
    <>
      <main className="contenedor">
        <h2 className="heading">Nuestra Colección</h2>
        {guitarras?.length && (
          <div className={`${styles.guitarras_grid}`}>
            {guitarras?.map((guitarra) => (
              <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
            ))}
          </div>
        )}
      </main>

      <Curso curso={curso.attributes} />

      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={stylesBlog.blog}>
          {posts.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </section>
    </>
  );
}
