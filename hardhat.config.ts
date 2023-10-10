import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
//
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    Sepolia: {
      url: '--------your---host---url---of---sepolia-----',
      accounts: ['--------your---private---key---of---wallet-----'],
    },
  },
};

export default config;
