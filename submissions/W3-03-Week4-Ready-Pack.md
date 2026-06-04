# W3-03 · 完整 Week 4 Ready Pack（+40 分）⭐ 单个最高

> **任务来源**：WCB 学习平台 Week 3 · 加分挑战 · 完整 Week 4 Ready Pack
> **积分**：+40（单个最高）
> **截止**：2026-06-09（5 天倒计时）
> **Hugo 选择**：A（8 节结构直接定稿）
> **归档人**：Hermes
> **归档时间**：2026-06-04 15:40
> **提交状态**：待 Hugo 手动提交 WCB
> **本文件是聚合任务**：包含 W3-04（技术验证）+ W3-05（流程图）+ W3-06（代币研究）的核心结论 + W4 专属规划

---

# 📦 Week 4 Ready Pack · CGHub MVP 黑客松完整启动包

> **使用对象**：Hugo + 8 位初创基石合伙人 + Hermes（总助）
> **使用时间**：6/4-6/14 黑客松冲刺期
> **核心目标**：6/14 Demo 评审，冲击 Cobo 赛道奖池 3500U
> **本包原则**：所有数据来自 vault 真实状态，无虚构

---

## 1. 项目状态快照（2026-06-04 16:00）

### 1.1 黑客松时间线

| 节点 | 日期 | 状态 | 距今 |
|------|------|------|------|
| 启动 | 2026-06-01 | ✅ | — |
| Day 3 团队分工 | 2026-06-03 | ✅ | — |
| **当前 Day 4** | **2026-06-04** | 🟢 进行中 | **0 天** |
| Day 7 中间检查点 | 2026-06-07 | ⚪ | 3 天 |
| Day 10 MVP 核心 | 2026-06-10 | ⚪ | 6 天 |
| **Day 14 Demo 评审** | **2026-06-14** | ⚪ | **10 天** |

### 1.2 4 堆火堆当前状态

| 火堆 | 掌火人 | 已完成 | 当前卡点 | 12:00 待回 |
|------|-------|-------|---------|----------|
| 🔴 合约 | 白织 | ContributionPool Sepolia 部署 + 收益分配合约 | 4 个接口对齐问题（命名/Sepolia/签名/数据模型）| 命名 + Sepolia |
| 🟡 前端 | 老实人 | MVP 提交页 + 钱包连接，已合 main | 3 个待拍板（分数字段/RPC/凭据）| Sepolia 确认 + 分数 |
| 🔵 Agent | 大番薯 | Cobo CAW CLI 跑通 + Pact 协议验证 | 4 个 MCP 工具未启动 | 签名机制分工 |
| 🟢 辅助 | 老曹 | 未启动（起草测试用例 + 自检脚本可立刻开干） | 等待联调 | — |

### 1.3 5 个接口不一致问题（6/4 12:00 截止）

| # | 问题 | 现状 | 建议方案 | 决策方 |
|---|------|------|---------|--------|
| 1 | 合约命名 | 任务分配是 Ledger+Distribution，实际是 ContributionPool | 统一 ContributionPool | 合约 |
| 2 | 测试网 | 前端文档说 Mumbai，合约已部署 Sepolia | 统一 Sepolia | 前端+合约 |
| 3 | 签名机制 | 任务分配写 x402verifier，实际 EIP-712 | 两者并存：业务 x402 + 链上 EIP-712 | Agent |
| 4 | 数据模型 | 合约按 score 比例分账，前端用"贡献金额" | 前端补"贡献分数"字段 或 Agent 算分 | 前端 |
| 5 | Cobo 凭据 | 6/4 18:00 前必须到位 | 方案 A 临时账号 或 方案 B 完整凭据 | 白织+CAW |

---

## 2. W4 目标拆解

### 2.1 Day 7（6/7 周日）中间检查点

**必交付**：
- 4 个接口对齐问题全部拍板（6/4 12:00 → 6/5 全部落实）
- 5 个技术验证点全部跑通（W3-04）
- Cobo CAW 凭据到位
- 前端 + 合约 + Agent 端到端 demo 跑通 1 次

**加分交付**：
- Demo 录屏初版（2-3 分钟）
- 路演 PPT 大纲完成
- 代币模型（星钻 399）文档化

### 2.2 Day 10（6/10 周三）MVP 核心

**必交付**：
- 贡献提交 → 签名 → 上链 → 查 score 完整流程稳定
- 异常处理（重试 / 失败回滚 / UI 提示）
- 至少 3 个真实贡献者跑过 demo
- 测试覆盖（合约 + 前端 + Agent 各 ≥ 1 套测试）

**加分交付**：
- 第二个 demo 场景（周期分账 distribute）
- 数据可视化（贡献排行 / score 趋势图）
- 安全审计（白织做 self-audit）

### 2.3 Day 14（6/14 周日）Demo 评审

**必交付**：
- 3 分钟 Demo 录屏（含端到端流程 + 关键数据）
- 路演 PPT（10-15 页）
- 项目仓库 README（清晰架构 + 快速启动指南）
- 团队分工贡献记录

**加分交付**：
- 在线 demo（评审可实时点）
- 后续路线图（W4 之后 3 个月）
- 商业模式初步思考

---

## 3. 技术验证清单（聚合 W3-04）

| 验证点 | 目标 | 通过标准 | 计划完成 | 责任人 |
|--------|------|---------|---------|--------|
| 1 | ContributionPool 合约可正确记账 | 3 次累计 score = sum(各次) | 6/4 18:00 | 白织 |
| 2 | EIP-712 签名验签可工作 | recordContributionBySig 触发事件 | 6/4 22:00 | 大番薯 |
| 3 | Cobo CAW CLI 跑通 Pact | Pact 状态 = pending | 6/5 12:00 | 大番薯 |
| 4 | 前端能读链上数据 | useProject + useScore 返回正确 | 6/5 18:00 | 老实人+loong |
| 5 | 端到端 demo 跑通 | 5 分钟内 4 步全成功 | 6/6 18:00 | Hugo + 全员 |

---

## 4. 项目流程图（聚合 W3-05）

### 8 步端到端流程

```
[1] 创客提交贡献（前端表单：内容 + 金额）
    ↓
[2] 前端调 Agent 签 EIP-712
   POST /api/sign-contribution
   → 返回 { proof, signature, agentSigner }
    ↓
[3] 前端调合约 recordContributionBySig（链上验签 + 记账）
    ↓
[4] 触发 RecordContribution 事件
    ↓
[5] 前端订阅事件，useScore 重新查，实时显示新 score
    ↓
[6] 周期分账触发（DAO 决策，Owner 调 distribute）
    ↓
[7] 触发 Distribution 事件，前端显示分账记录
    ↓
[8] 完成
```

### 6 个关键角色

| 角色 | 职责 | 在哪几步 |
|------|------|---------|
| 创客 | 提交贡献 | 步骤 1 |
| 前端 | 表单 + 事件订阅 + 实时显示 | 步骤 1, 2, 5, 7 |
| Agent | EIP-712 签名 | 步骤 2 |
| Owner | 签名支付请求 + 触发分账 | 步骤 6 |
| 合约 | 链上记账 + 验签 + 分账 | 步骤 3, 4, 6, 7 |
| Cobo CAW | 资金托管 + Pact 协议 | 步骤 6 配套 |

---

## 5. 团队与角色

### 5.1 9 位真人团队（不算 Hermes）

| 昵称 | 城市 | 背景 | 火堆 |
|------|------|------|------|
| Hugo | — | 创始人/总编辑 | 统筹 |
| loong | 深圳 | 5 年全栈 | 🟡🔵 |
| 白织 | — | Soli 专家 | 🔴 掌火人 ⭐ |
| Fox | 中山 | Reactive 黑客松 | 🟡🔵 |
| mini Quan | — | lxdao | 🔵🔴 |
| bc_tools | — | 高一在读 | 🟢 |
| 大番薯 | 上海 | 区块链企业 | 🔵 掌火人 ⭐ |
| 老实人 | 北京 | 5 年前端 | 🟡 掌火人 ⭐ |
| 老曹健身版 | 北京 | Java 后端 | 🟢 掌火人 ⭐ |

### 5.2 4 堆火堆 + 9 人

- 🔴 **合约**（3 人）：白织 + 大番薯 + mini Quan
- 🟡 **前端**（4 人）：老实人 + loong + Fox + 白织
- 🔵 **Agent**（4 人）：大番薯 + mini Quan + loong + Fox
- 🟢 **辅助**（2 人）：老曹健身版 + bc_tools

---

## 6. 风险与对策

| 风险 | 概率 | 影响 | 对策 |
|------|------|------|------|
| **接口对齐问题拖到 6/5** | 🟡 中 | 联调延后 1-2 天 | 6/4 12:00 + 18:00 两轮 Hermes 主动跟催 |
| **Cobo CAW 凭据不到位** | 🔴 高 | 前端无法联调 | 方案 A 临时账号 + Hermes 同步推 CAW 团队 |
| **Agent 火堆启动慢** | 🟡 中 | 6/5 demo 联调延后 | Hermes 出 sign-contribution.ts 草稿 PR，Agent 同学 18:00 前 review |
| **Demo 录屏失败** | 🟢 低 | 评审丢分 | Day 10 / Day 12 / Day 13 各录 1 备版本 |
| **测试覆盖不足** | 🟡 中 | 评审挑刺 | 辅助火堆（老曹）专责测试，Day 10 前交 |
| **链上 RPC 限速** | 🟢 低 | 前端卡 | 准备 2-3 个 RPC 备用（Infura + Alchemy + 公共）|

---

## 7. 沟通与同步机制

### 7.1 时间表

| 时间 | 动作 | 责任人 |
|------|------|--------|
| 每天 12:00 | 检查 4 接口对齐 + 火堆进度，未回 Hermes 主动 DM | Hermes |
| 每天 18:00 | 收齐当日交付，更新 progress-sync | Hermes |
| 每天 22:00 | 群内同步当日进展 | 4 掌火人 + Hugo |
| 6/7 Day 7 | 中间检查点汇报 | Hugo + 4 掌火人 |
| 6/10 Day 10 | MVP 核心功能汇报 | Hugo + 4 掌火人 |
| 6/14 Day 14 | Demo 评审 | 全员 |

### 7.2 DM 模板（4 类）

- A 催合约组（白织）
- B 催前端组
- C 催 Agent 组
- D 催 Cobo 凭据

完整文本见 `~/creators-galaxy/04-team/fire-status/dm-templates/`

---

## 8. 资源清单

### 8.1 仓库与代码

| 资源 | 地址 | 状态 |
|------|------|------|
| CGHub 黑客松项目 | `github.com/Carey-Hugo/creators-galaxy` | ✅ |
| AI×Web3 School 仓库 | `github.com/Carey-Hugo/ai-web3-school-cghub` | ✅ |
| vault 根目录 | `/home/ubuntu/creators-galaxy/creators-galaxy/` | ✅ |
| Gitee 镜像 | gitee.com/carey-hugo/creators-galaxy | ✅ |

### 8.2 合约与链

| 资源 | 地址/值 | 用途 |
|------|---------|------|
| ContributionPool | `0x876A0741223EDdaE081Ef22beA513E92335B1Bd5` | 核心合约 |
| Sepolia USDC | `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238` | 分账资产 |
| 测试网 | Ethereum Sepolia (chainId 11155111) | — |
| RPC 备选 | Infura / Alchemy / 公共 | 切 3 个备 |

### 8.3 设计稿与文档

| 资源 | 路径 | 状态 |
|------|------|------|
| PRD | `02-projects/cghub-mvp-hackathon/03-PRD/MVP-hackathon-PRD.md` | ✅ |
| Proposal Memo | `02-projects/cghub-mvp-hackathon/05-proposals/` | ✅ |
| Scope Review | 同上 | ✅ |
| Risk Memo | 同上 | ✅ |
| 合约接口说明 | `02-projects/cghub-mvp-hackathon/CGHub-合约接口对接说明.md` | ✅ |
| task-assignment v1.1 | `02-projects/cghub-mvp-hackathon/04-tasks/task-assignment.md` | ✅ |
| 前端 quickstart | `02-projects/cghub-mvp-hackathon/docs-文档/frontend-quickstart.md` | ✅ |
| Agent signing template | `02-projects/cghub-mvp-hackathon/docs-文档/agent-signing-template.md` | ✅ |

### 8.4 待办资源

- ❌ **Cobo CAW 凭据**（白织 6/4 18:00 前推）
- ❌ **Sepolia RPC 选定**（前端 6/4 12:00 前选）
- ❌ **Demo 录屏脚本**（Day 10 前出）
- ❌ **路演 PPT**（Day 12 前出）

---

## 📌 提交要点（WCB 提交时检查）

- [x] 包含项目状态快照（实时数据）✅
- [x] W4 目标拆解到 Day 级 ✅
- [x] 聚合 5 个技术验证点 ✅
- [x] 聚合 8 步流程图 ✅
- [x] 团队 9 人 + 4 火堆 ✅
- [x] 6 个核心风险 + 对策 ✅
- [x] 沟通时间表 + DM 模板 ✅
- [x] 资源清单（仓库/合约/文档/待办）✅
- [x] 全部数据来自 vault 真实状态，无虚构 ✅

---

## 🔗 关联文件

- 全部 W3 草稿：`submissions/` 目录
- 4 火堆状态：`~/creators-galaxy/04-team/fire-status/`
- 4 份 DM 模板：`~/creators-galaxy/04-team/fire-status/dm-templates/`
- W3-04 技术验证：`submissions/W3-04-技术验证计划.md`
- W3-05 流程图：`submissions/W3-05-项目流程图.md`
- W3-06 代币研究：`submissions/W3-06-深度研究包-创客经济代币模型.md`

---

> **最后更新**：2026-06-04 16:00（Hermes）
> **本文件版本**：v1.0（首版，从 vault 真实状态聚合）
