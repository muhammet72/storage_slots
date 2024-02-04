module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("----------------------------------------------------");
  log("Storage");
  // log("----------------------------------------------------")
  const arguments = [];
  const storage = await deploy("Storage", {
    from: deployer,
    args: arguments,
    log: true,
    //waitConfirmations: network.config.blockConfirmations || 1,
  });
  log(`Contract deployed to ${storage.address}`);
};

module.exports.tags = ["all", "storage"];
