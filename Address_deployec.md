Contracts compile:
    npx hardhat compile
Contract deploys:
    npx hardhat run --network testnet scripts/deploy.js    
Contract Verify:
    npx hardhat  verify --network testnet Address


Deploying contracts with the account: 0x766a5882B53bAF0EFa8F7c99Fe4944A8C7c1102c
Account balance: 524336028736406647
{
  BraveGallos ERC20: '0x03c378DA21a1b14A5F3440812cd9f7393cC6eB15',
  Bank: {
    address: '0x9E0dcC7e24E2112ec1C09B7D651A1EDFd25DcfF5',
    Get_Token_listed: {
                        0:'0x03c378DA21a1b14A5F3440812cd9f7393cC6eB15' (BraveGallos ERC20)
                       }
  },
  Cointoss: {
    address: '0x6154d2F931Cd3D589aD7121dd87DD8BF245ef474',
    Get_Bank_linked: '0x9E0dcC7e24E2112ec1C09B7D651A1EDFd25DcfF5' (current Bank)
  }
}

