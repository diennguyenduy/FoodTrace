'use strict';

const { FileSystemWallet, Gateway } = require('fabric-network');
const path = require('path');

const ccpPath = path.resolve(__dirname, '..', '..', 'first-network', 'connection-org1.json');

var AddFood = async function(args = []) {
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

    // Submit the specified transaction.
    // AddRetailerProductInfo transaction - requires 6 argument
    await contract.submitTransaction(
      'AddRetailerProductInfo',
      args[0],
      args[1],
      args[2],
      args[3],
      args[4],
      args[5]
    );
    console.log('Transaction has been submitted');

    // Disconnect from the gateway.
    await gateway.disconnect();
  } catch (error) {
    console.error(`Failed to submit transaction: ${error}`);
    process.exit(1);
  }
};

module.exports = {
  AddFood: AddFood
};
