# XNote 官网

XNote 的官方网站，提供产品介绍、功能说明、定价信息等。

## 🌐 在线访问

- 官网地址：[待部署]
- Chrome 插件：[待发布]

## 📁 项目结构

```
xnote-website/
├── index.html          # 首页
├── privacy.html        # 隐私政策
├── terms.html          # 服务条款
├── css/                # 样式文件
│   ├── reset.css
│   ├── variables.css
│   ├── common.css
│   └── home.css
├── js/                 # JavaScript 文件
│   ├── i18n.umd.js     # 国际化库
│   ├── translations.js # 翻译数据
│   ├── common.js       # 通用功能
│   └── home.js         # 首页功能
├── images/             # 图片资源
├── favicon.ico         # 网站图标
├── robots.txt          # 搜索引擎爬虫规则
├── sitemap.xml         # 网站地图
└── deploy.sh           # 部署脚本

```

## ✨ 功能特性

- 📱 响应式设计，支持移动端和桌面端
- 🌍 多语言支持（英语、简体中文、繁体中文）
- 🎨 现代化 UI 设计
- ⚡ 纯静态网站，加载速度快
- 🔍 SEO 优化

## 🚀 本地开发

### 1. 克隆仓库

```bash
git clone https://github.com/your-username/xnote-website.git
cd xnote-website
```

### 2. 启动本地服务器

使用 Python：
```bash
python3 -m http.server 8000
```

或使用 Node.js：
```bash
npx http-server -p 8000
```

### 3. 访问网站

打开浏览器访问：http://localhost:8000

## 🌍 多语言支持

网站支持三种语言：
- 🇺🇸 English
- 🇨🇳 简体中文
- 🇹🇼 繁體中文

语言切换功能：
- 自动检测浏览器语言
- 手动切换语言
- 语言选择持久化保存

## 📦 部署

### GitHub Pages

1. 推送代码到 GitHub
2. 在仓库设置中启用 GitHub Pages
3. 选择 `main` 分支作为源
4. 访问 `https://your-username.github.io/xnote-website/`

### 自定义域名

1. 在仓库根目录创建 `CNAME` 文件
2. 写入你的域名（如 `xnote.example.com`）
3. 在域名提供商处配置 DNS 记录

### 使用部署脚本

```bash
chmod +x deploy.sh
./deploy.sh
```

## 🛠️ 技术栈

- HTML5
- CSS3（CSS Variables）
- Vanilla JavaScript（无框架）
- 国际化工具包（自研 UMD 版本）

## 📝 开发规范

### 代码风格

- 使用中文注释
- 变量名使用驼峰命名（camelCase）
- CSS 类名使用 kebab-case
- 保持代码简洁清晰

### 文件组织

- CSS 按功能模块分离
- JavaScript 按职责分离
- 图片统一放在 `images/` 目录

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

[待定]

## 📧 联系方式

- 邮箱：w736823064@gmail.com
- X (Twitter)：[@w736823064](https://x.com/w736823064)

---

**最后更新**：2024-12-17
