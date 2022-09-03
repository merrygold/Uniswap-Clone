// require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-waffle')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/wHq2PSPfwXZjXxwuLlpFTYXlgBo9-YhM',
      accounts: ['cb7dcf70c4325a4f415a341696598448ae6766b0fd3d7260b2eb63b1a989e361'],
    },
  },
};

