pragma solidity ^0.5.12;
    
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "./Ownable.sol";
import "./Safemath.sol";

contract ERC20 is Ownable {

  using SafeMath for uint256;

    mapping (address => uint256) private _balances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;
    uint8 private _decimals;

        constructor (string memory name, string memory symbol, uint8 decimals) public {
          // what should we do on deploy?
        _name = name;
        _symbol = symbol;
        _decimals = decimals;
        mint(msg.sender, 100);
        balanceOf(owner);
        totalSupply();
   	}


    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }
    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function mint(address account, uint256 amount) public onlyOwner {
        require (account != address(0), "ERC20 : mint to the zero address");
        
        _totalSupply = _totalSupply.add(amount);
        _balances[account] = _balances[account].add(amount);
        
    }

    function transfer(address recipient, uint256 amount) public returns (bool) {
        require(msg.sender != address(0), "transfert from the zero address");
        require(recipient != address(0), "transfert from the zero address");
        require(_balances[msg.sender] >= amount, "insufficient balance");
        _balances[msg.sender] = _balances[msg.sender].sub(amount);
        _balances[recipient] = _balances[recipient].add(amount);
        
        return true;
    }

  event SetPurpose(address sender, string purpose);

  string public purpose = "Programming Unstoppable Money";

  function setPurpose(string memory newPurpose) public {
    purpose = newPurpose;
    console.log(msg.sender,"set purpose to",purpose);
    emit SetPurpose(msg.sender, purpose);
  }

}
