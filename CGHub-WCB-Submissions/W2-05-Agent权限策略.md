# W2-05 · Wallet/Permission · Agent 链上动作权限策略

> **提交日期：** 2026-05-27（Day 10）
> **任务来源：** WCB AI×Web3 School · Week 2 · W2-05
> **方向：** Payment/Commerce × Agent Identity

---

## 一、为什么 Agent 需要权限控制

**核心矛盾：**
- 用户的私钥不能直接交给 Agent（风险无限大）
- 但 Agent 又需要「有钱」才能做事（否则无法完成链上操作）

**解决思路：给 Agent 一张「限定额度信用卡」，而不是「无限额储蓄卡」**

---

## 二、权限策略的三个层次

### 第一层：Session Key（用户授权层）

**定义：** 用户签署的「限时门票」，包含操作范围、额度、有效期。

**典型数据结构：**

```json
{
  "allowedTokens": ["USDC", "ETH"],
  "maxAmount": 100,
  "validFrom": 1716803200,
  "validUntil": 1716889600,
  "allowedContracts": [
    "0xdAC17F958D2ee523a2206206994597C13D831ec7",  // USDT 合约
    "0x...CGHub合约"
  ],
  "maxGas": 0.01
}
```

**关键点：**
- 用户签名 ≠ 直接转账
- Agent 用票去调用合约，合约验证票是否有效再执行
- 票过期或超额自动失效

---

### 第二层：Smart Contract 执行层（自动执行层）

**定义：** Session Key 的权限写入 Smart Account，合约代码自动执行边界。

**执行逻辑：**

```
Agent 调用转 USDC 时，合约检查：
  1. msg.value ≤ maxAmount？      ✓ → 继续
  2. now ≤ validUntil？           ✓ → 继续
  3. target ∈ allowedContracts？ ✓ → 执行转账
                                    ✗ → revert（拒绝）
```

**关键点：**
- 不是 Agent 自己判断，是合约判断
- Agent 无法绕过合约逻辑
- 拒绝是即时的（毫秒级），无需人工介入

---

### 第三层：Governance 监督层（人治层）

**定义：** 当规则无法预料新情况时，DAO 人工治理介入。

**典型场景：**

```
情况：Agent 建议分配 5% 预算，超出 Session Key 的 3% 限制
→ 合约自动拒绝
→ 但 DAO 认为这条限制已过时
→ 发起治理投票（链上多签）
→ 投票通过 → 修改 Policy（规则写入合约）
→ 新规则生效，Agent 重新提交
```

**关键点：**
- 机器执行规则，人决定规则
- 规则变更需要多签门槛（防止单点篡改）
- 变更记录链上可查（透明、可审计）

---

## 三、三个层次的对比

| 层次 | 谁决定 | 执行方式 | 反应速度 | 可干预性 |
|------|--------|----------|----------|----------|
| Session Key | 用户（签署） | 签名授权 | 即时 | 高（用户随时撤销） |
| Smart Contract | 代码（合约） | 自动执行 | 毫秒级 | 低（规则既定） |
| Governance | DAO 投票 | 规则变更 | 天/周级 | 高（可改规则） |

---

## 四、Session Key 的生命周期

```
用户签署 Session Key 授权
    ↓
Session Key 写入 Smart Account（链上部署）
    ↓
Agent 持票发起链上请求
    ↓
合约验证：额度✓ 时间✓ 合约地址✓ → 执行
    ↓
任一条件不满足 → revert（自动拒绝）
    ↓
时间到期或额度用尽 → Session Key 失效
    ↓
如需继续 → 用户重新签署新的 Session Key
```

---

## 五、CGHub 场景下的权限策略设计

**场景：** CGHub Contribution Agent 要给某合伙人分配收益

**Session Key 授权范围：**

```yaml
allowedTokens: [USDC]
maxAmount: 50            # 单次最多 $50（预算池 3% 以内）
validUntil: 1716976000   # 24 小时后过期
allowedContracts:
  - 0x...CGHub收益分配合约
  - 0x...USDC合约
maxGas: 0.005

constraints:
  - 只能给「已登记合伙人」分配（合约校验白名单）
  - 单日操作不超过 10 次（防止刷分）
  - 超过 $200 的操作需 Governance 多签（Policy Override）
```

**执行流程：**

```
Agent 发起分配请求（$50 USDC）
  → 合约检查：额度✓ 合伙人白名单✓ 时间✓
  → 执行分配，写入链上贡献记录
  → 生成 x402 支付证明
  → 通知合伙人

Agent 发起超额分配请求（$200 USDC）
  → 合约检查：额度✗
  → revert（拒绝）
  → 通知 DAO 需要 Governance 多签审批
```

---

## 六、Profile（说）vs Policy（做）的整合

```
W2-04 Profile：声明「我能做收益分配，限额 $50 以内」
W2-05 Policy：执行「实际只能操作 $50，超出被合约拒绝」

Profile（说）+ Policy（做）= 可信 Agent
```

两者必须一致：
- Profile 写的边界 ≥ Policy 的实际限制（否则 Profile 失信）
- Policy 比 Profile 更严格是正常的（安全余量）

---

## 七、一句话总结

> **Session Key 定义「能做什么」，Smart Contract 执行「做到边界」，Governance 决定「规则本身是否正确」。三层合一，构成 Agent 的完整权限体系。**

---

## 八、待深化事项

- [ ] Session Key 的具体签名格式（EIP-712 结构化签名）
- [ ] Smart Contract 的权限校验代码实现（Solidity 示例）
- [ ] Governance 多签的门限设置策略（2/3 还是其他）
- [ ] Session Key 被盗时的撤销机制（紧急冻结）

---

> **Tag：** #AI×Web3School #创客星球 #CGHub #W2-05 #Agent-权限策略
> **关联：** W2-03（x402闭环）、W2-04（Agent Profile）、W2-07（Governance）