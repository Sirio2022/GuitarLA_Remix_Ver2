import { useState, useEffect } from 'react';
import { useOutletContext } from '@remix-run/react';
import styles from '../styles/carrito/styles.module.css';

export function meta() {
  return [
    {
      title: 'GuitarLA - Carrito de Compras',
    },
    {
      name: 'description',
      content:
        'GuitarLA, carrito de compras, venta de guitarras de alta gama, compra de guitarras, compra de guitarras online',
    },
    {
      name: 'keywords',
      content: 'GuitarLA,carrito,compras,compra,guitarras,online',
    },
  ];
}

export default function Carrito() {
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

  const { actualizarCantidad, eliminarGuitarra } = useOutletContext();

  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  useEffect(() => {
    const total = carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    setTotal(total);
  }, [carrito]);

  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>
      <div className={styles.contenido}>
        <div className={styles.carrito}>
          <h2>Articulos</h2>

          {carrito?.length === 0
            ? 'No hay articulos en el carrito'
            : carrito?.map((item) => (
                <div key={item.id} className={styles.producto}>
                  <div>
                    <img
                      src={item.imagen}
                      alt={`Imagen producto ${item.nombre}`}
                    />
                  </div>

                  <div>
                    <p className={styles.nombre}>{item.nombre}</p>
                    <p className={styles.cantidad}>Cantidad:</p>

                    <select
                      id="QTY"
                      value={item.cantidad}
                      className={styles.select}
                      onChange={(e) =>
                        actualizarCantidad({
                          id: item.id,
                          cantidad: +e.target.value,
                        })
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>

                    <p className={styles.precio}>
                      <span>$ {item.precio}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: <span>$ {item.cantidad * item.precio}</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    className={styles.btn_eliminar}
                    onClick={() => eliminarGuitarra(item.id)}
                  >
                    X
                  </button>
                </div>
              ))}
        </div>

        <aside className={styles.resumen}>
          <h3>Resumen del pedido</h3>
          <p>
            Total a pagar: <span> $ {total}</span>{' '}
          </p>
        </aside>
      </div>
    </main>
  );
}
