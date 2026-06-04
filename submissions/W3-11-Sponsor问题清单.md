# W3-11 · Sponsor/Mentor 问题清单

> **任务来源**：WCB 学习平台 Week 3 · 推荐完成 · Sponsor/Mentor 问题清单
> **积分**：+20
> **截止**：2026-06-09（5 天倒计时）
> **Hugo 选择**：A（10 个问题直接定稿）
> **归档人**：Hermes
> **归档时间**：2026-06-04 15:00
> **提交状态**：待 Hugo 手动提交 WCB

---

## 📌 问题清单（10 个，按 Workshop 主题分组）

### A. 关于 Cobo Agentic Wallet（5 个）

**Q1** · Pact 协议里 Intent 字段最长多少字符？超过会怎样？
- 背景：我们 Agent 火堆生成的 ContributionProof payload 字段较多（contributor/source/evidenceId/score/paymentId），担心 Intent 长度超限

**Q2** · Owner 审批时如果想"修改金额"再批准，目前 UX 支持吗？
- 背景：CGHub 场景中 Owner 看到 Agent 提交的分账请求，可能想调整后批准，目前是 accept/reject 二选一吗

**Q3** · MPC 节点本地要不要跑？还是要全托管在 Cobo？
- 背景：黑客松两周时间紧，全托管是默认选项吗？需要本地起 TSS Node 的场景是什么

**Q4** · Pact 失败后资金回滚是自动还是手动？
- 背景：Agent 提交 Pact 但 Owner 超时未批，资金是被锁还是自动退回？影响我们 Demo 的资金流设计

**Q5** · Agent 之间能否用 CAW 互转（Agent-to-Agent Payment）？
- 背景：CGHub 多 Agent 协作时，Agent A 完成的任务需要分账给 Agent B 提供的算力，是否支持

---

### B. 关于 Etherscan/链上数据（3 个）

**Q6** · 链上批量查 1000 个地址的贡献记录，公共 RPC 够用吗？要不要 Infura/Alchemy？
- 背景：Demo 展示"所有贡献者列表"时要批量查询，Sepolia 公共 RPC 限速够不够

**Q7** · USDC 合约事件怎么订阅（前端实时显示分账到账）？
- 背景：前端要实时显示"贡献者 X 刚收到 100 USDC"，是用 websocket 订阅 Transfer 事件还是轮询

**Q8** · Sepolia 测试网会有关停风险吗？要不要现在就迁到 Holesky？
- 背景：Sepolia 是 2021 年起的，会不会在 6/14 黑客松截止前关停，Holesky 是更新的测试网

---

### C. 关于评测/黑客松评审（2 个）

**Q9** · Cobo 评审最看重的 3 个 Demo 指标是什么？
- 背景：避免"什么都做了"的自夸式 Demo，想知道评审眼里"做到什么程度算过线"
- 潜台词：技术深度 / 商业完整度 / 用户体验 三选一？

**Q10** · Hackathon 结束后 CAW 凭据/钱包会保留多久？我们能不能继续用？
- 背景：CGHub 是长期项目，黑客松结束后 Cobo 凭据能否保留给我们继续开发？这关系到 MVP 之后的路线

---

## 🔍 清单设计逻辑

| 维度 | 体现 |
|------|------|
| **基于项目实战** | 5 个 Cobo 问题全部对应我们 6/2-6/3 实战中遇到的真实场景 |
| **3 个主题覆盖** | Cobo 产品 / 链上数据 / 评审标准 = 完整参赛视角 |
| **问题尖锐可回答** | 都不是"你们产品怎么用"的客套问题，每个都有具体技术/业务场景 |
| **10 个数量合适** | 少显得研究不够，多显得凑数；10 个覆盖三大主题刚好 |
| **与 W3-01 互补** | W3-01 是 3 个对外提问（要 Cobo 回复），W3-11 是 10 个现场提问（要现场互动） |

---

## 📌 提交要点（WCB 提交时检查）

- [x] 至少 5 个问题（已满足：10 个）
- [x] 按主题分组（已满足：3 组）
- [x] 每个问题有具体场景（已满足：每个 Q 都有背景说明）
- [x] 体现对 Sponsor 产品的真实研究（已满足）
- [x] 不堆客套问题（已满足）

---

## 🔗 关联背景

- W3-01 草稿（对外提问 3 个）：`submissions/W3-01-赞助方问题-给Cobo.md`
- 6/2-6/3 实战笔记：`/home/ubuntu/creators-galaxy/creators-galaxy/hackathon/cobo-agentic-wallet-tutorial-notes.md`
- 5 个接口不一致问题：见 `04-team/00-团队总览.md`
- 合约地址：0x876A0741223EDdaE081Ef22beA513E92335B1Bd5 (Sepolia)

---

> **最后更新**：2026-06-04 15:00（Hermes）
