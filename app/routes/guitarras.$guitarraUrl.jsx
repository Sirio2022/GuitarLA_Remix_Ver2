import { useState } from 'react';

import { useLoaderData, useOutletContext } from '@remix-run/react';
import { getGuitarra } from '~/models/guitarras.server';
import styles from '~/components/guitarra/styles.module.css';
import Swal from 'sweetalert2';

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
  return [
    {
      title: `${data[0].attributes.nombre} - GuitarLA`,
    },
    {
      name: 'description',
      content: `${data[0].attributes.nombre} - GuitarLA`,
    },
    {
      name: 'keywords',
      content: 'GuitarLA,guitarra',
    },
  ];
};

export default function Guitarra() {
  const { agregarAlCarrito } = useOutletContext();

  const [cantidad, setCantidad] = useState(0);

  const guitarra = useLoaderData();

  const { nombre, imagen, precio, descripcion } = guitarra[0].attributes;

  const texto = descripcion.map((desc) => {
    return desc.children.map((descrip) => {
      return descrip.text;
    });
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (cantidad < 1) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Selecciona la cantidad',
      });
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };

    agregarAlCarrito(guitarraSeleccionada);
  }

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

        <form className={styles.formulario} onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad</label>

          <select
            name="QTY"
            id="cantidad"
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          >
            <option value="0">-- Selecciona la cantidad --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Agregar al Carrito" />
        </form>
      </div>
    </main>
  );
}
