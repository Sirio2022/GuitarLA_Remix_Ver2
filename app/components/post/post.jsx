import { Link } from '@remix-run/react';
import styles from './styles.module.css';
import { formatearFecha } from '~/utils/helpers';

export default function Post({ post }) {
  const { titulo, imagen, contenido, url, publishedAt } = post;

  const texto = contenido.map((desc) => {
    return desc.children.map((descrip) => {
      return descrip.text;
    });
  });

  return (
    <article className={styles.post}>
      <img
        src={imagen.data.attributes.formats.small.url}
        alt={`Imagen post ${titulo}`}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{texto}</p>
        <Link to={`/posts/${url}`} className={styles.enlace}>
          Leer más
        </Link>
      </div>
    </article>
  );
}
