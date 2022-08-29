import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})
ReactDOM.render(
  <React.StrictMode>
       <WagmiConfig client={client}>
      <App />
    </WagmiConfig>
  </React.StrictMode>,
  document.getElementById("root")
);