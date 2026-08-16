#!/usr/bin/env bash
# 把本机共享记忆 ~/memory 接入任意 coding agent 的全局配置文件（含 .zcode）。
# 用法：
#   bash add-memory-to-agent.sh <agent名> <目标配置文件>
# 例：
#   bash add-memory-to-agent.sh codebuddy ~/.codebuddy/CODEBUDDY.md
#   bash add-memory-to-agent.sh zcode     ~/.zcode/AGENTS.md
#   bash add-memory-to-agent.sh claude    ~/.claude/CLAUDE.md
#
# 逻辑：从已接入的参照 agent（opencode）抽取 <!-- shared-memory --> 块，
#       把其中的 <agent> 占位替换为目标 agent 名，追加到目标文件。
set -euo pipefail

AGENT_NAME="${1:?用法: $0 <agent名> <目标配置文件>}"
TARGET="${2:?用法: $0 <agent名> <目标配置文件>}"
MEMORY_DIR="$HOME/memory"
REF="$HOME/.config/opencode/AGENTS.md"   # 已验证的参照（含 shared-memory 块）

echo "==> agent=$AGENT_NAME  target=$TARGET"

echo "==> 检查 ~/memory 是否存在"
if [ ! -d "$MEMORY_DIR/.git" ]; then
  echo "ERROR: ~/memory 不是 git 仓库，请先在 Hermes 里初始化记忆系统。"
  exit 1
fi

echo "==> 读取参照 agent 的 shared-memory 块（opencode 为准）"
if [ ! -f "$REF" ]; then
  echo "ERROR: 找不到参照 $REF，请确认其他 agent 已接入。"
  exit 1
fi

BLOCK=$(awk '
  /<!-- shared-memory -->/ { f=1; next }
  f && /^<!--/ { f=0 }
  f { print }
' "$REF")

if [ -z "$BLOCK" ]; then
  echo "ERROR: 参照文件中未找到 <!-- shared-memory --> 块。"
  exit 1
fi

echo "==> 准备注入到 $TARGET"
mkdir -p "$(dirname "$TARGET")"
touch "$TARGET"

if grep -q "<!-- shared-memory -->" "$TARGET"; then
  echo "WARN: $TARGET 已含 shared-memory 块，跳过（如需重写请先手动删除该块）。"
  exit 0
fi

{
  echo ""
  echo "<!-- shared-memory -->"
  echo "$BLOCK" | sed "s/opencode/$AGENT_NAME/g"
} >> "$TARGET"

echo "==> 校验"
grep -q "~/memory" "$TARGET" && echo "OK: $AGENT_NAME 已接入 ~/memory" || echo "FAIL: 注入未生效"

echo "==> 写一条身份提交测试（仅本地，不推送）"
if git -C "$MEMORY_DIR" diff --cached --quiet 2>/dev/null && git -C "$MEMORY_DIR" diff --quiet 2>/dev/null; then
  echo "（无待提交改动，跳过）"
else
  git -C "$MEMORY_DIR" add -A
  git -C "$MEMORY_DIR" -c user.name="$AGENT_NAME" -c user.email="$AGENT_NAME@local" \
    commit -q -m "chore: $AGENT_NAME 接入共享记忆" \
    && echo "OK: 已在 ~/memory 留下 $AGENT_NAME 的提交记录"
fi

echo "DONE"
