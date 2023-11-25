import styles from './styles.module.css';

export default function guitarra({ guitarra }) {
  const { nombre, imagen, precio, descripcion, url } = guitarra;

  const texto = descripcion.map((desc) => {
    return desc.children.map((descrip) => {
      return descrip.text;
    });
  });
  return (
    <div className={`${styles.guitarra}`}>
      <div className={`${styles.contenido}`}>
        <h3>{nombre}</h3>
        <p>{texto}</p>
        <p>${precio}</p>
      </div>
    </div>
  );
}
