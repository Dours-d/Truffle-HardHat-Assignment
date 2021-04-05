const Erc20 = artifacts.require("ERC20");

contract("ERC20", accounts => {
  const instance = Erc20.deployed();
  it("should put 100 BOB in the first account", () =>
    Erc20.deployed()
      .then(instance => instance.getBalance.call(accounts[0]))
      .then(balance => {
        assert.equal(
          balance.valueOf(),
          100,
          "100 wasn't in the first account"
        );
      }));
});
