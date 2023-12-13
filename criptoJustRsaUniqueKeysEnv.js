const NodeRSA = require('node-rsa');
const dotenv = require('dotenv');

dotenv.config();

function decrypt(textoEncriptado) {
  try {
    console.log('IM IN DENCRYPT');
    console.time('decrypt');

    const privateKey = process.env.PRIVATE_KEY;

    console.time('DESENCRIPTAMOS EL TEXTO CON LA LLAVE PRIVADA');
    const key = new NodeRSA(privateKey);
    const textoDesencriptado = key.decrypt(textoEncriptado, 'utf8');
    console.timeEnd('DESENCRIPTAMOS EL TEXTO CON LA LLAVE PRIVADA');

    console.timeEnd('decrypt');

    console.log('TEXTO DESENCRIPTADO:', textoDesencriptado);
  } catch (error) {
    console.log(error);
  }
}
function encrypt(textToEncrypt) {
  try {
    console.log('IM IN ENCRYPT');

    console.time('ENCRYPT');
    const publicKey = process.env.PUBLIC_KEY;

    // Encriptamos el texto con la llave pública
    console.time('ENCRIPTAMOS EL TEXTO CON LA LLAVE PÚBLICA');
    const key = new NodeRSA(publicKey);
    const textoEncriptado = key.encrypt(JSON.stringify(textToEncrypt), 'base64');
    console.timeEnd('ENCRIPTAMOS EL TEXTO CON LA LLAVE PÚBLICA');

    console.timeEnd('ENCRYPT');

    console.log('TEXTO ENCRIPTADO:', textoEncriptado);

    // Llamamos a la desencriptación inmediata
    decrypt(textoEncriptado);
  } catch (error) {
    console.log(error);
  }
}

encrypt('Este texto lo voy a encriptar ahora');
