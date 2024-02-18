# EthGlobal-Circuit-Breaker

This project is built with Madara. Madara is a standard, customizable and super fast Starknet sequencer.

💧 Avail address: 5GYgSxjRvMmDb9sAzPxwM1R7TDLYg9891E7LeWFgpyaDZUZS
AppId=2474

DA-DeFi is an appchain built on Madara using Avail as a Data Availability Layer.

## Run the scripts
1. Declare your contract:
```
node scripts/declare.js <path_to_sierra> <path_to_casm>
```
For example,
```
node scripts/declare.js ./contracts/token.sierra.json ./contracts/token.casm.json
```
2. Deploy the contract
```
node scripts/deploy.js <path_to_sierra> <constructor_args>
```
For example,
```
node scripts/deploy.js ./contracts/token.sierra.json 0x1  
```
3. Get a transaction receipt
```
node scripts/get_transaction.js <txn_hash>
```
For example,
```
node scripts/get_transaction.js 0x3de34dc0a80af8d55fcdf11f62723ed1886fbbf89274d939813ece7dab3afe7
```
