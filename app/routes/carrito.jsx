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
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>
      <div className={styles.contenido}>
        <div className={styles.carrito}>
          <h2>Articulos</h2>
        </div>

        <aside className={styles.resumen}>
          <h3>Resumen del pedido</h3>
          <p>Total a pagar: $ 0</p>
        </aside>
      </div>
    </main>
  );
}
