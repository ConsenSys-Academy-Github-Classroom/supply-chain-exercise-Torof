module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  plugins: ["truffle-contract-size", "truffle-plugin-debugger"],
  compilers: {
    solc: {
      version: "0.7.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      }
    }
  }
};
