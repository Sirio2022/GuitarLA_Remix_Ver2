import styles from './styles.module.css';
import Navegacion from '../navegacion/navegacionFooter';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <Navegacion />
        <p>
          Todos los derechos reservados GuitarLA &copy;{' '}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}


