# XNote 官网项目 - AI 协作指南

## 项目概述
这是 XNote 浏览器扩展的官方网站，支持 **15 种语言**的国际化展示。

**关键文件:**
- `index.html` - 主页面，包含产品介绍、定价、FAQ
- `activate.html` - 购买成功后的激活引导页
- `js/translations.js` - 所有 15 种语言的翻译文件
- `js/i18n.umd.js` - 多语言切换逻辑

**支持的语言 (15种):**
核心: en, zh-CN, zh-TW
亚洲: ja, ko, vi, th, id, ms
欧洲: fr, de, es, it, pt, nl

---

## ⚠️ 重要规则：多语言修改工作流

### 核心原则：翻译优先 (Translation-First Principle)

**永远按照以下顺序操作，严禁跳过任何步骤:**

#### 步骤 1: 确定修改范围
```
修改前必须明确:
- 要修改哪些翻译键? (如 pricing.pro.price)
- 涉及哪些语言? (默认: 所有 15 种)
- 是修改值还是新增键?
```

#### 步骤 2: 批量修改 translations.js 的所有语言

**⚠️ 这是最容易出错的地方!**

**正确做法:**
```javascript
// 1. 使用编辑器的"查找替换"功能
// 2. 在 pricing.pro 块内查找要修改的字段
// 3. 逐个语言检查并替换

// 示例: 修改价格
// 查找: 'price': '$4.50',
// 替换为: 'price': '$1',
// 确认替换了 15 处 (所有语言)
```

**批量修改清单:**
- [ ] en (英语)
- [ ] zh-CN (简体中文)
- [ ] zh-TW (繁体中文)
- [ ] ja (日语)
- [ ] ko (韩语)
- [ ] vi (越南语)
- [ ] th (泰语)
- [ ] id (印尼语)
- [ ] ms (马来语)
- [ ] fr (法语)
- [ ] de (德语)
- [ ] es (西班牙语)
- [ ] it (意大利语)
- [ ] pt (葡萄牙语)
- [ ] nl (荷兰语)

**常见错误:**
- ❌ 只改了 en 和 zh-CN，忘记其他 13 种语言
- ❌ 先改 HTML 后备文本，产生"已经改好"的错觉
- ❌ 使用简体中文测试，看到后备文本就以为完成了

#### 步骤 3: 同步更新 HTML 后备文本

**后备文本规则:**
```html
<!-- ✓ 推荐: 使用英文作为后备文本 -->
<span data-i18n="pricing.pro.price">$1</span>
<span data-i18n="pricing.pro.period">/first month</span>

<!-- ✗ 避免: 使用中文作为后备文本 -->
<span data-i18n="pricing.pro.price">$1</span>
<span data-i18n="pricing.pro.period">/首月</span>  <!-- 容易与简体中文翻译混淆 -->
```

**为什么使用英文?**
- 避免与简体中文翻译混淆
- 当翻译加载失败时，英文是国际通用语言
- 测试时能明确区分"后备文本"和"中文翻译"

#### 步骤 4: 验证所有语言

**手动验证 (最少检查 5 种语言):**
```
1. en (英语)
2. zh-CN (简体中文)
3. ja (日语) - 代表亚洲语言
4. fr (法语) - 代表欧洲语言
5. nl (荷兰语) - 最后一种语言
```

**自动验证 (推荐):**
```bash
# 创建检查脚本后运行
npm run check-i18n
```

#### 步骤 5: 提交前检查

**Git 提交清单:**
```bash
# 1. 查看修改
git diff js/translations.js

# 2. 确认所有 15 种语言都已修改
# 应该看到类似 "+26, -26" 的改动 (每种语言改了同样的字段)

# 3. 如果只看到 "+2, -2"，说明只改了 2 种语言，立即停止!
```

---

## 常见场景处理指南

### 场景 1: 修改定价信息

**示例: 将 Pro 版价格从 $4.50 改为 $1**

```javascript
// Step 1: 在 translations.js 中搜索并替换
// 搜索: 'price': '$4.50',  (在 'pro': { 块内)
// 替换: 'price': '$1',
// 确认: 替换 15 次

// Step 2: 同步修改 HTML
<span class="amount" data-i18n="pricing.pro.price">$1</span>

// Step 3: 验证 5 种语言
// Step 4: Git diff 检查改动数量
```

### 场景 2: 新增翻译键

**示例: 添加 pricing.earlyBird**

```javascript
// Step 1: 在 translations.js 的 15 种语言中都添加
'pricing': {
  'title': '...',
  'subtitle': '...',
  'earlyBird': 'Early Bird Price',  // ← 新增
  ...
}

// Step 2: 为每种语言提供对应翻译
en: 'Early Bird Price'
zh-CN: '早鸟价格'
zh-TW: '早鳥價格'
ja: 'アーリーバード価格'
ko: '얼리버드 가격'
... (其他 10 种语言)

// Step 3: 在 HTML 中使用
<p data-i18n="pricing.earlyBird">Early Bird Price</p>

// Step 4: 验证
npm run check-i18n
```

### 场景 3: 修改功能描述

**示例: 更新云同步功能描述**

```javascript
// 涉及字段: pricing.pro.feature3
// 涉及文件: js/translations.js (15 种语言), index.html

// Step 1: 批量修改 translations.js
'feature3': 'Cloud sync'  → 'feature3': 'WebDAV Cloud Sync (Coming Soon)'

// Step 2: 为每种语言提供翻译
en: 'WebDAV Cloud Sync (Coming Soon)'
zh-CN: 'WebDAV 云同步（即将推出）'
zh-TW: 'WebDAV 雲端同步（即將推出）'
ja: 'WebDAV クラウド同期（近日公開）'
... (其他 11 种语言)

// Step 3: 同步 HTML
<span data-i18n="pricing.pro.feature3">WebDAV Cloud Sync (Coming Soon)</span>
```

---

## 专有名词翻译规则

**保持不翻译的词 (专有名词):**
- 产品名称: **XNote**, **Pro**, **Premium**, **Lifetime**
- 平台名称: **X**, **Twitter**, **YouTube**, **Instagram**
- 技术术语: **API**, **JSON**, **WebDAV**, **OAuth**

**示例:**
```javascript
// ✓ 正确
zh-CN: 'XNote Pro 版为 X/Twitter 用户添加备注'
ja: 'XNote ProでX/Twitterユーザーにメモを追加'

// ✗ 错误
zh-CN: '笔记专业版为推特用户添加备注'  // 翻译了品牌名和平台名
```

---

## 翻译质量标准

### 货币符号位置

不同语言的货币格式不同:

```javascript
// 英语系、亚洲语言: $在前
en: '$1'
zh-CN: '$1'
ja: '$1'
ko: '$1'

// 法语、德语、西班牙语等: 数字在前，空格，$在后
fr: '1 $'
de: '1 $'
es: '1 $'

// 葡萄牙语、荷兰语: $ 在前，空格，数字
pt: '$ 1'
nl: '$ 1'
```

### 小数点和千位分隔符

```javascript
// 英语: 使用点作为小数点
en: '$4.50'

// 欧洲大陆语言: 使用逗号作为小数点
fr: '4,50 $'
de: '4,50 $'
es: '4,50 $'
```

---

## Git 提交规范 (针对翻译修改)

### 提交信息模板

```
[功能描述]。[详细改动];[影响的语言]。

示例:
修正13种语言Pro版定价显示。将繁体中文、日语、韩语、越南语、泰语、印尼语、马来语、法语、德语、西班牙语、意大利语、葡萄牙语、荷兰语的Pro版价格从$4.50改为$1,周期从"月"改为对应语言的"首月"翻译;所有15种语言的Pro版定价现已与英文和简体中文保持一致。
```

### 提交前自检

```bash
# 1. 查看改动统计
git diff --stat

# 期望看到:
# js/translations.js | 26 +++++++++++++-------------
#                      ↑
#                      如果是修改现有值，应该是类似的 +/- 对称数字
#                      如果是新增键，应该是 +30 (15种语言 * 2行)

# 2. 查看具体改动
git diff js/translations.js | grep "^+" | grep "price"

# 期望看到 15 行类似的改动:
# +'price': '$1',
# +'price': '$1',
# +'price': '1 $',
# ... (共 15 行)

# 3. 如果只看到 2-3 行，说明遗漏了其他语言，立即停止提交!
```

---

## 常见错误案例 (请避免)

### 错误案例 1: 只改了中英文

```javascript
// ❌ 错误: 只改了 en 和 zh-CN
'pro': {
  'price': '$1',  // en ✓
  ...
}

'pro': {
  'price': '$1',  // zh-CN ✓
  ...
}

'pro': {
  'price': '$4.50',  // ja ✗ 遗漏!
  ...
}
// ... 其他 12 种语言都遗漏了
```

**后果:**
- 切换到日语、韩语等语言时，显示旧的价格
- 用户会看到不一致的信息
- 损害品牌可信度

### 错误案例 2: 先改 HTML，忘记改翻译

```html
<!-- ❌ 错误流程 -->
<!-- Step 1: 直接改了 HTML -->
<span data-i18n="pricing.pro.price">$1</span>

<!-- Step 2: 用简体中文测试 -->
<!-- 看到显示 "$1"，以为完成了 -->

<!-- Step 3: 提交 -->
<!-- 但实际上 translations.js 中其他语言都没改! -->
```

**后果:**
- 简体中文用户看到的是 HTML 后备文本 "$1"
- 其他语言用户看到的是 translations.js 中的旧值 "$4.50"
- 导致价格不一致

### 错误案例 3: 翻译了专有名词

```javascript
// ❌ 错误
ja: 'ツイッターユーザーにメモを追加'  // 把 Twitter 翻译成了片假名

// ✓ 正确
ja: 'X/Twitterユーザーにメモを追加'  // 保持 Twitter 原文
```

---

## 快速检查命令

### 检查翻译键完整性

```bash
# 检查所有语言是否有相同的翻译键数量
node -e "
const t = require('./js/translations.js');
const langs = Object.keys(t);
const counts = langs.map(lang => ({
  lang,
  keys: JSON.stringify(t[lang]).match(/\"[^\"]+\":/g).length
}));
console.table(counts);
"
```

**期望输出:**
```
┌─────────┬──────┬──────┐
│ (index) │ lang │ keys │
├─────────┼──────┼──────┤
│    0    │ 'en' │  94  │
│    1    │'zh-CN'│  94  │
│    2    │'zh-TW'│  94  │
│    3    │ 'ja' │  94  │  ← 所有语言的键数量应该相同
│    4    │ 'ko' │  94  │
│   ...   │ ...  │  ... │
└─────────┴──────┴──────┘
```

**如果看到不一致:**
```
│    2    │'zh-TW'│  92  │  ← 少了 2 个键
│    3    │ 'ja' │  92  │  ← 少了 2 个键
```
→ 说明这些语言缺少翻译键，需要补全!

### 检查特定字段的值

```bash
# 检查所有语言的 Pro 版价格
node -e "
const t = require('./js/translations.js');
Object.keys(t).forEach(lang => {
  console.log(lang, ':', t[lang].pricing.pro.price);
});
"
```

**期望输出 (价格应该一致):**
```
en : $1
zh-CN : $1
zh-TW : $1
ja : $1
ko : $1
... (所有都是 $1 或 1 $ 或 $ 1)
```

**如果看到不一致:**
```
en : $1
zh-CN : $1
zh-TW : $4.50  ← 不一致!
ja : $4.50     ← 不一致!
```
→ 说明这些语言的价格没有更新!

---

## AI 助手处理此项目时的要求

当 AI 助手需要修改涉及多语言的内容时:

1. **强制阻断 (Hard Stop)**:
   - 在修改任何翻译相关内容前，必须先列出完整的修改计划
   - 明确列出所有 15 种语言的修改清单
   - 等待用户确认后才能执行

2. **批量操作原则**:
   - 使用 Edit 工具的 `replace_all: true` 参数批量替换
   - 或者逐个语言使用 Edit 工具，确保不遗漏

3. **自我验证**:
   - 每次修改后，必须运行检查命令验证
   - 在提交信息中明确说明修改了哪些语言

4. **报告格式**:
   ```
   ✓ 已修改 15 种语言的 pricing.pro.price 字段
   ✓ 已验证所有语言的值一致
   ✓ 已同步 HTML 后备文本
   ✓ Git diff 显示 +30, -30 (符合预期)
   ```

---

## 项目特定的技术细节

### HTML 国际化实现方式

```javascript
// 1. 页面加载时，i18n.umd.js 会:
//    - 检测浏览器语言或用户选择的语言
//    - 从 translations.js 加载对应语言的翻译
//    - 查找所有带 data-i18n 属性的元素
//    - 替换元素内容

// 2. data-i18n 属性的值是翻译键的路径
<span data-i18n="pricing.pro.price">$1</span>
//                ↓
//    translations[currentLang].pricing.pro.price
```

### 翻译文件结构

```javascript
const translations = {
  'en': {
    'page': { ... },
    'nav': { ... },
    'hero': { ... },
    'features': { ... },
    'pricing': {
      'title': '...',
      'subtitle': '...',
      'earlyBird': '...',  // 早鸟标签
      'free': { ... },
      'lifetime': { ... },
      'pro': {
        'name': '...',
        'price': '...',      // 价格
        'period': '...',     // 周期
        'renewal': '...',    // 续费价格
        'feature1': '...',
        ...
      }
    },
    'faq': { ... },
    'footer': { ... },
    'activate': { ... }
  },
  // ... 其他 14 种语言
};
```

### 关键定价字段说明

```javascript
'pricing': {
  'earlyBird': '早鸟价格',        // 早鸟价格标签 (2026-01 新增)

  'lifetime': {
    'price': '$9.9',            // 终身版价格
    'period': '/永久',          // 一次性购买
  },

  'pro': {
    'price': '$1',              // 首月优惠价
    'period': '/首月',          // 首月标识
    'renewal': '$1.99 /次月起', // 续费价格 (2026-01 新增)
  }
}
```

---

## 最后的提醒

**记住: 翻译是 15 倍的工作量!**

- 修改 1 个字段 = 修改 15 种语言
- 新增 1 个键 = 为 15 种语言提供翻译
- 测试 1 个功能 = 至少验证 5 种语言

**慢就是快，严谨就是效率。**

宁可多花 5 分钟检查，也不要事后花 1 小时修复。
