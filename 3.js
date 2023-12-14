const NodeRSA = require('node-rsa');
const CryptoJS = require('crypto-js');

const publicaKey = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwiTqhZjVTs8RjbkNQThg
    47PjPkYHMvHYaUVns37LIrZPIRPzgNyrd7uAAc92/f6Wz2RZysdOcY0yTUqKTWqM
    JtX42g/lpzGcvqcvDrBiWtJfa7f2T4EnUg33ZszSSHEdBFhBf+DRnJJJpxA3svk5
    GFWGfytxc7SSL1ZjVQs6DHJ2F7hFzBIIVQ/T70FX8H0GrHA2JVxhCn7nphfznujz
    mW52cadzWLvfKYD+toI8qGx6IFPFgLqPQp1827cJIFldlRiC4WY6VLqvKrc83vkx
    l/CbENGVLciVjpdnHI9IitJGivrmzd5aUI/LicYI4aErOULlDvbNWC+Z2ff4Dc6f
    CQIDAQAB
    -----END PUBLIC KEY-----`;

const privadaKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAwiTqhZjVTs8RjbkNQThg47PjPkYHMvHYaUVns37LIrZPIRPz
gNyrd7uAAc92/f6Wz2RZysdOcY0yTUqKTWqMJtX42g/lpzGcvqcvDrBiWtJfa7f2
T4EnUg33ZszSSHEdBFhBf+DRnJJJpxA3svk5GFWGfytxc7SSL1ZjVQs6DHJ2F7hF
zBIIVQ/T70FX8H0GrHA2JVxhCn7nphfznujzmW52cadzWLvfKYD+toI8qGx6IFPF
gLqPQp1827cJIFldlRiC4WY6VLqvKrc83vkxl/CbENGVLciVjpdnHI9IitJGivrm
zd5aUI/LicYI4aErOULlDvbNWC+Z2ff4Dc6fCQIDAQABAoIBAFB4NKzDOEa+FSyE
8zWBRMecnCgHppw7GdQobF89wrzUi9/OATP8QyYRlXEqqMuGZsP3eDBQg/cU6zCW
INUNwKGoNslLpYizS6DKcvrHqTyzzdE8It+5TK76Ev2ND+vu1nQikKOMb9VR3S1d
z3hjTIMFkAXN3+xxf9YXHHz3dkwJu71PbABmDGnEFLdC5i8aU0yJooWHBikYbVq9
veAXWGHIw0jIFs1J0qyKw2be+Q64UoDfghKnR3QE1BvpwGi/QgI+Q7vF9PO7C2T8
CqkU0N5SWyhGXsMo82CX+lDGp5oo6Ib8qTpMxYB5wIjAShPYCfUgLYo92z+0CSYB
JBriu3ECgYEA9RRkMJ2BUpyTTDhY1+TLCNXXgH582S2rH3hJMxJWt599OhKzbDbf
0/QpB1AnqqSEjoMjLhclc1knfIs3PT51mEj3Juz8qIOEq33hp5jtwzaFquJGA4WN
MhKScN2Qb3MsHl/y08CFZHj9xGp903bcQkUgMzhABJUnwDvopOKGVfsCgYEAysuB
1aBkCAPM4GvuvodC1ptAsjEOPXxC0GebBq+Uh4Koi8ipUQFb399OPboYEtj0w3Sb
4wzCg5XPCkwSNVW8UE9Brz7sXwYGQrREE4KXRLvI3XWW7MGa0DnBFHjQQELh9Oa2
paCvoKKc/PVHp3yeGlNgJz3vFuSWcxmlhwCLg8sCgYBAfCkQkaDhd8laGMlnpQ+3
N20Ipj97dYS9Nw0rnvuqPRDaIumK47VpM6lH/1MwlzE5vk+XZQe5ng/BuW/DcZfH
hgth9qFURaa26NxjGN4Wq1XobLk3XACW2EQn5mSGrqtBIsXl6ZYvpZZABDUvWusB
lOawE3Dkw8o9zoWcPO5T2QKBgBhQwmaM7rGPUxdtmZi6uybkQqObAiwZJCG86neo
wdRltDPegX62/P8g1U7Na2mHHgH5j19v/jqs0cBYUq6WcxfmCOgsUUcrf8CrwKXe
OKkDIxh6qvgEVr20zxPXUJED8/fbWfcOB0Dpfo1OE6Nfa82YRaUu5eYGzotKffBr
/k51AoGASkms8x8Hl4Bc2QUGOcByC24hmt8ioWj5lES/MokOzfPo9sXVjriJ0qct
zandtiiLKHJOpN/VcoIIx61uicLHIHRRSsmV/g0JS8wSq31AKtDFDC9SveyWjKLc
dS5OG/3RhGu3hPsbl1+TII8r4w5lOtCTIREOhCvysoKzVtzcWjY=
-----END RSA PRIVATE KEY-----`;

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
    const bytes = CryptoJS.AES.decrypt(textToDecrypt.privateKey, hashedPassword, { mode: CryptoJS.mode.ECB });
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    console.timeEnd('Desencriptamos con el hash y obtenemos el privateKey');
    // const privateKeyPem = fs.readFileSync('./keys/private.pem', 'utf8');
    // Desencriptamos el texto con la llave privada
    console.time('Desencriptamos el texto con la llave privada');
    const key = new NodeRSA(decryptedData);
    const textoDesencriptado = key.decrypt(textToDecrypt.textToEncrypt, 'utf8');
    console.timeEnd('Desencriptamos el texto con la llave privada');
    console.log('Texto desencriptado:', textoDesencriptado);
    console.timeEnd('decrypt');
  } catch (error) {
    console.log(error);
  }
}
function encrypt(textToEncrypt) {
  try {
    console.time('encrypt');
    console.log('IM IN ENCRYPT');
    //Generamos nuevas claves públicas y privadas
    console.time('Generamos nuevas claves públicas y privadas');
    const keyPair = new NodeRSA().generateKeyPair();
    const publicKey = keyPair.exportKey('public');
    const privateKey = keyPair.exportKey('private');
    console.timeEnd('Generamos nuevas claves públicas y privadas');

    // Hasheamos la contraseña
    console.time('Hasheamos la contraseña');
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    console.timeEnd('Hasheamos la contraseña');
    // const keyPairPem = fs.readFileSync(JSON.stringify(publicKey), 'utf8');
    // const publicKeyPem = fs.readFileSync('./keys/public.pem', 'utf8');
    // const privateKeyPem = fs.readFileSync('./keys/private.pem', 'utf8');
    // const stringify = { textToEncrypt, privateKey };

    // Encriptamos el privateKey con el hash
    console.time('Encriptamos el privateKey con el hash');
    const keyPrivadoEncriptado = CryptoJS.AES.encrypt(privateKey, hashedPassword, { mode: CryptoJS.mode.ECB }).toString();
    console.timeEnd('Encriptamos el privateKey con el hash');
    // Encriptamos el texto con la llave pública
    const key = new NodeRSA(publicKey);
    const textoEncriptado = key.encrypt(textToEncrypt, 'base64');

    console.log('Texto encriptado:', { privateKey: keyPrivadoEncriptado, textToEncrypt: textoEncriptado });

    console.timeEnd('encrypt');

    // Llamamos a la desencriptación inmediata
    decrypt({ privateKey: keyPrivadoEncriptado, textToEncrypt: textoEncriptado });
  } catch (error) {
    console.log(error);
  }
}

encrypt(
  JSON.stringify({
    usr: 'sa',
    pwd: 'Fsz3nQ3PZgbA2i',
    nbd: 'PALERPreniec',
    proc: 'USP_PRI_RENIEC_GSimple',
    parameter: [
      {
        1: 'uno',
      },
      {
        2: 'dos',
      },
      {
        3: 'tres',
      },
      {
        4: 'cuatro',
      },
      {
        5: 'cinco',
      },
      {
        6: 'seis',
      },
      {
        7: 'siete',
      },
      {
        8: 'ocho',
      },
      {
        9: 'nueve',
      },
      {
        10: 'diez',
      },
      {
        11: 'once',
      },
      {
        12: 'doce',
      },
      {
        13: 'trece',
      },
      {
        14: 'catorce',
      },
      {
        15: 'quince',
      },
      {
        16: 'dieciseis',
      },
      {
        17: 'diecisiete',
      },
      {
        18: 'dieciocho',
      },
      {
        19: 'diecinueve',
      },
      {
        20: 'veinte',
      },
      {
        21: 'veintiuno',
      },
      {
        22: 'veintidos',
      },
      {
        23: 'veintitres',
      },
      {
        24: 'veinticuatro',
      },
      {
        25: 'veinticinco',
      },
      {
        26: 'veintiseis',
      },
      {
        27: 'veintisiete',
      },
      {
        28: 'veintiocho',
      },
      {
        29: 'veintinueve',
      },
      {
        30: 'treinta',
      },
      {
        31: 'treinta y uno',
      },
      {
        32: 'treinta y dos',
      },
      {
        33: 'treinta y tres',
      },
      {
        34: 'treinta y cuatro',
      },
      {
        35: 'treinta y cinco',
      },
      {
        36: 'treinta y seis',
      },
      {
        37: 'treinta y siete',
      },
      {
        38: 'treinta y ocho',
      },
      {
        39: 'treinta y nueve',
      },
      {
        40: 'cuarenta',
      },
      {
        41: 'cuarenta y uno',
      },
      {
        42: 'cuarenta y dos',
      },
      {
        43: 'cuarenta y tres',
      },
      {
        44: 'cuarenta y cuatro',
      },
      {
        45: 'cuarenta y cinco',
      },
      {
        46: 'cuarenta y seis',
      },
      {
        47: 'cuarenta y siete',
      },
      {
        48: 'cuarenta y ocho',
      },
      {
        49: 'cuarenta y nueve',
      },
      {
        50: 'cincuenta',
      },
      {
        51: 'cincuenta y uno',
      },
      {
        52: 'cincuenta y dos',
      },
      {
        53: 'cincuenta y tres',
      },
      {
        54: 'cincuenta y cuatro',
      },
      {
        55: 'cincuenta y cinco',
      },
      {
        56: 'cincuenta y seis',
      },
      {
        57: 'cincuenta y siete',
      },
      {
        58: 'cincuenta y ocho',
      },
      {
        59: 'cincuenta y nueve',
      },
      {
        60: 'sesenta',
      },
      {
        61: 'sesenta y uno',
      },
      {
        62: 'sesenta y dos',
      },
      {
        63: 'sesenta y tres',
      },
      {
        64: 'sesenta y cuatro',
      },
      {
        65: 'sesenta y cinco',
      },
      {
        66: 'sesenta y seis',
      },
      {
        67: 'sesenta y siete',
      },
      {
        68: 'sesenta y ocho',
      },
    ],
  })
);

decrypt({
  privateKey:
    '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',
  textToEncrypt:
    'pUYeiIXtJo4TXMBlm0rSkdZh86mZUe9Ndc7R3nh3oBOyePZkJxoiFrPm/qx7iVFUa4qGGNvUWu4zDQtkpYsnLlmRuBg0P0s82GI7ZMMjLyOq6MvpyETlbPmiIQJT7fDWMEEM5CxOFI9k2ct0Jgyebb7CCw04Qytpek4jOGvFXROyogd1832SJ8LGAr4CEPzbvuxz8/RqsSXfZB2rKCQR9WT1qDlkXbKhA8wELRKcN9x6kKAt4wvWSGoKrx4tmJl6u3T9d3VfEU/uXt5UHrGe0VW38Mit3FYgclb8w875WXumx61+UXbFpsWedJSJhFBFzFi8DxGiL4fuaOQI2OP3aQ==',
});
