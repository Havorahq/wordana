export const Lightlink_Pegasus_Testnet = {
  id: 1891,
  name: "Lightlink Pegasus Testnet",
  network: "lightlink",
  iconUrl:
    "https://pbs.twimg.com/profile_images/1598818548641505280/Yg2XgSeH_400x400.jpg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Etherium",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: ["https://replicator.pegasus.lightlink.io/rpc/v1"] },
    default: { http: ["https://replicator.pegasus.lightlink.io/rpc/v1"] },
  },
  blockExplorers: {
    default: { name: "Blockscout", url: "https://www.blockscout.com/" },
  },
  contracts: {},
  testnet: true,
};

export const Lightlink_Phoenix_Mainnet = {
  id: 1890,
  name: "Lightlink Phoenix Mainnet",
  network: "lightlink",
  iconUrl:
    "https://pbs.twimg.com/profile_images/1598818548641505280/Yg2XgSeH_400x400.jpg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Etherium",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: ["https://replicator.phoenix.lightlink.io/rpc/v1"] },
    default: { http: ["https://replicator.phoenix.lightlink.io/rpc/v1"] },
  },
  blockExplorers: {
    default: { name: "Blockscout", url: "https://www.blockscout.com/" },
  },
  contracts: {},
  testnet: true,
};
