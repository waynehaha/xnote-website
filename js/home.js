// 首页交互功能

document.addEventListener('DOMContentLoaded', () => {
  // FAQ 手风琴效果
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // 关闭其他打开的项
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // 切换当前项
      item.classList.toggle('active');
    });
  });
  
  // 滚动动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // 观察需要动画的元素
  document.querySelectorAll('.feature-card, .pricing-card, .faq-item').forEach(el => {
    observer.observe(el);
  });
  
  // 产品截图轮播
  const screenshots = document.querySelectorAll('.product-screenshots .screenshot');
  const dots = document.querySelectorAll('.screenshot-dots .dot');
  let currentIndex = 0;
  let autoPlayInterval;
  
  // 切换到指定截图
  function showScreenshot(index) {
    // 移除所有 active 类
    screenshots.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // 添加 active 类到当前项
    screenshots[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }
  
  // 下一张截图
  function nextScreenshot() {
    const nextIndex = (currentIndex + 1) % screenshots.length;
    showScreenshot(nextIndex);
  }
  
  // 自动播放
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextScreenshot, 5000); // 每5秒切换
  }
  
  // 停止自动播放
  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }
  
  // 点击指示点切换
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoPlay();
      showScreenshot(index);
      startAutoPlay(); // 重新开始自动播放
    });
  });
  
  // 鼠标悬停时暂停自动播放
  const screenshotsContainer = document.querySelector('.product-screenshots');
  if (screenshotsContainer) {
    screenshotsContainer.addEventListener('mouseenter', stopAutoPlay);
    screenshotsContainer.addEventListener('mouseleave', startAutoPlay);
    
    // 启动自动播放
    startAutoPlay();
  }
});
