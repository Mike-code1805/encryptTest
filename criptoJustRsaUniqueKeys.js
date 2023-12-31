const NodeRSA = require('node-rsa');

function decrypt(textoEncriptado) {
  try {
    console.log('IM IN DENCRYPT');
    console.time('decrypt');

    const privateKey = `-----BEGIN RSA PRIVATE KEY-----
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
    const publicKey = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwiTqhZjVTs8RjbkNQThg
    47PjPkYHMvHYaUVns37LIrZPIRPzgNyrd7uAAc92/f6Wz2RZysdOcY0yTUqKTWqM
    JtX42g/lpzGcvqcvDrBiWtJfa7f2T4EnUg33ZszSSHEdBFhBf+DRnJJJpxA3svk5
    GFWGfytxc7SSL1ZjVQs6DHJ2F7hFzBIIVQ/T70FX8H0GrHA2JVxhCn7nphfznujz
    mW52cadzWLvfKYD+toI8qGx6IFPFgLqPQp1827cJIFldlRiC4WY6VLqvKrc83vkx
    l/CbENGVLciVjpdnHI9IitJGivrmzd5aUI/LicYI4aErOULlDvbNWC+Z2ff4Dc6f
    CQIDAQAB
    -----END PUBLIC KEY-----`;

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
