const fs = require('fs');
const { parseString } = require('xml2js');
const NodeRSA = require('node-rsa');

// Read the XML-formatted RSA public key
const xmlPublicKey = fs.readFileSync('./keys/public.pem', 'utf-8');

// Parse the XML to extract Modulus and Exponent
parseString(xmlPublicKey, (err, result) => {
  if (err) {
    console.error('Error parsing XML:', err);
    return;
  }

  const modulus = result.RSAKeyValue.Modulus[0];
  const exponent = result.RSAKeyValue.Exponent[0];

  // Construct a NodeRSA key object
  const nodeRsaKey = new NodeRSA();
  nodeRsaKey.importKey({ n: Buffer.from(modulus, 'base64'), e: parseInt(exponent, 10) }, 'components-public');

  // Export the key in PEM format
  const pemPublicKey = nodeRsaKey.exportKey('pkcs8-public-pem');

  // Save the PEM-formatted public key to a file
  fs.writeFileSync('./keys/', pemPublicKey);

  console.log('Conversion completed successfully.');
});

// Lee el archivo PEM
const pemFilePath = './keys/public.pem';
const pemContent = fs.readFileSync(pemFilePath, 'utf-8');

// Imprime el contenido como una cadena
console.log(pemContent);

`
-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEArNPDqb1pIvOER9dUoxRo
r1JzNFQWn6Bh4YvU6EKwI1sN2AX8nmRefb+Gv0JA+er64dfdrEqZtTwph3ec60QZ
/s+/ctCWfsANmIR3x/K2bYRmQdMKa1cjfjOZm7iPQMtP7DRACks76Y+s5Emdtkfg
tcTgCKHiR3yrw6UlIu3uTY7G5MkTBWxjmF32uhIqsbTmpTGjzl9wZE7cbDN5SV2S
mZr7JqkMcVGDJHIeX4zYhUMmQaKOEfEy5eKP7WD1+/TBwIn5K+kaYXfVeRn8+Nv4
42VB5hCgXsflcJF7mjIqdA78K1cj9D80NuKI/0YiRuROfEl+mU/Q+Dk0oQci1FYS
yvq/aP7T+eo4GX4HcWaVo+jBTZEDku7MuUugDm/hog9NadDPUn/JvCi98Ztxq9by
SvAaUpzm5yZ7UohPdbxRaTR53NZ9pUik71crL7WiAYG2HtmXoaNavH7SWj6IH0LZ
dVownBzqBQ8QQgrD/OFJaCCW0Ic/XvjTZ5IZ98tvIC5NQPB9UyGxbDho0xz2cIv2
mn1MoMIIbGzsOjjwErwxkHtpfC7mWAPKJs5P18QYJEZ3HY0eHLU8k7x7k6ll0yNS
s6iLlEIaaBqJ7782sfj6yxoA5D/jNBHoL/PFzulOA135/81FKYFLRiHxcpRMN0oQ
RKe8PFlS+vp6mHzyEea3FoECAwEAAQ==
-----END PUBLIC KEY-----
`;
