/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Donation, DonationInterface } from "../Donation";

const _abi = [
  {
    inputs: [],
    name: "addDonation",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDonationStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b50610175806100246000396000f3fe6080604052600436106100295760003560e01c8063ced6d2671461002e578063e7472f0914610038575b600080fd5b610036610063565b005b34801561004457600080fd5b5061004d61007d565b60405161005a9190610095565b60405180910390f35b3460008082825461007491906100b0565b92505081905550565b60008054905090565b61008f81610106565b82525050565b60006020820190506100aa6000830184610086565b92915050565b60006100bb82610106565b91506100c683610106565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156100fb576100fa610110565b5b828201905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea264697066735822122084f98b2c7bf728c7da312f2a37f5dbbcbfe3d21ab16d093674a25d438410732a64736f6c63430008040033";

export class Donation__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Donation> {
    return super.deploy(overrides || {}) as Promise<Donation>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Donation {
    return super.attach(address) as Donation;
  }
  connect(signer: Signer): Donation__factory {
    return super.connect(signer) as Donation__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DonationInterface {
    return new utils.Interface(_abi) as DonationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Donation {
    return new Contract(address, _abi, signerOrProvider) as Donation;
  }
}
