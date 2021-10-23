const assert = require('assert');
const AppleBanana = artifacts.require('./AppleBanana.sol');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// console.log(AppleBanana);

// const web3 = new Web3(ganache.provider())

// require('chai')
//     .use(require('chai-as-promised'))
//     .should()

// let appleBanana;
// let accounts;
// beforeEach(async() => {
//     accounts = await web3.eth.getAccounts();
//     appleBanana = await new web3.eth.Contract(JSON.parse(AppleBanana._json.abi))
//         .deploy({
//             data: AppleBanana._json.bytecode
//         })
//         .send({from: accounts[0], gas: 1000000});
// } )


contract('AppleBanana', (accounts) => {
    let contract;
    before( async() => {
        contract = await AppleBanana.deployed();
    })
    
    describe('deployment', async() => {
        it('deploys successfully', async() => {
            console.log(contract.mintAB);
            assert.ok(contract.address);
        })

        it('has a name', async() => {
            const name = await contract.name();
            assert.equal("Apple Banana", name);
        })

        it('has a symbol', async() => {
            const symbol = await contract.symbol();
            assert.equal("AB", symbol);
        })

    })
})