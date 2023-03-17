import _ from 'underscore';
import { 
  CARTAS_TIPOS, 
  CARTAS_ESPECIALES,
  CARTA_MIN_VALOR,
  CARTA_MAX_VALOR
} from "./constantes";

export const crearBaraja = () => {
  let barajas = [];

  for (let i = CARTA_MIN_VALOR; i <= CARTA_MAX_VALOR; i++ ) {
    for (const tipo of CARTAS_TIPOS) {
      barajas.push(i + tipo); // [2C, 2D, 2T, 2P, ... ]
    }
  }

  for (const especial of CARTAS_ESPECIALES) {
    for (const tipo of CARTAS_TIPOS) {
      barajas.push(especial + tipo);
    }
  }

  // console.log(barajas);
  return _.shuffle(barajas);
}
