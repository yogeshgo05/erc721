var Migrations = artifacts.require("./Migrations.sol");
var erc721 = artifacts.require('./ERC721Token.sol'); 
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(erc721, "Wyre",  "Wyre");
};
