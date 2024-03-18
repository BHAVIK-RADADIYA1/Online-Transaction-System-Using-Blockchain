//https://eth-sepolia.g.alchemy.com/v2/6GYCFoNUiJIxiDpB9viH7ja7DoN1C2m4

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    Sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/6GYCFoNUiJIxiDpB9viH7ja7DoN1C2m4",
      accounts: [
        "0202febdea5d09c7495dad4ea846372ca84a79ff62ab6f41aa583811220217cb",
      ],
    },
  },
};
