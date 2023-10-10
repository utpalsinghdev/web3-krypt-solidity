# Smart Contract Transactions with Solidity and TypeScript

This GitHub repository contains a Solidity smart contract developed using TypeScript and Hardhat for recording and retrieving transactions on the Ethereum blockchain.

**Features:**

- Add transactions to the blockchain.
- Retrieve a list of all recorded transactions.
- Get the total count of transactions.

**Usage:**

- Ensure TypeScript is set up for your project.
- Build the project using `yarn build`.
- Compile the contract using Hardhat before deployment.
- Deploy the contract using `yarn deploy`.
- Explore and adapt the contract for your specific use cases.

**Important Note:**
- This smart contract is designed to work on the Ethereum test network (Sepolia) only. Please do not use your real eth.


**Commands:**

- Build the project: `yarn build`
- Deploy the contract: `yarn deploy`
- Run Hardhat tasks: `npx hardhat help`
- Run tests: `npx hardhat test`
- Run tests with gas reporting: `REPORT_GAS=true npx hardhat test`
- Start a local node: `npx hardhat node`
- Run deployment script: `npx hardhat run scripts/deploy.ts`

**License:** UNLICENSED
