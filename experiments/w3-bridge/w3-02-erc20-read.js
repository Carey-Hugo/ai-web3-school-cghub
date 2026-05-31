/**
 * W3-02 · Web3 Tool Use - ERC-20 真实合约调用
 */

import { createPublicClient, http, formatEther, formatUnits } from 'viem';
import { sepolia } from 'viem/chains';

const SEPOLIA_RPC_URL = `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(SEPOLIA_RPC_URL),
});

const WETH9_CONTRACT = '0xfff9976782d46cc05630d1f6ebab18b2324d6b14';
// 合法的以太坊地址（Vitalik 的公开地址）
const VITALIK_ADDR = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';

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

async function main() {
  console.log('=== W3-02 Web3 Tool Use - ERC-20 真实合约调用 ===\n');

  console.log('合约地址:', WETH9_CONTRACT);
  console.log('查询地址:', VITALIK_ADDR);
  console.log('');

  // 1. 查 Token 信息
  const [symbol, decimals] = await Promise.all([
    publicClient.readContract({
      address: WETH9_CONTRACT,
      abi: ERC20_ABI,
      functionName: 'symbol',
    }),
    publicClient.readContract({
      address: WETH9_CONTRACT,
      abi: ERC20_ABI,
      functionName: 'decimals',
    }),
  ]);

  console.log('--- ERC-20 信息 ---');
  console.log('Token 符号:', symbol);
  console.log('小数位数:', decimals, '(需要除以 10^18)');
  console.log('');

  // 2. 查余额（读链，不需要签名）
  const rawBalance = await publicClient.readContract({
    address: WETH9_CONTRACT,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: [VITALIK_ADDR],
  });

  const formattedBalance = formatUnits(rawBalance, decimals);
  console.log('--- 查询结果 ---');
  console.log('WETH 余额:', formattedBalance, symbol);
  console.log('');

  // 3. 查 ETH 余额对比
  const ethBalance = await publicClient.getBalance({ address: VITALIK_ADDR });
  console.log('ETH 余额:', formatEther(ethBalance), 'ETH');
  console.log('');

  console.log('=== 核心概念 ===');
  console.log('readContract(abi, functionName, args) → 调用合约的 view 函数');
  console.log('getBalance(address) → 查 ETH 原生余额');
  console.log('两者都是读链，不签名，不花 Gas');
  console.log('');
  console.log('✅ W3-02 完成');
}

main().catch(console.error);
