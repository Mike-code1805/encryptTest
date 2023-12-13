  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function obtenerLetraUnica() {
  const alfabeto = 'ABCEUGKLNPRTVY';
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
  const word = obtenerLetraUnica();
  console.log('Letra ' + index + ':', word);
  array.push(word);
}
