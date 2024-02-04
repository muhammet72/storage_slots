const { keccak256, toUtf8Bytes, hexZeroPad } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

const addr = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

async function lookup() {
  const storage = await ethers.getContractAt("Storage", addr);
  await storage.check();
  // ------------------------------------------------------------
  // const key = hexZeroPad(4, 32);
  // const baseSlot = hexZeroPad(0x2, 32).slice(2);
  // const slot = keccak256(toUtf8Bytes("darklight"));
  // const value = await ethers.provider.getStorageAt(addr, slot);
  //  console.log(parseInt(value));
  // ------------------------------------------------------------
}

lookup();
