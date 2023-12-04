import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/posts.server';
import Post from '~/components/post/post';
import styles from '~/styles/blog/styles.module.css';

export function meta() {
  return [
    {
      title: 'GuitarLA - Blog',
    },
    {
      name: 'description',
      content: 'Blog - GuitarLA',
    },
    {
      name: 'keywords',
      content: 'GuitarLA,guitarra',
    },
  ];
}

export async function loader() {
  const respuesta = await getPosts();

  return respuesta.data;
}

export default function Blog() {
  const resultado = useLoaderData();

  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {resultado.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </div>
    </main>
  );
}
