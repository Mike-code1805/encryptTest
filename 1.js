const NodeRSA = require('node-rsa');
const fs = require('fs');

// Lee la clave pública desde el archivo PEM
// const publicKeyPem = fs.readFileSync('ruta/a/tu/llave_publica.pem', 'utf8');

// Lee la clave privada desde el archivo PEM
const privateKeyPem = fs.readFileSync('./keys/privateKey.pem', 'utf8');

// Crea instancias de NodeRSA con las claves
// const publicKey = new NodeRSA(publicKeyPem);
const privateKey = new NodeRSA(privateKeyPem);

// Texto que quieres encriptar
const textoAEncriptar = 'Este texto lo voy a encriptar';

// Encripta el texto con la clave pública
const textoEncriptado =
  'Aw4Kkxvl1BAgmIaZd9DrcdxAR0k7guqwlXHVmmKpYRVtpkA9c/HkV8HpAx9awTZ1nZwkO1s4JK41Ojv+cVWm0aSLxwARq53jNGoypgXa5f5a1iPLdvkPJ2LQ1ibEkdd3lwQOvKgXBHnADWctz2iTUh0RR+jyJh91srbeC5w72D27/TY6O1OTCGA57k3IxR3xVqKsYA1Yu0gydCYqOWxqn8ox8gpO0iJlQfwbP7xrkFCkwN+T8N7lihiu9T30CEUVj5AXV+bJvG7Fk2ElGYJllZ6oZUBmaSXdBepy6iPTWl6ZkjoVT3EaH5FVJVsTtp2//DGI2Lpmy1e+V/5l3tkvJQ==';

// Desencripta el texto con la clave privada
const textoDesencriptado = privateKey.decrypt(textoEncriptado, 'utf8');

// Muestra los resultados
console.log('Texto encriptado:', textoEncriptado);
console.log('Texto desencriptado:', textoDesencriptado);
