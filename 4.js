// const EncryptRsa = require('encrypt-rsa');

//OR

const EncryptRsa = require('encrypt-rsa').default;

// create instance
const encryptRsa = new EncryptRsa();

const { privateKey, publicKey } = encryptRsa.createPrivateAndPublicKeys();

const encryptedText = encryptRsa.encryptStringWithRsaPublicKey({
  text: 'hello world',
  publicKey,
});
console.log(encryptedText);

const decryptedText = encryptRsa.decryptStringWithRsaPrivateKey({
  text: encryptedText,
  privateKey,
});
console.log(decryptedText);
