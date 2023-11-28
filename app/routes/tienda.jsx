import { useLoaderData } from '@remix-run/react';
import { getGuitarras } from '~/models/guitarras.server';
import styles from '~/styles/tienda/styles.module.css';
import Guitarra from '~/components/guitarra/guitarra';

export function meta() {
  return [
    {
      title: 'GuitarLA - Tienda',
    },
    {
      name: 'description',
      content: 'GuitarLA, tienda, venta de guitarras de alta gama',
    },
    {
      name: 'keywords',
      content: 'GuitarLA,tienda',
    },
  ];
}

export async function loader() {
  const respuesta = await getGuitarras();

  return respuesta.data;
}

export default function Tienda() {
  const resultado = useLoaderData();

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>
      {resultado?.length && (
        <div className={`${styles.guitarras_grid}`}>
          {resultado?.map((guitarra) => (
            <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
          ))}
        </div>
      )}
    </main>
  );
}
