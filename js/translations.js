/**
 * XNote 官网翻译数据
 * 支持语言：英语 (en)、简体中文 (zh-CN)、繁体中文 (zh-TW)
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
        'feature3': 'Cloud sync',
        'feature4': 'Advanced search',
        'feature5': 'Full import/export',
        'feature6': 'Batch operations',
        'cta': 'Buy Once',
        'note': 'One-time payment, use forever'
      },
      'pro': {
        'name': 'Pro',
        'price': '$4.50',
        'period': '/month',
        'feature1': 'Unlimited notes',
        'feature2': 'Unlimited groups',
        'feature3': 'Cloud sync',
        'feature4': 'Advanced search',
        'feature5': 'Full import/export',
        'feature6': 'Batch operations',
        'cta': 'Upgrade Now',
        'note': 'Annual $29.99 (Save 17%)'
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
        'feature3': '云端同步',
        'feature4': '高级搜索',
        'feature5': '完整导入导出',
        'feature6': '批量操作',
        'cta': '一次购买',
        'note': '永久使用，无需订阅'
      },
      'pro': {
        'name': 'Pro 版',
        'price': '$4.50',
        'period': '/月',
        'feature1': '无限备注',
        'feature2': '无限分组',
        'feature3': '云端同步',
        'feature4': '高级搜索',
        'feature5': '完整导入导出',
        'feature6': '批量操作',
        'cta': '立即升级',
        'note': '年付 $29.99（节省 17%）'
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
        'price': '$4.50',
        'period': '/月',
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
  }
};
