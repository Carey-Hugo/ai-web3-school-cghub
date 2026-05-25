# AI×Web3 School · 全局进度总览

> 数据来源：https://aiweb3.school/ （官方学习地图）
> 最后更新：2026-05-22（Day 5）
> 说明：本文档对照官方 Roadmap 梳理个人学习进度，是制定学习计划的核心依据

---

## 📊 整体架构（三大板块）

```
AI 基础（左侧）
    ↓
AI × Web3 Bridge 融合层（底部核心创新区）
    ↑
Web3 基础（右侧）
```

---

## 一、AI Track（AI 基础）

### A1 · 大语言模型（LLM）✅ 已完成 Day 1
> Token / Embedding / Transformer / Hallucination

| 节点 | 状态 | 备注 |
|------|------|------|
| LLM 基础 | ✅ 完成 | 模型能力边界 |
| Token | ✅ 完成 | Day 1 |
| Embedding | ⚠️ 初步 | 待深化 |
| Transformer | ✅ 了解 | 架构概念 |
| Hallucination | ✅ 理解 | 幻觉成因 |

### A2 · Prompt ✅ 已完成 Day 1
| 节点 | 状态 | 备注 |
|------|------|------|
| Prompt 基础 | ✅ 完成 | 结构化 prompt |

### A3 · Context ✅ 完成 Day 1
| 节点 | 状态 | 备注 |
|------|------|------|
| Context 概念 | ✅ 完成 | 上下文窗口 |

### A4 · RAG ✅ 完成 Day 4
> 检索增强生成

| 节点 | 状态 | 笔记 |
|------|------|------|
| Chunking | ✅ 完成 | Day 4 |
| Vector DB | ✅ 完成 | Day 4 |
| Retriever | ✅ 完成 | Day 4 |
| Rerank | ✅ 完成 | Day 4 |

### A5 · Agent（智能体）⚪ 未开始 → W2
> 多步执行 / 边界 / 日志 / 失败恢复

| 节点 | 状态 | 备注 |
|------|------|------|
| Agent 入门 | ❌ 未开始 | → W2 |
| Tool Use（工具调用） | ❌ 未开始 | → W2 |
| Planning（规划） | ❌ 未开始 | → W2 |
| State（状态） | ❌ 未开始 | → W2 |
| Reflection（反思） | ❌ 未开始 | → W2 |

### A6 · Evaluation（评估）⚪ 未开始 → W2后半
> 判断 AI 系统是否可靠

| 节点 | 状态 | 备注 |
|------|------|------|
| Harness | ❌ 未开始 |  |
| Golden Set | ❌ 未开始 |  |
| LLM-as-Judge | ❌ 未开始 |  |
| Regression | ❌ 未开始 |  |

---

## 二、Web3 Track（Web3 基础）

### B1 · 密码学 ✅ 完成 Day 2-3
> 账户 / 签名 / 哈希 / 证明系统底层

| 节点 | 状态 | 备注 |
|------|------|------|
| Hash | ✅ 完成 | Day 3 |
| Public Key | ✅ 完成 | Day 3 |
| Private Key | ✅ 完成 | Day 3 |
| Signature | ✅ 完成 | Day 3 |

### B2 · 钱包 ✅ 完成 Day 3
> 用户进入链上世界的入口

| 节点 | 状态 | 备注 |
|------|------|------|
| EOA vs 合约账户 | ✅ 完成 | Day 3 |
| Session Key | ✅ 完成 | Day 3 |
| MPC Wallet | ✅ 了解 | Day 3 |

### B3 · 智能合约 ✅ 完成 Day 3
> 链上程序 / 公开状态 / 不可逆执行

| 节点 | 状态 | 备注 |
|------|------|------|
| Solidity | ✅ 了解 | Dev Stack |
| EVM | ✅ 了解 | Day 2 |
| ABI | ✅ 了解 |  |
| Event | ✅ 了解 |  |
| Call vs Transaction | ✅ 完成 | Day 3 |
| Gas | ✅ 完成 | Day 3 |

### B4 · Dev Stack ✅ 完成 Day 4
> 开发/测试/部署/前端交互工具链

| 节点 | 状态 | 备注 |
|------|------|------|
| Foundry / Hardhat | ⚠️ 了解 | 未实际部署 |
| viem / ethers.js | ⚠️ 了解 | 未调用 |
| Alchemy / RPC | ⚠️ 了解 | 未申请 |
| WalletConnect / wagmi | ⚠️ 了解 | 未实践 |
| **Task 4 · 合约部署** | ❌ 未完成 | 🔴 优先 |

### B5 · 账户抽象（Account Abstraction）⚪ 未开始
> ERC-4337 / Smart Account / Bundler / Paymaster

| 节点 | 状态 | 备注 |
|------|------|------|
| ERC-4337 | ❌ 未开始 |  |
| Smart Account | ❌ 未开始 |  |
| Bundler | ❌ 未开始 |  |
| Paymaster | ❌ 未开始 |  |

### B6 · 安全（Security）⚪ 未开始
> Access Control / Audit / Simulation

| 节点 | 状态 | 备注 |
|------|------|------|
| Access Control | ❌ 未开始 |  |
| Audit | ❌ 未开始 |  |
| Simulation | ❌ 未开始 |  |

---

## 三、AI × Web3 Bridge 融合层（核心！）⚪ 未开始

> **这是 AI×Web3 School 的核心创新区**，也是 Hackathon 的技术基底

### C1 · Chain-aware Context（情境感知上下文）❌ 未开始
> 把链上数据引入 Agent 上下文

| 节点 | 内容 |
|------|------|
| On-chain Data | 链上数据接入 |
| Contract Docs | 合约文档 |
| ABI / Event | ABI接口 + 事件 |
| Transaction History | 交易历史 |

### C2 · Web3 Tool Use ❌ 未开始
> 让 Agent 调用链上工具

| 节点 | 内容 |
|------|------|
| RPC Tool | RPC 调用 |
| Contract Read | 读合约（免费） |
| Contract Write | 写合约（需签名） |
| Wallet Tool | 钱包工具 |

### C3 · Agent Workflow ❌ 未开始
> Agent 工作流设计

| 节点 | 内容 |
|------|------|
| Task Graph | 任务图 |
| State Machine | 状态机 |
| Human-in-the-loop | 人在回路 |
| Retry / Fallback | 重试 / 兜底 |

### C4 · Agent Wallet（智能体钱包）❌ 未开始
> AI Agent 的链上身份和权限

| 节点 | 内容 |
|------|------|
| AA Wallet | 账户抽象钱包 |
| Smart Account | 智能账户 |
| Safe 多签 | 多签钱包 |
| Session Key | 会话密钥（限权，可撤销）|

### C5 · Machine Payment（机器支付）❌ 未开始
> AI Agent 的支付能力

| 节点 | 内容 |
|------|------|
| Stablecoin Payment | 稳定币支付 |
| Budget | 预算控制 |
| Quote | 报价 |
| Payment Intent | 支付意图 |

### C6 · Settlement & Escrow（结算与托管）❌ 未开始
> 交易保障机制

| 节点 | 内容 |
|------|------|
| Escrow | 托管 |
| Receipt | 收据 |
| Delivery Proof | 交付证明 |
| Acceptance | 验收 |

### C7 · AI Oracle（AI 预言机）❌ 未开始
> 把 AI 输出作为数据源喂回链上

| 节点 | 内容 |
|------|------|
| AI Output | AI 输出 |
| Data Feed | 数据源 |
| Model Result | 模型结果 |
| Oracle Risk | 预言机风险 |

### C8 · Verifiable AI（可验证 AI）❌ 未开始
> 用密码学证明 AI 推理的正确性

| 节点 | 内容 |
|------|------|
| TEE | 可信执行环境 |
| ZK | 零知识证明 |
| zkML | 零知识机器学习 |
| Proof of Inference | 推理证明 |

---

## 四、前沿方向（应用层）⚪ 未开始

| 方向 | 说明 | 关联 CGHub |
|------|------|-----------|
| Agentic Commerce | API商业化/支付/预算 | ✅ 直接相关 |
| Dev Tooling | 合约阅读/交易解读 | ✅ 直接相关 |
| Wallet/Permission | AI钱包UX/会话密钥 | ✅ 直接相关 |
| AI Security | Prompt注入/工具隔离 | ✅ 直接相关 |
| Governance | 提案摘要/贡献跟踪 | ✅ 直接相关 |
| Open Track | AI原生钱包/链上数据分析 | ✅ 直接相关 |

---

## 📊 进度统计

### 完成度

| 板块 | 完成 | 总数 | 百分比 |
|------|------|------|--------|
| AI Track | 10 | 17 | 🟡 59% |
| Web3 Track | 9 | 16 | 🟡 56% |
| Bridge 融合层 | 0 | 26 | ⚪ 0% |
| 前沿方向 | 0 | 6 | ⚪ 0% |

### 🔴 最高优先级未完成项

```
1. W1 · Task 3：区块链浏览器实战（Etherscan）
2. W1 · Task 4：合约部署到测试网
3. W2 · Agent 基础（Tool Use / State / Planning）
4. W3 · Chain-aware Context（Bridge 第一步）
```

---

## 📅 学习顺序建议（基于 Roadmap 结构）

```
Week 1（已完成 ~75%）
  └→ W1 收尾：Task 3 → Task 4

Week 2（Agent 入门）
  └→ A5 Agent 基础 → Tool Use → Planning → State
  └→ A6 Evaluation 基础
  └→ WCB W2 打卡

Week 3（Bridge 入门）
  └→ C1 Chain-aware Context
  └→ C2 Web3 Tool Use（RPC / Contract Read）
  └→ C4 Agent Wallet（Session Key）
  └→ WCB W3 打卡

Week 4（Bridge 进阶 + 黑客松）
  └→ C3 Agent Workflow
  └→ C5 Machine Payment
  └→ C7 AI Oracle
  └→ 黑客松项目启动
```

---

## 📁 本地笔记文件

| 文件 | 对应 Roadmap 节点 |
|------|-----------------|
| `daily/2026-05-21.md` | RAG + Dev Stack |
| `learning-notes/rag基础笔记.md` | A4 RAG |
| `learning-notes/web3基础笔记.md` | B1-B4 全部 |
| `handbook-feedback/W1-W4-Roadmap-Progress.md` | 本文件 |

---

> **官方 Roadmap 来源：** https://aiweb3.school/
> **核心提醒：** Bridge 融合层是 Hackathon 的技术核心，越早接触越好
