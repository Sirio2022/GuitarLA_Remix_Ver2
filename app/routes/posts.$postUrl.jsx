import { useLoaderData } from '@remix-run/react';
import { getPost } from '../models/posts.server';
import styles from '../styles/post/styles.module.css';
import { formatearFecha } from '../utils/helpers';

export const loader = async ({ params }) => {
  const { postUrl } = params;

  const respuesta = await getPost(postUrl);

  if (!respuesta.data.length) {
    throw new Response('', {
      status: 404,
      statusText: 'Post no encontrado',
    });
  }

  return respuesta.data;
};

export const meta = ({ data }) => {
  return [
    {
      title: `${data[0].attributes.titulo} - GuitarLA - Blog`,
    },
    {
      name: 'description',
      content: `${data[0].attributes.titulo} - GuitarLA - Blog`,
    },
    {
      name: 'keywords',
      content: 'Blog,post',
    },
  ];
};

export default function Post() {
  const post = useLoaderData();

  const { titulo, imagen, contenido, publishedAt } = post[0].attributes;
  console.log(post);

  const texto = contenido
    .map((desc) => desc.children.map((descrip) => descrip.text))
    .flat()
    .join('\n');
  console.log(texto);

  return (
    <article className={`contenedor ${styles.post}`}>
      <img
        src={imagen?.data?.attributes.url}
        alt={`Imagen del post ${titulo}`}
        className={`${styles.imgen}`}
      />
      <div className={`${styles.contenido}`}>
        <h3>{titulo}</h3>
        <p className={`${styles.fecha}`}>{formatearFecha(publishedAt)}</p>
        <p className={`${styles.texto}`}>{texto}</p>
      </div>
    </article>
  );
}
