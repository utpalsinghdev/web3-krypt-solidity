import { ethers } from "hardhat";

async function main(): Promise<void> {
  const Transactions = await ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deploymentTransaction();

  console.log("Transactions deployed to:", transactions.runner);
}

const runMain = async (): Promise<void> => {
  try {
    await main();
    process.exit(0); // success
  } catch (e) {
    console.error(e);
    process.exit(1); // failure
  }
};

runMain();
