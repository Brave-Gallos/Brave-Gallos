async function main() {
    const [deployer] = await ethers.getSigners();

     let treasuryWalllet= "0xc627Cbc4027E1B2C392Cd4FD204dbD55483561f2";
     let teamWallet ="0xb6A2f9b8fd10E7AfBac15b3DB96828B018A909d7"

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
    //get the compile ERC20contract 
    const Token = await ethers.getContractFactory("BraveGallosToken");
    //deploy the ERC20contract 
    const token = await Token.deploy();

    //get the compile Bank contract 
    const BankCompile = await ethers.getContractFactory("Bank")
    //deploy the bank with paramters
    const BankContract = await BankCompile.deploy(treasuryWalllet,teamWallet);
    //Use the bank contract and add the token as new token
    await BankContract.addToken(token.address);

    const CointossCompile = await ethers.getContractFactory("CoinToss");
    // Parameters required Bank address, Chainlink Coordinator and link Eth feed address
    let CHAINLINKCOORDINATORADDRESS="0x6a2aad07396b36fe02a22b33cf443582f682c82f"
    let LINK_ETH_FEEDADDRESS="0xdc530d9457755926550b59e8eccdae7624181557"

    //deploy the cointoss with paramters
    const CointossContract = await CointossCompile.deploy(BankContract.address,CHAINLINKCOORDINATORADDRESS ,  LINK_ETH_FEEDADDRESS);
    //logging results
    let finaladdress ={
      ERC20:token.address,
      Bank: {
        address:BankContract.address, 
        Get_Token_listed:[await BankContract.getTokens()]
        },
      Cointoss:{
        address:CointossContract.address, 
        Get_Bank_linked:await CointossContract.bank()
      },
      
    }
    
    console.log(finaladdress)
    

  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  