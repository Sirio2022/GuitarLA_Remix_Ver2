import { Link } from '@remix-run/react';
import styles from './styles.module.css';

export default function guitarra({ guitarra }) {
  const { nombre, imagen, precio, descripcion, url } = guitarra;

  const texto = descripcion
    ?.map((desc) => desc.children.map((descrip) => descrip.text))
    .flat()
    .join('\n');

  return (
    <div className={`${styles.guitarra}`}>
      <img
        src={`${imagen.data.attributes.formats.medium.url}  `}
        alt={`imagen guitarra ${nombre}`}
      />
      <div className={`${styles.contenido}`}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{texto}</p>
        <p className={styles.precio}>${precio}</p>

        <Link to={`/guitarras/${url}`} className={styles.enlace}>
          Ver más
        </Link>
      </div>
    </div>
  );
}
