const { expect } = require("chai");
const BigNumber = require('bignumber.js');

describe("Test Erc20 assignment", function() {

  it("Deployment should assign the total supply of tokens to the owner", async function() {
    
    const [owner] = await ethers.getSigners();
    const Erc20 = await ethers.getContractFactory("ERC20");
    const hardhatErc20 = await Erc20.deploy("BOBBY", "BOB","18");
    const ownerBalance = await hardhatErc20.balanceOf(owner.address);
    
    const trueBalance = new BigNumber(ownerBalance);
    console.log("true balance is : " + trueBalance);
    
    expect(await hardhatErc20.totalSupply()).to.equal(ownerBalance);
    
  });
  
	it("Token name 'BOBBY' was correctly set during deployment", async function() {
  	
    const [owner] = await ethers.getSigners();
    const Erc20 = await ethers.getContractFactory("ERC20");
    const hardhatErc20 = await Erc20.deploy("BOBBY", "BOB","18");
    const name = await hardhatErc20.name();
    console.log(name);
    expect(await name).to.equal("BOBBY");

  });

  it("Token symbol 'BOB' was correctly set during deployment", async function() {
  	
    const [owner] = await ethers.getSigners();
    const Erc20 = await ethers.getContractFactory("ERC20");
    const hardhatErc20 = await Erc20.deploy("BOBBY", "BOB","18");
    const symbol = await hardhatErc20.symbol();
    console.log(symbol);
    expect(await symbol).to.equal("BOB");
  
  });

  it("Token decimals was correctly set to '18' during deployment", async function() {
  	
    const [owner] = await ethers.getSigners();
    const Erc20 = await ethers.getContractFactory("ERC20");
    const hardhatErc20 = await Erc20.deploy("BOBBY", "BOB","18");
    const decimals = await hardhatErc20.decimals();
    console.log(decimals);
    expect(await decimals).to.equal(18);
  });

});

