import { getGuitarras } from "~/models/guitarras.server";



export default function Tienda() {
  return (
    <div>tienda</div>
  )
}

export async function loader() {
  
  const guitarras = await getGuitarras();
  console.log(guitarras);

  return {

  }
}

