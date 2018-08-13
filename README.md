###### H6
Basic Instruction to Run on Rinkeby. 


Open up the truffle.js file in the folder and set your rpc url and account from which you wish to deploy your code from and also make sure you have enough ether in the account. 

By default it deploys from this account 

```javascript 
 development: {
      host: "0.0.0.0",
      port: 8545,
      network_id: "*",
      from: "0x2f38bec6695594dc8a9f26f5c4de317926e03bd9" // Match any network id
    }
```


`truffle compile` 

`truffle migrate --reset`