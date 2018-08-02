const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic ="shadow note swear barely boss ensure exercise float inmate lesson sock under"; // 12 word mnemonic
const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/b5193966085f4ae0a469a7a77215b0ba");
const {interface,bytecode} = require('./compile')
const Web3=require('web3')
const web3 = new Web3(provider)

deploy= async()=>{
    const account = await web3.eth.getAccounts()

    // const result = await new web3.eth.Contract(JSON.parse(interface))
    //     .deploy({
    //         data:bytecode,
    //         arguments:['cc']
    //     }).send({
    //         from:account[0],
    //         gas:'3000000',
    //
    //     })
    // console.log(result.options.address)
    let money = await web3.eth.getBalance(account[0])
    console.log(web3.utils.fromWei(money,'ether'))
};
deploy();

