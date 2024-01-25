"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "./context/Context";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {
  Lightlink_Phoenix_Mainnet,
  Lightlink_Pegasus_Testnet,
} from "./utils/networks";

const { chains, publicClient } = configureChains(
  [
    Lightlink_Pegasus_Testnet,
    Lightlink_Phoenix_Mainnet,

    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
  ],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Wordana",
  description: "Word game - Web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains} initialChain={1891}>
            <ContextProvider>
              <main>{children}</main>
            </ContextProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
