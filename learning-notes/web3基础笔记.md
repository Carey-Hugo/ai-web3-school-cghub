# Web3 基础学习笔记 · 2026-05-20（Day 2）→ 2026-05-21（Day 3 启动）

> 来源：AI×Web3 School Handbook · Web3 基础
> 配合直播：AI时代，Web3开发者需要具备的基础知识和架构能力
> 更新：2026-05-21 Web3 Track 正式启动，补全钱包/合约/密码学章节

---

## 一、网络（Network）· ✅ 已理解

### 为什么要学？
链上问题（延迟、pending、测试网资产不足、L2提现）本质都是网络问题。
理解网络 = 知道一笔交易从签名到最终被看到，中间经历了哪些层。

### 一句话原理
> 普通应用：服务器直接更新数据库
> 链上：交易要传播→执行→打包→验证→确认 → 带来公开可验证性，也带来延迟/费用/最终性问题

### 四个核心概念

**① Block（区块）**
- 区块是交易被批量提交和排序的单位
- 看区块重点理解三件事：
  - 交易顺序（谁先谁后）
  - 状态变更（全局状态怎么变）
  - 时间戳（区块何时产生）

**② Consensus（共识）**
- 共识是网络决定"哪段历史有效"的机制
- 不同节点对"区块顺序 + 状态变化"形成一致看法
- 影响：区块最终性（finality）、重组风险（reorg）、区块确认数

**③ PoS（Proof of Stake）**
- 用质押+惩罚机制组织验证者，替代PoW挖矿
- 关键概念：验证者、质押、slashing（惩罚）
- 网络安全来自经济质押，不是免费的

**④ Testnet（测试网）**
- 资产无真实价值，但可以验证：部署脚本、钱包连接、RPC配置、合约调用、前端状态
- 常用测试网：Sepolia、Goerli（已废弃）

---

## 二、密码学（Cryptography）· ✅ 已补全

> 密码学是账户、签名、哈希和证明系统的底层基础。

### 四个核心概念

**① Hash（哈希）**
- 输入任意长度 → 输出固定长度（256位）
- 不可逆：根据输出无法反推输入
- 用途：验证完整性（消息有没有被篡改）

**② Public Key（公钥）**
- 可以公开，可分享
- 用于接收资产/验证签名
- 从私钥用椭圆曲线算法推导

**③ Private Key（私钥）**
- 保密，不分享
- 掌控资产所有权的唯一凭证
- 丢失 = 资产永久丢失

**④ Signature（签名）**
- 用私钥对消息/交易签名
- 证明："我授权了这个操作"
- 任何人都可以用公钥验证，但只有私钥能生成

### 对AI Agent的意义
```
用户发起请求
    ↓
AI Agent 准备交易数据
    ↓
用户用私钥签名（或 Session Key 授权）
    ↓
签名广播上链
```
**密码学授权 = AI×Web3 的信任边界**。Agent 不能自己签名，必须依赖外部钱包授权。

---

## 三、钱包（Wallet）· ✅ 已补全

> 钱包是用户进入链上世界的入口，也是权限、安全和UX的交汇点。

### 核心区分：EOA vs 合约账户

| | EOA（外部拥有账户） | 合约账户（CA） |
|--|------|------|
| 控制方式 | 私钥 | 代码逻辑 |
| 能否发起交易 | ✅ 可以 | ❌ 不能主动发起（只能响应） |
| 有无代码 | 无 | 有 |
| 典型例子 | 普通钱包（MetaMask） | 智能合约钱包（Gnosis Safe） |

### 对AI开发者最重要的钱包类型

**① EOA（MetaMask类）**
- 最简单，私钥 = 完全控制权
- AI Agent 使用时：需要用户手动签名，或导入私钥到 Agent 环境（安全风险）

**② 智能钱包（Smart Wallet / Account Abstraction）**
- 由合约账户控制，可以编程权限逻辑
- 核心能力：Session Key（会话密钥）、权限限制、Gas抽象、社交恢复
- **Session Key = AI Agent 的理想方案**：给 Agent 有限授权，可撤销，不过暴露主私钥

**③ MPC 钱包**
- 私钥分片，多方参与才能签名
- 例如：Fireblocks、Coinbase Wallet
- AI 场景：用 MPC 实现"Agent 发起 + 用户确认"的混合模式

### AI×Web3 的钱包心智模型
```
用户（主体）
  ↓ 授权 Session Key（有限权限，过期可撤销）
AI Agent（执行者）
  ↓ 调用合约（读：无需签名；写：需要签名）
链上（不可篡改的记录）
```

---

## 四、智能合约（Smart Contract）· ✅ 已补全

> 智能合约是链上程序，公开状态和不可逆执行带来新的工程约束。

### 合约的两个操作

| 操作 | 类型 | 是否需要 Gas | 说明 |
|------|------|------|------|
| 读取合约状态 | Call（查询） | ❌ 免费 | 不上链，只读 |
| 写入合约状态 | Transaction（交易） | ✅ 需要 Gas | 上链，不可逆 |

### 对AI开发者的意义

**AI Agent 操作合约 = Tool Use + 钱包签名**

典型流程：
```
1. AI Agent 准备函数调用（read contract state）
2. 读取返回值作为 Context（无需签名，不花 Gas）
3. AI Agent 判断需要写入（write to contract）
4. 触发用户签名（Session Key / 手动签名）
5. 交易上链，状态变更
6. AI Agent 读取新状态，确认执行结果
```

### 不可逆性 = 最大的工程约束
- Web2：写错了可以回滚
- Web3：写错了合约代码，资产可能永久锁死
- AI Agent 在调用合约时，**读取必须先于写入**，确认状态后再执行

---

## 五、Web3 开发栈全景（已整理）

```
应用层：前端 / AI Agent / Bot
         ↓ 签名 + 调用
钱包层：EOA / 智能钱包 / Session Key
         ↓ RPC
节点层：验证者节点 / 全节点 / 轻节点
         ↓
网络层：Consensus（PoS）+ 执行层（EVM）
         ↓
数据层：Block → Transaction → State
```

---

## 六、直播要点对照

直播主题：AI时代Web3开发者需要具备的基础知识和架构能力

**对照学习：**
- [x] Network层：理解交易从签名到确认的全链路
- [x] Cryptography：理解签名授权机制（为Agent Wallet打基础）
- [x] Wallet：Session Key + 权限限制（为AI×Web3 Bridge打基础）
- [x] Smart Contract：读/写分离 + Gas概念（为Agent操作合约打基础）

---

## 七、和创客星球的关系

创客星球 CGHub 的 Agent 系统，最终会涉及：
1. **Agent Wallet**：AI操作链上行为（贡献记录、权益确权）
2. **Smart Contract**：规则写入合约，代码即法律
3. **Session Key**：给Agent有限授权，可撤销
4. **链上数据**：Agent的Context来源之一

这些内容在 Week 3 AI×Web3 Bridge 部分会有更详细的实践。

---

## 八、Web3 开发栈（Dev Stack）· ✅ 已补全（Day 4）

> Dev Stack 覆盖 Web3 开发、测试、部署和前端交互工具链。

### 六层全景

```
Layer 6 · 前端/应用层
  React / Next.js / 钱包连接（WalletConnect / wagmi）
         ↓
Layer 5 · SDK / 交互层
  viem / ethers.js / web3.js（调用合约）
         ↓
Layer 4 · 合约层
  Solidity（写合约）/ Foundry / Hardhat（开发+测试）
         ↓
Layer 3 · 节点/基础设施层
  RPC 节点（Alchemy / Infura / 自有节点）
         ↓
Layer 2 · 执行层
  EVM（以太坊虚拟机）执行交易
         ↓
Layer 1 · 共识层
  PoS 验证者网络（最终确定性）
```

### 核心工具清单

**合约开发：**
- Solidity：智能合约编程语言（类似 JavaScript）
- Foundry：快如闪电的开发框架，测试+部署（推荐）
- Hardhat：老牌开发环境，插件丰富

**合约交互：**
- viem：轻量级 TypeScript 库（AI Agent 场景推荐）
- ethers.js：功能完整的 Web3 库

**节点服务：**
- Alchemy：免费 RPC 节点，支持多链（AI×Web3 开发首选）
- Infura：老牌节点服务
- QuickNode：高速节点

**前端钱包：**
- WalletConnect：连接钱包的开放协议
- wagmi：React 钱包连接库
- RainbowKit：快速钱包连接 UI

**测试网水龙头：**
- Sepolia Faucet：获取测试网 ETH（部署前必用）

### AI Agent 在 Dev Stack 中的位置

```
AI Agent（决策者）
  ↓ Tool Use（调用合约函数）
viem / ethers.js（构建交易）
  ↓
Alchemy / Infura RPC（广播交易）
  ↓
EVM（执行合约逻辑）
  ↓
链上确认（写入状态）
```

**AI Agent = 替代前端用户 + 钱包**，但写链需要 Session Key 授权。

---

## 九、Web3 Track 入门总结

**心智模型一句话总结：**

> Web3 = 密码学授权（Cryptography）+ 去中心化共识（Network）+ 不可篡改的逻辑（Smart Contract）+ 完整开发栈（Dev Stack）
> AI Agent 在 Web3 里 = 有钱包的执行者，读链不花钱，写链需要签名授权

**为 Week 3 实战打下的基础：**
- 知道 Agent 要操作链上，绕不开钱包签名
- 知道 Session Key 是 AI×Web3 的关键连接点
- 知道读合约免费，写合约需要 Gas
- 知道 Solidity + Foundry 是合约开发工具，viem 是 AI Agent 交互库
