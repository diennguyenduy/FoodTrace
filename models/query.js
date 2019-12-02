'use strict';

const { FileSystemWallet, Gateway } = require('fabric-network');
const path = require('path');

const ccpPath = path.resolve(__dirname, '..', '..', 'first-network', 'connection-org1.json');

var QuerryFood = async function(id) {
  try {
    // Create a new file system based wallet for managing identities.
    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = new FileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);

    // Check to see if we've already enrolled the user.
    const userExists = await wallet.exists('retailer-01');
    if (!userExists) {
      console.log('An identity for the user "retailer-01" does not exist in the wallet');
      console.log('Run the registerUser.js application before retrying');
      return;
    }

    // Create a new gateway for connecting to our peer node.
    const gateway = new Gateway();
    await gateway.connect(ccpPath, {
      wallet,
      identity: 'retailer-01',
      discovery: { enabled: true, asLocalhost: true }
    });

    // Get the network (channel) our contract is deployed to.
    const network = await gateway.getNetwork('foodtracechannel');

    // Get the contract from the network.
    const contract = network.getContract('foodtrace');

    // Evaluate the specified transaction.
    // query food information transaction - requires 1 argument, ex: ('GetRetailerProductInfo', '17021215')
    const result = await contract.evaluateTransaction('GetRetailerProductInfo', id);
    console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
  } catch (error) {
    console.error(`Failed to evaluate transaction: ${error}`);
    process.exit(1);
  }
};

module.exports = {
  QuerryFood: QuerryFood
};
