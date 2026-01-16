/**
 * Web 国际化工具 - UMD 版本
 * 适用于传统静态网站（纯 HTML/CSS/JS）
 * 支持自动 DOM 更新
 * 零依赖，开箱即用
 * 
 * 使用方式：
 * <script src="i18n.umd.js"></script>
 * <script>
 *   I18n.init({ en: {...}, 'zh-CN': {...}, 'zh-TW': {...} });
 * </script>
 */

(function(global) {
    'use strict';
    
    class I18n {
        constructor() {
            this.currentLanguage = 'en';
            this.translations = {};
            this.fallbackLanguage = 'en';
            this.supportedLanguages = [
                'en', 'zh-CN', 'zh-TW',  // 核心语言
                'ja', 'ko', 'vi', 'th', 'id', 'ms',  // 亚洲语言
                'fr', 'de', 'es', 'it', 'pt', 'nl'   // 欧洲语言
            ];
            this.autoUpdateDOM = false;
            
            // 从 localStorage 加载保存的语言
            this.loadSavedLanguage();
        }
        
        /**
         * 初始化国际化
         * @param {Object} translations - 翻译对象 { en: {...}, 'zh-CN': {...}, 'zh-TW': {...} }
         * @param {Object} options - 配置选项 { autoUpdateDOM: true }
         */
        init(translations, options = {}) {
            this.translations = translations;
            this.autoUpdateDOM = options.autoUpdateDOM !== false; // 默认开启
            
            // 应用语言并更新 DOM
            this.applyLanguage();
            
            // 如果开启自动更新，监听 DOM 变化
            if (this.autoUpdateDOM) {
                this.observeDOM();
            }
        }
        
        /**
         * 设置语言
         * @param {string} language - 语言代码 ('en', 'zh-CN', 'zh-TW')
         */
        setLanguage(language) {
            if (this.supportedLanguages.includes(language)) {
                this.currentLanguage = language;
            } else {
                console.warn(`[I18n] 不支持的语言: ${language}，使用默认语言: ${this.fallbackLanguage}`);
                this.currentLanguage = this.fallbackLanguage;
            }
            
            // 保存到 localStorage
            localStorage.setItem('selected_language', language);
            this.applyLanguage();
        }
        
        /**
         * 获取翻译
         * @param {string} key - 翻译键（支持嵌套，如 'hero.title'）
         * @param {Object} params - 参数对象 { name: 'John', count: 5 }
         * @returns {string} 翻译后的文本
         */
        t(key, params = {}) {
            // 支持嵌套键（如 'hero.title'）
            let text = this.getNestedTranslation(this.translations[this.currentLanguage], key)
                    || this.getNestedTranslation(this.translations[this.fallbackLanguage], key)
                    || key;
            
            // 替换参数
            Object.keys(params).forEach(paramKey => {
                const regex = new RegExp(`\\{${paramKey}\\}`, 'g');
                text = text.replace(regex, params[paramKey]);
            });
            
            return text;
        }
        
        /**
         * 获取嵌套翻译
         * @param {Object} obj - 翻译对象
         * @param {string} key - 键（支持点号分隔）
         * @returns {string|undefined} 翻译文本
         */
        getNestedTranslation(obj, key) {
            if (!obj) return undefined;
            
            const keys = key.split('.');
            let result = obj;
            
            for (const k of keys) {
                if (result && typeof result === 'object' && k in result) {
                    result = result[k];
                } else {
                    return undefined;
                }
            }
            
            return typeof result === 'string' ? result : undefined;
        }
        
        /**
         * 检测系统语言
         * @returns {string} 语言代码
         */
        detectSystemLanguage() {
            const browserLanguage = navigator.language || navigator.userLanguage;
            const langCode = browserLanguage.toLowerCase();

            // 简体中文
            if (langCode.startsWith('zh-cn') ||
                langCode.startsWith('zh-sg') ||
                (langCode === 'zh' && navigator.languages?.[0]?.includes('Hans'))) {
                return 'zh-CN';
            }

            // 繁体中文
            if (langCode.startsWith('zh-tw') ||
                langCode.startsWith('zh-hk') ||
                langCode.startsWith('zh-mo') ||
                (langCode === 'zh' && navigator.languages?.[0]?.includes('Hant'))) {
                return 'zh-TW';
            }

            // 日语
            if (langCode.startsWith('ja')) {
                return 'ja';
            }

            // 韩语
            if (langCode.startsWith('ko')) {
                return 'ko';
            }

            // 越南语
            if (langCode.startsWith('vi')) {
                return 'vi';
            }

            // 泰语
            if (langCode.startsWith('th')) {
                return 'th';
            }

            // 印尼语
            if (langCode.startsWith('id')) {
                return 'id';
            }

            // 马来语
            if (langCode.startsWith('ms')) {
                return 'ms';
            }

            // 法语
            if (langCode.startsWith('fr')) {
                return 'fr';
            }

            // 德语
            if (langCode.startsWith('de')) {
                return 'de';
            }

            // 西班牙语
            if (langCode.startsWith('es')) {
                return 'es';
            }

            // 意大利语
            if (langCode.startsWith('it')) {
                return 'it';
            }

            // 葡萄牙语
            if (langCode.startsWith('pt')) {
                return 'pt';
            }

            // 荷兰语
            if (langCode.startsWith('nl')) {
                return 'nl';
            }

            // 英语
            if (langCode.startsWith('en')) {
                return 'en';
            }

            // 默认英语
            return 'en';
        }
        
        /**
         * 加载保存的语言
         */
        loadSavedLanguage() {
            const saved = localStorage.getItem('selected_language');
            if (saved && this.supportedLanguages.includes(saved)) {
                // 如果有保存的语言且是支持的语言，使用保存的语言
                this.currentLanguage = saved;
            } else {
                // 否则自动检测浏览器语言
                this.currentLanguage = this.detectSystemLanguage();
            }
        }
        
        /**
         * 应用语言设置
         */
        applyLanguage() {
            // 更新 HTML lang 属性
            document.documentElement.lang = this.currentLanguage;
            
            // 更新 DOM 中的翻译
            if (this.autoUpdateDOM) {
                this.updateDOM();
            }
            
            // 触发自定义事件，通知语言已更改
            const event = new CustomEvent('languageChanged', { 
                detail: { language: this.currentLanguage } 
            });
            window.dispatchEvent(event);
        }
        
        /**
         * 更新 DOM 中的翻译
         * 扫描所有带 data-i18n 属性的元素
         */
        updateDOM() {
            // 更新文本内容
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const paramsAttr = el.getAttribute('data-i18n-params');
                
                let params = {};
                if (paramsAttr) {
                    try {
                        params = JSON.parse(paramsAttr);
                    } catch (e) {
                        console.warn(`[I18n] 无法解析参数: ${paramsAttr}`, e);
                    }
                }
                
                el.textContent = this.t(key, params);
            });
            
            // 更新 placeholder
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                el.placeholder = this.t(key);
            });
            
            // 更新 title
            document.querySelectorAll('[data-i18n-title]').forEach(el => {
                const key = el.getAttribute('data-i18n-title');
                el.title = this.t(key);
            });
            
            // 更新 alt
            document.querySelectorAll('[data-i18n-alt]').forEach(el => {
                const key = el.getAttribute('data-i18n-alt');
                el.alt = this.t(key);
            });
            
            // 更新 aria-label
            document.querySelectorAll('[data-i18n-aria]').forEach(el => {
                const key = el.getAttribute('data-i18n-aria');
                el.setAttribute('aria-label', this.t(key));
            });
        }
        
        /**
         * 监听 DOM 变化，自动更新新添加的元素
         */
        observeDOM() {
            if (typeof MutationObserver === 'undefined') return;
            
            let isUpdating = false;
            
            const observer = new MutationObserver((mutations) => {
                // 防止死循环：如果正在更新，跳过
                if (isUpdating) return;
                
                // 检查是否有新增的带 data-i18n 属性的节点
                let hasI18nNodes = false;
                mutations.forEach((mutation) => {
                    if (mutation.addedNodes.length > 0) {
                        mutation.addedNodes.forEach(node => {
                            if (node.nodeType === 1) { // 元素节点
                                if (node.hasAttribute && (
                                    node.hasAttribute('data-i18n') ||
                                    node.hasAttribute('data-i18n-placeholder') ||
                                    node.hasAttribute('data-i18n-title') ||
                                    node.hasAttribute('data-i18n-alt') ||
                                    node.hasAttribute('data-i18n-aria') ||
                                    node.querySelector('[data-i18n]')
                                )) {
                                    hasI18nNodes = true;
                                }
                            }
                        });
                    }
                });
                
                // 只有在确实有新的 i18n 节点时才更新
                if (hasI18nNodes) {
                    isUpdating = true;
                    this.updateDOM();
                    // 延迟重置标志，确保本次更新的所有 DOM 变化都被忽略
                    setTimeout(() => {
                        isUpdating = false;
                    }, 100);
                }
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
        
        /**
         * 获取当前语言
         * @returns {string} 当前语言代码
         */
        getCurrentLanguage() {
            return this.currentLanguage;
        }
        
        /**
         * 获取支持的语言列表
         * @returns {Array} 语言代码数组
         */
        getSupportedLanguages() {
            return this.supportedLanguages;
        }
        
        /**
         * 手动触发 DOM 更新
         * 用于动态添加内容后
         */
        refresh() {
            this.updateDOM();
        }
    }
    
    // 创建单例
    const i18nInstance = new I18n();
    
    // 暴露到全局
    global.I18n = {
        // 初始化
        init: function(translations, options) {
            return i18nInstance.init(translations, options);
        },
        
        // 设置语言
        setLanguage: function(language) {
            return i18nInstance.setLanguage(language);
        },
        
        // 获取翻译
        t: function(key, params) {
            return i18nInstance.t(key, params);
        },
        
        // 获取当前语言
        getCurrentLanguage: function() {
            return i18nInstance.getCurrentLanguage();
        },
        
        // 获取支持的语言
        getSupportedLanguages: function() {
            return i18nInstance.getSupportedLanguages();
        },
        
        // 手动刷新 DOM
        refresh: function() {
            return i18nInstance.refresh();
        },
        
        // 便捷方法：切换语言（别名）
        changeLanguage: function(language) {
            return i18nInstance.setLanguage(language);
        }
    };
    
    // 页面加载完成后自动初始化（如果已经有翻译数据）
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (Object.keys(i18nInstance.translations).length > 0) {
                i18nInstance.updateDOM();
            }
        });
    }
    
})(typeof window !== 'undefined' ? window : this);
