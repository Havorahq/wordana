// ethereum.ts
import Web3 from 'web3';

const getWeb3 = async () => {
  if (typeof window !== 'undefined' && typeof (window as any).ethereum !== 'undefined') {
    // Use MetaMask provider
    return new Web3((window as any).ethereum);
  } else {
    // Fallback to Infura or other providers
    const infuraUrl = 'https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY'; // Replace with your Infura API key
    return new Web3(new Web3.providers.HttpProvider(infuraUrl));
  }
};

export default getWeb3;
