import styles from './styles.module.css';

export default function Curso({ curso }) {
  const { contenido, imagen, titulo } = curso;
  console.log(imagen.data.attributes.url);

  const texto = contenido
    ?.map((cont) => cont.children.map((text) => text.text))
    .flat() // [[],[],[]] => []
    .join('\n'); // ['','',''] => ''

  return (
    <section
      className={`${styles.curso}`}
      style={{
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data?.attributes?.url}`,
      }}
    >
      <div className={`contenedor ${styles.curso_grid}`}>
        <div className={`${styles.contenido}`}>
          <h2 className="heading">{titulo}</h2>
          <p className={`${styles.texto}`}>{texto}</p>
        </div>
      </div>
    </section>
  );
}
