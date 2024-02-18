const starknet = require("starknet");
// connect provider
const provider = new starknet.RpcProvider({
    nodeUrl: "http://0.0.0.0:9944",
  });

// new Open Zeppelin account v0.5.1
// Generate public and private key pair.
const privateKey = starknet.stark.randomAddress();
console.log('New OZ account:\nprivateKey=', privateKey);
const starkKeyPub = starknet.ec.starkCurve.getStarkKey(privateKey);
console.log('publicKey=', starkKeyPub);

const OZaccountClassHash = "0x2794ce20e5f2ff0d40e632cb53845b9f4e526ebd8471983f7dbd355b721d5a";
// Calculate future address of the account
const OZaccountConstructorCallData = starknet.CallData.compile({ publicKey: starkKeyPub });
const OZcontractAddress = starknet.hash.calculateContractAddressFromHash(
    starkKeyPub,
    OZaccountClassHash,
    OZaccountConstructorCallData,
    0
);
console.log('Precalculated account address=', OZcontractAddress);