import 'dotenv/config';
import fs from 'fs';
import fsExtra from 'fs-extra';
import { HardhatUserConfig } from 'hardhat/types';
import { subtask, task, types } from 'hardhat/config';
import { TASK_CLEAN } from 'hardhat/builtin-tasks/task-names';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-deploy';

let mnemonic = process.env.MNEMONIC;
if (!mnemonic) {
	mnemonic = 'test test test test test test test test test test test junk';
}
const mnemonicAccounts = {
	mnemonic,
};

// This account is added in harmony node localnet as test account
const testLocalnetAccount = {
	address: '',
	privateKey: '',
};

const account: { [name: string]: string | undefined } = {
	Localnet: process.env.LOCALNET_PRIVATE_KEY,
	LuksoL14: process.env.LUKSOL14_PRIVATE_KEY,
	LuksoL16: process.env.LUKSOL16_PRIVATE_KEY,
};

// Default output dir to abi contracts in frontend
const contractsFrontDir = '../frontend/src/contracts';

// This adds support for typescript paths mappings
import 'tsconfig-paths/register';

const config: HardhatUserConfig = {
	solidity: {
		version: '0.8.10',
	},
	defaultNetwork: 'localnet',
	networks: {
		hardhat: {
			live: false,
			saveDeployments: false,
			accounts: mnemonicAccounts,
			
		},
		localnet: {
			live: false,
			url: 'http://localhost:9500',
			chainId:  22,
			accounts: account.Localnet ? [account.Localnet] : [testLocalnetAccount.privateKey],
		},
		luksoL14: {
			live: true,
			url: 'https://rpc.l14.lukso.network',
			chainId:  22,
			accounts: account.LuksoL14 ? [account.LuksoL14] : mnemonicAccounts,
		},
		luksoL16: {
			live: true,
			url: 'https://rpc.l16.lukso.network',
			chainId: 2828,
			accounts: account.LuksoL16 ? [account.LuksoL16] : mnemonicAccounts,
		},
	},
	typechain: {
		outDir: 'types',
		target: 'ethers-v5',
	},
	namedAccounts: {
		deployer: {
			default: 0, // here this will by default take the first account as deployer
		},
	},
};


task(TASK_CLEAN, 'Clean all artifacts & folder contracts in frontend').setAction(async (taskArgs, hre, runSuper) => {
	await runSuper();
	if (fs.existsSync('./deployments')) {
		fs.rmdirSync('./deployments', { recursive: true });
	}
	await hre.run('clean-front-contracts');
});

subtask('clean-front-contracts', 'Clear frontend contracts folder').setAction(async () => {
	// Clear if exist
	if (fs.existsSync(contractsFrontDir)) {
		fsExtra.emptyDirSync(contractsFrontDir);
	}
});

task('deploy', 'Deploy contracts').setAction(async (taskArgs, hre, runSuper) => {
	if (!fs.existsSync(contractsFrontDir)) {
		fs.mkdirSync(contractsFrontDir, { recursive: true });
	}
	await runSuper(taskArgs);
});

export default config;
