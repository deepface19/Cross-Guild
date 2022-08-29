import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from "hardhat";

const deployLSP11BasicSocialRecovery: DeployFunction = async ({
	deployments,
	getNamedAccounts,
  }: HardhatRuntimeEnvironment) => {
	const { deploy } = deployments;
	const { owner } = await getNamedAccounts();
    
	await deploy("LSP11BasicSocialRecovery", {
	  from: owner,
	  gasPrice: ethers.BigNumber.from(20_000_000_000), // in wei
	  log: true,
	});
  };
  
  export default deployLSP11BasicSocialRecovery;
  deployLSP11BasicSocialRecovery.tags = ["LSP11BasicSocialRecovery", "standard"];
