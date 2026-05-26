# W1-05：Week 1 Proof-of-Work Pack

> 提交日期：2026-05-27
> 作者：Carey Hugo
> 学号：4253
> 课程：AI×Web3 School × WCB

---

## 入口说明

本 Pack 汇总我在 AI×Web3 School Week 1 的完整学习成果，包含 AI 基础、Web3 基础、链上验证、工具实践和本周遇到的关键问题与修正记录。

**总览：**
- AI 学习记录 × 2 份
- Web3 概念卡片 × 1 份
- 链上验证记录 × 2 份
- 流程图 × 1 份
- 问题与修正记录 × 1 份

---

## 一、AI 学习记录

### 1.1 AI 概念卡片
📄 文件：[W1-AI概念卡片.md](./W1-AI概念卡片.md)

**核心内容：**
- LLM（大语言模型）：Transformer 架构、Token 化、Context Window
- Prompt Engineering：Zero-shot、Few-shot、Chain-of-Thought
- RAG（检索增强生成）：向量数据库 + LLM 的混合架构
- AI Agent 基础：ReAct、Tool Use、Planning、Memory

**本周关键收获：**
> AI 的本质是"概率预测 + 上下文推理"。理解 Context Window 的限制，才能设计有效的 Agent Workflow。

### 1.2 AI × Web3 学习总结
📄 文件：[submissions/W1-07-AI×Web3学习总结.md](./submissions/W1-07-AI×Web3学习总结.md)

**核心问题：AI 和 Web3 的结合点在哪里？**

```
AI × Web3 的三个结合层：
  1. AI 为 Web3 提效（数据分析、合约安全审计、治理辅助）
  2. Web3 为 AI 确权（AI 创作上链、贡献记录、价值分配）
  3. AI + Web3 = 新协作范式（AI Agent 作为价值分配的自动执行层）
```

---

## 二、Web3 概念卡片

📄 文件：[submissions/W1-02-Web3基础概念卡片.md](./submissions/W1-02-Web3基础概念卡片.md)

**核心内容：**

| 概念 | 理解 |
|------|------|
| Hash（哈希） | 任意输入 → 固定长度输出，单向不可逆 |
| 公钥/私钥 | 私钥签名，公钥验证，数学不可逆 |
| 数字签名 | 证明"持有私钥"且"消息未被篡改" |
| EOA vs CA | EOA = 私钥控制，CA = 代码控制（智能合约钱包）|
| 智能合约 | 部署在链上的代码，触发条件满足自动执行 |
| 钱包 | 非确定性：助记词 → 衍生无数地址对 |
| 多签钱包 | N把钥匙中需M把签名才能执行（Safe/Gnosis Safe） |

**本周关键收获：**
> Web3 的核心是"去中心化 + 密码学确权"。理解私钥即身份，才能理解链上操作的风险和边界。

---

## 三、链上验证记录

### 3.1 区块链浏览器操作
📄 文件：[submissions/W1-T5-区块链浏览器操作.md](./submissions/W1-T5-区块链浏览器操作.md)

**验证目标：** 查询 Sepolia 测试网交易记录

```
区块浏览器：Etherscan (Sepolia)
🔗 交易哈希：0x61d54e3daec4bd84dec0718caefd50a0f2edd30d513db365d307715e3374bc8b
📦 合约地址：0x1dC966b692C45eCb0E3e96416d9C7f8057F74A1D
🌐 链接：https://sepolia.etherscan.io/tx/0x61d54e3daec4bd84dec0718caefd50a0f2edd30d513db365d307715e3374bc8b
```

**验证内容：**
- 合约部署成功（transaction status: success）
- Gas 消耗正常
- 合约已验证，ABI 可查

### 3.2 合约部署 Sepolia 证明
📄 文件：[submissions/W1-T6-合约部署Sepolia证明.md](./submissions/W1-T6-合约部署Sepolia证明.md)

**部署环境：**
- 测试网：Sepolia
- 框架：Foundry (forge)
- 合约：Counter（计数器合约）

**关键证据：**
```
合约地址：0x1dC966b692C45eCb0E3e96416d9C7f8057F74A1D
交易哈希：0x61d54e3daec4bd84dec0718caefd50a0f2edd30d513db365d307715e3374bc8b
区块高度：可在 Etherscan 查询
```

---

## 四、最小交叉流程图

📄 文件：[CGHub-WCB-Submissions/W1-04-AI×Web3最小交叉流程图.md](./CGHub-WCB-Submissions/W1-04-AI×Web3最小交叉流程图.md)

**流程主题：** CGHub 贡献记录与收益分配最小闭环

```
核心流程：
创客协作 → AI 追踪贡献 → 智能合约存证 → Safe 多签审批 → 自动分发 → Etherscan 验证

AI 辅助完成：
  ✅ 记录贡献（自动追踪）
  ✅ 量化评估（辅助计算权重）
  ✅ 触发合约（满足条件后调用）

必须人工确认：
  🔴 多签审批（资金转出）
  🔴 争议裁决（贡献权重分歧）
  🔴 规则修改（分配比例调整）
```

**验证方式：** Etherscan 查交易哈希 → 确认事件日志 → 确认钱包余额变化

---

## 五、本周遇到的问题与修正记录

### 问题 1：合约部署 Gas 估算错误

**现象：** 第一次部署时 Gas Limit 估算偏低，导致交易失败。

**原因：** 合约逻辑较复杂，Etherscan 估算与实际消耗有差异。

**修正：**
```bash
# 增加 Gas Limit 手动覆盖
forge create --rpc-url $SEPOLIA_RPC --gas-limit 3000000 src/Counter.sol:Counter
```

**教训：** 测试网部署也要考虑实际 Gas 消耗，不能完全依赖框架估算。

---

### 问题 2：AI 概念理解不够深入

**现象：** 初学 LLM 时，对 "Context Window" 和 "Token" 的概念混淆。

**原因：** 没有动手实验，只看概念文字。

**修正：**
- 实际调用 OpenAI API 观察 token 计算
- 用短文本 vs 长文本测试 Context Window 限制
- 结合代码理解 Embedding 和 Vector 的区别

**教训：** Web3 + AI 都是实践性很强的领域，只看不动手永远学不会。

---

### 问题 3：GitHub 操作失误

**现象：** 提交时路径写错，导致文件没有进入正确目录。

**原因：** 没有仔细核对目录结构。

**修正：**
```bash
# 提交前核对文件位置
ls -la CGHub-WCB-Submissions/
git status
git diff --stat
```

**教训：** 每次提交前必须 `git status` 确认，冲动提交是最大浪费。

---

## 六、W1 学习数据总览

| 维度 | 数据 |
|------|------|
| 学习天数 | 7 天（Day 1-7） |
| 提交任务 | 6 个（含本次） |
| 累计积分 | +45 分（W1-02/07/09/10/11/12/13 已计入） |
| 合约部署 | Sepolia 主网（测试） |
| 合约地址 | `0x1dC966b692C45eCb0E3e96416d9C7f8057F74A1D` |
| 交易哈希 | `0x61d54e3daec4bd84dec0718caefd50a0f2edd30d513db365d307715e3374bc8b` |

---

## 七、相关 Proof 链接

| 类型 | 链接 |
|------|------|
| GitHub Repo | https://github.com/Carey-Hugo/ai-web3-school-cghub |
| Etherscan 合约 | https://sepolia.etherscan.io/address/0x1dC966b692C45eCb0E3e96416d9C7f8057F74A1D |
| Etherscan 交易 | https://sepolia.etherscan.io/tx/0x61d54e3daec4bd84dec0718caefd50a0f2edd30d513db365d307715e3374bc8b |
| AI 概念卡片 | [W1-AI概念卡片.md](./W1-AI概念卡片.md) |
| Web3 概念卡片 | [submissions/W1-02-Web3基础概念卡片.md](./submissions/W1-02-Web3基础概念卡片.md) |
| 流程图 | [CGHub-WCB-Submissions/W1-04-AI×Web3最小交叉流程图.md](./CGHub-WCB-Submissions/W1-04-AI×Web3最小交叉流程图.md) |

---

## 八、W1 核心结论

> **AI×Web3 的本质是"密码学确权 + AI 自动化执行"的结合。**
> Web3 提供不可篡改的记录层，AI 提供自动化的执行层，两者结合才能实现"贡献被记录、价值合理分配"的创客经济闭环。

**Week 1 完成 → Week 2 目标：**
- W2 主线：Payment/Commerce（收益分配）
- W2 兼固：Governance（治理协作）
- 核心问题：AI Agent 如何成为贡献记录和价值分配的关键基础设施？

---

> 本文档为 W1-05 提交内容
> 存档：`CGHub-WCB-Submissions/W1-05-Week1-PoW-Pack.md`
> 验证链接：https://github.com/Carey-Hugo/ai-web3-school-cghub/blob/master/CGHub-WCB-Submissions/W1-05-Week1-PoW-Pack.md