document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Header scroll effect
  const header = document.getElementById('header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow and background when scrolling down
    if (scrollTop > 50) {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
    
    lastScrollTop = scrollTop;
  });
});