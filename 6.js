const CryptoJS = require('crypto-js');

const password = 'mi_contraseña';
const dataToEncrypt = [1, 2, 3, 4, 5];

const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
console.log('Cadena hash:', hashedPassword);

const key = CryptoJS.enc.Hex.parse(hashedPassword);
// console.log('key de key:', key.words);

const jsonData = JSON.stringify(dataToEncrypt);

const encryptedData = CryptoJS.AES.encrypt(jsonData, hashedPassword, { mode: CryptoJS.mode.ECB }).toString();

console.log('Datos encriptados:', encryptedData);

const bytes = CryptoJS.AES.decrypt(encryptedData, hashedPassword, { mode: CryptoJS.mode.ECB });
const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

console.log('Datos desencriptados:', decryptedData);

// var CryptoJS = require('crypto-js');
var me;
// // Encrypt
// var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// // Decrypt
// var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);

// console.log(ciphertext, bytes, originalText);
