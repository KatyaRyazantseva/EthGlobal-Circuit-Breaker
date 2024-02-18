const starknet = require("starknet");
const ethers = require("ethers");

async function main(tokenContract) {
  const provider = new starknet.RpcProvider({
    nodeUrl: "http://0.0.0.0:9944",
  })

  const nameCall = {
    contractAddress: tokenContract,
    entrypoint: 'name',
    calldata:  [],
  }
  const nameResponse = await provider.callContract(nameCall);
  const name = ethers.toUtf8String(nameResponse.result[0]);
  console.log("name - ", name);

  // const symbolCall = {
  //   contractAddress: tokenContract,
  //   entrypoint: 'symbol',
  //   calldata:  [],
  // }
  // const symbolResponse = await provider.callContract(symbolCall);
  // const symbol = ethers.toUtf8String(symbolResponse.result[0]);
  // console.log("symbol - ", symbol);

  // const totalSupplyCall = {
  //   contractAddress: tokenContract,
  //   entrypoint: 'totalSupply',
  //   calldata:  [],
  // }
  // const totalSupplyResponse = await provider.callContract(totalSupplyCall);
  // const totalSupply = ethers.toNumber(totalSupplyResponse.result[0]);
  // console.log("totalSupply - ", totalSupply);

  // const balanceCall = {
  //   contractAddress: tokenContract,
  //   entrypoint: 'balanceOf',
  //   calldata:  ["0x171ad2d2ffd5b6a9570367764038fff02eb51c33e1beba7e39d89702d5eeb34"],
  // }

  // const balanceResponse = await provider.callContract(balanceCall);
  // const balance = ethers.formatEther(ethers.toBigInt(balanceResponse.result[0]));
  // console.log("balance - ", balance);
}

main(process.argv[2]);