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
