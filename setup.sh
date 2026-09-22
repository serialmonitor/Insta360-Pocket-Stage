#!/usr/bin/env bash
# CHRONO-MORPH ULTIMATE — 一键初始化脚本
# 用法: chmod +x setup.sh && ./setup.sh

set -e
echo "🚀 CHRONO-MORPH ULTIMATE — Setup"
echo "================================="

cd "$(dirname "$0")"

# 1. 安装依赖
echo ""
echo "📦 [1/4] Installing dependencies..."
npm install

# 2. 检查测试视频
echo ""
echo "🎬 [2/4] Checking test video..."
mkdir -p public/samples
if [ -f "public/samples/test-dance.mp4" ]; then
  echo "   ✅ Found public/samples/test-dance.mp4"
else
  echo "   ⚠️  Test video missing."
  echo "   Please copy any dance/motion video to public/samples/test-dance.mp4"
fi

# 3. 生成 ASCII Atlas
echo ""
echo "🔤 [3/4] Generating ASCII atlas..."
node scripts/generate-ascii-atlas.mjs

# 4. 验证构建
echo ""
echo "🔨 [4/4] Verifying build..."
npm run build

echo ""
echo "================================="
echo "✅ Setup complete!"
echo ""
echo "Run:  npm run dev"
echo "Open: http://localhost:3000"
echo ""
