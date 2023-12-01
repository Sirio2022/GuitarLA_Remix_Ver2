import { Link, useLocation } from '@remix-run/react';
import image from '../../../public/img/carrito.png';

import styles from '../header/styles.module.css';

export default function Navegacion() {
  const location = useLocation();

  return (
    <nav className={styles.navegacion}>
      <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
        Inicio
      </Link>
      <Link
        to="/nosotros"
        className={location.pathname === '/nosotros' ? styles.active : ''}
      >
        Nosotros
      </Link>
      <Link
        to="/tienda"
        className={location.pathname === '/tienda' ? styles.active : ''}
      >
        Tienda
      </Link>
      <Link
        to="/blog"
        className={location.pathname === '/blog' ? styles.active : ''}
      >
        Blog
      </Link>
      <Link to="/carrito">
        <img src={image} alt="carrito de compras" />
      </Link>
    </nav>
  );
}
