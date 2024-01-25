// services/web3.ts

import Web3 from 'web3';

interface CustomWindow extends Window {
  ethereum?: any; // Add the ethereum property to the Window interface
  web3?: any; // Add the web3 property to the Window interface
}

let web3: Web3 | null = null;

const lightstreamsPegasusTestnetRPC = 'https://replicator.pegasus.lightlink.io/rpc/v1';

const getWeb3 = async () => {
  const customWindow = window as CustomWindow; // Type casting to the extended interface
  if (!web3) {
    // Use Lightstreams Pegasus Testnet RPC as the main provider
    web3 = new Web3(lightstreamsPegasusTestnetRPC);

    // Check for MetaMask or other Ethereum wallets as fallbacks
    if (customWindow.ethereum) {
      try {
        await customWindow.ethereum.enable();
        web3 = new Web3(customWindow.ethereum);
      } catch (error) {
        // MetaMask access denied or not available
        console.warn('MetaMask access denied or not available');
      }
    } else if (customWindow.web3) {
      // Legacy dapp browsers...
      web3 = new Web3(customWindow.web3.currentProvider);
    }
  }
  return web3;
};

export default getWeb3;




// import Web3 from 'web3';

// // let web3: Web3 | null = null;
// let web3 = new Web3('https://replicator.pegasus.lightlink.io/rpc/v1');

// const getWeb3 = async () => {
//   if (!web3) {
//     // Use the provider from MetaMask or any Ethereum wallet
//     if (typeof window !== 'undefined' && (window as any).ethereum) {
//       web3 = new Web3((window as any).ethereum);
//       try {
//         // Request account access if needed
//         await (window as any).ethereum.enable();
//       } catch (error) {
//         throw new Error('User denied account access');
//       }
//     } else if (typeof window !== 'undefined' && (window as any).web3) {
//       // Legacy dapp browsers...
//       web3 = new Web3((window as any).web3.currentProvider);
//     } else {
//       // Non-dapp browsers...
//       try {
//         await (window as any).ethereum.enable();
//       } catch (error) {
//         throw new Error('No Ethereum provider detected');
//       }
//     }
//   }
//   return web3;
// };

// export default getWeb3;
