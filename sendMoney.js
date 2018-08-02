const Web3 = require('web3')
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "length deal such have donate crime boat provide original used crime raise"; // 12 word mnemonic
const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/b5193966085f4ae0a469a7a77215b0ba");

const web3 = new Web3(provider)

send=async()=>{
    const account =await web3.eth.getAccounts()
    const str = '蔡紫晨是个大骗子'
    let money =await web3.eth.getBalance(account[0])
    console.log(money)

    let data = Buffer.from(str).toString('hex')
    data='0x'+data
    await web3.eth.sendTransaction({
        from:account[0],
        to:'0xb6a3B76b06caCfF933Dfb9EB2e70bdff5f467Ca0',
        data:data,
        value:'100000000000000000'
    })
    money = await web3.eth.getBalance(account[0])
    console.log(money)
}
send()