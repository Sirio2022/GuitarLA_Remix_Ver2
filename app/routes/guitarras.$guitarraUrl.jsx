import { useLoaderData } from '@remix-run/react';
import { getGuitarra } from '~/models/guitarras.server';
import styles from '~/components/guitarra/styles.module.css';

export const loader = async ({ params }) => {
  const { guitarraUrl } = params;

  const respuesta = await getGuitarra(guitarraUrl);

  if (!respuesta.data.length) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada',
    });
  }

  return respuesta.data;
};

export const meta = ({ data }) => {
  if (!data) {
    return [
      {
        title: 'GuitarLA - Guitarra no encontrada',
      },
      {
        name: 'description',
        content: 'GuitarLA, remix, venta de guitarras de alta gama',
      },
      {
        name: 'keywords',
        content: 'GuitarLA,remix',
      },
    ];
  }

  return [
    {
      title: ` ${data[0].attributes.nombre} - GuitarLA`,
    },
    {
      name: 'description',
      content: ` ${data[0].attributes.nombre} - GuitarLA`,
    },
    {
      name: 'keywords',
      content: 'GuitarLA,guitarra',
    },
  ];
};

export default function Guitarra() {
  const guitarra = useLoaderData();

  const { nombre, imagen, precio, descripcion } = guitarra[0].attributes;

  const texto = descripcion.map((desc) => {
    return desc.children.map((descrip) => {
      return descrip.text;
    });
  });

  return (
    <main className={`contenedor ${styles.guitarra}`}>
      <img
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className={`${styles.contenido}`}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{texto}</p>
        <p className={styles.precio}>${precio}</p>
      </div>
    </main>
  );
}
