import { CARTA_AS } from "./constantes";

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);

  if(isNaN(valor)) return (valor === CARTA_AS) ? 11 : 10;

  return valor * 1;
}

export default valorCarta;