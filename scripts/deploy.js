async function main() {
  const { ethers, getNamedAccounts, deployments } = require("hardhat");
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  console.log("Deploying contracts with the account:", deployer);

  // Deploy the smart contract
  const contract = await deploy("Storage", {
    from: deployer,
    args: [], // Pass the desired value for _x here
    log: true,
  });

  console.log("Contract deployed at address:", contract.address);
}

// Run the deployment function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
