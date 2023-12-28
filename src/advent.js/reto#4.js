function decode(message) {
  const palabras = message.match(/(?:\b\w+\b|\(.+?\)|[^ ])/g);
  let word = '';
  let prevWord = '';
  let response = '';
  console.log(palabras);
  for (let i in palabras) {
    if (palabras[i][0] === '(') {
      word = palabras[i].split('').reverse().join('').replace(/[)(]/g, '');
      prevWord = i > 0 ? palabras[i - 1].split('').reverse().join('').replace(/[)(]/g, '') : '';
      i == 0 || !/^[a-zA-Z]+$/.test(word) || !/^[a-zA-Z]+$/.test(prevWord) ? (response += word) : (response += ' ' + word);
    } else {
      i == 0 || !/^[a-zA-Z]+$/.test(palabras[i]) || !/^[a-zA-Z]+$/.test(palabras[i - 1]) ? (response += palabras[i]) : (response += ' ' + palabras[i]);
    }
  }
  return response;
}

// const a = decode("hola (odnum)");
// console.log(a); // hola mundo

// const b = decode('¡(olleh) (dlrow)!');
// console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
