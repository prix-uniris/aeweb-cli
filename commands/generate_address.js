const archethic = require('archethic')
const chalk = require('chalk')

exports.command = 'generate-address'

exports.describe = 'Generate Address - to transfer some funds to this address'

exports.builder = {
    seed: {
        describe: 'Seed is a string representing the transaction chain entropy to be able to derive and generate the keys for the transactions',
        demandOption: true, // Required
        type: 'string'
    },
    index: {
        describe: 'Index is the number of transactions in the chain, to generate the current and the next public key',
        demandOption: true, // Required
        type: 'number'
    }
}

exports.handler = function (argv) {
    const address = archethic.deriveAddress(argv.seed, argv.index)
    console.log(chalk.blue(address))
    console.log(chalk.green("If you are using testnet go to https://testnet.archethic.net/faucet & add some funds to the generated address, otherwise transfer funds from your UCO wallet (in Mainnet)"))
}