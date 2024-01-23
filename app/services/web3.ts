// services/web3.ts
import Web3 from 'web3';

let web3: Web3 | null = null;

const getWeb3 = async () => {
  if (!web3) {
    // Use the provider from MetaMask or any Ethereum wallet
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      web3 = new Web3((window as any).ethereum);
      try {
        // Request account access if needed
        await (window as any).ethereum.enable();
      } catch (error) {
        throw new Error('User denied account access');
      }
    } else if (typeof window !== 'undefined' && (window as any).web3) {
      // Legacy dapp browsers...
      web3 = new Web3((window as any).web3.currentProvider);
    } else {
      // Non-dapp browsers...
      throw new Error('No Ethereum provider detected');
    }
  }
  return web3;
};

export default getWeb3;
