require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy release place assume install industry sun siege'; 
let testAccounts = [
"0x6327202d6bef96d61f7923430f224e6e4e9bd14d37308844883660886106d16d",
"0x126326407114fa3390a38c3ba100529247f1682a297cf7000bc6538438e1dfce",
"0x25547236c550476ad1f5ea326518decf50f0b6ba48e985f54e11f52d3cf9ff3e",
"0xec5166df559e7420a1a7a789a4006f499bc63e14a301756c9fa691bd6e649ab9",
"0x1f61170ca2d58aab046d959dc40b974b38da5f834fdcbb5ebce26b22924ec976",
"0x2bef84a2a2c130fc7fc7a025352e8ff18110ebcc58a85e03d78ff3b11b560315",
"0xb5b207325b8bf00cc9e5c6e2994881e19fc7bb3e1dbad0c51bde318d51b27bfa",
"0x8500b4a2572920757dbdddb59058ddd7bbe1cb893e799cd72e99ebe9ebeb7b11",
"0x97dfc08906ca704c259785e513ca36ad2ec73b1c660d03689a9da0e77e43f74e",
"0x80478e8ae2a812f88f469764dbb863f311dc4a877f41bb2056a264b6a882ebc3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
