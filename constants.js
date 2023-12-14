const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

// Función para encriptar con la llave pública
function encryptWithPublicKey(publicKey, data) {
  console.log('encryptWithPublicKey');
  console.log('encryptWithPublicKey');
  console.log({ publicKey });
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

// // Ejemplo de generación de claves
const keyPair = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});
console.log({ keyPair });
console.log(process.env.PUBLIC_KEY);

const keys = {
  keyPair: {
    publicKey:
      '-----BEGIN PUBLIC KEY-----\n' +
      'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw/rz/P9GCeF6yTlP+BJ0\n' +
      'fRKKPOL1OJ7ngBIka1Y6cQtwQ/OZZaSUNzK36caNmnB/nxZh4g389ill6RaH/tp7\n' +
      'rpsScELYDTLQyfrOERsijqYGjdfnI2ACIYrSUTmQjTFLiSOgX8frGacQWGqurhoX\n' +
      '1Zklu3/ddarahlzA0WkfOL+DK0PfQmHDcl4ju9gFjMoO2b13oiPYJONBFy0oWsMN\n' +
      'Iif5h58i5sj26BpEOgH8yD1Jut1FlLFPxKFUQYIHYGoeXZJlMDw9eSnGOAhMMsb2\n' +
      'RFk53fjtkS+TfYPw/5lNRpN44TYEew8O8HWGM2Vi6r828c5RmHdEUPYa1eeqxVh9\n' +
      'uwIDAQAB\n' +
      '-----END PUBLIC KEY-----\n',
    privateKey:
      '-----BEGIN PRIVATE KEY-----\n' +
      'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDD+vP8/0YJ4XrJ\n' +
      'OU/4EnR9Eoo84vU4nueAEiRrVjpxC3BD85llpJQ3Mrfpxo2acH+fFmHiDfz2KWXp\n' +
      'Fof+2nuumxJwQtgNMtDJ+s4RGyKOpgaN1+cjYAIhitJROZCNMUuJI6Bfx+sZpxBY\n' +
      'aq6uGhfVmSW7f911qtqGXMDRaR84v4MrQ99CYcNyXiO72AWMyg7ZvXeiI9gk40EX\n' +
      'LShaww0iJ/mHnyLmyPboGkQ6AfzIPUm63UWUsU/EoVRBggdgah5dkmUwPD15KcY4\n' +
      'CEwyxvZEWTnd+O2RL5N9g/D/mU1Gk3jhNgR7Dw7wdYYzZWLqvzbxzlGYd0RQ9hrV\n' +
      '56rFWH27AgMBAAECggEAGEIH0VkHolF2kVG2xE4EfTa+RasSD2Ab545XU7HoqfVw\n' +
      'f/i3FA27CtoMSbN585PZOCfdFc4FcbLOGnvfeXwxsvse3SZo97lCfr28pAFn1aBX\n' +
      'T1daFNbdbKlyPvuRGOjxIJh4UWK9hv9W1prd5E72hEngkcTR9K6hPeBdPY51fuB+\n' +
      'EAZdLp3/4mgz7ZsylqOcNlIugPXYlq1rXfdedOIJ/T7FMigRGUlhghHRG5oEBd/j\n' +
      'p1jsO8NgybbaOcFxXiMaRcptAKYAjRRuezYo/TBggYPERkbEWpaVavs0nv+g0DzR\n' +
      'ihO6ir7AC0etcCg5I1ow1pK/GpPqPJj6YZnkxceCgQKBgQDxleD+s2FQ8ivgOmOp\n' +
      'Sf79RAJ3oEBHONzNEJwLSLT5vIs8qR5vxy+500BIjDYL/snhlRj4HnP3dzPmXsl+\n' +
      'NfKSG9TYfloTWBRlTtOmrG5QK9y3cNz3RkGon1CyiVm48UoHj0dC7Y6QIL2pnFb5\n' +
      'E+wK1ACt0F3oH8cUJE4hXlxyhQKBgQDPrHkuqmuKOD2tW5y/rKIUTRIzaUMznpTH\n' +
      'fCEhu7I2w8IGj1Cg5zh0xHZpVJPns52FNISResvYJEl0bjfuq5aWlGadAhKZnyi0\n' +
      'vaKWxq6PUGYcHPtPn2mgFruWgLfCST5HMXNoOmZnRJ5XCoG/0SpkpQL7uVxdL5FE\n' +
      'd2XVJvnDPwKBgQDnf/k/+QLrP3VeBHXWFotbhN1cZtrRpSKo+x6dDYomuk8uzNzW\n' +
      'vif0yQOTwZBVBE3OdkKcGQqFe9vnCLPK1sVgz3yyDLoiSUgaIGRfFmMLPkzeGDAW\n' +
      'YGOwwyHgRBAPUmDfR6RA9UWkxUsaCi+ptTZ+1dLkvIQQWMs7eOLJxROPxQKBgC9f\n' +
      'os04ZwvCxJ8VNO6sjNSguDQuIPxXgoz3Df/J919yzIH+k2ABHunUH0br2kmSua43\n' +
      'Sr59Cp8lt/PtaKjzT4jOFZJfdKrCmeCRGdPXQt7CcmibW+DP9qJkTSqJ9mFFoAVR\n' +
      'jIgMOmv4RT6J0QtWxZrr4YBWynEfdr3tlrdHCta1AoGAZx95n01nZjkvCiJ/EsCe\n' +
      'LYgwX5mLBb/oV8krVhAcDeib6lDPP9jrDha4DzzWe9Av1IwN/czsmk6RhrB3BG9Y\n' +
      'qwZj3Pl5xK9iZ1Xe97qeZCfoMxIhJD0zgp5O/tReDPnOgz3Tgzpk1FWwPHpNzmb+\n' +
      'kO3p67hxcVl9k1YjkWVLK6o=\n' +
      '-----END PRIVATE KEY-----\n',
  },
};

const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;

// const publicKey = keys.keyPair.publicKey;
// const privateKey = keys.keyPair.privateKey;

// Ejemplo de uso
const dataToEncrypt = { message: 'Hola, este es un mensaje secreto' };
console.time('Encrypt');
const encryptedData = encryptWithPublicKey(publicKey, dataToEncrypt);
console.log('Datos encriptados:', encryptedData);

const decryptedData = decryptWithPrivateKey(privateKey, encryptedData);
console.log('Datos desencriptados:', decryptedData);
console.timeEnd('Encrypt');
