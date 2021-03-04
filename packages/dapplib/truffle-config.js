require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note shift protect good credit fun that'; 
let testAccounts = [
"0x66e0b5bbcc4906fa383a15dc4d2125d38888712458b0ffae509d27e73ebccc2e",
"0x9147ff13c1dee8d41414d324af006c053434dc4c99ba2bf48bd37cfd7fa6fe4c",
"0x769d304c2355fd617c46eef1bd4c26d7b57fa664ded9dd869c4bec8ce3a60f90",
"0xb9d1d95893e6b33a752732fb7521997aad25d3e7fceecd5abd6de4fb8fb879d2",
"0x2b3a994fedee3338552fdc395b45240ac9e20198a99dfaa435f98dfe4e8e0706",
"0x8bcf6e3039b27af7728b09db7f598b7f60d672087231efa8ea31ad4c3a1e500c",
"0xa354c6ed1d9854624e54a15d296be3a5b7e84e73ba4f6d3894ac165341085d65",
"0xbc521dc253750b195a256dcab022e5712e25ea8d7b1406a3739efa0d5f2e5172",
"0x7c4833c6ff8b47210d15fd5c58c55440cb205444141706c933a50b09e8cdc95c",
"0xac2492ca976f299a800f7c29371b1f9d22be5a5956529ad171ae046a19f65ebb"
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
