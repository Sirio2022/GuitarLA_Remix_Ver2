import styles from '../styles/nosotros/styles.module.css';
import imagen from '../../public/img/nosotros.jpg';

export default function Nosotros() {
  return (
    <main className={`contenedor ${styles.nosotros}`}>
      <h2 className="heading">Nosotros</h2>
      <div className={`${styles.contenido}`}>
        <img src={imagen} alt="imagen nosotros" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            voluptatem voluptas consequuntur itaque quis repudiandae enim alias
            quidem vitae mollitia dolorem a quibusdam possimus nesciunt veniam.
            Rerum ex ipsum amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            voluptatem voluptas consequuntur itaque quis repudiandae enim alias
            quidem vitae mollitia dolorem a quibusdam possimus nesciunt veniam.
            Rerum ex ipsum amet.
          </p>
        </div>
      </div>
    </main>
  );
}

export function meta() {
  return [
    {
      title: 'GuitarLA - Nosotros',
    },
    {
      name: 'description',
      content: 'GuitarLA, nosotros, venta de guitarras de alta gama',
    },
    {
      name: 'keywords',
      content: 'GuitarLA,nosotros',
    },
  ];
}

export function links() {
  return [{ rel: 'preload', as: 'image', href: imagen }];
}
