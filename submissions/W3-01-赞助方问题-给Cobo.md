# W3-01 · 赞助方问题收集 · 给 Cobo 的问题

> **任务来源**：WCB 学习平台 Week 3 · 课程任务 · 赞助方问题收集
> **积分**：+5
> **截止**：2026-06-08（4 天倒计时）
> **Hugo 选择**：A（直接定稿 3 个问题）
> **归档人**：Hermes
> **归档时间**：2026-06-04 10:30
> **提交状态**：待 Hugo 手动提交 WCB

---

## 🎯 问题清单（3 个给 Cobo）

### Q1 · Pact Policy 引擎能力边界

> Pact Policy 引擎当前支持白名单和限额规则。能否扩展支持**时间窗规则**（如"未来 24h 内可执行 5 次"）和**链上条件触发规则**（如"链上数据证明任务完成后才放行"）？
>
> 这两个能力对我们 Agent 自动化场景很关键——目前只能写"单次限额"约束，遇到周期性任务（如每周分账）或多步任务链（前置任务未完成不允许后续）就要拆成多个 Pact，运营成本高。

### Q2 · 审批等待期 Agent 的行为

> Agent 提交 Pact 进入审批等待期，如果 **Owner 不在线**（睡觉 / 离线 / 失联），系统是**阻塞等待**还是**自动拒绝/超时回滚**？
>
> 我们的实际场景：Agent 给贡献者自动发奖金，Owner 在睡觉。**有没有 fallback 机制**（如备用审批人、多签阈值、或基于规则引擎的"低额自动放行"）？
>
> 这个问题直接影响我们 Demo 的连续性——如果必须 Owner 24h 在线，CGHub 这种"创客经济"场景就跑不通。

### Q3 · x402 + EIP-712 的 canonical 序列化

> 我们项目架构是：Agent 业务层做 x402（生成贡献证明 Intent），链上用 **EIP-712 验签**（agentSigner 私钥签 ContributionProof 后 recordContributionBySig 上链）。
>
> 关键问题：**signTypedData 前的 canonical 序列化用什么标准**？
> - 字典序（JS `JSON.stringify` 默认）
> - RFC 8785（JCS - JSON Canonicalization Scheme）
> - 还是 EIP-712 自己定义的 typed-data hash？
>
> 这个不一致会导致**跨 Agent 互验签名失败**——多个 Agent 互相验证对方签发的 ContributionProof 时，因为序列化方式不同导致 hash 不一致。
>
> Cobo 内部推荐哪种？或者 Pact 协议层是否已统一？

---

## 📌 提交要点（WCB 提交时检查）

- [ ] 标题：Week 3 赞助方问题收集 · Cobo
- [ ] 至少 3 个问题（已满足：3 个）
- [ ] 问题尖锐有深度（已满足：3 个都是基于实战）
- [ ] 与自己项目相关（已满足：3 个都跟 CGHub MVP 直接相关）
- [ ] 不堆客套问题（已满足：每个都有具体技术/业务场景）

---

## 🔗 关联背景

- **6/2 实战**：`hackathon/cobo-agentic-wallet-tutorial-notes.md`
- **6/3 Day 17 学习记录**：`ai-web3-school-cghub/daily/2026-06-03.md`
- **5 个接口不一致问题**：`04-team/00-团队总览.md` → 第 3 个问题（签名机制）直接来自 Q3

---

> **最后更新**：2026-06-04 10:30（Hermes）
