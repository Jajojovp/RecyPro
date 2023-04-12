// web3-setup.js
const Web3 = require('web3');

// Conéctate a la red Ethereum (puede ser una red de prueba o mainnet)
const web3 = new Web3('https://infura.io/v3/YOUR-INFURA-PROJECT-ID');

// Carga el contrato de RecyProToken con su ABI y dirección del contrato
const recyProTokenABI = require('./RecyProTokenABI.json');
const recyProTokenAddress = '0xYOUR_CONTRACT_ADDRESS';
const recyProToken = new web3.eth.Contract(recyProTokenABI, recyProTokenAddress);

module.exports = {
  web3,
  recyProToken,
};
