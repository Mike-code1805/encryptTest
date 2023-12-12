function obtenerLetraUnica() {
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
for (let index = 0; index < 26; index++) {
  let prev;
  const word = obtenerLetraUnica();
  console.log('Letra ' + index + ':', word);
  if (array.find((element) => element === word)) console.log('Se duplicó la letra', word);
  array.push(word);
}
