// 首页交互功能

document.addEventListener('DOMContentLoaded', () => {
  // 月订阅购买按钮（带首月优惠）
  const monthlyBtn = document.getElementById('monthly-purchase-btn');
  if (monthlyBtn) {
    monthlyBtn.addEventListener('click', async (e) => {
      e.preventDefault();

      // 显示加载状态
      const originalText = monthlyBtn.textContent;
      monthlyBtn.textContent = 'Loading...';
      monthlyBtn.style.pointerEvents = 'none';

      try {
        const response = await fetch('https://xnote-api.vercel.app/api/create-checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            product: 'monthly',
            discountCode: 'FIRST50'
          })
        });

        const data = await response.json();

        if (data.success && data.checkoutUrl) {
          window.location.href = data.checkoutUrl;
        } else {
          // 如果 API 失败，回退到静态链接
          window.open('https://www.creem.io/payment/prod_TsKi0EhOWIZhRgRGP5gxJ', '_blank');
        }
      } catch (error) {
        console.error('Checkout error:', error);
        // 网络错误时回退到静态链接
        window.open('https://www.creem.io/payment/prod_TsKi0EhOWIZhRgRGP5gxJ', '_blank');
      } finally {
        monthlyBtn.textContent = originalText;
        monthlyBtn.style.pointerEvents = 'auto';
      }
    });
  }

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
  let isTransitioning = false; // 防止切换过程中重复触发
  
  // 预加载所有图片
  screenshots.forEach(img => {
    if (!img.complete) {
      img.addEventListener('load', () => {
        console.log('图片加载完成:', img.src);
      });
    }
  });
  
  // 切换到指定截图
  function showScreenshot(index) {
    if (isTransitioning) return; // 如果正在切换，跳过
    
    isTransitioning = true;
    
    // 移除所有 active 类
    screenshots.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // 添加 active 类到当前项
    screenshots[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
    
    // 等待动画完成后重置标志
    setTimeout(() => {
      isTransitioning = false;
    }, 600); // 略大于CSS动画时长(0.5s)
  }
  
  // 下一张截图
  function nextScreenshot() {
    const nextIndex = (currentIndex + 1) % screenshots.length;
    showScreenshot(nextIndex);
  }
  
  // 自动播放
  function startAutoPlay() {
    // 清除可能存在的旧定时器
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
    }
    autoPlayInterval = setInterval(nextScreenshot, 5000); // 每5秒切换
  }
  
  // 停止自动播放
  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }
  
  // 上一张截图
  function prevScreenshot() {
    const prevIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
    showScreenshot(prevIndex);
  }
  
  // 点击指示点切换
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoPlay();
      showScreenshot(index);
      startAutoPlay(); // 重新开始自动播放
    });
  });
  
  // 左右箭头按钮
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  
  if (arrowLeft) {
    arrowLeft.addEventListener('click', () => {
      stopAutoPlay();
      prevScreenshot();
      startAutoPlay();
    });
  }
  
  if (arrowRight) {
    arrowRight.addEventListener('click', () => {
      stopAutoPlay();
      nextScreenshot();
      startAutoPlay();
    });
  }
  
  // 鼠标悬停时暂停自动播放
  const screenshotsContainer = document.querySelector('.product-screenshots');
  if (screenshotsContainer) {
    screenshotsContainer.addEventListener('mouseenter', stopAutoPlay);
    screenshotsContainer.addEventListener('mouseleave', startAutoPlay);
    
    // 启动自动播放
    startAutoPlay();
  }
});
