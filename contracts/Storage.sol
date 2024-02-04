// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./StorageSlot.sol";
import "hardhat/console.sol";

contract Storage {
    // advance_______________________________________________________
    // EIP1967 check it
    constructor() {
        // 32 bytes - 256 bits
        // keccak256("darklight") -> 256
        StorageSlot.getUint256Slot(keccak256("darklight")).value = 255;
    }

    function check() external view {
        console.log(StorageSlot.getUint256Slot(keccak256("darklight")).value); //255
    }
    // basic_________________________________________________________
    // uint256 x = 97; // 0x0
    // uint256 y = 56; // 0x1
    // mapping(uint => uint) testing; // 0x2
    // constructor() {
    //     // keccack256(1 + 0x2)
    //     testing[1] = 77;
    //     // keccack256(4 + 0x2)
    //     testing[4] = 44;
    // }
}
