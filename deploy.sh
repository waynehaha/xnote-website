#!/bin/bash

# XNote 官网部署脚本
# 用于快速部署到 GitHub Pages

echo "🚀 XNote 官网部署脚本"
echo "===================="
echo ""

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误：请在 xnote-website 目录下运行此脚本"
    exit 1
fi

# 检查 Git 是否已初始化
if [ ! -d ".git" ]; then
    echo "📦 初始化 Git 仓库..."
    git init
    echo "✅ Git 仓库初始化完成"
    echo ""
fi

# 添加所有文件
echo "📝 添加文件到 Git..."
git add .

# 提交
echo "💾 提交更改..."
read -p "请输入提交信息（默认：Update website）: " commit_msg
commit_msg=${commit_msg:-"Update website"}
git commit -m "$commit_msg"
echo "✅ 提交完成"
echo ""

# 检查是否已添加远程仓库
if ! git remote | grep -q "origin"; then
    echo "🔗 添加远程仓库..."
    read -p "请输入 GitHub 仓库 URL: " repo_url
    git remote add origin "$repo_url"
    echo "✅ 远程仓库添加完成"
    echo ""
fi

# 推送到 GitHub
echo "⬆️  推送到 GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 部署成功！"
    echo ""
    echo "📋 后续步骤："
    echo "1. 访问 GitHub 仓库设置"
    echo "2. 进入 Settings > Pages"
    echo "3. Source 选择 'main' 分支"
    echo "4. 等待 1-2 分钟部署完成"
    echo "5. 获取 GitHub Pages URL"
    echo ""
    echo "🌐 预计 URL：https://你的用户名.github.io/仓库名/"
else
    echo ""
    echo "❌ 推送失败，请检查："
    echo "1. GitHub 仓库是否已创建"
    echo "2. 是否有推送权限"
    echo "3. 网络连接是否正常"
fi
