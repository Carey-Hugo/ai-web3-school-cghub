/**
 * W3-01 · Chain-aware Context
 * 用 viem 查链上数据：余额、Block Number、Gas Price
 * 
 * 依赖：npm install viem
 * 环境变量：ALCHEMY_API_KEY（Sepolia RPC）
 */

import { createPublicClient, http, formatEther } from 'viem';
import { sepolia } from 'viem/chains';

// viem 的 http() 需要完整 URL，不只是 API Key
// 格式：https://{network}.g.alchemy.com/v2/{apiKey}
const SEPOLIA_RPC_URL = `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;

// 1. 创建 public client（读链，不需要签名）
const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(SEPOLIA_RPC_URL),
});

// 2. 查 ETH 余额
async function getBalance(address) {
  const balance = await publicClient.getBalance({ address });
  console.log(`ETH 余额: ${formatEther(balance)} ETH`);
  return balance;
}

// 3. 查当前 Block Number
async function getBlockNumber() {
  const blockNumber = await publicClient.getBlockNumber();
  console.log(`当前 Block: ${blockNumber}`);
  return blockNumber;
}

// 4. 查 Gas Price
async function getGasPrice() {
  const gasPrice = await publicClient.getGasPrice();
  console.log(`Gas Price: ${formatEther(gasPrice)} ETH`);
  return gasPrice;
}

// 主函数
async function main() {
  console.log('=== W3-01 Chain-aware Context ===');
  
  // 示例地址（你可以换成自己的钱包地址）
  const testAddress = '0x742d35Cc6634C0532925a3b844Bc9e7595f4cE81';
  
  console.log(`\n查询地址: ${testAddress}`);
  
  await getBalance(testAddress);
  await getBlockNumber();
  await getGasPrice();
  
  console.log('\n✅ W3-01 完成：读链不花钱，不需要签名');
}

main().catch(console.error);