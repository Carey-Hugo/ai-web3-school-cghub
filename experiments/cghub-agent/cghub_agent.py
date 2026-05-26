#!/usr/bin/env python3
"""
CGHub Contribution Agent - 概念验证 (Proof of Concept)
=====================================================

本脚本演示 W1-06 中设计的"受控 Web3 助手"的核心流程：
  1. 创客提交任务
  2. AI 追踪贡献行为
  3. 生成贡献报告
  4. 人工审批（模拟）
  5. 链上存证（模拟）

本版本为模拟演示，不调用真实 AI API。
"""

import json
from datetime import datetime
from dataclasses import dataclass, field, asdict
from typing import List, Optional

# ─────────────────────────────────────────────────────────────────────────────
# 数据模型
# ─────────────────────────────────────────────────────────────────────────────

@dataclass
class Contribution:
    """单次贡献记录"""
    contributor: str
    action: str
    description: str
    timestamp: str

@dataclass
class Task:
    """任务记录"""
    task_id: str
    name: str
    participants: List[str]
    contributions: List[Contribution] = field(default_factory=list)
    status: str = "in_progress"
    start_time: str = ""

def log(msg):
    """带时间戳的日志输出"""
    now = datetime.now().strftime("%H:%M:%S")
    print(f"[{now}] {msg}")

def divider():
    print("─" * 60)

# ─────────────────────────────────────────────────────────────────────────────
# CGHub Contribution Agent 核心逻辑
# ─────────────────────────────────────────────────────────────────────────────

class CGHabContributionAgent:
    """
    CGHub 贡献追踪助手
    
    权限边界：
    ✅ AI 可执行：记录任务、追踪贡献、生成报告、发起提案
    ❌ AI 禁止：直接转账、修改分配比例、删除记录
    """
    
    def __init__(self):
        self.tasks = {}
        log("CGHub Contribution Agent 已初始化")
        log("⚠️  权限模式：受控（所有链上操作需多签审批）")
    
    def register_task(self, task_id: str, name: str, participants: List[str]) -> Task:
        """步骤 1：登记新任务"""
        task = Task(
            task_id=task_id,
            name=name,
            participants=participants,
            start_time=datetime.now().isoformat()
        )
        self.tasks[task_id] = task
        log(f"✅ 任务已登记：{name}")
        log(f"   参与人：{', '.join(participants)}")
        return task
    
    def track_contribution(self, task_id: str, contributor: str, action: str, description: str):
        """步骤 2：追踪贡献行为"""
        if task_id not in self.tasks:
            log(f"❌ 任务不存在：{task_id}")
            return
        
        contribution = Contribution(
            contributor=contributor,
            action=action,
            description=description,
            timestamp=datetime.now().isoformat()
        )
        self.tasks[task_id].contributions.append(contribution)
        log(f"📝 贡献记录：{contributor} - {action}")
        log(f"   {description}")
    
    def generate_report(self, task_id: str) -> dict:
        """步骤 3：AI 生成贡献报告"""
        if task_id not in self.tasks:
            return {"error": "任务不存在"}
        
        task = self.tasks[task_id]
        
        # 统计每个参与人的贡献次数
        contributor_count = {}
        for c in task.contributions:
            contributor_count[c.contributor] = contributor_count.get(c.contributor, 0) + 1
        
        total = sum(contributor_count.values()) if contributor_count else 1
        
        # 简单计算权重（按贡献次数）
        weights = {
            p: round(contributor_count.get(p, 0) / total * 100, 1)
            for p in task.participants
        }
        
        report = {
            "task_id": task_id,
            "task_name": task.name,
            "status": "completed",
            "completed_at": datetime.now().isoformat(),
            "contributor_weights": weights,
            "contribution_details": [asdict(c) for c in task.contributions],
            "proposed_distribution": [
                {"contributor": p, "weight": w, "note": "待人工审批"}
                for p, w in weights.items()
            ],
            "ai_note": "本报告由 AI 自动生成，需人工审批后方可上链存证"
        }
        
        return report
    
    def human_review(self, report: dict, approved: bool, feedback: str = "") -> dict:
        """步骤 4：人工审批"""
        log("")
        divider()
        log("📋 人工审批阶段")
        log(f"   任务：{report['task_name']}")
        log(f"   建议分配：{report['contributor_weights']}")
        
        if approved:
            report["status"] = "approved"
            report["review_note"] = feedback or "审批通过"
            log("✅ 审批通过")
            log(f"   备注：{feedback}")
        else:
            report["status"] = "rejected"
            report["review_feedback"] = feedback
            log("❌ 审批驳回")
            log(f"   原因：{feedback}")
        
        divider()
        return report
    
    def submit_to_chain(self, report: dict) -> dict:
        """步骤 5：链上存证（模拟）"""
        if report.get("status") != "approved":
            return {"error": "未经审批，无法上链"}
        
        # 模拟链上交易
        tx_hash = f"0x{'a' * 64}"
        block_num = 18_500_000
        
        result = {
            "tx_hash": tx_hash,
            "block_number": block_num,
            "contract_address": "0x1dC966b692C45eCb0E3e96416d9C7f8057F74A1D",
            "event": "ContributionRecorded",
            "data": {
                "task_id": report["task_id"],
                "contributors": list(report["contributor_weights"].keys()),
                "weights": list(report["contributor_weights"].values())
            },
            "explorer_url": f"https://sepolia.etherscan.io/tx/{tx_hash}",
            "status": "confirmed"
        }
        
        log("")
        log("🔗 链上存证已提交")
        log(f"   交易哈希：{tx_hash}")
        log(f"   区块高度：{block_num}")
        log(f"   事件：ContributionRecorded")
        
        return result


# ─────────────────────────────────────────────────────────────────────────────
# 演示流程
# ─────────────────────────────────────────────────────────────────────────────

def run_demo():
    print("")
    print("╔══════════════════════════════════════════════════════════╗")
    print("║      CGHub Contribution Agent - 概念验证演示            ║")
    print("╚══════════════════════════════════════════════════════════╝")
    print("")
    
    # 初始化 Agent
    agent = CGHabContributionAgent()
    
    # ─── 步骤 1：登记任务 ───
    print("\n【步骤 1】登记任务")
    divider()
    agent.register_task(
        task_id="task-001",
        name="CGHub Logo 设计",
        participants=["创客 A", "创客 B"]
    )
    
    # ─── 步骤 2：追踪贡献 ───
    print("\n【步骤 2】追踪贡献")
    divider()
    agent.track_contribution("task-001", "创客 A", "提交设计稿", "提交 CGHub logo 初稿 v1")
    agent.track_contribution("task-001", "创客 B", "反馈建议", "提供文字反馈：建议简化图形")
    agent.track_contribution("task-001", "创客 A", "修改设计", "根据反馈修改 v2")
    agent.track_contribution("task-001", "创客 A", "修改设计", "根据反馈修改 v3")
    agent.track_contribution("task-001", "创客 B", "反馈建议", "确认 v3 已达标")
    
    # ─── 步骤 3：生成报告 ───
    print("\n【步骤 3】生成贡献报告")
    divider()
    report = agent.generate_report("task-001")
    print(json.dumps(report, ensure_ascii=False, indent=2))
    
    # ─── 步骤 4：人工审批 ───
    print("\n【步骤 4】人工审批")
    report = agent.human_review(report, approved=True, feedback="同意 AI 建议的分配比例")
    
    # ─── 步骤 5：链上存证 ───
    print("\n【步骤 5】链上存证（需多签审批后执行）")
    divider()
    result = agent.submit_to_chain(report)
    print(json.dumps(result, ensure_ascii=False, indent=2))
    
    # ─── 总结 ───
    print("\n")
    print("╔══════════════════════════════════════════════════════════╗")
    print("║  演示完成 - 核心要点                                    ║")
    print("╠══════════════════════════════════════════════════════════╣")
    print("║                                                          ║")
    print("║  ✅ AI 执行：任务登记、贡献追踪、报告生成               ║")
    print("║  ✅ 人工审批：分配比例确认                              ║")
    print("║  ✅ 链上存证：多签后写入合约（模拟）                    ║")
    print("║                                                          ║")
    print("║  ❌ AI 禁止：直接转账、修改分配比例                    ║")
    print("║                                                          ║")
    print("╚══════════════════════════════════════════════════════════╝")
    print("")
    print(f"📂 完整报告：CGHub-WCB-Submissions/W1-06-受控Web3助手workflow.md")
    print(f"🔗 GitHub：https://github.com/Carey-Hugo/ai-web3-school-cghub")


if __name__ == "__main__":
    run_demo()