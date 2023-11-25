import { Link, useLocation } from '@remix-run/react';

import styles from '../footer/styles.module.css';

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
      </nav>
   
  );
}
