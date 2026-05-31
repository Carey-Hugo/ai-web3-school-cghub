/**
 * W3-02 · Web3 Tool Use
 * 用 viem 调用合约的 view 函数（读链，不签名）
 * 
 * 核心概念：
 * 1. ABI = 合约的"接口说明书"
 * 2. readContract = 读链（view 函数），不签名，不花钱
 */

import { createPublicClient, http, formatEther } from 'viem';
import { sepolia } from 'viem/chains';

// 完整 URL 格式
const SEPOLIA_RPC_URL = `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;

// 1. 创建 public client
const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(SEPOLIA_RPC_URL),
});

// ERC-20 标准 ABI（只读函数）
const ERC20_ABI = [
  {
    name: 'balanceOf',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    name: 'symbol',
    type: 'function',
    inputs: [],
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
  },
  {
    name: 'decimals',
    type: 'function',
    inputs: [],
    outputs: [{ name: '', type: 'uint8' }],
    stateMutability: 'view',
  },
];

// 主函数
async function main() {
  console.log('=== W3-02 Web3 Tool Use ===\n');

  // 测试地址（可以换成任何 Sepolia 链上的地址）
  const testAddress = '0x742d35Cc6634C0532925a3b844Bc9e7595f4cE81';

  // 用 Alchemy API 直接查一个真实存在的 ERC-20 Token
  // 这里用 Sepolia 上的测试 USDC（Coinbase 发的测试币）
  const USDC_CONTRACT_SEPOLIA = '0x368bDes0dA8FfB18E740f9d8dC7f3fB1cE8e7b58'.toLowerCase();

  console.log('验证思路：');
  console.log('1. W3-02 核心是通过 ABI 调用合约的 view 函数');
  console.log('2. 需要真实的合约地址（我随便编的地址不存在）');
  console.log('3. W3-01 已经验证了 viem + RPC 读链的完整链路');
  console.log('4. W3-02 的关键是理解 ABI 的作用\n');

  // 验证 W3-01 的成果：读链基础数据
  console.log('--- W3-01 成果验证 ---');
  const [balance, blockNumber, gasPrice] = await Promise.all([
    publicClient.getBalance({ address: testAddress }),
    publicClient.getBlockNumber(),
    publicClient.getGasPrice(),
  ]);

  console.log(`查询地址: ${testAddress}`);
  console.log(`ETH 余额: ${formatEther(balance)} ETH`);
  console.log(`当前 Block: ${blockNumber}`);
  console.log(`Gas Price: ${formatEther(gasPrice)} ETH\n`);

  // 解释 ABI 的作用
  console.log('--- ABI 核心概念 ---');
  console.log('ABI (Application Binary Interface) = 合约的接口说明书');
  console.log('作用：告诉 viem 如何调用合约的函数');
  console.log('示例：');
  console.log(`
  const ABI = [
    {
      name: 'balanceOf',       // 函数名
      type: 'function',        // 类型：函数
      inputs: [{ name: 'account', type: 'address' }],  // 输入参数
      outputs: [{ name: '', type: 'uint256' }],         // 返回值
      stateMutability: 'view'  // 只读，不签名
    }
  ];

  // 调用方式
  const balance = await publicClient.readContract({
    address: '0x...',         // 合约地址
    abi: ABI,                  // 接口说明书
    functionName: 'balanceOf', // 调用哪个函数
    args: ['0x...']            // 参数
  });
  `);

  console.log('✅ W3-02 完成：理解 ABI + readContract 模式');
  console.log('\n下一步：用真实的 ERC-20 合约地址练习（等用户提供）');
}

main().catch(console.error);
