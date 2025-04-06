// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ScholarshipFunding {
    address public owner;
    mapping(address => uint) public donations;

    constructor() {
        owner = msg.sender;
    }

    function donate() public payable {
        require(msg.value > 0, "Donation must be greater than 0");
        donations[msg.sender] += msg.value;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
