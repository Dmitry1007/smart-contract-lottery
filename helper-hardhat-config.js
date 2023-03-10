const { ethers } = require("hardhat")

const networkConfig = {
    5: {
        name: "goerli",
        entranceFee: ethers.utils.parseEther("0.001"), // 0.001 ETH
        vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
        keyHash: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15", // 150 gwei
        subId: "10638", // actual id from vrf.chain.link
        callbackGasLimit: "500000", // 500,000 gas
        interval: "30", // 30 seconds
    },
    31337: {
        name: "hardhat",
        entranceFee: ethers.utils.parseEther("0.001"), // 0.001 ETH
        keyHash: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15", // Doesn't matter, since we're mocking
        subId: "6926",
        callbackGasLimit: "500000", // 500,000 gas
        interval: "30", // 30 seconds
    },
}

const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
}
