// You are free to use this code for whatever you would like - It is here to help you understand development using Acorn's SunPump API.
//
// If you need extensive support you will need any paid API plan or can ask @DangerAcorn on Discord or Telegram for consulting services.


import TronWeb from 'tronweb';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const privateKey = process.env.PRIVATE_KEY || 'YOUR-TRON-PRIVATE-KEY'; // Your Private Key Hex
const tronWeb = new TronWeb({
  fullHost: 'YOUR_RPC_ENDPOINT', // you can use https://api.trongrid.io 
  privateKey,
});

export const sendLocalTradeRequest = async () => {
  try {
    console.log('Requesting unsigned transaction...');
    const userAddress = tronWeb.defaultAddress.base58;

    const response = await axios.post(
      'https://api.dangeracorn.com/sunpump/localTrade',
      {
        action: "buy", // Use "buy" or "purchase" for buying tokens | Use "sell" or "sale" when selling
        tokenAddress: "token-contract-address", // Token Contract Address in Base58 Format
        amount: "100%", // Amount of TRX to buy | Token Amount or % if Selling (ex. 1000000 = SELL 1,000,000 TOKENS) 
        slippage: "1", // Slippage % in whole number (1 = 1% Slippage)
        userAddress: "your-address" // Signer's public key in Base58 Format
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'your-api-key' // If you don't have you you can get one at https://t.me/+pE-h-2eMeoRhZDBh
        }
      }
    );

    const { unsignedTx } = response.data;

    if (unsignedTx) {
      console.log('Raw transaction:', unsignedTx);

      // Step 3: Sign the transaction 
      console.log('Signing the transaction...');
      const signedTx = await tronWeb.trx.sign(unsignedTx);

      // Step 4: Broadcast the transaction 
      console.log('Broadcasting the signed transaction...');
      const broadcastResponse = await tronWeb.trx.sendRawTransaction(signedTx);

      if (broadcastResponse.result) {
        console.log('Transaction broadcasted successfully:', 'https://tronscan.org/#/transaction/' + broadcastResponse.txid);
      } else {
        console.log('Failed to broadcast the transaction:', broadcastResponse);
      }
    } else {
      console.log('Error: No unsigned transaction returned.');
    }
  } catch (error) {
    console.error('Error during the local trade request or broadcasting:', error);
  }
};

export const sendMultipleBuyRequests = async (numRequests: number) => {
  console.log(`Starting ${numRequests} concurrent trade requests...`);
  const tradePromises = [];

  for (let i = 0; i < numRequests; i++) {
    console.log(`Starting request ${i + 1}`);
    tradePromises.push(sendLocalTradeRequest());
  }

  await Promise.all(tradePromises);

  console.log(`${numRequests} transactions sent concurrently.`);
};
