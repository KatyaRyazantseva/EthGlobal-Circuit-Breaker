// connect provider
const starknet = require("starknet");
const provider = new starknet.RpcProvider({
    nodeUrl: "http://0.0.0.0:9944",
});

async function deployAccount() {
//new Argent X account v0.2.3
const argentXproxyClassHash = "0x25ec026985a3bf9d0cc1fe17326b245dfdc3ff89b8fde106542a3ea56c5a918";
const argentXaccountClassHash = "0x033434ad846cdd5f23eb73ff09fe6fddd568284a0fb7d1be20ee482f044dabe2";

// Generate public and private key pair.
const privateKeyAX =  process.env.PRIVATE_KEY;
console.log('AX_ACCOUNT_PRIVATE_KEY=', privateKeyAX);
const starkKeyPubAX = process.env.PUBLIC_KEY;
console.log('AX_ACCOUNT_PUBLIC_KEY=', starkKeyPubAX);
const AXcontractAddress = process.env.WALLET_CONTRACT_ADDRESS;
console.log('AXcontractAddress=', AXcontractAddress);

const accountAX = new starknet.Account(provider, AXcontractAddress, privateKeyAX);

const AXproxyConstructorCallData = starknet.CallData.compile({
    implementation: argentXaccountClassHash,
    selector: starknet.hash.getSelectorFromName("initialize"),
    calldata: starknet.CallData.compile({ signer: starkKeyPubAX, guardian: "0" }),
});

const deployAccountPayload = {
    classHash: argentXproxyClassHash,
    constructorCalldata: AXproxyConstructorCallData,
    contractAddress: AXcontractAddress,
    addressSalt: starkKeyPubAX };

const { transaction_hash: AXdAth, contract_address: AXcontractFinalAddress } = await accountAX.deployAccount(deployAccountPayload);
console.log('✅ ArgentX wallet deployed at:', AXcontractFinalAddress);
};

deployAccount();