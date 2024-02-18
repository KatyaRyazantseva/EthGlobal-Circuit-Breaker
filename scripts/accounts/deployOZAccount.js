const starknet = require("starknet");
// connect provider
const provider = new starknet.RpcProvider({
    nodeUrl: "http://0.0.0.0:9944",
});

async function main() {
    const privateKey = process.env.PRIVATE_KEY;
    const publicKey = process.env.PUBLIC_KEY;
    const OZaccountClassHash = "0x2794ce20e5f2ff0d40e632cb53845b9f4e526ebd8471983f7dbd355b721d5a";
    const OZaccountConstructorCallData = starknet.CallData.compile({ publicKey: publicKey });

    const OZcontractAddress = process.env.WALLET_CONTRACT_ADDRESS;
    
    const OZaccount = new starknet.Account(provider, OZcontractAddress, privateKey);

    const { transaction_hash, contract_address } = await OZaccount.deployAccount({
        classHash: OZaccountClassHash,
        constructorCalldata: OZaccountConstructorCallData,
        addressSalt: publicKey
    });
    console.log('tx hash - ', transaction_hash);
    await provider.waitForTransaction(transaction_hash);
    console.log('✅ New OpenZeppelin account created.\n   address =', contract_address);
}

main();