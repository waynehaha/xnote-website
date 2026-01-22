/**
 * XNote 官网翻译数据
 * 已实现语言：15种
 * - 核心语言：英语 (en)、简体中文 (zh-CN)、繁体中文 (zh-TW)
 * - 亚洲语言：日语 (ja)、韩语 (ko)、越南语 (vi)、泰语 (th)、印尼语 (id)、马来语 (ms)
 * - 欧洲语言：法语 (fr)、德语 (de)、西班牙语 (es)、意大利语 (it)、葡萄牙语 (pt)、荷兰语 (nl)
 */

const translations = {
  // 英语
  'en': {
    // 页面 Meta
    'page': {
      'title': 'XNote - Twitter User Notes Tool',
      'description': 'Add notes to Twitter users and better manage your social relationships'
    },
    
    // 导航栏
    'nav': {
      'features': 'Features',
      'pricing': 'Pricing',
      'faq': 'FAQ'
    },
    
    // Hero 区域
    'hero': {
      'badge': 'Available Now',
      'title': 'XNote',
      'tagline': 'Add notes to Twitter users and better manage your social relationships',
      'description': 'Easily add personal notes, tags, and groups to any Twitter user, keeping your social network organized.',
      'cta_install': 'Install to Chrome',
      'cta_learn': 'Learn More'
    },
    
    // 功能展示
    'features': {
      'title': 'Core Features',
      'subtitle': 'Powerful yet simple features to enhance your Twitter experience',
      'note': {
        'title': 'User Notes',
        'description': 'Add custom notes, aliases, or tags to any Twitter user, never forget important people'
      },
      'tag': {
        'title': 'Tag Groups',
        'description': 'Create groups and use colors to mark different types of users, keeping your follow list organized'
      },
      'search': {
        'title': 'Quick Search',
        'description': 'Find users quickly by note content, even if you don\'t remember their username'
      },
      'sync': {
        'title': 'Cloud Sync',
        'badge': 'Pro',
        'description': 'Sync data across devices via WebDAV, access your notes anytime, anywhere'
      }
    },
    
    // 定价对比
    'pricing': {
      'title': 'Choose Your Plan',
      'subtitle': 'Start with free version, upgrade to Pro anytime to unlock more features',
      'earlyBird': 'Early Bird Price',
      'free': {
        'name': 'Free',
        'price': '$0',
        'period': '/forever',
        'feature1': 'Up to 120 notes',
        'feature2': 'Unlimited groups',
        'feature3': 'Local storage',
        'feature4': 'Basic search',
        'feature5': 'Export 60 notes',
        'cta': 'Install Free'
      },
      'lifetime': {
        'name': 'Lifetime',
        'badge': 'Recommended',
        'price': '$9.9',
        'period': '/forever',
        'feature1': 'Unlimited notes',
        'feature2': 'Unlimited groups',
        'feature3': 'WebDAV Cloud Sync (Coming Soon)',
        'feature4': 'Advanced search',
        'feature5': 'Full import/export',
        'feature6': 'Batch operations',
        'cta': 'Buy Once',
        'note': 'One-time payment, use forever'
      },
      'pro': {
        'name': 'Pro',
        'price': '$1',
        'period': '/first month',
        'renewal': '$1.99 /month after',
        'feature1': 'Unlimited notes',
        'feature2': 'Unlimited groups',
        'feature3': 'WebDAV Cloud Sync (Coming Soon)',
        'feature4': 'Advanced search',
        'feature5': 'Full import/export',
        'feature6': 'Batch operations',
        'cta': 'Upgrade Now'
      }
    },
    
    // FAQ
    'faq': {
      'title': 'FAQ',
      'q1': {
        'question': 'How do I install XNote?',
        'answer': 'XNote is now available on the Chrome Web Store! Click the "Install Extension" button at the top of the page to install for free. If you have any questions, contact me via email tingwei@tingwei.site or X account @w736823064.'
      },
      'q2': {
        'question': 'What is the difference between Free and Pro versions?',
        'answer': 'Free version provides up to 120 notes and unlimited groups, suitable for most users. Pro version removes all limits and provides cloud sync, advanced search, batch operations, and other advanced features.'
      },
      'q3': {
        'question': 'Is my data safe?',
        'answer': 'Yes. Free version data is stored in your local browser, we cannot access it. Pro version uses WebDAV protocol for cloud sync, you can choose your trusted service provider (such as Nutstore, Nextcloud, etc.).'
      },
      'q4': {
        'question': 'Which browsers are supported?',
        'answer': 'Currently supports Chrome browser. We plan to support Firefox and other Chromium-based browsers (such as Edge, Brave, etc.) in the future.'
      },
      'q5': {
        'question': 'How to contact the developer?',
        'answer': 'You can contact me via email tingwei@tingwei.site or follow @w736823064 on X. I will reply to your questions and suggestions as soon as possible.'
      }
    },
    
    // Footer
    'footer': {
      'tagline': 'Add notes to Twitter users',
      'product': 'Product',
      'legal': 'Legal',
      'contact': 'Contact',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'email': 'Email',
      'copyright': '© 2025 XNote. All rights reserved.'
    },

    // Activate Page
    'activate': {
      'title': 'Purchase Successful!',
      'subtitle': 'Thank you for purchasing XNote Pro. Please follow the steps below to activate.',
      'step1': {
        'title': 'Get Your License Key',
        'desc1': 'Your License Key has been sent to the email used for payment.',
        'desc2': 'Please check your inbox, the sender is Creem.io.',
        'tip': '💡 If you haven\'t received the email, please check your spam folder, or click "View Order" on the Creem payment page.'
      },
      'step2': {
        'title': 'Activate Extension',
        'desc': 'Copy your License Key and follow these steps:',
        's1': 'Open Twitter/X website',
        's2': 'Click the XNote extension icon in your browser toolbar',
        's3': 'Go to the "Data" tab',
        's4': 'Enter your License Key at the top and click "Activate"'
      },
      'step3': {
        'title': 'Start Using',
        'desc': 'Once activated, you\'ll unlock all Pro features: unlimited notes, full import/export, and more.'
      },
      'cta': {
        'twitter': 'Open Twitter',
        'email': 'Check Email'
      },
      'contact': {
        'title': 'Need help? Contact us'
      }
    }
  },
  
  // 简体中文
  'zh-CN': {
    // 页面 Meta
    'page': {
      'title': 'XNote - Twitter 用户备注工具',
      'description': '为 Twitter 用户添加备注，更好地管理你的社交关系'
    },
    
    // 导航栏
    'nav': {
      'features': '功能',
      'pricing': '定价',
      'faq': 'FAQ'
    },
    
    // Hero 区域
    'hero': {
      'badge': '已上线',
      'title': 'XNote',
      'tagline': '为 Twitter 用户添加备注，更好地管理你的社交关系',
      'description': '轻松为任何 Twitter 用户添加个人备注、标签和分组，让你的社交网络井井有条。',
      'cta_install': '安装到 Chrome',
      'cta_learn': '了解更多'
    },
    
    // 功能展示
    'features': {
      'title': '核心功能',
      'subtitle': '强大而简单的功能，让你的 Twitter 体验更上一层楼',
      'note': {
        'title': '用户备注',
        'description': '为任意 Twitter 用户添加自定义备注、别名或标签，再也不会忘记重要的人'
      },
      'tag': {
        'title': '标签分组',
        'description': '创建分组，使用颜色标记不同类型的用户，让你的关注列表井然有序'
      },
      'search': {
        'title': '快速搜索',
        'description': '通过备注内容快速查找用户，即使记不住用户名也能轻松找到'
      },
      'sync': {
        'title': '云端同步',
        'badge': 'Pro',
        'description': '通过 WebDAV 实现多设备数据同步，随时随地访问你的备注'
      }
    },
    
    // 定价对比
    'pricing': {
      'title': '选择适合你的方案',
      'subtitle': '从免费版开始，随时升级到 Pro 版解锁更多功能',
      'earlyBird': '早鸟价格',
      'free': {
        'name': '免费版',
        'price': '$0',
        'period': '/永久',
        'feature1': '最多 120 条备注',
        'feature2': '无限分组',
        'feature3': '本地存储',
        'feature4': '基础搜索',
        'feature5': '导出 60 条',
        'cta': '免费安装'
      },
      'lifetime': {
        'name': '终身版',
        'badge': '推荐',
        'price': '$9.9',
        'period': '/永久',
        'feature1': '无限备注',
        'feature2': '无限分组',
        'feature3': 'WebDAV 云同步（即将推出）',
        'feature4': '高级搜索',
        'feature5': '完整导入导出',
        'feature6': '批量操作',
        'cta': '一次购买',
        'note': '永久使用，无需订阅'
      },
      'pro': {
        'name': 'Pro 版',
        'price': '$1',
        'period': '/首月',
        'renewal': '$1.99 /次月起',
        'feature1': '无限备注',
        'feature2': '无限分组',
        'feature3': 'WebDAV 云同步（即将推出）',
        'feature4': '高级搜索',
        'feature5': '完整导入导出',
        'feature6': '批量操作',
        'cta': '立即升级'
      }
    },
    
    // FAQ
    'faq': {
      'title': '常见问题',
      'q1': {
        'question': '如何安装 XNote？',
        'answer': 'XNote 已在 Chrome 应用商店上线！点击页面顶部的「安装插件」按钮即可免费安装。如有问题，可通过邮箱 tingwei@tingwei.site 或 X 账号 @w736823064 联系我。'
      },
      'q2': {
        'question': '免费版和 Pro 版有什么区别？',
        'answer': '免费版提供最多 120 条备注和无限分组功能，适合大多数用户。Pro 版解除所有限制，并提供云端同步、高级搜索、批量操作等高级功能。'
      },
      'q3': {
        'question': '我的数据安全吗？',
        'answer': '是的。免费版数据存储在您的本地浏览器中，我们无法访问。Pro 版使用 WebDAV 协议进行云端同步，您可以选择自己信任的服务提供商（如坚果云、Nextcloud 等）。'
      },
      'q4': {
        'question': '支持哪些浏览器？',
        'answer': '目前支持 Chrome 浏览器。我们计划在未来支持 Firefox 和其他基于 Chromium 的浏览器（如 Edge、Brave 等）。'
      },
      'q5': {
        'question': '如何联系开发者？',
        'answer': '您可以通过邮箱 tingwei@tingwei.site 联系我，或在 X 上关注 @w736823064。我会尽快回复您的问题和建议。'
      }
    },
    
    // Footer
    'footer': {
      'tagline': '为 Twitter 用户添加备注',
      'product': '产品',
      'legal': '法律',
      'contact': '联系',
      'privacy': '隐私政策',
      'terms': '服务条款',
      'email': '邮箱',
      'copyright': '© 2025 XNote. 保留所有权利。'
    },

    // Activate Page
    'activate': {
      'title': '购买成功！',
      'subtitle': '感谢您购买 XNote Pro，请按以下步骤激活',
      'step1': {
        'title': '获取 License Key',
        'desc1': '您的 License Key 已发送到付款时使用的邮箱。',
        'desc2': '请检查收件箱，发件人为 Creem.io。',
        'tip': '💡 如果没收到邮件，请检查垃圾邮件文件夹，或点击 Creem 支付页面的「查看订单」按钮。'
      },
      'step2': {
        'title': '激活扩展',
        'desc': '复制 License Key，按以下步骤激活：',
        's1': '打开 Twitter/X 网站',
        's2': '点击浏览器右上角的 XNote 扩展图标',
        's3': '进入「数据管理」标签页',
        's4': '在顶部输入 License Key，点击「激活」'
      },
      'step3': {
        'title': '开始使用',
        'desc': '激活成功后，您将解锁所有 Pro 功能：无限备注、完整导入导出等。'
      },
      'cta': {
        'twitter': '打开 Twitter',
        'email': '查看邮箱'
      },
      'contact': {
        'title': '遇到问题？联系我们'
      }
    }
  },
  
  // 繁体中文
  'zh-TW': {
    // 页面 Meta
    'page': {
      'title': 'XNote - Twitter 用戶備註工具',
      'description': '為 Twitter 用戶添加備註，更好地管理你的社交關係'
    },
    
    // 导航栏
    'nav': {
      'features': '功能',
      'pricing': '定價',
      'faq': 'FAQ'
    },
    
    // Hero 区域
    'hero': {
      'badge': '已上線',
      'title': 'XNote',
      'tagline': '為 Twitter 用戶添加備註，更好地管理你的社交關係',
      'description': '輕鬆為任何 Twitter 用戶添加個人備註、標籤和分組，讓你的社交網絡井井有條。',
      'cta_install': '安裝到 Chrome',
      'cta_learn': '了解更多'
    },
    
    // 功能展示
    'features': {
      'title': '核心功能',
      'subtitle': '強大而簡單的功能，讓你的 Twitter 體驗更上一層樓',
      'note': {
        'title': '用戶備註',
        'description': '為任意 Twitter 用戶添加自定義備註、別名或標籤，再也不會忘記重要的人'
      },
      'tag': {
        'title': '標籤分組',
        'description': '創建分組，使用顏色標記不同類型的用戶，讓你的關注列表井然有序'
      },
      'search': {
        'title': '快速搜索',
        'description': '通過備註內容快速查找用戶，即使記不住用戶名也能輕鬆找到'
      },
      'sync': {
        'title': '雲端同步',
        'badge': 'Pro',
        'description': '通過 WebDAV 實現多設備數據同步，隨時隨地訪問你的備註'
      }
    },
    
    // 定价对比
    'pricing': {
      'title': '選擇適合你的方案',
      'subtitle': '從免費版開始，隨時升級到 Pro 版解鎖更多功能',
      'earlyBird': '早鳥價格',
      'free': {
        'name': '免費版',
        'price': '$0',
        'period': '/永久',
        'feature1': '最多 120 條備註',
        'feature2': '無限分組',
        'feature3': '本地存儲',
        'feature4': '基礎搜索',
        'feature5': '導出 60 條',
        'cta': '免費安裝'
      },
      'lifetime': {
        'name': '終身版',
        'badge': '推薦',
        'price': '$9.9',
        'period': '/永久',
        'feature1': '無限備註',
        'feature2': '無限分組',
        'feature3': '雲端同步',
        'feature4': '高級搜索',
        'feature5': '完整導入導出',
        'feature6': '批量操作',
        'cta': '一次購買',
        'note': '永久使用，無需訂閱'
      },
      'pro': {
        'name': 'Pro 版',
        'price': '$1',
        'period': '/首月',
        'renewal': '$1.99 /次月起',
        'feature1': '無限備註',
        'feature2': '無限分組',
        'feature3': '雲端同步',
        'feature4': '高級搜索',
        'feature5': '完整導入導出',
        'feature6': '批量操作',
        'cta': '立即升級',
        'note': '年付 $29.99（節省 17%）'
      }
    },
    
    // FAQ
    'faq': {
      'title': '常見問題',
      'q1': {
        'question': '如何安裝 XNote？',
        'answer': 'XNote 已在 Chrome 應用商店上線！點擊頁面頂部的「安裝插件」按鈕即可免費安裝。如有問題，可通過郵箱 tingwei@tingwei.site 或 X 賬號 @w736823064 聯繫我。'
      },
      'q2': {
        'question': '免費版和 Pro 版有什麼區別？',
        'answer': '免費版提供最多 120 條備註和無限分組功能，適合大多數用戶。Pro 版解除所有限制，並提供雲端同步、高級搜索、批量操作等高級功能。'
      },
      'q3': {
        'question': '我的數據安全嗎？',
        'answer': '是的。免費版數據存儲在您的本地瀏覽器中，我們無法訪問。Pro 版使用 WebDAV 協議進行雲端同步，您可以選擇自己信任的服務提供商（如堅果雲、Nextcloud 等）。'
      },
      'q4': {
        'question': '支持哪些瀏覽器？',
        'answer': '目前支持 Chrome 瀏覽器。我們計劃在未來支持 Firefox 和其他基於 Chromium 的瀏覽器（如 Edge、Brave 等）。'
      },
      'q5': {
        'question': '如何聯繫開發者？',
        'answer': '您可以通過郵箱 tingwei@tingwei.site 聯繫我，或在 X 上關注 @w736823064。我會盡快回復您的問題和建議。'
      }
    },
    
    // Footer
    'footer': {
      'tagline': '為 Twitter 用戶添加備註',
      'product': '產品',
      'legal': '法律',
      'contact': '聯繫',
      'privacy': '隱私政策',
      'terms': '服務條款',
      'email': '郵箱',
      'copyright': '© 2025 XNote. 保留所有權利。'
    },

    // Activate Page
    'activate': {
      'title': '購買成功！',
      'subtitle': '感謝您購買 XNote Pro，請按以下步驟激活',
      'step1': {
        'title': '獲取 License Key',
        'desc1': '您的 License Key 已發送到付款時使用的郵箱。',
        'desc2': '請檢查收件箱，發件人為 Creem.io。',
        'tip': '💡 如果沒收到郵件，請檢查垃圾郵件文件夾，或點擊 Creem 支付頁面的「查看訂單」按鈕。'
      },
      'step2': {
        'title': '激活擴展',
        'desc': '複製 License Key，按以下步驟激活：',
        's1': '打開 Twitter/X 網站',
        's2': '點擊瀏覽器右上角的 XNote 擴展圖標',
        's3': '進入「數據管理」標籤頁',
        's4': '在頂部輸入 License Key，點擊「激活」'
      },
      'step3': {
        'title': '開始使用',
        'desc': '激活成功後，您將解鎖所有 Pro 功能：無限備註、完整導入導出等。'
      },
      'cta': {
        'twitter': '打開 Twitter',
        'email': '查看郵箱'
      },
      'contact': {
        'title': '遇到問題？聯繫我們'
      }
    }
  },

  // 日语
  'ja': {
    // 页面 Meta
    'page': {
      'title': 'XNote - Twitter ユーザーメモツール',
      'description': 'Twitter ユーザーにメモを追加して、ソーシャル関係をより良く管理しましょう'
    },

    // 导航栏
    'nav': {
      'features': '機能',
      'pricing': '料金',
      'faq': 'FAQ'
    },

    // Hero 区域
    'hero': {
      'badge': '公開中',
      'title': 'XNote',
      'tagline': 'Twitter ユーザーにメモを追加して、ソーシャル関係をより良く管理しましょう',
      'description': '任意の Twitter ユーザーに個人メモ、タグ、グループを簡単に追加し、ソーシャルネットワークを整理整頓。',
      'cta_install': 'Chrome にインストール',
      'cta_learn': '詳しく見る'
    },

    // 功能展示
    'features': {
      'title': 'コア機能',
      'subtitle': 'Twitter 体験を向上させる、パワフルでシンプルな機能',
      'note': {
        'title': 'ユーザーメモ',
        'description': '任意の Twitter ユーザーにカスタムメモ、ニックネーム、タグを追加。大切な人を忘れません'
      },
      'tag': {
        'title': 'タググループ',
        'description': 'グループを作成し、色でユーザーをマーク。フォローリストを整理整頓'
      },
      'search': {
        'title': 'クイック検索',
        'description': 'メモ内容でユーザーを素早く検索。ユーザー名を覚えていなくても大丈夫'
      },
      'sync': {
        'title': 'クラウド同期',
        'badge': 'Pro',
        'description': 'WebDAV でデバイス間同期。いつでもどこでもメモにアクセス'
      }
    },

    // 定价对比
    'pricing': {
      'title': 'プランを選択',
      'subtitle': '無料版から始めて、いつでも Pro にアップグレード',
      'earlyBird': 'アーリーバード価格',
      'free': {
        'name': '無料版',
        'price': '$0',
        'period': '/永久',
        'feature1': '最大120件のメモ',
        'feature2': '無制限グループ',
        'feature3': 'ローカル保存',
        'feature4': '基本検索',
        'feature5': '60件エクスポート',
        'cta': '無料インストール'
      },
      'lifetime': {
        'name': '永久版',
        'badge': 'おすすめ',
        'price': '$9.9',
        'period': '/永久',
        'feature1': '無制限メモ',
        'feature2': '無制限グループ',
        'feature3': 'クラウド同期',
        'feature4': '高度な検索',
        'feature5': '完全インポート/エクスポート',
        'feature6': 'バッチ操作',
        'cta': '一度購入',
        'note': '一度の支払いで永久に使用'
      },
      'pro': {
        'name': 'Pro 版',
        'price': '$1',
        'period': '/初月',
        'renewal': '$1.99 /翌月以降',
        'feature1': '無制限メモ',
        'feature2': '無制限グループ',
        'feature3': 'クラウド同期',
        'feature4': '高度な検索',
        'feature5': '完全インポート/エクスポート',
        'feature6': 'バッチ操作',
        'cta': '今すぐアップグレード',
        'note': '年払い $29.99（17%お得）'
      }
    },

    // FAQ
    'faq': {
      'title': 'よくある質問',
      'q1': {
        'question': 'XNote のインストール方法は？',
        'answer': 'XNote は Chrome ウェブストアで公開中！ページ上部の「拡張機能をインストール」ボタンをクリックして無料でインストール。ご質問があれば、メール tingwei@tingwei.site または X アカウント @w736823064 でお問い合わせください。'
      },
      'q2': {
        'question': '無料版と Pro 版の違いは？',
        'answer': '無料版は最大120件のメモと無制限グループを提供し、ほとんどのユーザーに適しています。Pro 版はすべての制限を解除し、クラウド同期、高度な検索、バッチ操作などの高度な機能を提供します。'
      },
      'q3': {
        'question': 'データは安全ですか？',
        'answer': 'はい。無料版のデータはローカルブラウザに保存され、私たちはアクセスできません。Pro 版は WebDAV プロトコルを使用してクラウド同期し、信頼できるサービス（Nutstore、Nextcloud など）を選択できます。'
      },
      'q4': {
        'question': '対応ブラウザは？',
        'answer': '現在 Chrome ブラウザに対応。将来的に Firefox や他の Chromium ベースのブラウザ（Edge、Brave など）にも対応予定です。'
      },
      'q5': {
        'question': '開発者への連絡方法は？',
        'answer': 'メール tingwei@tingwei.site でお問い合わせいただくか、X で @w736823064 をフォローしてください。できるだけ早くお返事いたします。'
      }
    },

    // Footer
    'footer': {
      'tagline': 'Twitter ユーザーにメモを追加',
      'product': '製品',
      'legal': '法務',
      'contact': 'お問い合わせ',
      'privacy': 'プライバシーポリシー',
      'terms': '利用規約',
      'email': 'メール',
      'copyright': '© 2025 XNote. All rights reserved.'
    },

    // Activate Page
    'activate': {
      'title': '購入完了！',
      'subtitle': 'XNote Pro をご購入いただきありがとうございます。以下の手順で有効化してください。',
      'step1': {
        'title': 'ライセンスキーを取得',
        'desc1': 'ライセンスキーは決済時のメールアドレスに送信されました。',
        'desc2': '受信箱をご確認ください。送信者は Creem.io です。',
        'tip': '💡 メールが届かない場合は、迷惑メールフォルダをご確認いただくか、Creem 決済ページの「注文を表示」をクリックしてください。'
      },
      'step2': {
        'title': '拡張機能を有効化',
        'desc': 'ライセンスキーをコピーして、以下の手順で有効化：',
        's1': 'Twitter/X ウェブサイトを開く',
        's2': 'ブラウザツールバーの XNote 拡張機能アイコンをクリック',
        's3': '「データ」タブに移動',
        's4': '上部にライセンスキーを入力して「有効化」をクリック'
      },
      'step3': {
        'title': '使用開始',
        'desc': '有効化後、すべての Pro 機能がアンロック：無制限メモ、完全インポート/エクスポートなど。'
      },
      'cta': {
        'twitter': 'Twitter を開く',
        'email': 'メールを確認'
      },
      'contact': {
        'title': 'お困りですか？お問い合わせください'
      }
    }
  },

  // 韩语
  'ko': {
    // 页面 Meta
    'page': {
      'title': 'XNote - Twitter 사용자 메모 도구',
      'description': 'Twitter 사용자에게 메모를 추가하고 소셜 관계를 더 잘 관리하세요'
    },

    // 导航栏
    'nav': {
      'features': '기능',
      'pricing': '가격',
      'faq': 'FAQ'
    },

    // Hero 区域
    'hero': {
      'badge': '출시됨',
      'title': 'XNote',
      'tagline': 'Twitter 사용자에게 메모를 추가하고 소셜 관계를 더 잘 관리하세요',
      'description': '모든 Twitter 사용자에게 개인 메모, 태그, 그룹을 쉽게 추가하여 소셜 네트워크를 정리하세요.',
      'cta_install': 'Chrome에 설치',
      'cta_learn': '자세히 보기'
    },

    // 功能展示
    'features': {
      'title': '핵심 기능',
      'subtitle': 'Twitter 경험을 향상시키는 강력하고 간단한 기능',
      'note': {
        'title': '사용자 메모',
        'description': '모든 Twitter 사용자에게 맞춤 메모, 별명, 태그를 추가하세요. 중요한 사람을 잊지 않습니다'
      },
      'tag': {
        'title': '태그 그룹',
        'description': '그룹을 만들고 색상으로 사용자를 표시하여 팔로우 목록을 정리하세요'
      },
      'search': {
        'title': '빠른 검색',
        'description': '메모 내용으로 사용자를 빠르게 찾으세요. 사용자명을 기억하지 못해도 괜찮습니다'
      },
      'sync': {
        'title': '클라우드 동기화',
        'badge': 'Pro',
        'description': 'WebDAV로 기기 간 동기화. 언제 어디서나 메모에 접근하세요'
      }
    },

    // 定价对比
    'pricing': {
      'title': '플랜 선택',
      'subtitle': '무료 버전으로 시작하고, 언제든지 Pro로 업그레이드하세요',
      'earlyBird': '얼리버드 가격',
      'free': {
        'name': '무료',
        'price': '$0',
        'period': '/영구',
        'feature1': '최대 120개 메모',
        'feature2': '무제한 그룹',
        'feature3': '로컬 저장',
        'feature4': '기본 검색',
        'feature5': '60개 내보내기',
        'cta': '무료 설치'
      },
      'lifetime': {
        'name': '평생 버전',
        'badge': '추천',
        'price': '$9.9',
        'period': '/영구',
        'feature1': '무제한 메모',
        'feature2': '무제한 그룹',
        'feature3': '클라우드 동기화',
        'feature4': '고급 검색',
        'feature5': '전체 가져오기/내보내기',
        'feature6': '일괄 작업',
        'cta': '한 번 구매',
        'note': '한 번 결제로 영구 사용'
      },
      'pro': {
        'name': 'Pro',
        'price': '$1',
        'period': '/첫 달',
        'renewal': '$1.99 /다음 달부터',
        'feature1': '무제한 메모',
        'feature2': '무제한 그룹',
        'feature3': '클라우드 동기화',
        'feature4': '고급 검색',
        'feature5': '전체 가져오기/내보내기',
        'feature6': '일괄 작업',
        'cta': '지금 업그레이드',
        'note': '연간 $29.99 (17% 절약)'
      }
    },

    // FAQ
    'faq': {
      'title': '자주 묻는 질문',
      'q1': {
        'question': 'XNote는 어떻게 설치하나요?',
        'answer': 'XNote는 Chrome 웹 스토어에서 사용 가능합니다! 페이지 상단의 "확장 프로그램 설치" 버튼을 클릭하여 무료로 설치하세요. 질문이 있으시면 이메일 tingwei@tingwei.site 또는 X 계정 @w736823064으로 연락해 주세요.'
      },
      'q2': {
        'question': '무료 버전과 Pro 버전의 차이점은?',
        'answer': '무료 버전은 최대 120개 메모와 무제한 그룹을 제공하며 대부분의 사용자에게 적합합니다. Pro 버전은 모든 제한을 해제하고 클라우드 동기화, 고급 검색, 일괄 작업 등의 고급 기능을 제공합니다.'
      },
      'q3': {
        'question': '내 데이터는 안전한가요?',
        'answer': '네. 무료 버전 데이터는 로컬 브라우저에 저장되며 저희는 접근할 수 없습니다. Pro 버전은 WebDAV 프로토콜을 사용하여 클라우드 동기화하며, 신뢰할 수 있는 서비스(Nutstore, Nextcloud 등)를 선택할 수 있습니다.'
      },
      'q4': {
        'question': '어떤 브라우저를 지원하나요?',
        'answer': '현재 Chrome 브라우저를 지원합니다. 향후 Firefox 및 기타 Chromium 기반 브라우저(Edge, Brave 등)도 지원할 예정입니다.'
      },
      'q5': {
        'question': '개발자에게 어떻게 연락하나요?',
        'answer': '이메일 tingwei@tingwei.site로 연락하시거나 X에서 @w736823064을 팔로우해 주세요. 가능한 빨리 답변드리겠습니다.'
      }
    },

    // Footer
    'footer': {
      'tagline': 'Twitter 사용자에게 메모 추가',
      'product': '제품',
      'legal': '법률',
      'contact': '연락처',
      'privacy': '개인정보 보호정책',
      'terms': '서비스 약관',
      'email': '이메일',
      'copyright': '© 2025 XNote. All rights reserved.'
    },

    // Activate Page
    'activate': {
      'title': '구매 완료!',
      'subtitle': 'XNote Pro를 구매해 주셔서 감사합니다. 아래 단계를 따라 활성화해 주세요.',
      'step1': {
        'title': '라이선스 키 받기',
        'desc1': '라이선스 키가 결제 시 사용한 이메일로 전송되었습니다.',
        'desc2': '받은 편지함을 확인해 주세요. 발신자는 Creem.io입니다.',
        'tip': '💡 이메일을 받지 못하셨다면 스팸 폴더를 확인하시거나 Creem 결제 페이지에서 "주문 보기"를 클릭해 주세요.'
      },
      'step2': {
        'title': '확장 프로그램 활성화',
        'desc': '라이선스 키를 복사하고 다음 단계를 따르세요:',
        's1': 'Twitter/X 웹사이트 열기',
        's2': '브라우저 도구 모음에서 XNote 확장 프로그램 아이콘 클릭',
        's3': '"데이터" 탭으로 이동',
        's4': '상단에 라이선스 키를 입력하고 "활성화" 클릭'
      },
      'step3': {
        'title': '사용 시작',
        'desc': '활성화 후 모든 Pro 기능이 잠금 해제됩니다: 무제한 메모, 전체 가져오기/내보내기 등.'
      },
      'cta': {
        'twitter': 'Twitter 열기',
        'email': '이메일 확인'
      },
      'contact': {
        'title': '도움이 필요하신가요? 문의해 주세요'
      }
    }
  },

  // 越南语
  'vi': {
    // 页面 Meta
    'page': {
      'title': 'XNote - Công cụ ghi chú người dùng Twitter',
      'description': 'Thêm ghi chú cho người dùng Twitter và quản lý mối quan hệ xã hội tốt hơn'
    },

    // 导航栏
    'nav': {
      'features': 'Tính năng',
      'pricing': 'Giá cả',
      'faq': 'FAQ'
    },

    // Hero 区域
    'hero': {
      'badge': 'Đã ra mắt',
      'title': 'XNote',
      'tagline': 'Thêm ghi chú cho người dùng Twitter và quản lý mối quan hệ xã hội tốt hơn',
      'description': 'Dễ dàng thêm ghi chú cá nhân, thẻ và nhóm cho bất kỳ người dùng Twitter nào, giữ mạng xã hội của bạn ngăn nắp.',
      'cta_install': 'Cài đặt vào Chrome',
      'cta_learn': 'Tìm hiểu thêm'
    },

    // 功能展示
    'features': {
      'title': 'Tính năng cốt lõi',
      'subtitle': 'Tính năng mạnh mẽ nhưng đơn giản để nâng cao trải nghiệm Twitter',
      'note': {
        'title': 'Ghi chú người dùng',
        'description': 'Thêm ghi chú tùy chỉnh, biệt danh hoặc thẻ cho bất kỳ người dùng Twitter nào, không bao giờ quên người quan trọng'
      },
      'tag': {
        'title': 'Nhóm thẻ',
        'description': 'Tạo nhóm và sử dụng màu sắc để đánh dấu các loại người dùng khác nhau, giữ danh sách theo dõi ngăn nắp'
      },
      'search': {
        'title': 'Tìm kiếm nhanh',
        'description': 'Tìm người dùng nhanh chóng theo nội dung ghi chú, ngay cả khi bạn không nhớ tên người dùng'
      },
      'sync': {
        'title': 'Đồng bộ đám mây',
        'badge': 'Pro',
        'description': 'Đồng bộ dữ liệu qua WebDAV, truy cập ghi chú mọi lúc mọi nơi'
      }
    },

    // 定价对比
    'pricing': {
      'title': 'Chọn gói của bạn',
      'subtitle': 'Bắt đầu với phiên bản miễn phí, nâng cấp lên Pro bất cứ lúc nào',
      'earlyBird': 'Giá Early Bird',
      'free': {
        'name': 'Miễn phí',
        'price': '$0',
        'period': '/vĩnh viễn',
        'feature1': 'Tối đa 120 ghi chú',
        'feature2': 'Không giới hạn nhóm',
        'feature3': 'Lưu trữ cục bộ',
        'feature4': 'Tìm kiếm cơ bản',
        'feature5': 'Xuất 60 ghi chú',
        'cta': 'Cài đặt miễn phí'
      },
      'lifetime': {
        'name': 'Trọn đời',
        'badge': 'Đề xuất',
        'price': '$9.9',
        'period': '/vĩnh viễn',
        'feature1': 'Không giới hạn ghi chú',
        'feature2': 'Không giới hạn nhóm',
        'feature3': 'Đồng bộ đám mây',
        'feature4': 'Tìm kiếm nâng cao',
        'feature5': 'Nhập/xuất đầy đủ',
        'feature6': 'Thao tác hàng loạt',
        'cta': 'Mua một lần',
        'note': 'Thanh toán một lần, sử dụng mãi mãi'
      },
      'pro': {
        'name': 'Pro',
        'price': '$1',
        'period': '/tháng đầu',
        'renewal': '$1.99 /tháng sau',
        'feature1': 'Không giới hạn ghi chú',
        'feature2': 'Không giới hạn nhóm',
        'feature3': 'Đồng bộ đám mây',
        'feature4': 'Tìm kiếm nâng cao',
        'feature5': 'Nhập/xuất đầy đủ',
        'feature6': 'Thao tác hàng loạt',
        'cta': 'Nâng cấp ngay',
        'note': 'Năm $29.99 (Tiết kiệm 17%)'
      }
    },

    // FAQ
    'faq': {
      'title': 'Câu hỏi thường gặp',
      'q1': {
        'question': 'Làm thế nào để cài đặt XNote?',
        'answer': 'XNote hiện có trên Chrome Web Store! Nhấp vào nút "Cài đặt tiện ích" ở đầu trang để cài đặt miễn phí. Nếu có câu hỏi, liên hệ qua email tingwei@tingwei.site hoặc tài khoản X @w736823064.'
      },
      'q2': {
        'question': 'Sự khác biệt giữa phiên bản Miễn phí và Pro?',
        'answer': 'Phiên bản miễn phí cung cấp tối đa 120 ghi chú và nhóm không giới hạn, phù hợp với hầu hết người dùng. Phiên bản Pro bỏ tất cả giới hạn và cung cấp đồng bộ đám mây, tìm kiếm nâng cao, thao tác hàng loạt và các tính năng nâng cao khác.'
      },
      'q3': {
        'question': 'Dữ liệu của tôi có an toàn không?',
        'answer': 'Có. Dữ liệu phiên bản miễn phí được lưu trữ trong trình duyệt cục bộ, chúng tôi không thể truy cập. Phiên bản Pro sử dụng giao thức WebDAV để đồng bộ đám mây, bạn có thể chọn nhà cung cấp dịch vụ đáng tin cậy (như Nutstore, Nextcloud, v.v.).'
      },
      'q4': {
        'question': 'Hỗ trợ trình duyệt nào?',
        'answer': 'Hiện hỗ trợ trình duyệt Chrome. Chúng tôi dự định hỗ trợ Firefox và các trình duyệt dựa trên Chromium khác (như Edge, Brave, v.v.) trong tương lai.'
      },
      'q5': {
        'question': 'Làm thế nào để liên hệ nhà phát triển?',
        'answer': 'Bạn có thể liên hệ qua email tingwei@tingwei.site hoặc theo dõi @w736823064 trên X. Tôi sẽ trả lời câu hỏi và đề xuất của bạn sớm nhất có thể.'
      }
    },

    // Footer
    'footer': {
      'tagline': 'Thêm ghi chú cho người dùng Twitter',
      'product': 'Sản phẩm',
      'legal': 'Pháp lý',
      'contact': 'Liên hệ',
      'privacy': 'Chính sách bảo mật',
      'terms': 'Điều khoản dịch vụ',
      'email': 'Email',
      'copyright': '© 2025 XNote. All rights reserved.'
    },

    // Activate Page
    'activate': {
      'title': 'Mua thành công!',
      'subtitle': 'Cảm ơn bạn đã mua XNote Pro. Vui lòng làm theo các bước dưới đây để kích hoạt.',
      'step1': {
        'title': 'Nhận License Key',
        'desc1': 'License Key đã được gửi đến email thanh toán của bạn.',
        'desc2': 'Vui lòng kiểm tra hộp thư đến, người gửi là Creem.io.',
        'tip': '💡 Nếu bạn chưa nhận được email, vui lòng kiểm tra thư mục spam, hoặc nhấp "Xem đơn hàng" trên trang thanh toán Creem.'
      },
      'step2': {
        'title': 'Kích hoạt tiện ích',
        'desc': 'Sao chép License Key và làm theo các bước sau:',
        's1': 'Mở trang web Twitter/X',
        's2': 'Nhấp vào biểu tượng tiện ích XNote trên thanh công cụ trình duyệt',
        's3': 'Đi đến tab "Dữ liệu"',
        's4': 'Nhập License Key ở trên và nhấp "Kích hoạt"'
      },
      'step3': {
        'title': 'Bắt đầu sử dụng',
        'desc': 'Sau khi kích hoạt, bạn sẽ mở khóa tất cả tính năng Pro: ghi chú không giới hạn, nhập/xuất đầy đủ, và nhiều hơn nữa.'
      },
      'cta': {
        'twitter': 'Mở Twitter',
        'email': 'Kiểm tra Email'
      },
      'contact': {
        'title': 'Cần trợ giúp? Liên hệ với chúng tôi'
      }
    }
  },

  // 泰语
  'th': {
    'page': {
      'title': 'XNote - เครื่องมือบันทึกผู้ใช้ Twitter',
      'description': 'เพิ่มบันทึกให้ผู้ใช้ Twitter และจัดการความสัมพันธ์ทางสังคมได้ดียิ่งขึ้น'
    },
    'nav': {
      'features': 'คุณสมบัติ',
      'pricing': 'ราคา',
      'faq': 'FAQ'
    },
    'hero': {
      'badge': 'พร้อมใช้งาน',
      'title': 'XNote',
      'tagline': 'เพิ่มบันทึกให้ผู้ใช้ Twitter และจัดการความสัมพันธ์ทางสังคมได้ดียิ่งขึ้น',
      'description': 'เพิ่มบันทึกส่วนตัว แท็ก และกลุ่มให้ผู้ใช้ Twitter คนใดก็ได้อย่างง่ายดาย จัดระเบียบเครือข่ายสังคมของคุณ',
      'cta_install': 'ติดตั้งบน Chrome',
      'cta_learn': 'เรียนรู้เพิ่มเติม'
    },
    'features': {
      'title': 'คุณสมบัติหลัก',
      'subtitle': 'คุณสมบัติที่ทรงพลังแต่เรียบง่ายเพื่อยกระดับประสบการณ์ Twitter ของคุณ',
      'note': {
        'title': 'บันทึกผู้ใช้',
        'description': 'เพิ่มบันทึก ชื่อเล่น หรือแท็กที่กำหนดเองให้ผู้ใช้ Twitter คนใดก็ได้ ไม่มีวันลืมคนสำคัญ'
      },
      'tag': {
        'title': 'กลุ่มแท็ก',
        'description': 'สร้างกลุ่มและใช้สีเพื่อทำเครื่องหมายผู้ใช้ประเภทต่างๆ จัดระเบียบรายการติดตาม'
      },
      'search': {
        'title': 'ค้นหาด่วน',
        'description': 'ค้นหาผู้ใช้อย่างรวดเร็วด้วยเนื้อหาบันทึก แม้จำชื่อผู้ใช้ไม่ได้ก็ไม่เป็นไร'
      },
      'sync': {
        'title': 'ซิงค์คลาวด์',
        'badge': 'Pro',
        'description': 'ซิงค์ข้อมูลข้ามอุปกรณ์ผ่าน WebDAV เข้าถึงบันทึกได้ทุกที่ทุกเวลา'
      }
    },
    'pricing': {
      'title': 'เลือกแผนของคุณ',
      'subtitle': 'เริ่มต้นด้วยเวอร์ชันฟรี อัปเกรดเป็น Pro ได้ทุกเมื่อ',
      'earlyBird': 'ราคา Early Bird',
      'free': {
        'name': 'ฟรี',
        'price': '$0',
        'period': '/ตลอดไป',
        'feature1': 'บันทึกสูงสุด 120 รายการ',
        'feature2': 'กลุ่มไม่จำกัด',
        'feature3': 'จัดเก็บในเครื่อง',
        'feature4': 'ค้นหาพื้นฐาน',
        'feature5': 'ส่งออก 60 รายการ',
        'cta': 'ติดตั้งฟรี'
      },
      'lifetime': {
        'name': 'ตลอดชีพ',
        'badge': 'แนะนำ',
        'price': '$9.9',
        'period': '/ตลอดไป',
        'feature1': 'บันทึกไม่จำกัด',
        'feature2': 'กลุ่มไม่จำกัด',
        'feature3': 'ซิงค์คลาวด์',
        'feature4': 'ค้นหาขั้นสูง',
        'feature5': 'นำเข้า/ส่งออกเต็มรูปแบบ',
        'feature6': 'ดำเนินการเป็นชุด',
        'cta': 'ซื้อครั้งเดียว',
        'note': 'จ่ายครั้งเดียว ใช้ได้ตลอดไป'
      },
      'pro': {
        'name': 'Pro',
        'price': '$1',
        'period': '/เดือนแรก',
        'renewal': '$1.99 /เดือนถัดไป',
        'feature1': 'บันทึกไม่จำกัด',
        'feature2': 'กลุ่มไม่จำกัด',
        'feature3': 'ซิงค์คลาวด์',
        'feature4': 'ค้นหาขั้นสูง',
        'feature5': 'นำเข้า/ส่งออกเต็มรูปแบบ',
        'feature6': 'ดำเนินการเป็นชุด',
        'cta': 'อัปเกรดเลย',
        'note': 'รายปี $29.99 (ประหยัด 17%)'
      }
    },
    'faq': {
      'title': 'คำถามที่พบบ่อย',
      'q1': {
        'question': 'ติดตั้ง XNote อย่างไร?',
        'answer': 'XNote พร้อมใช้งานใน Chrome Web Store แล้ว! คลิกปุ่ม "ติดตั้งส่วนขยาย" ที่ด้านบนของหน้าเพื่อติดตั้งฟรี หากมีคำถาม ติดต่อทางอีเมล tingwei@tingwei.site หรือบัญชี X @w736823064'
      },
      'q2': {
        'question': 'เวอร์ชันฟรีและ Pro ต่างกันอย่างไร?',
        'answer': 'เวอร์ชันฟรีให้บันทึกสูงสุด 120 รายการและกลุ่มไม่จำกัด เหมาะสำหรับผู้ใช้ส่วนใหญ่ เวอร์ชัน Pro ปลดล็อกข้อจำกัดทั้งหมดและมีซิงค์คลาวด์ ค้นหาขั้นสูง ดำเนินการเป็นชุด และคุณสมบัติขั้นสูงอื่นๆ'
      },
      'q3': {
        'question': 'ข้อมูลของฉันปลอดภัยไหม?',
        'answer': 'ใช่ ข้อมูลเวอร์ชันฟรีจัดเก็บในเบราว์เซอร์ในเครื่อง เราไม่สามารถเข้าถึงได้ เวอร์ชัน Pro ใช้โปรโตคอล WebDAV สำหรับซิงค์คลาวด์ คุณสามารถเลือกผู้ให้บริการที่เชื่อถือได้ (เช่น Nutstore, Nextcloud เป็นต้น)'
      },
      'q4': {
        'question': 'รองรับเบราว์เซอร์ใดบ้าง?',
        'answer': 'ปัจจุบันรองรับเบราว์เซอร์ Chrome เราวางแผนจะรองรับ Firefox และเบราว์เซอร์ที่ใช้ Chromium อื่นๆ (เช่น Edge, Brave เป็นต้น) ในอนาคต'
      },
      'q5': {
        'question': 'ติดต่อนักพัฒนาได้อย่างไร?',
        'answer': 'คุณสามารถติดต่อทางอีเมล tingwei@tingwei.site หรือติดตาม @w736823064 บน X เราจะตอบคำถามและข้อเสนอแนะของคุณโดยเร็วที่สุด'
      }
    },
    'footer': {
      'tagline': 'เพิ่มบันทึกให้ผู้ใช้ Twitter',
      'product': 'ผลิตภัณฑ์',
      'legal': 'กฎหมาย',
      'contact': 'ติดต่อ',
      'privacy': 'นโยบายความเป็นส่วนตัว',
      'terms': 'ข้อกำหนดการให้บริการ',
      'email': 'อีเมล',
      'copyright': '© 2025 XNote. All rights reserved.'
    },
    'activate': {
      'title': 'ซื้อสำเร็จ!',
      'subtitle': 'ขอบคุณที่ซื้อ XNote Pro กรุณาทำตามขั้นตอนด้านล่างเพื่อเปิดใช้งาน',
      'step1': {
        'title': 'รับ License Key',
        'desc1': 'License Key ถูกส่งไปยังอีเมลที่ใช้ชำระเงินแล้ว',
        'desc2': 'กรุณาตรวจสอบกล่องจดหมาย ผู้ส่งคือ Creem.io',
        'tip': '💡 หากยังไม่ได้รับอีเมล กรุณาตรวจสอบโฟลเดอร์สแปม หรือคลิก "ดูคำสั่งซื้อ" บนหน้าชำระเงิน Creem'
      },
      'step2': {
        'title': 'เปิดใช้งานส่วนขยาย',
        'desc': 'คัดลอก License Key และทำตามขั้นตอน:',
        's1': 'เปิดเว็บไซต์ Twitter/X',
        's2': 'คลิกไอคอนส่วนขยาย XNote บนแถบเครื่องมือเบราว์เซอร์',
        's3': 'ไปที่แท็บ "ข้อมูล"',
        's4': 'ป้อน License Key ที่ด้านบนและคลิก "เปิดใช้งาน"'
      },
      'step3': {
        'title': 'เริ่มใช้งาน',
        'desc': 'เมื่อเปิดใช้งานแล้ว คุณจะปลดล็อกคุณสมบัติ Pro ทั้งหมด: บันทึกไม่จำกัด นำเข้า/ส่งออกเต็มรูปแบบ และอื่นๆ'
      },
      'cta': {
        'twitter': 'เปิด Twitter',
        'email': 'ตรวจสอบอีเมล'
      },
      'contact': {
        'title': 'ต้องการความช่วยเหลือ? ติดต่อเรา'
      }
    }
  },

  // 印尼语
  'id': {
    'page': {
      'title': 'XNote - Alat Catatan Pengguna Twitter',
      'description': 'Tambahkan catatan ke pengguna Twitter dan kelola hubungan sosial Anda dengan lebih baik'
    },
    'nav': {
      'features': 'Fitur',
      'pricing': 'Harga',
      'faq': 'FAQ'
    },
    'hero': {
      'badge': 'Tersedia Sekarang',
      'title': 'XNote',
      'tagline': 'Tambahkan catatan ke pengguna Twitter dan kelola hubungan sosial Anda dengan lebih baik',
      'description': 'Mudah menambahkan catatan pribadi, tag, dan grup ke pengguna Twitter mana pun, menjaga jaringan sosial Anda tetap teratur.',
      'cta_install': 'Pasang ke Chrome',
      'cta_learn': 'Pelajari Lebih Lanjut'
    },
    'features': {
      'title': 'Fitur Utama',
      'subtitle': 'Fitur yang kuat namun sederhana untuk meningkatkan pengalaman Twitter Anda',
      'note': {
        'title': 'Catatan Pengguna',
        'description': 'Tambahkan catatan kustom, alias, atau tag ke pengguna Twitter mana pun, tidak akan pernah melupakan orang penting'
      },
      'tag': {
        'title': 'Grup Tag',
        'description': 'Buat grup dan gunakan warna untuk menandai berbagai jenis pengguna, menjaga daftar ikuti tetap teratur'
      },
      'search': {
        'title': 'Pencarian Cepat',
        'description': 'Temukan pengguna dengan cepat berdasarkan konten catatan, bahkan jika Anda tidak ingat nama pengguna'
      },
      'sync': {
        'title': 'Sinkronisasi Cloud',
        'badge': 'Pro',
        'description': 'Sinkronkan data lintas perangkat melalui WebDAV, akses catatan Anda kapan saja, di mana saja'
      }
    },
    'pricing': {
      'title': 'Pilih Paket Anda',
      'subtitle': 'Mulai dengan versi gratis, tingkatkan ke Pro kapan saja',
      'earlyBird': 'Harga Early Bird',
      'free': {
        'name': 'Gratis',
        'price': '$0',
        'period': '/selamanya',
        'feature1': 'Hingga 120 catatan',
        'feature2': 'Grup tidak terbatas',
        'feature3': 'Penyimpanan lokal',
        'feature4': 'Pencarian dasar',
        'feature5': 'Ekspor 60 catatan',
        'cta': 'Pasang Gratis'
      },
      'lifetime': {
        'name': 'Seumur Hidup',
        'badge': 'Direkomendasikan',
        'price': '$9.9',
        'period': '/selamanya',
        'feature1': 'Catatan tidak terbatas',
        'feature2': 'Grup tidak terbatas',
        'feature3': 'Sinkronisasi cloud',
        'feature4': 'Pencarian lanjutan',
        'feature5': 'Impor/ekspor penuh',
        'feature6': 'Operasi batch',
        'cta': 'Beli Sekali',
        'note': 'Bayar sekali, gunakan selamanya'
      },
      'pro': {
        'name': 'Pro',
        'price': '$1',
        'period': '/bulan pertama',
        'renewal': '$1.99 /bulan berikutnya',
        'feature1': 'Catatan tidak terbatas',
        'feature2': 'Grup tidak terbatas',
        'feature3': 'Sinkronisasi cloud',
        'feature4': 'Pencarian lanjutan',
        'feature5': 'Impor/ekspor penuh',
        'feature6': 'Operasi batch',
        'cta': 'Tingkatkan Sekarang',
        'note': 'Tahunan $29.99 (Hemat 17%)'
      }
    },
    'faq': {
      'title': 'Pertanyaan yang Sering Diajukan',
      'q1': {
        'question': 'Bagaimana cara memasang XNote?',
        'answer': 'XNote tersedia di Chrome Web Store! Klik tombol "Pasang Ekstensi" di bagian atas halaman untuk memasang gratis. Jika ada pertanyaan, hubungi melalui email tingwei@tingwei.site atau akun X @w736823064.'
      },
      'q2': {
        'question': 'Apa perbedaan versi Gratis dan Pro?',
        'answer': 'Versi gratis menyediakan hingga 120 catatan dan grup tidak terbatas, cocok untuk sebagian besar pengguna. Versi Pro menghapus semua batasan dan menyediakan sinkronisasi cloud, pencarian lanjutan, operasi batch, dan fitur lanjutan lainnya.'
      },
      'q3': {
        'question': 'Apakah data saya aman?',
        'answer': 'Ya. Data versi gratis disimpan di browser lokal Anda, kami tidak dapat mengaksesnya. Versi Pro menggunakan protokol WebDAV untuk sinkronisasi cloud, Anda dapat memilih penyedia layanan tepercaya (seperti Nutstore, Nextcloud, dll.).'
      },
      'q4': {
        'question': 'Browser apa yang didukung?',
        'answer': 'Saat ini mendukung browser Chrome. Kami berencana mendukung Firefox dan browser berbasis Chromium lainnya (seperti Edge, Brave, dll.) di masa depan.'
      },
      'q5': {
        'question': 'Bagaimana cara menghubungi pengembang?',
        'answer': 'Anda dapat menghubungi melalui email tingwei@tingwei.site atau ikuti @w736823064 di X. Kami akan membalas pertanyaan dan saran Anda sesegera mungkin.'
      }
    },
    'footer': {
      'tagline': 'Tambahkan catatan ke pengguna Twitter',
      'product': 'Produk',
      'legal': 'Hukum',
      'contact': 'Kontak',
      'privacy': 'Kebijakan Privasi',
      'terms': 'Ketentuan Layanan',
      'email': 'Email',
      'copyright': '© 2025 XNote. All rights reserved.'
    },
    'activate': {
      'title': 'Pembelian Berhasil!',
      'subtitle': 'Terima kasih telah membeli XNote Pro. Silakan ikuti langkah-langkah di bawah untuk mengaktifkan.',
      'step1': {
        'title': 'Dapatkan License Key',
        'desc1': 'License Key Anda telah dikirim ke email yang digunakan untuk pembayaran.',
        'desc2': 'Silakan periksa kotak masuk Anda, pengirimnya adalah Creem.io.',
        'tip': '💡 Jika Anda belum menerima email, silakan periksa folder spam, atau klik "Lihat Pesanan" di halaman pembayaran Creem.'
      },
      'step2': {
        'title': 'Aktifkan Ekstensi',
        'desc': 'Salin License Key Anda dan ikuti langkah-langkah ini:',
        's1': 'Buka situs web Twitter/X',
        's2': 'Klik ikon ekstensi XNote di toolbar browser',
        's3': 'Buka tab "Data"',
        's4': 'Masukkan License Key di bagian atas dan klik "Aktifkan"'
      },
      'step3': {
        'title': 'Mulai Menggunakan',
        'desc': 'Setelah diaktifkan, Anda akan membuka semua fitur Pro: catatan tidak terbatas, impor/ekspor penuh, dan lainnya.'
      },
      'cta': {
        'twitter': 'Buka Twitter',
        'email': 'Periksa Email'
      },
      'contact': {
        'title': 'Butuh bantuan? Hubungi kami'
      }
    }
  },

  // 马来语
  'ms': {
    'page': {
      'title': 'XNote - Alat Nota Pengguna Twitter',
      'description': 'Tambah nota kepada pengguna Twitter dan urus hubungan sosial anda dengan lebih baik'
    },
    'nav': {
      'features': 'Ciri-ciri',
      'pricing': 'Harga',
      'faq': 'FAQ'
    },
    'hero': {
      'badge': 'Tersedia Sekarang',
      'title': 'XNote',
      'tagline': 'Tambah nota kepada pengguna Twitter dan urus hubungan sosial anda dengan lebih baik',
      'description': 'Mudah menambah nota peribadi, tag, dan kumpulan kepada mana-mana pengguna Twitter, menjaga rangkaian sosial anda teratur.',
      'cta_install': 'Pasang ke Chrome',
      'cta_learn': 'Ketahui Lebih Lanjut'
    },
    'features': {
      'title': 'Ciri-ciri Utama',
      'subtitle': 'Ciri-ciri berkuasa tetapi mudah untuk meningkatkan pengalaman Twitter anda',
      'note': {
        'title': 'Nota Pengguna',
        'description': 'Tambah nota tersuai, alias, atau tag kepada mana-mana pengguna Twitter, tidak akan lupa orang penting'
      },
      'tag': {
        'title': 'Kumpulan Tag',
        'description': 'Cipta kumpulan dan gunakan warna untuk menandakan jenis pengguna berbeza, menjaga senarai ikuti teratur'
      },
      'search': {
        'title': 'Carian Pantas',
        'description': 'Cari pengguna dengan pantas mengikut kandungan nota, walaupun anda tidak ingat nama pengguna'
      },
      'sync': {
        'title': 'Sinkronisasi Awan',
        'badge': 'Pro',
        'description': 'Sinkronkan data merentasi peranti melalui WebDAV, akses nota anda bila-bila masa, di mana sahaja'
      }
    },
    'pricing': {
      'title': 'Pilih Pelan Anda',
      'subtitle': 'Mulakan dengan versi percuma, naik taraf ke Pro bila-bila masa',
      'earlyBird': 'Harga Early Bird',
      'free': {
        'name': 'Percuma',
        'price': '$0',
        'period': '/selamanya',
        'feature1': 'Sehingga 120 nota',
        'feature2': 'Kumpulan tanpa had',
        'feature3': 'Storan tempatan',
        'feature4': 'Carian asas',
        'feature5': 'Eksport 60 nota',
        'cta': 'Pasang Percuma'
      },
      'lifetime': {
        'name': 'Seumur Hidup',
        'badge': 'Disyorkan',
        'price': '$9.9',
        'period': '/selamanya',
        'feature1': 'Nota tanpa had',
        'feature2': 'Kumpulan tanpa had',
        'feature3': 'Sinkronisasi awan',
        'feature4': 'Carian lanjutan',
        'feature5': 'Import/eksport penuh',
        'feature6': 'Operasi berkelompok',
        'cta': 'Beli Sekali',
        'note': 'Bayar sekali, guna selamanya'
      },
      'pro': {
        'name': 'Pro',
        'price': '$1',
        'period': '/bulan pertama',
        'renewal': '$1.99 /bulan seterusnya',
        'feature1': 'Nota tanpa had',
        'feature2': 'Kumpulan tanpa had',
        'feature3': 'Sinkronisasi awan',
        'feature4': 'Carian lanjutan',
        'feature5': 'Import/eksport penuh',
        'feature6': 'Operasi berkelompok',
        'cta': 'Naik Taraf Sekarang',
        'note': 'Tahunan $29.99 (Jimat 17%)'
      }
    },
    'faq': {
      'title': 'Soalan Lazim',
      'q1': {
        'question': 'Bagaimana cara memasang XNote?',
        'answer': 'XNote tersedia di Chrome Web Store! Klik butang "Pasang Sambungan" di bahagian atas halaman untuk memasang percuma. Jika ada soalan, hubungi melalui emel tingwei@tingwei.site atau akaun X @w736823064.'
      },
      'q2': {
        'question': 'Apakah perbezaan versi Percuma dan Pro?',
        'answer': 'Versi percuma menyediakan sehingga 120 nota dan kumpulan tanpa had, sesuai untuk kebanyakan pengguna. Versi Pro menghapus semua had dan menyediakan sinkronisasi awan, carian lanjutan, operasi berkelompok, dan ciri-ciri lanjutan lain.'
      },
      'q3': {
        'question': 'Adakah data saya selamat?',
        'answer': 'Ya. Data versi percuma disimpan dalam pelayar tempatan anda, kami tidak dapat mengaksesnya. Versi Pro menggunakan protokol WebDAV untuk sinkronisasi awan, anda boleh memilih penyedia perkhidmatan yang dipercayai (seperti Nutstore, Nextcloud, dll.).'
      },
      'q4': {
        'question': 'Pelayar apa yang disokong?',
        'answer': 'Pada masa ini menyokong pelayar Chrome. Kami merancang untuk menyokong Firefox dan pelayar berasaskan Chromium lain (seperti Edge, Brave, dll.) pada masa hadapan.'
      },
      'q5': {
        'question': 'Bagaimana cara menghubungi pembangun?',
        'answer': 'Anda boleh menghubungi melalui emel tingwei@tingwei.site atau ikuti @w736823064 di X. Kami akan membalas soalan dan cadangan anda secepat mungkin.'
      }
    },
    'footer': {
      'tagline': 'Tambah nota kepada pengguna Twitter',
      'product': 'Produk',
      'legal': 'Undang-undang',
      'contact': 'Hubungi',
      'privacy': 'Dasar Privasi',
      'terms': 'Terma Perkhidmatan',
      'email': 'Emel',
      'copyright': '© 2025 XNote. All rights reserved.'
    },
    'activate': {
      'title': 'Pembelian Berjaya!',
      'subtitle': 'Terima kasih kerana membeli XNote Pro. Sila ikuti langkah-langkah di bawah untuk mengaktifkan.',
      'step1': {
        'title': 'Dapatkan License Key',
        'desc1': 'License Key anda telah dihantar ke emel yang digunakan untuk pembayaran.',
        'desc2': 'Sila semak peti masuk anda, pengirim adalah Creem.io.',
        'tip': '💡 Jika anda belum menerima emel, sila semak folder spam, atau klik "Lihat Pesanan" di halaman pembayaran Creem.'
      },
      'step2': {
        'title': 'Aktifkan Sambungan',
        'desc': 'Salin License Key anda dan ikuti langkah-langkah ini:',
        's1': 'Buka laman web Twitter/X',
        's2': 'Klik ikon sambungan XNote di bar alat pelayar',
        's3': 'Pergi ke tab "Data"',
        's4': 'Masukkan License Key di bahagian atas dan klik "Aktifkan"'
      },
      'step3': {
        'title': 'Mula Menggunakan',
        'desc': 'Selepas diaktifkan, anda akan membuka semua ciri Pro: nota tanpa had, import/eksport penuh, dan lain-lain.'
      },
      'cta': {
        'twitter': 'Buka Twitter',
        'email': 'Semak Emel'
      },
      'contact': {
        'title': 'Perlukan bantuan? Hubungi kami'
      }
    }
  },

  // 法语
  'fr': {
    'page': {
      'title': 'XNote - Outil de notes pour utilisateurs Twitter',
      'description': 'Ajoutez des notes aux utilisateurs Twitter et gérez mieux vos relations sociales'
    },
    'nav': {
      'features': 'Fonctionnalités',
      'pricing': 'Tarifs',
      'faq': 'FAQ'
    },
    'hero': {
      'badge': 'Disponible maintenant',
      'title': 'XNote',
      'tagline': 'Ajoutez des notes aux utilisateurs Twitter et gérez mieux vos relations sociales',
      'description': 'Ajoutez facilement des notes personnelles, des tags et des groupes à n\'importe quel utilisateur Twitter, gardez votre réseau social organisé.',
      'cta_install': 'Installer sur Chrome',
      'cta_learn': 'En savoir plus'
    },
    'features': {
      'title': 'Fonctionnalités principales',
      'subtitle': 'Des fonctionnalités puissantes mais simples pour améliorer votre expérience Twitter',
      'note': {
        'title': 'Notes utilisateur',
        'description': 'Ajoutez des notes personnalisées, des alias ou des tags à n\'importe quel utilisateur Twitter, n\'oubliez jamais les personnes importantes'
      },
      'tag': {
        'title': 'Groupes de tags',
        'description': 'Créez des groupes et utilisez des couleurs pour marquer différents types d\'utilisateurs, gardez votre liste de suivi organisée'
      },
      'search': {
        'title': 'Recherche rapide',
        'description': 'Trouvez rapidement des utilisateurs par le contenu des notes, même si vous ne vous souvenez pas du nom d\'utilisateur'
      },
      'sync': {
        'title': 'Synchronisation cloud',
        'badge': 'Pro',
        'description': 'Synchronisez les données entre appareils via WebDAV, accédez à vos notes n\'importe où, n\'importe quand'
      }
    },
    'pricing': {
      'title': 'Choisissez votre forfait',
      'subtitle': 'Commencez avec la version gratuite, passez à Pro à tout moment',
      'earlyBird': 'Prix Early Bird',
      'free': {
        'name': 'Gratuit',
        'price': '0 $',
        'period': '/pour toujours',
        'feature1': 'Jusqu\'à 120 notes',
        'feature2': 'Groupes illimités',
        'feature3': 'Stockage local',
        'feature4': 'Recherche basique',
        'feature5': 'Exporter 60 notes',
        'cta': 'Installer gratuitement'
      },
      'lifetime': {
        'name': 'À vie',
        'badge': 'Recommandé',
        'price': '9,9 $',
        'period': '/pour toujours',
        'feature1': 'Notes illimitées',
        'feature2': 'Groupes illimités',
        'feature3': 'Synchronisation cloud',
        'feature4': 'Recherche avancée',
        'feature5': 'Import/export complet',
        'feature6': 'Opérations par lots',
        'cta': 'Acheter une fois',
        'note': 'Payez une fois, utilisez pour toujours'
      },
      'pro': {
        'name': 'Pro',
        'price': '1 $',
        'period': '/premier mois',
        'renewal': '1,99 $ /mois suivants',
        'feature1': 'Notes illimitées',
        'feature2': 'Groupes illimités',
        'feature3': 'Synchronisation cloud',
        'feature4': 'Recherche avancée',
        'feature5': 'Import/export complet',
        'feature6': 'Opérations par lots',
        'cta': 'Mettre à niveau',
        'note': 'Annuel 29,99 $ (Économisez 17%)'
      }
    },
    'faq': {
      'title': 'Questions fréquentes',
      'q1': {
        'question': 'Comment installer XNote ?',
        'answer': 'XNote est disponible sur le Chrome Web Store ! Cliquez sur le bouton "Installer l\'extension" en haut de la page pour l\'installer gratuitement. Si vous avez des questions, contactez-moi par email tingwei@tingwei.site ou compte X @w736823064.'
      },
      'q2': {
        'question': 'Quelle est la différence entre les versions Gratuite et Pro ?',
        'answer': 'La version gratuite offre jusqu\'à 120 notes et des groupes illimités, adaptée à la plupart des utilisateurs. La version Pro supprime toutes les limites et offre la synchronisation cloud, la recherche avancée, les opérations par lots et d\'autres fonctionnalités avancées.'
      },
      'q3': {
        'question': 'Mes données sont-elles en sécurité ?',
        'answer': 'Oui. Les données de la version gratuite sont stockées dans votre navigateur local, nous ne pouvons pas y accéder. La version Pro utilise le protocole WebDAV pour la synchronisation cloud, vous pouvez choisir un fournisseur de confiance (comme Nutstore, Nextcloud, etc.).'
      },
      'q4': {
        'question': 'Quels navigateurs sont pris en charge ?',
        'answer': 'Actuellement, Chrome est pris en charge. Nous prévoyons de prendre en charge Firefox et d\'autres navigateurs basés sur Chromium (comme Edge, Brave, etc.) à l\'avenir.'
      },
      'q5': {
        'question': 'Comment contacter le développeur ?',
        'answer': 'Vous pouvez me contacter par email tingwei@tingwei.site ou suivre @w736823064 sur X. Je répondrai à vos questions et suggestions dès que possible.'
      }
    },
    'footer': {
      'tagline': 'Ajoutez des notes aux utilisateurs Twitter',
      'product': 'Produit',
      'legal': 'Mentions légales',
      'contact': 'Contact',
      'privacy': 'Politique de confidentialité',
      'terms': 'Conditions d\'utilisation',
      'email': 'Email',
      'copyright': '© 2025 XNote. Tous droits réservés.'
    },
    'activate': {
      'title': 'Achat réussi !',
      'subtitle': 'Merci d\'avoir acheté XNote Pro. Veuillez suivre les étapes ci-dessous pour l\'activer.',
      'step1': {
        'title': 'Obtenez votre License Key',
        'desc1': 'Votre License Key a été envoyée à l\'email utilisé pour le paiement.',
        'desc2': 'Veuillez vérifier votre boîte de réception, l\'expéditeur est Creem.io.',
        'tip': '💡 Si vous n\'avez pas reçu l\'email, vérifiez votre dossier spam, ou cliquez sur "Voir la commande" sur la page de paiement Creem.'
      },
      'step2': {
        'title': 'Activez l\'extension',
        'desc': 'Copiez votre License Key et suivez ces étapes :',
        's1': 'Ouvrez le site Twitter/X',
        's2': 'Cliquez sur l\'icône de l\'extension XNote dans la barre d\'outils du navigateur',
        's3': 'Allez dans l\'onglet "Données"',
        's4': 'Entrez votre License Key en haut et cliquez sur "Activer"'
      },
      'step3': {
        'title': 'Commencez à utiliser',
        'desc': 'Une fois activé, vous débloquerez toutes les fonctionnalités Pro : notes illimitées, import/export complet, et plus encore.'
      },
      'cta': {
        'twitter': 'Ouvrir Twitter',
        'email': 'Vérifier l\'email'
      },
      'contact': {
        'title': 'Besoin d\'aide ? Contactez-nous'
      }
    }
  },

  // 德语
  'de': {
    'page': {
      'title': 'XNote - Twitter Benutzernotizen-Tool',
      'description': 'Fügen Sie Twitter-Benutzern Notizen hinzu und verwalten Sie Ihre sozialen Beziehungen besser'
    },
    'nav': {
      'features': 'Funktionen',
      'pricing': 'Preise',
      'faq': 'FAQ'
    },
    'hero': {
      'badge': 'Jetzt verfügbar',
      'title': 'XNote',
      'tagline': 'Fügen Sie Twitter-Benutzern Notizen hinzu und verwalten Sie Ihre sozialen Beziehungen besser',
      'description': 'Fügen Sie jedem Twitter-Benutzer einfach persönliche Notizen, Tags und Gruppen hinzu, um Ihr soziales Netzwerk organisiert zu halten.',
      'cta_install': 'In Chrome installieren',
      'cta_learn': 'Mehr erfahren'
    },
    'features': {
      'title': 'Hauptfunktionen',
      'subtitle': 'Leistungsstarke, aber einfache Funktionen zur Verbesserung Ihrer Twitter-Erfahrung',
      'note': {
        'title': 'Benutzernotizen',
        'description': 'Fügen Sie jedem Twitter-Benutzer benutzerdefinierte Notizen, Aliase oder Tags hinzu, vergessen Sie nie wichtige Personen'
      },
      'tag': {
        'title': 'Tag-Gruppen',
        'description': 'Erstellen Sie Gruppen und verwenden Sie Farben, um verschiedene Benutzertypen zu markieren, halten Sie Ihre Follower-Liste organisiert'
      },
      'search': {
        'title': 'Schnellsuche',
        'description': 'Finden Sie Benutzer schnell nach Notizinhalt, auch wenn Sie sich nicht an den Benutzernamen erinnern'
      },
      'sync': {
        'title': 'Cloud-Synchronisierung',
        'badge': 'Pro',
        'description': 'Synchronisieren Sie Daten über Geräte hinweg via WebDAV, greifen Sie jederzeit und überall auf Ihre Notizen zu'
      }
    },
    'pricing': {
      'title': 'Wählen Sie Ihren Plan',
      'subtitle': 'Beginnen Sie mit der kostenlosen Version, upgraden Sie jederzeit auf Pro',
      'earlyBird': 'Early Bird Preis',
      'free': {
        'name': 'Kostenlos',
        'price': '0 $',
        'period': '/für immer',
        'feature1': 'Bis zu 120 Notizen',
        'feature2': 'Unbegrenzte Gruppen',
        'feature3': 'Lokaler Speicher',
        'feature4': 'Einfache Suche',
        'feature5': '60 Notizen exportieren',
        'cta': 'Kostenlos installieren'
      },
      'lifetime': {
        'name': 'Lebenslang',
        'badge': 'Empfohlen',
        'price': '9,9 $',
        'period': '/für immer',
        'feature1': 'Unbegrenzte Notizen',
        'feature2': 'Unbegrenzte Gruppen',
        'feature3': 'Cloud-Synchronisierung',
        'feature4': 'Erweiterte Suche',
        'feature5': 'Vollständiger Import/Export',
        'feature6': 'Stapeloperationen',
        'cta': 'Einmal kaufen',
        'note': 'Einmal bezahlen, für immer nutzen'
      },
      'pro': {
        'name': 'Pro',
        'price': '1 $',
        'period': '/erster Monat',
        'renewal': '1,99 $ /ab dem nächsten Monat',
        'feature1': 'Unbegrenzte Notizen',
        'feature2': 'Unbegrenzte Gruppen',
        'feature3': 'Cloud-Synchronisierung',
        'feature4': 'Erweiterte Suche',
        'feature5': 'Vollständiger Import/Export',
        'feature6': 'Stapeloperationen',
        'cta': 'Jetzt upgraden',
        'note': 'Jährlich 29,99 $ (17% sparen)'
      }
    },
    'faq': {
      'title': 'Häufig gestellte Fragen',
      'q1': {
        'question': 'Wie installiere ich XNote?',
        'answer': 'XNote ist im Chrome Web Store verfügbar! Klicken Sie oben auf der Seite auf die Schaltfläche "Erweiterung installieren", um kostenlos zu installieren. Bei Fragen kontaktieren Sie mich per E-Mail tingwei@tingwei.site oder X-Konto @w736823064.'
      },
      'q2': {
        'question': 'Was ist der Unterschied zwischen der kostenlosen und der Pro-Version?',
        'answer': 'Die kostenlose Version bietet bis zu 120 Notizen und unbegrenzte Gruppen, geeignet für die meisten Benutzer. Die Pro-Version hebt alle Limits auf und bietet Cloud-Synchronisierung, erweiterte Suche, Stapeloperationen und andere erweiterte Funktionen.'
      },
      'q3': {
        'question': 'Sind meine Daten sicher?',
        'answer': 'Ja. Die Daten der kostenlosen Version werden in Ihrem lokalen Browser gespeichert, wir können nicht darauf zugreifen. Die Pro-Version verwendet das WebDAV-Protokoll für die Cloud-Synchronisierung, Sie können einen vertrauenswürdigen Anbieter wählen (wie Nutstore, Nextcloud usw.).'
      },
      'q4': {
        'question': 'Welche Browser werden unterstützt?',
        'answer': 'Derzeit wird Chrome unterstützt. Wir planen, in Zukunft Firefox und andere Chromium-basierte Browser (wie Edge, Brave usw.) zu unterstützen.'
      },
      'q5': {
        'question': 'Wie kontaktiere ich den Entwickler?',
        'answer': 'Sie können mich per E-Mail tingwei@tingwei.site kontaktieren oder @w736823064 auf X folgen. Ich werde Ihre Fragen und Vorschläge so schnell wie möglich beantworten.'
      }
    },
    'footer': {
      'tagline': 'Notizen zu Twitter-Benutzern hinzufügen',
      'product': 'Produkt',
      'legal': 'Rechtliches',
      'contact': 'Kontakt',
      'privacy': 'Datenschutzrichtlinie',
      'terms': 'Nutzungsbedingungen',
      'email': 'E-Mail',
      'copyright': '© 2025 XNote. Alle Rechte vorbehalten.'
    },
    'activate': {
      'title': 'Kauf erfolgreich!',
      'subtitle': 'Vielen Dank für den Kauf von XNote Pro. Bitte befolgen Sie die folgenden Schritte zur Aktivierung.',
      'step1': {
        'title': 'License Key erhalten',
        'desc1': 'Ihr License Key wurde an die für die Zahlung verwendete E-Mail gesendet.',
        'desc2': 'Bitte überprüfen Sie Ihren Posteingang, der Absender ist Creem.io.',
        'tip': '💡 Wenn Sie die E-Mail nicht erhalten haben, überprüfen Sie Ihren Spam-Ordner oder klicken Sie auf "Bestellung anzeigen" auf der Creem-Zahlungsseite.'
      },
      'step2': {
        'title': 'Erweiterung aktivieren',
        'desc': 'Kopieren Sie Ihren License Key und folgen Sie diesen Schritten:',
        's1': 'Öffnen Sie die Twitter/X-Website',
        's2': 'Klicken Sie auf das XNote-Erweiterungssymbol in der Browser-Symbolleiste',
        's3': 'Gehen Sie zum Tab "Daten"',
        's4': 'Geben Sie oben Ihren License Key ein und klicken Sie auf "Aktivieren"'
      },
      'step3': {
        'title': 'Nutzung starten',
        'desc': 'Nach der Aktivierung schalten Sie alle Pro-Funktionen frei: unbegrenzte Notizen, vollständiger Import/Export und mehr.'
      },
      'cta': {
        'twitter': 'Twitter öffnen',
        'email': 'E-Mail überprüfen'
      },
      'contact': {
        'title': 'Brauchen Sie Hilfe? Kontaktieren Sie uns'
      }
    }
  },

  // 西班牙语
  'es': {
    'page': {
      'title': 'XNote - Herramienta de notas para usuarios de Twitter',
      'description': 'Añade notas a los usuarios de Twitter y gestiona mejor tus relaciones sociales'
    },
    'nav': {
      'features': 'Funciones',
      'pricing': 'Precios',
      'faq': 'FAQ'
    },
    'hero': {
      'badge': 'Disponible ahora',
      'title': 'XNote',
      'tagline': 'Añade notas a los usuarios de Twitter y gestiona mejor tus relaciones sociales',
      'description': 'Añade fácilmente notas personales, etiquetas y grupos a cualquier usuario de Twitter, mantén tu red social organizada.',
      'cta_install': 'Instalar en Chrome',
      'cta_learn': 'Saber más'
    },
    'features': {
      'title': 'Funciones principales',
      'subtitle': 'Funciones potentes pero sencillas para mejorar tu experiencia en Twitter',
      'note': {
        'title': 'Notas de usuario',
        'description': 'Añade notas personalizadas, alias o etiquetas a cualquier usuario de Twitter, nunca olvides a las personas importantes'
      },
      'tag': {
        'title': 'Grupos de etiquetas',
        'description': 'Crea grupos y usa colores para marcar diferentes tipos de usuarios, mantén tu lista de seguidos organizada'
      },
      'search': {
        'title': 'Búsqueda rápida',
        'description': 'Encuentra usuarios rápidamente por el contenido de las notas, incluso si no recuerdas el nombre de usuario'
      },
      'sync': {
        'title': 'Sincronización en la nube',
        'badge': 'Pro',
        'description': 'Sincroniza datos entre dispositivos vía WebDAV, accede a tus notas en cualquier momento y lugar'
      }
    },
    'pricing': {
      'title': 'Elige tu plan',
      'subtitle': 'Comienza con la versión gratuita, actualiza a Pro cuando quieras',
      'earlyBird': 'Precio Early Bird',
      'free': {
        'name': 'Gratis',
        'price': '0 $',
        'period': '/para siempre',
        'feature1': 'Hasta 120 notas',
        'feature2': 'Grupos ilimitados',
        'feature3': 'Almacenamiento local',
        'feature4': 'Búsqueda básica',
        'feature5': 'Exportar 60 notas',
        'cta': 'Instalar gratis'
      },
      'lifetime': {
        'name': 'De por vida',
        'badge': 'Recomendado',
        'price': '9,9 $',
        'period': '/para siempre',
        'feature1': 'Notas ilimitadas',
        'feature2': 'Grupos ilimitados',
        'feature3': 'Sincronización en la nube',
        'feature4': 'Búsqueda avanzada',
        'feature5': 'Importación/exportación completa',
        'feature6': 'Operaciones por lotes',
        'cta': 'Comprar una vez',
        'note': 'Paga una vez, usa para siempre'
      },
      'pro': {
        'name': 'Pro',
        'price': '1 $',
        'period': '/primer mes',
        'renewal': '1,99 $ /mes siguiente',
        'feature1': 'Notas ilimitadas',
        'feature2': 'Grupos ilimitados',
        'feature3': 'Sincronización en la nube',
        'feature4': 'Búsqueda avanzada',
        'feature5': 'Importación/exportación completa',
        'feature6': 'Operaciones por lotes',
        'cta': 'Actualizar ahora',
        'note': 'Anual 29,99 $ (Ahorra 17%)'
      }
    },
    'faq': {
      'title': 'Preguntas frecuentes',
      'q1': {
        'question': '¿Cómo instalo XNote?',
        'answer': '¡XNote está disponible en Chrome Web Store! Haz clic en el botón "Instalar extensión" en la parte superior de la página para instalar gratis. Si tienes preguntas, contáctame por email tingwei@tingwei.site o cuenta X @w736823064.'
      },
      'q2': {
        'question': '¿Cuál es la diferencia entre la versión Gratis y Pro?',
        'answer': 'La versión gratuita ofrece hasta 120 notas y grupos ilimitados, adecuada para la mayoría de usuarios. La versión Pro elimina todos los límites y ofrece sincronización en la nube, búsqueda avanzada, operaciones por lotes y otras funciones avanzadas.'
      },
      'q3': {
        'question': '¿Están seguros mis datos?',
        'answer': 'Sí. Los datos de la versión gratuita se almacenan en tu navegador local, no podemos acceder a ellos. La versión Pro usa el protocolo WebDAV para sincronización en la nube, puedes elegir un proveedor de confianza (como Nutstore, Nextcloud, etc.).'
      },
      'q4': {
        'question': '¿Qué navegadores son compatibles?',
        'answer': 'Actualmente es compatible con Chrome. Planeamos soportar Firefox y otros navegadores basados en Chromium (como Edge, Brave, etc.) en el futuro.'
      },
      'q5': {
        'question': '¿Cómo contacto al desarrollador?',
        'answer': 'Puedes contactarme por email tingwei@tingwei.site o seguir @w736823064 en X. Responderé a tus preguntas y sugerencias lo antes posible.'
      }
    },
    'footer': {
      'tagline': 'Añade notas a los usuarios de Twitter',
      'product': 'Producto',
      'legal': 'Legal',
      'contact': 'Contacto',
      'privacy': 'Política de privacidad',
      'terms': 'Términos de servicio',
      'email': 'Email',
      'copyright': '© 2025 XNote. Todos los derechos reservados.'
    },
    'activate': {
      'title': '¡Compra exitosa!',
      'subtitle': 'Gracias por comprar XNote Pro. Por favor sigue los pasos a continuación para activar.',
      'step1': {
        'title': 'Obtén tu License Key',
        'desc1': 'Tu License Key ha sido enviada al email usado para el pago.',
        'desc2': 'Por favor revisa tu bandeja de entrada, el remitente es Creem.io.',
        'tip': '💡 Si no has recibido el email, revisa tu carpeta de spam, o haz clic en "Ver pedido" en la página de pago de Creem.'
      },
      'step2': {
        'title': 'Activa la extensión',
        'desc': 'Copia tu License Key y sigue estos pasos:',
        's1': 'Abre el sitio web Twitter/X',
        's2': 'Haz clic en el icono de la extensión XNote en la barra de herramientas del navegador',
        's3': 'Ve a la pestaña "Datos"',
        's4': 'Introduce tu License Key arriba y haz clic en "Activar"'
      },
      'step3': {
        'title': 'Empieza a usar',
        'desc': 'Una vez activado, desbloquearás todas las funciones Pro: notas ilimitadas, importación/exportación completa y más.'
      },
      'cta': {
        'twitter': 'Abrir Twitter',
        'email': 'Revisar email'
      },
      'contact': {
        'title': '¿Necesitas ayuda? Contáctanos'
      }
    }
  },

  // 意大利语
  'it': {
    'page': {
      'title': 'XNote - Strumento note utenti Twitter',
      'description': 'Aggiungi note agli utenti Twitter e gestisci meglio le tue relazioni sociali'
    },
    'nav': {
      'features': 'Funzionalità',
      'pricing': 'Prezzi',
      'faq': 'FAQ'
    },
    'hero': {
      'badge': 'Disponibile ora',
      'title': 'XNote',
      'tagline': 'Aggiungi note agli utenti Twitter e gestisci meglio le tue relazioni sociali',
      'description': 'Aggiungi facilmente note personali, tag e gruppi a qualsiasi utente Twitter, mantieni la tua rete sociale organizzata.',
      'cta_install': 'Installa su Chrome',
      'cta_learn': 'Scopri di più'
    },
    'features': {
      'title': 'Funzionalità principali',
      'subtitle': 'Funzionalità potenti ma semplici per migliorare la tua esperienza Twitter',
      'note': {
        'title': 'Note utente',
        'description': 'Aggiungi note personalizzate, alias o tag a qualsiasi utente Twitter, non dimenticare mai le persone importanti'
      },
      'tag': {
        'title': 'Gruppi di tag',
        'description': 'Crea gruppi e usa colori per contrassegnare diversi tipi di utenti, mantieni la tua lista seguiti organizzata'
      },
      'search': {
        'title': 'Ricerca rapida',
        'description': 'Trova utenti rapidamente per contenuto delle note, anche se non ricordi il nome utente'
      },
      'sync': {
        'title': 'Sincronizzazione cloud',
        'badge': 'Pro',
        'description': 'Sincronizza i dati tra dispositivi via WebDAV, accedi alle tue note ovunque e in qualsiasi momento'
      }
    },
    'pricing': {
      'title': 'Scegli il tuo piano',
      'subtitle': 'Inizia con la versione gratuita, passa a Pro quando vuoi',
      'earlyBird': 'Prezzo Early Bird',
      'free': {
        'name': 'Gratuito',
        'price': '0 $',
        'period': '/per sempre',
        'feature1': 'Fino a 120 note',
        'feature2': 'Gruppi illimitati',
        'feature3': 'Archiviazione locale',
        'feature4': 'Ricerca base',
        'feature5': 'Esporta 60 note',
        'cta': 'Installa gratis'
      },
      'lifetime': {
        'name': 'A vita',
        'badge': 'Consigliato',
        'price': '9,9 $',
        'period': '/per sempre',
        'feature1': 'Note illimitate',
        'feature2': 'Gruppi illimitati',
        'feature3': 'Sincronizzazione cloud',
        'feature4': 'Ricerca avanzata',
        'feature5': 'Import/export completo',
        'feature6': 'Operazioni in batch',
        'cta': 'Acquista una volta',
        'note': 'Paga una volta, usa per sempre'
      },
      'pro': {
        'name': 'Pro',
        'price': '1 $',
        'period': '/primo mese',
        'renewal': '1,99 $ /mese successivo',
        'feature1': 'Note illimitate',
        'feature2': 'Gruppi illimitati',
        'feature3': 'Sincronizzazione cloud',
        'feature4': 'Ricerca avanzata',
        'feature5': 'Import/export completo',
        'feature6': 'Operazioni in batch',
        'cta': 'Passa a Pro',
        'note': 'Annuale 29,99 $ (Risparmia 17%)'
      }
    },
    'faq': {
      'title': 'Domande frequenti',
      'q1': {
        'question': 'Come installo XNote?',
        'answer': 'XNote è disponibile sul Chrome Web Store! Clicca il pulsante "Installa estensione" in cima alla pagina per installare gratis. Se hai domande, contattami via email tingwei@tingwei.site o account X @w736823064.'
      },
      'q2': {
        'question': 'Qual è la differenza tra la versione Gratuita e Pro?',
        'answer': 'La versione gratuita offre fino a 120 note e gruppi illimitati, adatta alla maggior parte degli utenti. La versione Pro rimuove tutti i limiti e offre sincronizzazione cloud, ricerca avanzata, operazioni in batch e altre funzionalità avanzate.'
      },
      'q3': {
        'question': 'I miei dati sono al sicuro?',
        'answer': 'Sì. I dati della versione gratuita sono memorizzati nel tuo browser locale, non possiamo accedervi. La versione Pro usa il protocollo WebDAV per la sincronizzazione cloud, puoi scegliere un fornitore affidabile (come Nutstore, Nextcloud, ecc.).'
      },
      'q4': {
        'question': 'Quali browser sono supportati?',
        'answer': 'Attualmente è supportato Chrome. Pianifichiamo di supportare Firefox e altri browser basati su Chromium (come Edge, Brave, ecc.) in futuro.'
      },
      'q5': {
        'question': 'Come contatto lo sviluppatore?',
        'answer': 'Puoi contattarmi via email tingwei@tingwei.site o seguire @w736823064 su X. Risponderò alle tue domande e suggerimenti il prima possibile.'
      }
    },
    'footer': {
      'tagline': 'Aggiungi note agli utenti Twitter',
      'product': 'Prodotto',
      'legal': 'Legale',
      'contact': 'Contatti',
      'privacy': 'Informativa sulla privacy',
      'terms': 'Termini di servizio',
      'email': 'Email',
      'copyright': '© 2025 XNote. Tutti i diritti riservati.'
    },
    'activate': {
      'title': 'Acquisto riuscito!',
      'subtitle': 'Grazie per aver acquistato XNote Pro. Segui i passaggi seguenti per attivare.',
      'step1': {
        'title': 'Ottieni la tua License Key',
        'desc1': 'La tua License Key è stata inviata all\'email usata per il pagamento.',
        'desc2': 'Controlla la tua casella di posta, il mittente è Creem.io.',
        'tip': '💡 Se non hai ricevuto l\'email, controlla la cartella spam, o clicca "Visualizza ordine" nella pagina di pagamento Creem.'
      },
      'step2': {
        'title': 'Attiva l\'estensione',
        'desc': 'Copia la tua License Key e segui questi passaggi:',
        's1': 'Apri il sito web Twitter/X',
        's2': 'Clicca sull\'icona dell\'estensione XNote nella barra degli strumenti del browser',
        's3': 'Vai alla scheda "Dati"',
        's4': 'Inserisci la tua License Key in alto e clicca "Attiva"'
      },
      'step3': {
        'title': 'Inizia a usare',
        'desc': 'Una volta attivato, sbloccherai tutte le funzionalità Pro: note illimitate, import/export completo e altro.'
      },
      'cta': {
        'twitter': 'Apri Twitter',
        'email': 'Controlla email'
      },
      'contact': {
        'title': 'Hai bisogno di aiuto? Contattaci'
      }
    }
  },

  // 葡萄牙语
  'pt': {
    'page': {
      'title': 'XNote - Ferramenta de notas para usuários do Twitter',
      'description': 'Adicione notas aos usuários do Twitter e gerencie melhor seus relacionamentos sociais'
    },
    'nav': {
      'features': 'Recursos',
      'pricing': 'Preços',
      'faq': 'FAQ'
    },
    'hero': {
      'badge': 'Disponível agora',
      'title': 'XNote',
      'tagline': 'Adicione notas aos usuários do Twitter e gerencie melhor seus relacionamentos sociais',
      'description': 'Adicione facilmente notas pessoais, tags e grupos a qualquer usuário do Twitter, mantenha sua rede social organizada.',
      'cta_install': 'Instalar no Chrome',
      'cta_learn': 'Saiba mais'
    },
    'features': {
      'title': 'Recursos principais',
      'subtitle': 'Recursos poderosos mas simples para melhorar sua experiência no Twitter',
      'note': {
        'title': 'Notas de usuário',
        'description': 'Adicione notas personalizadas, apelidos ou tags a qualquer usuário do Twitter, nunca esqueça pessoas importantes'
      },
      'tag': {
        'title': 'Grupos de tags',
        'description': 'Crie grupos e use cores para marcar diferentes tipos de usuários, mantenha sua lista de seguidos organizada'
      },
      'search': {
        'title': 'Busca rápida',
        'description': 'Encontre usuários rapidamente pelo conteúdo das notas, mesmo se não lembrar do nome de usuário'
      },
      'sync': {
        'title': 'Sincronização na nuvem',
        'badge': 'Pro',
        'description': 'Sincronize dados entre dispositivos via WebDAV, acesse suas notas em qualquer lugar, a qualquer hora'
      }
    },
    'pricing': {
      'title': 'Escolha seu plano',
      'subtitle': 'Comece com a versão gratuita, atualize para Pro quando quiser',
      'earlyBird': 'Preço Early Bird',
      'free': {
        'name': 'Grátis',
        'price': '$ 0',
        'period': '/para sempre',
        'feature1': 'Até 120 notas',
        'feature2': 'Grupos ilimitados',
        'feature3': 'Armazenamento local',
        'feature4': 'Busca básica',
        'feature5': 'Exportar 60 notas',
        'cta': 'Instalar grátis'
      },
      'lifetime': {
        'name': 'Vitalício',
        'badge': 'Recomendado',
        'price': '$ 9,9',
        'period': '/para sempre',
        'feature1': 'Notas ilimitadas',
        'feature2': 'Grupos ilimitados',
        'feature3': 'Sincronização na nuvem',
        'feature4': 'Busca avançada',
        'feature5': 'Importação/exportação completa',
        'feature6': 'Operações em lote',
        'cta': 'Comprar uma vez',
        'note': 'Pague uma vez, use para sempre'
      },
      'pro': {
        'name': 'Pro',
        'price': '$ 1',
        'period': '/primeiro mês',
        'renewal': '$ 1,99 /mês seguinte',
        'feature1': 'Notas ilimitadas',
        'feature2': 'Grupos ilimitados',
        'feature3': 'Sincronização na nuvem',
        'feature4': 'Busca avançada',
        'feature5': 'Importação/exportação completa',
        'feature6': 'Operações em lote',
        'cta': 'Atualizar agora',
        'note': 'Anual $ 29,99 (Economize 17%)'
      }
    },
    'faq': {
      'title': 'Perguntas frequentes',
      'q1': {
        'question': 'Como instalo o XNote?',
        'answer': 'XNote está disponível na Chrome Web Store! Clique no botão "Instalar extensão" no topo da página para instalar grátis. Se tiver dúvidas, entre em contato por email tingwei@tingwei.site ou conta X @w736823064.'
      },
      'q2': {
        'question': 'Qual a diferença entre a versão Grátis e Pro?',
        'answer': 'A versão gratuita oferece até 120 notas e grupos ilimitados, adequada para a maioria dos usuários. A versão Pro remove todos os limites e oferece sincronização na nuvem, busca avançada, operações em lote e outros recursos avançados.'
      },
      'q3': {
        'question': 'Meus dados estão seguros?',
        'answer': 'Sim. Os dados da versão gratuita são armazenados no seu navegador local, não podemos acessá-los. A versão Pro usa o protocolo WebDAV para sincronização na nuvem, você pode escolher um provedor confiável (como Nutstore, Nextcloud, etc.).'
      },
      'q4': {
        'question': 'Quais navegadores são suportados?',
        'answer': 'Atualmente o Chrome é suportado. Planejamos suportar Firefox e outros navegadores baseados em Chromium (como Edge, Brave, etc.) no futuro.'
      },
      'q5': {
        'question': 'Como contato o desenvolvedor?',
        'answer': 'Você pode me contatar por email tingwei@tingwei.site ou seguir @w736823064 no X. Responderei suas dúvidas e sugestões o mais rápido possível.'
      }
    },
    'footer': {
      'tagline': 'Adicione notas aos usuários do Twitter',
      'product': 'Produto',
      'legal': 'Legal',
      'contact': 'Contato',
      'privacy': 'Política de Privacidade',
      'terms': 'Termos de Serviço',
      'email': 'Email',
      'copyright': '© 2025 XNote. Todos os direitos reservados.'
    },
    'activate': {
      'title': 'Compra bem-sucedida!',
      'subtitle': 'Obrigado por comprar o XNote Pro. Por favor, siga os passos abaixo para ativar.',
      'step1': {
        'title': 'Obtenha sua License Key',
        'desc1': 'Sua License Key foi enviada para o email usado no pagamento.',
        'desc2': 'Por favor, verifique sua caixa de entrada, o remetente é Creem.io.',
        'tip': '💡 Se não recebeu o email, verifique a pasta de spam, ou clique em "Ver pedido" na página de pagamento do Creem.'
      },
      'step2': {
        'title': 'Ative a extensão',
        'desc': 'Copie sua License Key e siga estes passos:',
        's1': 'Abra o site Twitter/X',
        's2': 'Clique no ícone da extensão XNote na barra de ferramentas do navegador',
        's3': 'Vá para a aba "Dados"',
        's4': 'Digite sua License Key no topo e clique em "Ativar"'
      },
      'step3': {
        'title': 'Comece a usar',
        'desc': 'Uma vez ativado, você desbloqueará todos os recursos Pro: notas ilimitadas, importação/exportação completa e mais.'
      },
      'cta': {
        'twitter': 'Abrir Twitter',
        'email': 'Verificar email'
      },
      'contact': {
        'title': 'Precisa de ajuda? Entre em contato'
      }
    }
  },

  // 荷兰语
  'nl': {
    'page': {
      'title': 'XNote - Twitter gebruikersnotities tool',
      'description': 'Voeg notities toe aan Twitter-gebruikers en beheer je sociale relaties beter'
    },
    'nav': {
      'features': 'Functies',
      'pricing': 'Prijzen',
      'faq': 'FAQ'
    },
    'hero': {
      'badge': 'Nu beschikbaar',
      'title': 'XNote',
      'tagline': 'Voeg notities toe aan Twitter-gebruikers en beheer je sociale relaties beter',
      'description': 'Voeg eenvoudig persoonlijke notities, tags en groepen toe aan elke Twitter-gebruiker, houd je sociale netwerk georganiseerd.',
      'cta_install': 'Installeren in Chrome',
      'cta_learn': 'Meer informatie'
    },
    'features': {
      'title': 'Kernfuncties',
      'subtitle': 'Krachtige maar eenvoudige functies om je Twitter-ervaring te verbeteren',
      'note': {
        'title': 'Gebruikersnotities',
        'description': 'Voeg aangepaste notities, aliassen of tags toe aan elke Twitter-gebruiker, vergeet nooit belangrijke mensen'
      },
      'tag': {
        'title': 'Taggroepen',
        'description': 'Maak groepen en gebruik kleuren om verschillende soorten gebruikers te markeren, houd je volglijst georganiseerd'
      },
      'search': {
        'title': 'Snel zoeken',
        'description': 'Vind gebruikers snel op notitie-inhoud, zelfs als je de gebruikersnaam niet meer weet'
      },
      'sync': {
        'title': 'Cloudsynchronisatie',
        'badge': 'Pro',
        'description': 'Synchroniseer gegevens tussen apparaten via WebDAV, toegang tot je notities altijd en overal'
      }
    },
    'pricing': {
      'title': 'Kies je abonnement',
      'subtitle': 'Begin met de gratis versie, upgrade naar Pro wanneer je wilt',
      'earlyBird': 'Early Bird Prijs',
      'free': {
        'name': 'Gratis',
        'price': '$ 0',
        'period': '/voor altijd',
        'feature1': 'Tot 120 notities',
        'feature2': 'Onbeperkte groepen',
        'feature3': 'Lokale opslag',
        'feature4': 'Basis zoeken',
        'feature5': '60 notities exporteren',
        'cta': 'Gratis installeren'
      },
      'lifetime': {
        'name': 'Levenslang',
        'badge': 'Aanbevolen',
        'price': '$ 9,9',
        'period': '/voor altijd',
        'feature1': 'Onbeperkte notities',
        'feature2': 'Onbeperkte groepen',
        'feature3': 'Cloudsynchronisatie',
        'feature4': 'Geavanceerd zoeken',
        'feature5': 'Volledige import/export',
        'feature6': 'Batchbewerkingen',
        'cta': 'Eenmalig kopen',
        'note': 'Eenmalig betalen, voor altijd gebruiken'
      },
      'pro': {
        'name': 'Pro',
        'price': '$ 1',
        'period': '/eerste maand',
        'renewal': '$ 1,99 /volgende maand',
        'feature1': 'Onbeperkte notities',
        'feature2': 'Onbeperkte groepen',
        'feature3': 'Cloudsynchronisatie',
        'feature4': 'Geavanceerd zoeken',
        'feature5': 'Volledige import/export',
        'feature6': 'Batchbewerkingen',
        'cta': 'Nu upgraden',
        'note': 'Jaarlijks $ 29,99 (Bespaar 17%)'
      }
    },
    'faq': {
      'title': 'Veelgestelde vragen',
      'q1': {
        'question': 'Hoe installeer ik XNote?',
        'answer': 'XNote is beschikbaar in de Chrome Web Store! Klik op de knop "Extensie installeren" bovenaan de pagina om gratis te installeren. Als je vragen hebt, neem contact op via e-mail tingwei@tingwei.site of X-account @w736823064.'
      },
      'q2': {
        'question': 'Wat is het verschil tussen de Gratis en Pro versie?',
        'answer': 'De gratis versie biedt tot 120 notities en onbeperkte groepen, geschikt voor de meeste gebruikers. De Pro-versie verwijdert alle limieten en biedt cloudsynchronisatie, geavanceerd zoeken, batchbewerkingen en andere geavanceerde functies.'
      },
      'q3': {
        'question': 'Zijn mijn gegevens veilig?',
        'answer': 'Ja. Gegevens van de gratis versie worden opgeslagen in je lokale browser, wij hebben geen toegang. De Pro-versie gebruikt het WebDAV-protocol voor cloudsynchronisatie, je kunt een betrouwbare provider kiezen (zoals Nutstore, Nextcloud, enz.).'
      },
      'q4': {
        'question': 'Welke browsers worden ondersteund?',
        'answer': 'Momenteel wordt Chrome ondersteund. We zijn van plan om in de toekomst Firefox en andere Chromium-gebaseerde browsers (zoals Edge, Brave, enz.) te ondersteunen.'
      },
      'q5': {
        'question': 'Hoe neem ik contact op met de ontwikkelaar?',
        'answer': 'Je kunt contact opnemen via e-mail tingwei@tingwei.site of volg @w736823064 op X. Ik zal je vragen en suggesties zo snel mogelijk beantwoorden.'
      }
    },
    'footer': {
      'tagline': 'Voeg notities toe aan Twitter-gebruikers',
      'product': 'Product',
      'legal': 'Juridisch',
      'contact': 'Contact',
      'privacy': 'Privacybeleid',
      'terms': 'Servicevoorwaarden',
      'email': 'E-mail',
      'copyright': '© 2025 XNote. Alle rechten voorbehouden.'
    },
    'activate': {
      'title': 'Aankoop geslaagd!',
      'subtitle': 'Bedankt voor het kopen van XNote Pro. Volg de onderstaande stappen om te activeren.',
      'step1': {
        'title': 'Ontvang je License Key',
        'desc1': 'Je License Key is verzonden naar het e-mailadres dat je hebt gebruikt voor de betaling.',
        'desc2': 'Controleer je inbox, de afzender is Creem.io.',
        'tip': '💡 Als je de e-mail niet hebt ontvangen, controleer je spammap, of klik op "Bestelling bekijken" op de Creem-betaalpagina.'
      },
      'step2': {
        'title': 'Activeer de extensie',
        'desc': 'Kopieer je License Key en volg deze stappen:',
        's1': 'Open de Twitter/X-website',
        's2': 'Klik op het XNote-extensie-icoon in de browserwerkbalk',
        's3': 'Ga naar het tabblad "Gegevens"',
        's4': 'Voer bovenaan je License Key in en klik op "Activeren"'
      },
      'step3': {
        'title': 'Begin met gebruiken',
        'desc': 'Na activering ontgrendel je alle Pro-functies: onbeperkte notities, volledige import/export en meer.'
      },
      'cta': {
        'twitter': 'Twitter openen',
        'email': 'E-mail controleren'
      },
      'contact': {
        'title': 'Hulp nodig? Neem contact met ons op'
      }
    }
  }
};
