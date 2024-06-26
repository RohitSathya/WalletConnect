import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig} from '@web3modal/wagmi/react/config'
import { WagmiConfig, WagmiProvider } from "wagmi";
import { arbitrum, mainnet, zkSyncTestnet } from "wagmi/chains";

// Replace this project ID with yours
// from cloud.walletconnect.com
const projectId = "5ce5f3ce722452e93cada83e164a8f04";

const chains = [arbitrum,mainnet];

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata
    
 
});

createWeb3Modal({
  wagmiConfig: wagmiConfig,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <App />
    </WagmiProvider>
  </React.StrictMode>,
);
