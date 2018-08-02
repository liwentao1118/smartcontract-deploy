const assert = require('assert')
const ganache = require('ganache-cli')
const {interface,bytecode} = require('../compile')
const Web3=require('web3')
const web3 = new Web3(ganache.provider())

describe('测试智能合约',()=>{
    it('should ', function () {
        console.log(web3.version)
    });
    it('测试web3的api', async() =>{
       const account = await web3.eth.getAccounts();
       console.log(account[0])
        const money = await web3.eth.getBalance(account[0])
        console.log(web3.utils.fromWei(money,'ether'))
    });
    it('测试部署智能合约', async () =>{
        const account= await web3.eth.getAccounts();
        let result = await new  web3.eth.Contract(JSON.parse(interface))
            .deploy({
                data:bytecode,
                arguments:['fffsfffs']
            }).send({
                from:account[0],
                gas:1000000
            })
        let money = await web3.eth.getBalance(account[0]);
        let toMoney = web3.utils.fromWei(money,'ether');
        console.log(toMoney)
        console.log(result.options.address)
        let message = await result.methods.getMessage().call()
        console.log(message)
        await result.methods.setMessage('aaaaaaa').send({
            from:account[0],
            gas:1000000
        })
        message = await result.methods.getMessage().call()
        console.log(message)
    });
})
