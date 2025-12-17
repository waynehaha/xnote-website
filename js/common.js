// 通用 JavaScript 功能

// 移动端菜单切换
document.addEventListener('DOMContentLoaded', () => {
  // 初始化国际化
  if (typeof I18n !== 'undefined' && typeof translations !== 'undefined') {
    I18n.init(translations);
    initLanguageSwitcher();
    updatePageMeta();
  }
  
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
  }
  
  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // 关闭移动端菜单
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        }
      }
    });
  });
  
  // 滚动时改变导航栏样式
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.8)';
      navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
});

// 初始化语言切换器
function initLanguageSwitcher() {
  const langSelect = document.getElementById('lang-select');
  if (!langSelect) return;
  
  // 设置初始值
  langSelect.value = I18n.getCurrentLanguage();
  
  // 监听用户手动切换
  langSelect.addEventListener('change', function(e) {
    const selectedLang = e.target.value;
    I18n.setLanguage(selectedLang);
    localStorage.setItem('selected_language', selectedLang);
  });
}

// 更新页面 Meta 标签
function updatePageMeta() {
  // 更新标题
  document.title = I18n.t('page.title');
  
  // 更新 description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = I18n.t('page.description');
  }
  
  // 更新 Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.content = I18n.t('page.title');
  }
  
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.content = I18n.t('page.description');
  }
  
  // 更新 Twitter Card
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.content = I18n.t('page.title');
  }
  
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) {
    twitterDesc.content = I18n.t('page.description');
  }
}

// 监听语言变化事件
window.addEventListener('languageChanged', function(event) {
  updatePageMeta();
});
