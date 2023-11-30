export async function getCurso() {
  const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
  const datos = await respuesta.json();
  return datos;
}
