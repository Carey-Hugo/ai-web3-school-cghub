# W2-04 · Agent Identity · Agent Profile 与能力声明

> **提交日期：** 2026-05-27（Day 10）
> **任务来源：** WCB AI×Web3 School · Week 2 · W2-04
> **方向：** Payment/Commerce × Agent Identity

---

## 一、什么是 Agent Profile

**一句话定义：**
Agent Profile 是 Agent 的「身份证 + 简历」——它用结构化格式声明这个 Agent 是谁、能做什么、不能做什么、怎么被调用、以及凭什么被信任。

**为什么需要它：**

| 维度 | 没有 Profile | 有 Profile |
|------|-------------|-------------|
| 安全性 | Agent 不知道自己不该做什么 | 边界清晰，超限操作被拒绝 |
| 互操作性 | 其他 Agent / 系统不知道它能干什么 | 能力清单明确，可对接协作 |
| 信任建立 | 对方无法判断是否可信 | 信任模型透明，可验证 |
| 治理审计 | 操作无记录 | 操作有据可查 |

---

## 二、Agent Profile 的核心组成部分

一个完整的 Profile 包含 5 个模块：

```
1. 身份标识（Who）        → 名字、版本、归属
2. 能力声明（What）       → 能做什么
3. 边界限制（Constraints）→ 不能做什么
4. 调用方式（How）        → 接口协议
5. 信任根（Trust Model）  → 为什么被信任
```

---

## 三、CGHub Contribution Agent Profile（草图 v0.1）

```yaml
name: CGHub-Contribution-Agent
version: 0.1
owner: 创客星球 DAO (0x...5678)

description: |
  记录合伙人贡献、验证时间戳、生成收益分配建议的链上 Agent。
  核心职责：将「贡献行为」转化为「链上贡献记录」，再转化为「收益分配依据」。

capabilities:
  # 核心能力
  - 记录贡献事件
    - 类型：内容创作(C)、代码开发(T)、社区活动(A)、治理参与(G)
    - 来源：链上交易 + 人工确认 + 自动触发
  - 验证时间戳
    - 读取链上区块高度，确贡献时间不可篡改
  - 生成 x402 支付证明
    - 解锁收益分配时提供可验证的支付证明
  - 查询合伙人贡献分
    - read-only 查询某合伙人当前累计贡献积分
  - 生成周贡献报告
    - 汇总本周贡献事件，输出结构化摘要

constraints:
  # 硬性边界（不可突破）
  - 不能删除任何贡献记录
  - 不能修改已上链记录的内容
  - 单次收益分配建议 ≤ 预算池 3%
  - 不能代表 DAO 签署外部法律文件
  - 不能在没有治理投票的情况下激活新功能
  
  # 软性限制（可申请解锁）
  - 日贡献记录上限 50 条（防刷分）
  - 月收益分配上限 1000 USDC 等值

interfaces:
  # 优先接口
  - MCP Protocol
    - 描述：机器与机器之间的标准化调用
    - 用途：其他 Agent 调用 CGHub Agent
  - REST API
    - 描述：HTTP 接口，供前端调用
    - 用途：用户查询自己的贡献分
  - 自然语言对话
    - 描述：用户直接对话
    - 用途：「我的贡献分是多少？」

trust_model:
  # 谁可以部署
  - 部署者须持有 DAO Governance Token（NFT 验证）
  
  # 写操作门槛
  - 所有写操作需要 2/3 多签确认（3/5 治理成员）
  
  # 透明度
  - 操作日志同步到链上，任何人可查
  - Profile 版本历史链上可追溯

dependencies:
  # 依赖的外部服务
  - Cobo Agentic Wallet (CAW)：链上支付执行
  - x402 Protocol：支付证明验证
  - Smart Contract：贡献记录存储 + 收益分配执行
  - Chainlink Oracle：外部真实世界数据触发（如线下活动）
```

---

## 四、Profile 生命周期管理

```
草稿（Draft）→ 评审（Review）→ 治理投票（Governance Vote）→ 激活（Active）
     ↓              ↓                    ↓                      ↓
  Agent 开发中   DAO 成员审阅      投票通过后上链        正式运行
                                                   ↓
                                              变更需重新投票
```

---

## 五、与 CGHub 整体架构的关系

```
用户贡献行为
    ↓
CGHub Agent（记录）→ Profile 验证能力边界
    ↓
x402 支付证明 → 时间戳不可篡改
    ↓
Smart Contract → 收益分配执行（Session Key 限额内）
    ↓
Governance 规则 → 监督 + 争议裁决
    ↓
贡献记录 → 链上可查 → 合伙人信任
```

---

## 六、待深化事项

- [ ] Profile 中的「治理投票」具体流程如何实现（链上投票合约）
- [ ] MCP Protocol 的具体调用格式和数据结构
- [ ] 与 CAW 的 SDK 对接方式
- [ ] Profile 升级的版本管理策略

---

## 七、一句话总结

> **Agent Profile = 身份 + 能力清单 + 边界 + 接口 + 信任机制。它让 Agent 从「能力不明」变成「边界清晰、可验证、可协作」。**

---

> **Tag：** #AI×Web3School #创客星球 #CGHub #W2-04 #Agent-Profile
> **关联：** W2-02（支付流程）、W2-03（x402闭环）、W2-05（权限策略）