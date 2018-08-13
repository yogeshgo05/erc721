module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "0.0.0.0",
      port: 8545,
      network_id: "*",
      from: "0x2f38bec6695594dc8a9f26f5c4de317926e03bd9" // Match any network id
    },
    rinkeby:{
      host:"https://rinkeby.infura.io/v3/94e2a6a7729f4510990d21b34c7efe16",
      port:8545,
      network_id: "*",
      from: "0x2f38bec6695594dc8a9f26f5c4de317926e03bd9"
    },
   solc: {
		optimizer: {
			enabled: true,
			runs: 200
		}
	},
  }
};
