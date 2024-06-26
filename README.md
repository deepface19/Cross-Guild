## Cross Guild A Social Recovery Tools for Lukso Network
![crossguild](https://user-images.githubusercontent.com/59292798/187340881-8cd1263b-d3b9-402c-88e5-3433e457ce6c.jpg)

### Project Name : Cross Guild
### Team Member : 3
### Name : Deepface19, TheVanquiser, Fendiefc

## [Demo Video](https://youtu.be/mBaL1DKdY0I)

## [Beta Site Frontend](https://cross-guild.web.app)
- we not yet configuring the backend may be 1-2 weeks to come
- use Universal Profile Browser Ext and turn off your metamask

## Concept 
![concept crossbuild](https://user-images.githubusercontent.com/59292798/187372013-11860fc7-0435-4d9a-b033-f5a0e4df1315.png)

## Description 
- user create contract and add the 5 guardians address
- after that the guardians will be controller the addresss user who create the contract
- if user universal profile who made contract do transaction out, the contract will be notice the guardians to voting and validation the transaction
- if user universal profile who madr contract di recovery and change the guardians address, the contract will be notice the guardians to voting and validation the transaction

## Technology used
- [chakra-ui](https://chakra-ui.com/)
- [wagmi](https://wagmi.sh/)
- [Universal Profile Browser Extension](https://docs.lukso.tech/guides/browser-extension/install-browser-extension)
- [LSP11BasicSocialRecovery](https://github.com/lukso-network/lsp-smart-contracts/tree/feat/SocialRecovery/contracts/LSP11BasicSocialRecovery) 
- [@lukso/lsp-factory](https://docs.lukso.tech/tools/lsp-factoryjs/getting-started)
- [@erc725/erc725.js](https://docs.lukso.tech/tools/erc725js/getting-started)
- [ethers](https://ethers.org/)
- [ethereum-waffle](https://ethereum-waffle.readthedocs.io/en/latest/getting-started.html)
- [openzeppelin](https://www.openzeppelin.com/)
- [hardhat](https://hardhat.org/)
- [yarn](https://yarnpkg.com)
- [npm](https://www.npmjs.com/)

## Installing and running
```
git clone https://github.com/deepface19/Cross-Guild.git
```
##### Setup Hardhat/Contract
```
cd packages/hardhat 
yarn install

// for L16 lukso Testnet //
yarn deploy:luksoL16
or 
// for L14 Lukso Testnet//
yarn deploy:luksoL14 
```
##### Setup Frontend
```
cd packages/frontend
npm install 
npm start [localhost:3000]
```
