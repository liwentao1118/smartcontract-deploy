const express = require('express')
const app = express()
const Web3 = require('web3')
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "length deal such have donate crime boat provide original used crime raise"; // 12 word mnemonic
const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/b5193966085f4ae0a469a7a77215b0ba");
const web3 = new Web3(provider)

app.get('/send/:address',async(req,res)=>{
    const address = req.params.address
    const account = await web3.eth.getAccounts()
    let trans = await web3.eth.sendTransaction({
        from:account[0],
        to:address,
        value:'1000000000000000'
    });
    res.send('转账成功'+trans.id)
})

const server = app.listen(3000,()=>{
    let host =server.address().address
    let port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})