const CryptoJS = require('crypto-js');

const password = 'mi_contraseña';

function decrypt(textToDecrypt) {
  try {
    console.time('decrypt');
    console.log('IM IN DENCRYPT');
    // Hasheamos la contraseña
    console.time('Hasheamos la contraseña');
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    console.timeEnd('Hasheamos la contraseña');
    // Desencriptamos con el hash y obtenemos el privateKey
    console.time('Desencriptamos con el hash y obtenemos el privateKey');
    const bytes = CryptoJS.AES.decrypt(textToDecrypt.textToEncrypt, hashedPassword, { mode: CryptoJS.mode.ECB });
    const textoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    console.timeEnd('Desencriptamos con el hash y obtenemos el privateKey');
    console.log('Texto desencriptado:', textoDesencriptado);
    console.timeEnd('decrypt');
  } catch (error) {
    console.log(error);
  }
}
function encrypt(textToEncrypt) {
  try {
    console.log('IM IN ENCRYPT');
    console.time('encrypt');
    // Hasheamos la contraseña
    console.time('Hasheamos la contraseña');
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    console.timeEnd('Hasheamos la contraseña');
    // Encriptamos el textToEncrypt con el hash
    console.time('Encriptamos el textoEncriptado con el hash');
    const textoEncriptado = CryptoJS.AES.encrypt(textToEncrypt, hashedPassword, { mode: CryptoJS.mode.ECB }).toString();
    console.timeEnd('Encriptamos el textoEncriptado con el hash');

    console.log('Texto encriptado:', { textToEncrypt: textoEncriptado });

    console.timeEnd('encrypt');

    // Llamamos a la desencriptación inmediata
    decrypt({ textToEncrypt: textoEncriptado });
  } catch (error) {
    console.log(error);
  }
}

encrypt('Este texto lo voy a encriptar ahora');
