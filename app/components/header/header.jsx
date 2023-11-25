import { Link } from '@remix-run/react';

import styles from './styles.module.css';

import logo from '../../../public/img/logo.svg';
import Navegacion from '../navegacion/navegacion';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link to="/">
          <img src={logo} alt="logo tienda" className={styles.logo} />
        </Link>
        <Navegacion />
      </div>
    </header>
  );
}

export function links() {
  return [{ rel: 'preload', as: 'image', href: logo }];
}
