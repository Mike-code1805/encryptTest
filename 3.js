const NodeRSA = require('node-rsa');
const fs = require('fs');

function encrypt(textToEncrypt) {
  try {
    const publicKeyPem = fs.readFileSync('./keys/public.pem', 'utf8');
    // const privateKeyPem = fs.readFileSync('./keys/privateKey.pem', 'utf8');
    const key = new NodeRSA(publicKeyPem);
    const textoEncriptado = key.encrypt(textToEncrypt, 'base64');
    console.log('Texto encriptado:', textoEncriptado);
  } catch (error) {
    console.log(error);
  }
}

// encrypt(
//   'Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar Este texto lo voy a encriptar'
// );

function decrypt(textToDecrypt) {
  try {
    const privateKeyPem = fs.readFileSync('./keys/private.pem', 'utf8');
    const key = new NodeRSA(privateKeyPem);
    const textoDesencriptado = key.decrypt(textToDecrypt, 'utf8');
    console.log('Texto desencriptado:', textoDesencriptado);
  } catch (error) {
    console.log(error);
  }
}

decrypt(
  'LAnf4iemSwG0uVePNNryKA7F/k3CD/ifICK5WFdfmm0vJbi0U41Z49x8HqW9UhduaPk0XRhEzrwqCXqqOn82qwEWHfllZd7LgIOaErL0eYcVjeabuavCXPlY1zpyw1niKFvWJdZy8/hxy6qkUPH4NcnxkXY/b7Bhwbh2CnvEvTZuYyPavPwDEDWcZj6gnOgFPA0Tg8LIOTi7U1+gGoZ6+TC+04373svCjlGkG+B+R8ldy8jhNmRkc/KxglRdTisLQ7WAFaW1mBTQO4+TzH/oahauvyDgzJb78k15kQiHsi94Tc71l8DBSMZJ/GWSZQmWidBqydfbX9ufgpmQ0mVJYKcr1HvnL3dRBlwjn88/SDvXnr+mVeambRh33qC/bbpR9VGhi6Qz2lJaNRks2MxMVQFVWD+uy/IHISNxezbI8hGTOJJKBC8r2XoSPAD+DpdboC5gPwgPovk+rBvC2hr+v/WyxJZ4myrusnyce3GFpQQjTyo+7YhqhWGKbvWkn7qgg5hc9eJCXLdONima+lWFyUWzdMLZf/dT5r4bQUxt102pezP+bvd+pd4BEFUB5VMAaRx/M46Qc5UdMLLl4JGPKic4ZVpfzHEPBHc/0hGF0uLKv1JICPVv8J8SKUzhU1eDYOoBcAzJjs4IwKjflwny12/XXV868X+Z4tD0HVvBTcE='
);
