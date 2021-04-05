const { expect } = require("chai");

describe("Test Erc20 assignment", function() {

  it("Deployment should assign the total supply of tokens to the owner", async function() {
    const [owner] = await ethers.getSigners();

    const Erc20 = await ethers.getContractFactory("ERC20");

    const hardhatErc20 = await Erc20.deploy("BOBBY", "BOB","18");

    const ownerBalance = await hardhatErc20.balanceOf(owner.address);
    expect(await hardhatErc20.totalSupply()).to.equal(ownerBalance);
    
  });
	it('not all birds should fly', function(){
  	/** here.should.be.tested
    	* However, as long as no error within a it(),
    	* it() is considered PASSED */
	});
  
  it("Token name 'BOBBY' was correctly set during deployment", async function() {
  	let instance = await ethers.getContractAt('d566aa2d91ebd6ff46e374973e417d38');
  	expect(await instance.name.to.equal("BOBBY"));
  });

  it("Token symbol 'BOB' was correctly set during deployment", async function() {
  	const Erc20 = await ethers.getContractFactory("ERC20");
  	expect(await Erc20.symbol().to.equal("BOB"));
  });

  it("Token decimals was correctly set to '18' during deployment", async function() {
  	const Erc20 = await ethers.getContractFactory("ERC20");
  	expect(await Erc20.decimals().to.equal("18"));
  });

});

