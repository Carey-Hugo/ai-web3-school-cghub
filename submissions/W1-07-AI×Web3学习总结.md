# W1-07 · 发布 AI×Web3 学习总结

> AI×Web3 School · Week 1 学习总结
> 作者：Carey Hugo · 创客星球(CGHub)
> 发布平台：GitHub README
> 日期：2026-05-26

---

## 一、我重新理解的 AI 概念：Agent

**一句话理解：**
Agent = LLM + Tool Use + Planning + State + Reflection，让模型从"被动回答"变成"主动执行"。

**具体理解：**
- 传统 LLM：输入 → 输出（一次性）
- Agent：输入 → 思考 → 调用工具 → 观察结果 → 决定下一步（循环，直到任务完成）
- Tool Use 是关键能力：Agent 能调用外部工具（搜索、代码执行、API 请求）来扩展能力边界
- 这也是 CGHub 的核心技术路径：用户发起需求 → Agent 查 Context → 调用工具 → 执行链上操作 → 记录结果

**Proof-of-Work：**
本节课通过 Hermes Agent 学习 Agent 基本概念，并在 CGHub 项目中实践 Agent 工作流设计。

---

## 二、我重新理解的 Web3 概念：智能合约与 EOA 的本质区别

**一句话理解：**
EOA = 有人控制的账户（私钥签名发起交易），合约账户 = 有人写了代码的程序（被动响应调用）。

**具体理解：**
- Etherscan 查看合约 `0x1dC966b692C45eCb0E3e96416d9C7f8057F74A1D` 时，明白了一个合约地址没有私钥，它的行为完全由部署时写入的代码决定
- "Read" = Call（免费，只读不上链），"Write" = Transaction（签名付费，改变链上状态）
- 理解了这个区别，就理解了为什么 Agent 要发起链上支付必须先获得签名授权，而不是"直接操作"

**Proof-of-Work：**
- Etherscan 合约查看：https://etherscan.io/address/0x1dC966b692C45eCb0E3e96416d9C7f8057F74A1D
- Sepolia 测试网部署合约，交易哈希：`0x61d54e3daec4bd84dec0718caefd50a0f2edd30d513db365d307715e3374bc8b`

---

## 三、AI × Web3 交叉问题：Agent 能否发起链上支付？

**我的理解：**
目前 Agent 本身无法"自己"发起链上支付，因为链上操作需要EOA签名（私钥控制）。但有几种路径可以实现：

1. **Session Key（会话密钥）**：给 Agent 授权一个限权临时的会话密钥，只能执行特定范围的交易（如支付上限、特定合约），可撤销
2. **Account Abstraction（ERC-4337）**：智能钱包 + Paymaster，让 Agent 可以作为 Smart Account 的操作主体
3. **x402 支付协议**：基于 HTTP 的链上支付协议，AI Agent 可以通过它接收稳定币支付

这正是 W2 的核心学习方向，也是 CGHub 价值层设计的关键技术路径。

**我的卡点：**
具体实现细节（Session Key 的权限范围如何设计？x402 协议栈如何接入？）还需要深入研究。

---

## 四、本周完成的 Proof-of-Work

### 1. Etherscan 区块链浏览器实战
- 查看了自己在 Sepolia 测试网部署的合约
- 理解了交易哈希、区块确认数、Gas 费用、Contract vs EOA 等核心概念
- 整理了 Web3 基础概念卡片（见 submissions/W1-02-Web3基础概念卡片.md）

### 2. GitHub 学习仓库建立
- 仓库：https://github.com/Carey-Hugo/ai-web3-school-cghub
- 结构：daily/每日打卡、submissions/任务提交、learning-notes/笔记

### 3. WCB 任务提交
- W1-02：Web3 基础概念卡片（已提交）
- W1-13：AI 概念卡片（已提交）

---

## 五、下一周想继续探索的方向

**主攻方向：Agent + x402 支付协议**

具体问题：
1. Session Key 在以太坊钱包里的实现机制是什么？（ERC-7715？）
2. x402 协议的具体流程：AI Agent 如何接收第一个微支付？
3. W2-01：AI×Web3 问题地图 —— 找到自己的主攻方向

**同时继续补 W1 欠账：** W1-07/08/09 尽快完成，把 230 分欠账清掉。

---

## 六、Tag 与互动

关注 @LXDAO_Official、@ETHPanda_Org、@aiweb3school、@Zai_org、@web3careerbuild

标签：**#AIxWeb3School #创客星球 #CGHub**

---

> **相关 Proof-of-Work：**
> - GitHub 仓库：https://github.com/Carey-Hugo/ai-web3-school-cghub
> - 合约地址：0x1dC966b692C45eCb0E3e96416d9C7f8057F74A1D
> - Tx Hash：0x61d54e3daec4bd84dec0718caefd50a0f2edd30d513db365d307715e3374bc8b
> - W1-02 概念卡：submissions/W1-02-Web3基础概念卡片.md