const path = require('path')
const fs = require ('fs')
const solc = require('solc')

const srcpath = path.resolve(__dirname,'contracts','Inbox.sol');

const source = fs.readFileSync(srcpath,'utf-8')
 const result = solc.compile(source,1)

module.exports=result.contracts[':Inbox']

