const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function obtenerLetraUnica() {
  const alfabeto = 'ABCDEFGHIJKLMNPQRTUWYZ';
  let letrasNoUsadas = alfabeto.split('');

  if (letrasNoUsadas.length === 0) {
    console.log('Ya se han utilizado todas las letras del alfabeto.');
    return null;
  }

  const indiceAleatorio = Math.floor(Math.random() * letrasNoUsadas.length);
  const letraElegida = letrasNoUsadas.splice(indiceAleatorio, 1)[0];

  return letraElegida;
}

let array = [];
const word = obtenerLetraUnica();
console.log(word);
array.push(word);
