const crypto = require('crypto');

// Función para encriptar con la llave pública
function encryptWithPublicKey(publicKey, data) {
  const bufferData = Buffer.from(JSON.stringify(data), 'utf-8');
  const encryptedData = crypto.publicEncrypt(publicKey, bufferData);
  return encryptedData.toString('base64');
}

// Función para desencriptar con la llave privada
function decryptWithPrivateKey(privateKey, encryptedData) {
  const bufferEncryptedData = Buffer.from(encryptedData, 'base64');
  const decryptedData = crypto.privateDecrypt(privateKey, bufferEncryptedData);
  return JSON.parse(decryptedData.toString('utf-8'));
}

// Ejemplo de generación de claves
const keyPair = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

const publicKey = keyPair.publicKey;
const privateKey = keyPair.privateKey;

// Ejemplo de uso
const dataToEncrypt = { message: 'Hola, este es un mensaje secreto' };
console.time('Encrypt');
const encryptedData = encryptWithPublicKey(publicKey, dataToEncrypt);
console.log('Datos encriptados:', encryptedData);

const decryptedData = decryptWithPrivateKey(privateKey, encryptedData);
console.log('Datos desencriptados:', decryptedData);
console.timeEnd('Encrypt');
