function addBorderToElements() {
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach(element => {
      // Orijinal stilleri kaydet
      const originalBorder = element.style.border;
      const originalBg = element.style.backgroundColor;
  
      // Border ekle
      element.style.border = '1px solid ' + getRandomColor();
      
      // Hover olaylarını ekle
      element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = '#f3f4f6';
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = originalBg;
      });
    });
  }
  
  // Rastgele renk oluşturan yardımcı fonksiyon
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Chrome extension mesajlarını dinle
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'addBorders') {
      addBorderToElements();
      sendResponse({status: 'success'});
    }
  });