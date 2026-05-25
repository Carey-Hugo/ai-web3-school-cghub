# CGHub × WCB 学习状态总控台

> 这是 Hugo 和我的共享记忆库。每次对话开始前，我先读这个文件。
> 更新频率：每次重要变化后立即更新。

---

## 👤 用户信息

- 网名：Carey Hugo，学号 4253
- 定位：创始人军师+总编辑，战略陪跑
- 学习风格：互动式共学，讲完概念问"懂了吗"，不自动跳下一步
- 沟通偏好：简洁直接，少铺垫，少长段落
- 长期使命：余生做 AI×Web3，看 CGHub 创客经济成为新文明入口

---

## 📊 WCB 真实进度（重要！）

### W1 · AI基础（~Day 7 完成）

| 任务 | 状态 | 详情 |
|------|------|------|
| A1 LLM | ✅ 完成 | Day 1 |
| A2 Prompt | ✅ 完成 | Day 1 |
| A3 Context | ✅ 完成 | Day 1 |
| A4 RAG | ✅ 完成 | Day 4 |
| Task 3 · 区块链浏览器（Etherscan） | ✅ 完成 | 昨天已操作，用浏览器查过地址 |
| Task 4 · 合约部署 Sepolia | ✅ 完成 | 合约：SimpleStorage，地址：0x1dC966b692C45eCb0E3e96416d9C7f8057F74A1D，TxHash：0x61d54e3daec4bd84dec0718caefd50a0f2edd30d513db365d307715e3374bc8b |
| Proof-of-Work 提交 | ⚠️ 草稿已写，待 Hugo 过目 | 文件：submissions/W1-Proof-of-Work提交.md |
| W1 AI概念卡片 | ✅ 完成 | 文件：submissions/W1-AI概念卡片.md |

**W1 未提交任务：Proof-of-Work 提交（草稿待确认）**

### W2 · Agent 基础（Day 8 进行中）

| 任务 | 状态 | 详情 |
|------|------|------|
| A5 Agent（Tool Use / Planning / State / Reflection） | ❌ 未开始 | W2 核心 |
| A6 Evaluation | ❌ 未开始 | W2 后半 |
| W2 Proof-of-Work | ❌ 未开始 |  |
| W2 AI概念卡片 | ❌ 未开始 |  |

---

## 🗺️ 全局 Roadmap 进度摘要

- AI Track（A1-A6）：完成 4/6，核心未完成：A5 Agent、A6 Evaluation
- Web3 Track（B1-B4）：完成 B1-B4（密码学/钱包/智能合约/Dev Stack）
- Bridge 融合层（C1-C8）：0% 未开始 ← 黑客松技术核心
- 前沿方向：0% 未开始

---

## 📁 关键文件路径

- 项目根目录：`/home/ubuntu/ai-web3-school-cghub/`
- 进度总览：`handbook-feedback/W1-W4-Roadmap-Progress.md`
- 学习计划：`learning-plan.md`
- 今日/近期日志：`daily/YYYY-MM-DD.md`
- 提交物：`submissions/W1-Proof-of-Work提交.md`
- 概念卡片：`submissions/W1-AI概念卡片.md`

---

## 🔴 当前最高优先级

1. **W1 Proof-of-Work 草稿给 Hugo 过目 → 提交**
2. **W2 A5 Agent 开始学习**（Tool Use → Planning → State → Reflection）
3. **Bridge 融合层入门**（C1 Chain-aware Context → C2 Web3 Tool Use）

---

## 📌 Hugo 给的重要指示（持续补充）

- "我跟你聊的都没有废话" → 所有对话信息都要入文件
- "每次都要调用知识库" → 每次对话开始前先读本文件
- "不要忘掉信息" → 用外部文件补记忆限制
- WCB 任务做完要补提交，不能只做不记录
- 区块链浏览器任务已做（Day 7）
- 智能合约已部署到 Sepolia（Day 7）

---

## 🔑 WCB API Key

```
w3cb_sk_j55opvstQ6TtB0GwSzDoIQ-hdEpiMQTi
```

获取方式：WCB网站 → 个人设置(Profile) → Account → Secret API Key

API 调用方式：
- 端点：POST https://web3career.build/api/agent/call
- Header：Authorization: Bearer <key>
- 关键 procedure：
  - tasks.listForLearner（查我的任务）
  - tasks.submitEvidence（提交证据）
  - tasks.myTaskHistory（查历史提交）
  - users.getProfile（我的信息）

---

> 最后更新：2026-05-25（Day 8）
> 更新时机：每次重要状态变化后