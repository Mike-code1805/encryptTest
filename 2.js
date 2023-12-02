const NodeRSA = require('node-rsa');
const { parseString } = require('xml2js');
const fs = require('fs');
const generate = () => {
  const key = new NodeRSA().generateKeyPair();

  const publicKey = key.exportKey('public');
  const privateKey = key.exportKey('private');

  fs.openSync('./keys/publicKey.pem', 'w');
  fs.writeFileSync('./keys/publicKey.pem', publicKey, 'utf8');

  fs.openSync('./keys/privateKey.pem', 'w');
  fs.writeFileSync('./keys/privateKey.pem', privateKey, 'utf8');
};

generate();
