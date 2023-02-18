require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require('dotenv');

dotenv.config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goreli: {
      url: "https://goerli.infura.io/v3/aa7f28507a7a45ea8ad4caeae03890d6",
      accounts: ["10277f26262e845769b97baac4a10b6728a347ecdb4d08458a4dca37dc3a0cf0"]
    }
  },
  etherscan: {
    apiKey: "29QI7UX8FNSQ6RY8F7UTKPSA2X4CZA79BH"
  }
};
